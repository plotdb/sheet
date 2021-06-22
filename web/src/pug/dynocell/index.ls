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
  @pos = col: 0, row: 0, x: 0, y: 0
  @sel = {}
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
    document.body.addEventListener \keydown, (e) ~>
      delta = switch e.keyCode
      | 37 => @_ml 1
      | 38 => @_mu 1
      | 39 => @_mr 1
      | 40 => @_md 1
      | otherwise => null

    document.body.addEventListener \wheel, ((e) ~>
      [dx, dy] = [e.deltaX, e.deltaY]
      [dx, dy] = if Math.abs(dx) > Math.abs(dy) => [dx, 0] else [0, dy]
      [ox, oy] = [@pos.x, @pos.y]
      @pos.x += dx / 30
      @pos.y += dy / 30
      dx = Math.round(@pos.x) - Math.round(ox)
      dy = Math.round(@pos.y) - Math.round(oy)
      if dy > 0 => @_md dy
      else if dy < 0 => @_mu dy
      else if dx > 0 => @_mr dx
      else if dx < 0 => @_ml dx
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


s = new sheet root: '#root'
