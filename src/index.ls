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

idx-to-label = (val) ->
  radix = Math.floor(Math.log( (val + 1) * 25 + 1 ) / Math.log(26)) - 1
  base = ((Math.pow(26, (radix + 1)) - 1) / 25) - 1
  v = val - base
  map = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  ret = ""
  for i from 0 to radix
    c = map.charAt(v % 26)
    ret = c + ret
    v = (v - (v % 26)) / 26
  return ret

label-to-idx = (label) ->
  radix = label.length - 1
  base = ((Math.pow(26, (radix + 1)) - 1) / 25) - 1
  map = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  val = 0
  for i from 0 to radix =>
    idx = map.indexOf(label[i])
    if idx < 0 => throw new Error("incorrect label")
    val = val * 26 + idx
  return val + base

sheet = (opt={}) ->
  @opt = opt
  @root = if typeof(opt.root) == \string => document.querySelector(opt.root) else opt.root
  @evt-handler = {}
  @_data = opt.data or []
  @_size = ({row: [], col: []} <<< opt.size){row, col}
  @cls = ({row: [], col: []} <<< opt.class){row, col}
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
      if !parent(document.activeElement, '.sheet', dom) => return
      if !@les.start => return
      data = e.clipboardData.getData('text')
      data = parse-csv data
      @set {row: @les.start.row, col: @les.start.col, data: data, range: true}

    dom.addEventListener \keydown, (e) ~>
      if e.keyCode == 67 and (e.metaKey or e.ctrlKey) => return @copy!
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
      @dom.sheet.focus!  # we need focus to accept key event.

    dom.addEventListener \keypress, (e) ~>
      if @les.node and !@editing.on => @edit node: @les.node, quick: (if e.keyCode == 13 => false else true)

    @dom.textarea.addEventListener \keydown, (e) ~>
      if e.keyCode == 27 =>
        @edited cancel: true
        e.stopPropagation!
        e.preventDefault!
        @dom.sheet.focus!  # we need focus to accept key event.
        return
      if (e.keyCode == 13 and !(e.altKey or e.metaKey)) =>
        @move {y: 1, x: 0}
        e.stopPropagation!
        e.preventDefault!
        @dom.sheet.focus!  # we need focus to accept key event.
        return
      if e.keyCode == 13 and (e.altKey or e.metaKey) =>
        @dom.textarea.value += \\n
        @dom.layout.textContent = @dom.textarea.value + " "
        lbox = @dom.layout.getBoundingClientRect!
        box = @editing.node.getBoundingClientRect!
        @dom.textarea.style <<<
          width: "#{Math.max(lbox.width, box.width + 1)}px"
          height: "#{Math.max(lbox.height, box.height + 1)}px"


    document.addEventListener \wheel, ((e) ~>
      # we should block wheel event only if target element is under sheet.
      # however, some scenarios may trigger swipe back gesture of browser:
      #  - container with overflow: hidden, or container which has scrolled to the leftmost position.
      #  - in limited region while the gesture has been activated once in other unlimited regions
      #    - this is true even if user reload the page after acitvated the gesture. wtf!
      # there can be prevented by calling preventDefault over every wheel event, but it may cause issues in:
      #  - other scrollable
      #  - outside sheet area
      # for now we only find a way to make it okay:
      #  - always preventDefault for horizontal scrolling  if document.body is the target.
      # this may affect the host document so we make it configurable by user, and by default enabled.
      inscope = @event-in-scope(e)
      if (!(@opt.scroll-lock?) or @opt.scroll-lock) => # if scroll-lock is enabled
        if Math.abs(e.deltaX) > Math.abs(e.deltaY) => # and it's horizontal scrolling
          if inscope or e.target == document.body => # and is in interested region
            e.preventDefault!
      if !inscope => return false
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
      # despite the above hack, we still preventDefault here for default behavior.
      # that is, once users are scrolling in sheet, the event should not trigger default behavior.
      e.preventDefault!
    ), {passive: false}

  copy: ->
    if !@les.start => return
    c = []
    for row from @les.start.row til @les.end.row + 1=>
      r = []
      for col from @les.start.col til @les.end.col + 1 =>
        content = @_data[][rpw][col]
        # TODO advanced content support
        if typeof(content) == \object => continue

        r.push ('"' + (('' + content) or '').replace(/"/g,'""') + '"')
      c.push r.join(\\t)
    s = c.join(\\n)
    navigator.clipboard.writeText s

  event-in-scope: (e) -> (parent e.target, '.sheet', @dom.sheet) == @dom.sheet

  size: ->
    if !it? => return @_size
    @_size = ({row: [], col: []} <<< it){row, col}
    @regrid!

  regrid: ->
    @dom.inner.style.gridTemplateColumns = (
      "repeat(#{@xif.col.1}, max-content) " +
      [0 til @frozen.col].map(~> @_size.col[it] or "max-content").join(' ') + ' ' +
      [@xif.col.2 til @dim.col].map(~> @_size.col[it + @pos.col - @xif.col.1] or "max-content").join(' ')
    )
    @dom.inner.style.gridTemplateRows = (
      "repeat(#{@xif.row.1}, max-content) " +
      [0 til @frozen.row].map(~> @_size.row[it] or "max-content").join(' ') + ' ' +
      [@xif.row.2 til @dim.row].map(~> @_size.row[it + @pos.row - @xif.row.1] or "max-content").join(' ')
    )

  add-cell: (x, y) ->
    div = document.createElement \div
    @dom.inner.insertBefore div, @dom.inner.childNodes[y * @dim.col + x]
    @_content {x, y, n: div}

  set: ({row, col, data, range}) ->
    if !range =>
      @_data[][row][col] = data
      @_content {y: row - @pos.row + @xif.row.1, x: col - @pos.col + @xif.col.1}
    else
      for r from 0 til data.length => for c from 0 til data[r].length =>
        @_data[][r + row][c + col] = data[r][c]
        @_content {y: r + row - @pos.row + @xif.row.1, x: c + col - @pos.col + @xif.col.1}
    @fire \change, {row, col, data, range: !!range}

  # re-render cell with the content they suppose to have
  _content: ({x, y, n}) ->
    if !n and !(n = @dom.inner.childNodes[x + y * @dim.col]) => return
    [content, className] = if x < @xif.col.0 and y < @xif.col.0 => ["","cell idx"]
    else if x < @xif.col.0 =>
      v = if y < @xif.row.1 => " "
      else if y < @xif.row.2 => y - @xif.row.1 + 1
      else y - @xif.row.1 + @pos.row + 1
      [v,"cell idx"]
    else if y < @xif.row.0 =>
      v = if x < @xif.col.1 => " "
      else if x < @xif.col.2 => idx-to-label(x - @xif.col.1)
      else idx-to-label(x - @xif.col.1 + @pos.col)
      [v,"cell idx"]
    else if x < @xif.col.1 => [null, "cell fixed"]
    else if y < @xif.row.1 => [null, "cell fixed"]
    else if x < @xif.col.2 and y < @xif.row.2 =>
      [@_data[][y - @xif.row.1][x - @xif.col.1], "cell frozen fixed"]
    else if x < @xif.col.2 =>
      [@_data[][@pos.row + y - @xif.row.1][x - @xif.col.1], "cell frozen"]
    else if y < @xif.row.2 =>
      [@_data[][y - @xif.row.1][@pos.col + x - @xif.col.1], "cell frozen"]
    else [@_data[][@pos.row + y - @xif.row.1][@pos.col + x - @xif.col.1], "cell"]
    if !(content?) => content = ""

    clsext = if x >= @xif.col.0 and y >= @xif.row.0 =>
      (
        (@cls.col[@pos.col + x - @xif.col.1] or '') + ' ' +
        (@cls.row[@pos.row + y - @xif.row.1] or '')
      )
    else ''
    n.className = (className + ' ' + clsext)

    if content != null =>
      # TODO support advanced content
      if typeof(content) == \object =>
        if content.type == \dom =>
          n.textContent = ""
          n.appendChild content.node
      else n.textContent = content

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

  edited: (opt = {}) ->
    if !@editing.on => return
    if !opt.cancel => @set {row: @les.start.row, col: @les.start.col, data: (v = (@dom.textarea.value or ''))}
    @dom.edit.classList.toggle \show, false
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
    if opt.col? =>
      if opt.col < @frozen.col => x = opt.col
      else if opt.col - @pos.col < @frozen.col => return null
      else x = (opt.col - @pos.col)
      if opt.row < @frozen.row => y = opt.row
      else if opt.row - @pos.row < @frozen.row => return null
      else y = (opt.row - @pos.row)
      [x, y] = [x + @xif.col.1, y + @xif.row.1]
      if x < 0 or y < 0 or x >= @dim.col or y >= @dim.row => return null
      return @dom.inner.childNodes[y * @dim.col + x]
    else
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
    [sc,ec] = if @les.start.col < @les.end.col => [@les.start.col, @les.end.col] else [@les.end.col, @les.start.col]
    [sr,er] = if @les.start.row < @les.end.row => [@les.start.row, @les.end.row] else [@les.end.row, @les.start.row]
    rbox = @dom.inner.getBoundingClientRect!
    c0 = @cell({col: @pos.col + @frozen.col, row: @pos.row + @frozen.row})
    c1 = @cell {col: sc, row: sr}
    c2 = @cell {col: sc, row: er}
    c3 = @cell {col: ec, row: sr}
    c4 = @cell {col: ec, row: er}
    [b0,b1,b2,b3,b4] = [c0,c1,c2,c3,c4].map -> if it => it.getBoundingClientRect! else null
    b0 <<< {width: 0, height: 0}
    x1 = (b1 or b2 or b0).x - rbox.x
    y1 = (b1 or b3 or b0).y - rbox.y
    x2 = (b3 or b4 or b0).x + (b3 or b4 or b0).width - rbox.x
    y2 = (b2 or b4 or b0).y + (b2 or b4 or b0).height - rbox.y
    w = x2 - x1 + 1
    h = y2 - y1 + 1

    snode = @cell @les.start
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
          else 15
        )
    @dom.caret.classList.toggle \show, !!sbox

  data: ->
    if !(it?) => return @_data
    @_data = it
    @render!

if module? => module.exports = sheet
else if window? => window.sheet = sheet


