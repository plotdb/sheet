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
  @data = opt.data or []
  @col = opt.col or 100
  @row = opt.row or 100
  @dim = col: (opt.{}dim.col or 30), row: (opt.{}dim.row or 30)
  @fix = col: 1, row: 1
  @pos = col: 0, row: 0
  @scroll-pos = x: 0, y: 0

  @sel = {}
  @les = {}
  @editing = {}
  @dom = Object.fromEntries <[sheet inner caret range edit layout]>.map ->
    n = document.createElement(\div)
      ..classList.add it
    [it, n]
  @dom.textarea = document.createElement \textarea
  @root.appendChild(@dom.sheet)
  <[inner caret range edit layout]>.map ~> @dom.sheet.appendChild @dom[it]
  @dom.edit.appendChild @dom.textarea
  @_init!
  @

sheet.prototype = Object.create(Object.prototype) <<< do
  _init: ->
    for r from 0 til @dim.row => for c from 0 til @dim.col => @add-cell c, r
    @regrid!

    # to prevent grid selection
    @dom.textarea.addEventListener \mousedown, (e) -> e.stopPropagation!

    dom = @dom.sheet
    dom.addEventListener \mousedown, (e) ~>
      @edited!
      if !(p = ld$.parent (e.target), '.cell', dom) => return
      @les.start = @les.end = @index(p){row, col}
      @les.node = p
      @render-selection!
    dom.addEventListener \mousemove, (e) ~>
      if @editing.on or !(e.buttons and (p = ld$.parent (e.target), '.cell', dom)) => return
      @les.end = @index(p){row, col}
      @render-selection!
    dom.addEventListener \dblclick, (e) ~>
      if !(p = ld$.parent (e.target), '.cell', dom) => return
      @edit {node: p, quick: false}

    document.body.addEventListener \keydown, (e) ~>
      code = e.keyCode
      if code == 8 =>
        if !@les.node => return
        [p1, p2] = [@les.start, @les.end]
        [c1, c2] = if p1.col < p2.col => [p1.col, p2.col] else [p2.col, p1.col]
        [r1, r2] = if p1.row < p2.row => [p1.row, p2.row] else [p2.row, p1.row]
        for row from r1 to r2 => for col from c1 to c2 =>
          @data[][row][col] = ""
          [x, y] = [col - @pos.col + 1, row - @pos.row + 1]
          @_content {x, y}

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

    document.body.addEventListener \keypress, (e) ~>
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


  regrid: ->
    @dom.inner.style.gridTemplateColumns = "repeat(#{@dim.col}, max-content)"

  add-cell: (x, y) ->
    div = document.createElement \div
    div.classList.add.apply div.classList, if !(x and y) => <[cell idx]> else <[cell]>
    div.textContent = (
      if !(x or y) => ''
      else if !x => (y)
      else if !y => num-to-idx(x - 1)
      else  ''
    )
    @dom.inner.insertBefore div, @dom.inner.childNodes[y * @dim.col + x]

  # re-render cell with the content they suppose to have
  _content: ({x, y, n}) ->
    if !n and !(n = @dom.inner.childNodes[x + y * @dim.col]) => return
    [textContent, className] = if !(x or y) => ["","cell idx"]
    else if !x => [y + @pos.row, "cell idx"]
    else if !y => [num-to-idx(x - 1 + @pos.col), "cell idx"]
    else [@data[][@pos.row + y - 1][@pos.col + x - 1] or '', "cell"]
    n <<< {textContent, className}

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
    start = (mag - (@dim.row - @fix.row)) >? 0
    for j from start til mag => for i from 0 til @dim.col =>
      if !inner.childNodes.length => break
      inner.removeChild(inner.childNodes[inner.childNodes.length - 1])
    @pos.row -= mag
    for j from start til mag =>
      for i from 0 til @dim.col =>
        n = document.createElement \div
        @_content {x: i, y: j + 1, n}
        inner.insertBefore(n, inner.childNodes[i + (j - start) * @dim.col + (@dim.col * @fix.row)])

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
    start = (mag - (@dim.col - @fix.col)) >? 0
    @pos.col -= mag
    for j from start til mag =>
      for i from 0 til @dim.row =>
        inner.removeChild(inner.childNodes[(i + 1) * @dim.col - 1])
        n = document.createElement \div
        @_content {x: j + 1, y: i, n}
        inner.insertBefore(n, inner.childNodes[i * @dim.col + @fix.col + j - start])
    @regrid!

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
    @editing.node.textContent = v = ( @dom.textarea.value or '' )
    p = @index(@editing.node)
    @data[][@pos.row + p.y - 1][@pos.col + p.x - 1] = v
    <[edit caret range]>.map ~> @dom[it].classList.toggle \show, false
    @editing <<< node: null, on: false

  index: (node) ->
    idx = Array.from(@dom.inner.childNodes).indexOf(node)
    if idx < 0 => return null
    x = idx % @dim.col
    y = (idx - x) / @dim.col
    [col,row] = [x + @pos.col - 1, y + @pos.row - 1]
    return {x, y, col, row}

  cell: (opt = {}) ->
    base = if opt.node => @index(opt.node) else {y: 0, x: 0}
    if !base => throw new Error("node not found in sheet")
    y = base.y + (opt.y or 0)
    x = base.x + (opt.x or 0)
    return @dom.inner.childNodes[y * @dim.col + x]

  render-selection2: ->

    @dom.range.style <<< 
      left: "#{x1}px"
      top: "#{y1}px"
      width: "#{w}px"
      height: "#{h}px"
    @dom.caret.style <<< 
      left: "#{sbox.x - rbox.x + sx - 2}px"
      top: "#{sbox.y - rbox.y + sy - 2}px"
      width: "#{sbox.width + 1}px"
      height: "#{sbox.height + 1}px"
    @dom.range.classList.toggle \show, true
    @dom.caret.classList.toggle \show, true

  render-selection: ->
    sx = @les.start.col - @pos.col
    sy = @les.start.row - @pos.row

    ex = @les.end.col - @pos.col
    ey = @les.end.row - @pos.row

    rbox = @dom.inner.getBoundingClientRect!
    xbox = [
      @dom.inner.childNodes[(sx >? 0 <? (@dim.col - 1)) + 1]
      @dom.inner.childNodes[(ex >? 0 <? (@dim.col - 1)) + 1]
    ].map -> it.getBoundingClientRect!
    ybox = [
      @dom.inner.childNodes[((sy >? 0 <? (@dim.row - 1)) + 1) * @dim.col]
      @dom.inner.childNodes[((ey >? 0 <? (@dim.row - 1)) + 1) * @dim.col]
    ].map -> it.getBoundingClientRect!
    
    x1 = Math.min.apply Math, xbox.map -> it.x - rbox.x
    x2 = Math.max.apply Math, xbox.map -> it.x - rbox.x + it.width
    y1 = Math.min.apply Math, ybox.map -> it.y - rbox.y
    y2 = Math.max.apply Math, ybox.map -> it.y - rbox.y + it.height
    w = x2 - x1 + 1
    h = y2 - y1 + 1

    snode = if !(sx >= 0 and sy >= 0 and sx < @dim.col and sy < @dim.row) => null
    else @dom.inner.childNodes[(sx + 1) + (sy + 1) * @dim.col]
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
    @dom.caret.classList.toggle \show, !!sbox


s = new sheet root: '#root'
