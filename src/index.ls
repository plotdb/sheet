parse-csv = (txt) -> Papa.parse(txt).data

parent = (n, s, e) ->
  m = n
  while n and n != e => n = n.parentNode # must under e
  if n != e => return null
  # if no selector - we are testing if s is under e.
  if !s => return n
  # must match s selector
  n = m
  while n and n != e and (!n.matches or (n.matches and !n.matches(s))) => n = n.parentNode
  if n == e and (!e.matches or !e.matches(s)) => return null
  return n

num-to-idx = (v) ->
  if v < 0 => return ""
  ret = ""
  u = v % 26
  ret = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(u)) + ret
  v = (v - u) / 26
  while v > 0
    u = v % 26
    ret = (" ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(u)) + ret
    v = (v - u) / 26

  return ret

sheet = (opt={}) ->
  @root = if typeof(opt.root) == \string => document.querySelector(opt.root) else opt.root
  @evt-handler = {}
  @data = opt.data or []
  @size = ({row: [], col: []} <<< opt.size){row, col}
  @_editing = if opt.editing? => !!opt.editing else true
  @dim = col: (opt.{}dim.col or 30), row: (opt.{}dim.row or 30)
  @frozen = ({col: 0, row: 0} <<< (opt.frozen or {})){col, row}
  @idx = ({row: true, col: true} <<< (opt.idx or {})){col, row}
  @fixed = ({col: 0, row: 0} <<< (opt.fixed or {})){col, row}
  @xif = {row: [(if @idx.row => 1 else 0),0,0], col: [(if @idx.col => 1 else 0),0,0]}
  <[row col]>.map (t) ~>
    @xif[t].1 = @xif[t].0 + @fixed[t]
    @xif[t].2 = @xif[t].1 + @frozen[t]
  @fix = {row: @xif.row.2, col: @xif.col.2}

  @pos = col: 0, row: 0
  @scroll-pos = x: 0, y: 0

  @sel = {}
  @les = {}
  @editing = {}
  @dom = Object.fromEntries <[sheet inner caret range edit layout]>.map ->
    n = document.createElement(\div)
      ..classList.add it
    [it, n]
  @dom.sheet.setAttribute \tabindex, -1
  @dom.textarea = document.createElement \textarea
  @root.appendChild(@dom.sheet)
  <[inner caret range edit layout]>.map ~> @dom.sheet.appendChild @dom[it]
  @dom.edit.appendChild @dom.textarea
  @_init!
  @

sheet.prototype = Object.create(Object.prototype) <<< do
  on: (n, cb) -> @evt-handler.[][n].push cb
  fire: (n, ...v) -> for cb in (@evt-handler[n] or []) => cb.apply @, v
  _init: ->
    for r from 0 til @dim.row => for c from 0 til @dim.col => @add-cell c, r
    @regrid!

    # to prevent grid selection
    @dom.textarea.addEventListener \mousedown, (e) -> e.stopPropagation!

    dom = @dom.sheet
    dom.addEventListener \mousedown, (e) ~>
      @edited!
      if !(p = parent (e.target), '.cell', dom) => return
      idx = @index(p){row, col}
      if idx.col < 0 or idx.row < 0 => return
      @les.start = @les.end = idx
      @les.node = p
      @render-selection!
    dom.addEventListener \mousemove, (e) ~>
      if @editing.on or !(e.buttons and (p = parent (e.target), '.cell', dom)) => return
      @les.end = @index(p){row, col}
      @render-selection!
    dom.addEventListener \dblclick, (e) ~>
      if !(p = parent (e.target), '.cell', dom) => return
      @edit {node: p, quick: false}

    document.body.addEventListener \paste, (e) ~>
      # TODO we need to find some way to ensure sheet gets users' focus before handling paste event
      if !@les.start => return
      data = e.clipboardData.getData('text')
      data = parse-csv data
      @set {row: @les.start.row, col: @les.start.col, data: data, range: true}

    dom.addEventListener \keydown, (e) ~>
      if !@event-in-scope(e) => return
      code = e.keyCode
      if code == 8 =>
        if !@les.node => return
        [p1, p2] = [@les.start, @les.end]
        [c1, c2] = if p1.col < p2.col => [p1.col, p2.col] else [p2.col, p1.col]
        [r1, r2] = if p1.row < p2.row => [p1.row, p2.row] else [p2.row, p1.row]
        for row from r1 to r2 => for col from c1 to c2 => @set {row, col, data: ""}

      opt = switch code
      | 37 => {y:  0, x: -1}
      | 38 => {y: -1, x:  0}
      | 39 => {y:  0, x:  1}
      | 40 => {y:  1, x:  0}
      | otherwise => null
      if !opt => return
      if @editing.on and !@editing.quick => return
      @move opt
      e.stopPropagation!
      e.preventDefault!
      @dom.sheet.focus!

    dom.addEventListener \keypress, (e) ~>
      if @les.node and !@editing.on => @edit node: @les.node, quick: (if e.keyCode == 13 => false else true)

    @dom.textarea.addEventListener \keydown, (e) ~>
      if e.keyCode == 27 or (e.keyCode == 13 and !(e.altKey or e.metaKey)) =>
        @move {row: 1, col: 0}
        e.stopPropagation!
        e.preventDefault!
        return
      if e.keyCode == 13 and (e.altKey or e.metaKey) =>
        @dom.textarea.value += \\n
        @dom.layout.textContent = @dom.textarea.value + " "
        lbox = @dom.layout.getBoundingClientRect!
        box = @editing.node.getBoundingClientRect!
        @dom.textarea.style <<<
          width: "#{Math.max(lbox.width, box.width + 1)}px"
          height: "#{Math.max(lbox.height, box.height + 1)}px"

    document.body.addEventListener \wheel, ((e) ~>
      if !@event-in-scope(e) => return
      spos = @scroll-pos
      [dx, dy] = [e.deltaX, e.deltaY]
      [dx, dy] = if Math.abs(dx) > Math.abs(dy) => [dx, 0] else [0, dy]
      [ox, oy] = [spos.x, spos.y]
      spos.x += dx / 30
      spos.y += dy / 30
      dx = Math.round(spos.x) - Math.round(ox)
      dy = Math.round(spos.y) - Math.round(oy)
      if dy > 0 => @_md dy
      else if dy < 0 => @_mu dy
      else if dx > 0 => @_mr dx
      else if dx < 0 => @_ml dx
      @render-selection!
      e.preventDefault!
    ), {passive: false}


  event-in-scope: (e) -> (parent e.target, '.sheet', @dom.sheet) == @dom.sheet
  regrid: ->
    @dom.inner.style.gridTemplateColumns = (
      "repeat(#{@xif.col.1}, max-content) " +
      [0 til @frozen.col].map(~> @size.col[it] or "max-content").join(' ') + ' ' +
      [@xif.col.2 til @dim.col].map(~> @size.col[it + @pos.col - @xif.col.1] or "max-content").join(' ')
    )
    @dom.inner.style.gridTemplateRows = (
      "repeat(#{@xif.row.1}, max-content) " +
      [0 til @frozen.row].map(~> @size.row[it] or "max-content").join(' ') + ' ' +
      [@xif.row.2 til @dim.row].map(~> @size.row[it + @pos.row - @xif.row.1] or "max-content").join(' ')
    )

  add-cell: (x, y) ->
    div = document.createElement \div
    @dom.inner.insertBefore div, @dom.inner.childNodes[y * @dim.col + x]
    @_content {x, y, n: div}

  set: ({row, col, data, range}) ->
    if !range =>
      @data[][row][col] = data
      @_content {y: row - @pos.row + @xif.row.1, x: col - @pos.col + @xif.col.1}
    else
      for r from 0 til data.length => for c from 0 til data[r].length =>
        @data[][r + row][c + col] = data[r][c]
        @_content {y: r + row - @pos.row + @xif.row.1, x: c + col - @pos.col + @xif.col.1}
    @fire \update, {row, col, data, range: !!range}

  # re-render cell with the content they suppose to have
  _content: ({x, y, n}) ->
    if !n and !(n = @dom.inner.childNodes[x + y * @dim.col]) => return
    [textContent, className] = if x < @xif.col.0 and y < @xif.col.0 => ["","cell idx"]
    else if x < @xif.col.0 =>
      v = if y < @xif.row.1 => " "
      else if y < @xif.row.2 => y - @xif.row.1 + 1
      else y - @xif.row.1 + @pos.row + 1
      [v,"cell idx"]
    else if y < @xif.row.0 =>
      v = if x < @xif.col.1 => " "
      else if x < @xif.col.2 => num-to-idx(x - @xif.col.1)
      else num-to-idx(x - @xif.col.1 + @pos.col)
      [v,"cell idx"]
    else if x < @xif.col.1 => [null, "cell fixed"]
    else if y < @xif.row.1 => [null, "cell fixed"]
    else if x < @xif.col.2 and y < @xif.row.2 =>
      [@data[][y - @xif.row.1][x - @xif.col.1] or '', "cell frozen fixed"]
    else if x < @xif.col.2 =>
      [@data[][@pos.row + y - @xif.row.1][x - @xif.col.1] or '', "cell frozen"]
    else if y < @xif.row.2 =>
      [@data[][y - @xif.row.1][@pos.col + x - @xif.col.1] or '', "cell frozen"]
    else [@data[][@pos.row + y - @xif.row.1][@pos.col + x - @xif.col.1] or '', "cell"]

    n.className = className
    if textContent != null => n.textContent = textContent

  # move down
  _md: (mag = 1) ->
    inner = @dom.inner
    mag = Math.round Math.abs mag
    start = (mag - (@dim.row - @fix.row)) >? 0
    for j from start til mag => for i from 0 til @dim.col =>
      idx = (@dim.col * @fix.row)
      if !inner.childNodes[idx] => break
      inner.removeChild(inner.childNodes[idx])
    for j from start til mag =>
      for i from 0 til @dim.col =>
        n = document.createElement \div
        @_content {x: i, y: (@dim.row + j), n}
        inner.appendChild(n)
    @pos.row += mag

  _mu: (mag = 1) ->
    inner = @dom.inner
    if @pos.row <= 0 => return
    mag = Math.round Math.abs mag
    if mag >= @pos.row => mag = @pos.row
    start = (mag - (@dim.row - @xif.row.2)) >? 0
    for j from start til mag => for i from 0 til @dim.col =>
      if !inner.childNodes.length => break
      inner.removeChild(inner.childNodes[inner.childNodes.length - 1])
    @pos.row -= mag
    for j from start til mag =>
      for i from 0 til @dim.col =>
        n = document.createElement \div
        @_content {x: i, y: j + @xif.row.2, n}
        inner.insertBefore(n, inner.childNodes[i + (j - start) * @dim.col + (@dim.col * @xif.row.2)])

  _mr: (mag = 1) ->
    inner = @dom.inner
    mag = Math.round Math.abs mag
    start = (mag - (@dim.col - @fix.col)) >? 0
    for j from start til mag =>
      for i from 0 til @dim.row =>
        inner.removeChild(inner.childNodes[i * @dim.col + @fix.col])
        n = document.createElement \div
        @_content {x: @dim.col + j, y: i, n}
        inner.insertBefore(n, inner.childNodes[(i + 1) * @dim.col - 1])
    @pos.col += mag
    @regrid!

  _ml: (mag = 1) -> 
    inner = @dom.inner
    mag = Math.round Math.abs mag
    if mag >= @pos.col => mag = @pos.col
    if @pos.col <= 0 or mag <= 0 => return
    start = (mag - (@dim.col - @xif.col.2)) >? 0
    @pos.col -= mag
    for j from start til mag =>
      for i from 0 til @dim.row =>
        inner.removeChild(inner.childNodes[(i + 1) * @dim.col - 1])
        n = document.createElement \div
        @_content {x: j + @xif.col.2, y: i, n}
        inner.insertBefore(n, inner.childNodes[i * @dim.col + @xif.col.2 + j - start])
    @regrid!

  goto: (opt={row: 0, col: 0}) ->
    @pos <<< opt
    @render!
  render:  ->
    for y from 0 til @dim.row => for x from 0 til @dim.col => @_content {x, y}

  move: (opt = {}) ->
    if @editing.on => @edited!
    if !(opt.node = @les.node) => return
    if !(node = @cell opt) => return
    idx = @index(node)
    box = node.getBoundingClientRect!
    sbox = @dom.sheet.getBoundingClientRect!
    if box.x + box.width > sbox.x + sbox.width => @_mr 1
    if box.y + box.height > sbox.y + sbox.height => @_md 1
    if idx.x == 0 => ( if @pos.col == 0 => return else @_ml 1 )
    if idx.y == 0 => ( if @pos.row == 0 => return else @_mu 1 )
    if !(node = @cell opt) => return

    @les.node = node
    @les.start = @les.end = @index(node){col, row}
    @render-selection!

  edit: ({node, quick}) ->
    if !@_editing => return
    idx = @index node
    if !idx or idx.col < 0 or idx.row < 0 => return

    @editing <<< {node, quick, on: true}
    @dom.layout.textContent = node.textContent
    lbox = @dom.layout.getBoundingClientRect!
    box = node.getBoundingClientRect!
    rbox = @dom.sheet.getBoundingClientRect!
    [sx,sy] = [@dom.sheet.scrollLeft, @dom.sheet.scrollTop]
    @dom.edit.style <<< 
      left: "#{box.x - rbox.x + sx - 2}px"
      top: "#{box.y - rbox.y + sy - 2}px"
      width: "fit-content"
      height: "fit-content"
    @dom.edit.classList.toggle \show, true
    @dom.textarea.style <<<
      width: "#{Math.max(lbox.width, box.width + 1)}px"
      height: "#{Math.max(lbox.height, box.height + 1)}px"
    @dom.textarea.value = v = (if quick => '' else (node.textContent or ''))
    @dom.textarea.focus!
    @dom.textarea.setSelectionRange v.length, v.length

  edited: ->
    if !@editing.on => return
    @set {row: @les.start.row, col: @les.start.col, data: (v = (@dom.textarea.value or ''))}

    <[edit caret range]>.map ~> @dom[it].classList.toggle \show, false
    @editing <<< node: null, on: false

  index: (node) ->
    idx = Array.from(@dom.inner.childNodes).indexOf(node)
    if idx < 0 => return null
    x = idx % @dim.col
    y = (idx - x) / @dim.col

    if x < @xif.col.1 => col = -1
    else if x < @xif.col.2 => col = x - @xif.col.1
    else col = x - @xif.col.1 + @pos.col

    if y < @xif.row.1 => row = -1
    else if y < @xif.row.2 => row = y - @xif.row.1
    else row = y - @xif.row.1 + @pos.row

    return {x, y, col, row}

  cell: (opt = {}) ->
    base = if opt.node => @index(opt.node) else {y: 0, x: 0}
    if !base => throw new Error("node not found in sheet")
    y = base.y + (opt.y or 0)
    x = base.x + (opt.x or 0)
    return @dom.inner.childNodes[y * @dim.col + x]

  editing: (v) ->
    return if !(v?) => @_editing
    else @_editing = !!v

  render-selection: ->
    if !@les.start => return
    sx = if @les.start.col < @frozen.col => @les.start.col else @les.start.col - @pos.col
    sy = if @les.start.row < @frozen.row => @les.start.row else @les.start.row - @pos.row
    ex = if @les.end.col < @frozen.col => @les.end.col else @les.end.col - @pos.col
    ey = if @les.end.row < @frozen.row => @les.end.row else @les.end.row - @pos.row

    rbox = @dom.inner.getBoundingClientRect!

    xbox = [sx, ex].map (x) ~>
      if x < 0 => {x: rbox.x - 10, width: 0}
      else if x > (@dim.col - 1) => {x: rbox.x + rbox.width + 10, width: 0}
      else @dom.inner.childNodes[x + @xif.col.1].getBoundingClientRect!

    ybox = [sy, ey].map (y) ~>
      if y < 0 => {y: rbox.y - 10, height: 0}
      else if y > (@dim.row - 1) => {y: rbox.y + rbox.height + 10, height: 0}
      else @dom.inner.childNodes[@dim.col * (y + @xif.row.1)].getBoundingClientRect!

    x1 = Math.min.apply Math, xbox.map -> it.x - rbox.x
    x2 = Math.max.apply Math, xbox.map -> it.x - rbox.x + it.width
    y1 = Math.min.apply Math, ybox.map -> it.y - rbox.y
    y2 = Math.max.apply Math, ybox.map -> it.y - rbox.y + it.height
    w = x2 - x1 + 1
    h = y2 - y1 + 1

    snode = if !(sx >= 0 and sy >= 0 and sx < @dim.col and sy < @dim.row) => null
    else @dom.inner.childNodes[(sx + @xif.col.1) + (sy + @xif.row.1) * @dim.col]
    sbox = if !snode => null else snode.getBoundingClientRect!

    @dom.range.style <<< 
      left: "#{x1}px"
      top: "#{y1}px"
      width: "#{w}px"
      height: "#{h}px"
    @dom.range.classList.toggle \show, true
    if sbox =>
      @dom.caret.style <<< 
        left: "#{sbox.x - rbox.x - 1}px"
        top: "#{sbox.y - rbox.y - 1}px"
        width: "#{sbox.width + 2}px"
        height: "#{sbox.height + 2}px"
        zIndex: (
          if @les.start.row + @xif.row.1 < @xif.row.2 and @les.start.col + @xif.col.1 < @xif.col.2 => 101
          else if @les.start.row + @xif.row.1 < @xif.row.2 or @les.start.col + @xif.col.1 < @xif.col.2 => 20
          else 10
        )
    @dom.caret.classList.toggle \show, !!sbox


if module? => module.exports = sheet
else if window? => window.sheet = sheet


