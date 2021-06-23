<-(->it.apply {}) _

num-to-idx = (v) ->
  if v < 0 => return ""
  ret = ""
  do
    u = v % 26
    ret = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(u)) + ret
    v = (v - u) / 26
  while v > 0
  return ret

sheet = (opt={}) ->
  @root = if typeof(opt.root) == \string => document.querySelector(opt.root) else opt.root
  @col = opt.col or 100
  @row = opt.row or 100
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
    @regrid!
    dom = @dom.sheet
    for r from 0 til @row => for c from 0 til @col => @add-cell {r,c}
    dom.addEventListener \mousedown, (e) ~>
      @edited!
      if !(p = ld$.parent (e.target), '.cell', dom) => return
      @sel.start = @sel.end = p
      @render-selection!
    dom.addEventListener \mousemove, (e) ~>
      if @editing.on or !(e.buttons and (p = ld$.parent (e.target), '.cell', dom)) => return
      @sel.end = p
      @render-selection!
    dom.addEventListener \dblclick, (e) ~>
      if !(p = ld$.parent (e.target), '.cell', dom) => return
      @edit {node: p, quick: false}

    document.body.addEventListener \keydown, (e) ~>
      code = e.keyCode

      if code == 8 =>
        if !@sel.start => return
        p1 = @index(@sel.start)
        p2 = @index(@sel.end)
        r1 = Math.min(p1.row, p2.row)
        r2 = Math.max(p1.row, p2.row)
        c1 = Math.min(p1.col, p2.col)
        c2 = Math.max(p1.col, p2.col)
        for r from r1 to r2 => for c from c1 to c2 =>
          n = @cell {row: r, col: c}
          if n => n.textContent = ""
        @render-selection!

      opt = switch code
      | 37 => {row: 0, col: -1}
      | 38 => {row: -1, col: 0}
      | 39 => {row: 0, col: 1}
      | 40 => {row: 1, col: 0}
      | otherwise => null
      if !opt => return
      if @editing.on and !@editing.quick => return
      @move opt
      e.stopPropagation!
      e.preventDefault!

    document.body.addEventListener \keypress, (e) ~>
      if @sel.start and !@editing.on => @edit node: @sel.start, quick: true

    @dom.textarea.addEventListener \keydown, (e) ~>
      if e.keyCode == 27 or (e.keyCode == 13 and !(e.altKey or e.metaKey)) =>
        @move {row: 1, col: 0}
        e.stopPropagation!
        e.preventDefault!
        return
      if e.keyCode == 13 and (e.altKey or e.metaKey) =>
        @dom.textarea.value += \\n
        @dom.layout.textContent = @dom.textarea.value
        lbox = @dom.layout.getBoundingClientRect!
        box = @editing.node.getBoundingClientRect!
        @dom.textarea.style <<<
          width: "#{Math.max(lbox.width, box.width + 1)}px"
          height: "#{Math.max(lbox.height, box.height + 1)}px"

    # to prevent grid selection
    @dom.textarea.addEventListener \mousedown, (e) -> e.stopPropagation!

  move: (opt = {}) ->
    if @editing.on => @edited!
    node = @sel.start
    opt.node = node
    if !node => return
    node = @cell opt
    if !node => return
    @sel.start = node
    @sel.end = node
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
    @dom.textarea.value = if quick => '' else (node.textContent or '')
    @dom.textarea.focus!

  edited: ->
    if !@editing.on => return
    @editing.node.textContent = @dom.textarea.value or ''
    <[edit caret range]>.map ~> @dom[it].classList.toggle \show, false
    @editing <<< node: null, on: false

  regrid: -> @dom.inner.style.gridTemplateColumns = "repeat(#{@col}, max-content)"

  add-cell: ({r,c}) ->
    div = document.createElement \div
    div.classList.add.apply div.classList, (
      if !(c or r) => <[cell idx xy]>
      else if !c => <[cell idx x]>
      else if !r => <[cell idx y]>
      else <[cell]>
    )
    div.textContent = (
      if !(c or r) => ''
      else if !c => (r)
      else if !r => num-to-idx(c - 1)
      else  ''
    )
    @dom.inner.insertBefore div, @dom.inner.childNodes[r * @col + c]


  insert-col: (c) ->
    for r from @row - 1 to 0 by -1 => @add-cell {r,c}
    @col = @col + 1
    @regrid!
    @reidx!

  insert-row: (r) ->
    for c from 0 til @col => @add-cell {r,c}
    @row = @row + 1
    @reidx!

  delete-col: (c) ->
    for r from @row - 1 to 0 by -1 => @dom.inner.removeChild(@dom.inner.childNodes[r * @col + c])
    @col = @col - 1
    @regrid!
    @reidx!

  delete-row: (r) ->
    for c from 0 til @col => @dom.inner.removeChild(@dom.inner.childNodes[r * @col])
    @row = @row - 1
    @reidx!

  reidx: ->
    for r from 0 til @row => @dom.inner.childNodes[r * @col].textContent = r
    for c from 0 til @col => @dom.inner.childNodes[c].textContent = num-to-idx(c - 1)

  set-content: ({row, col, content}) ->
    node = @dom.inner.childNodes[row * @col + col]
    node.textContent = content

  index: (node) ->
    idx = Array.from(@dom.inner.childNodes).indexOf(node)
    if idx < 0 => return null
    col = (idx % @col)
    row = (idx - col) / @col
    return {row, col}

  cell: (opt = {}) ->
    base = if opt.node => @index(opt.node) else {row: 0, col: 0}
    if !base => throw new Error("node not found in sheet")
    row = base.row + (opt.row or 0)
    col = base.col + (opt.col or 0)
    return @dom.inner.childNodes[row * @col + col]

  render-selection: ->
    sbox = @sel.start.getBoundingClientRect!
    ebox = @sel.end.getBoundingClientRect!
    rbox = @dom.sheet.getBoundingClientRect!
    sx = @dom.sheet.scrollLeft
    sy = @dom.sheet.scrollTop
    x1 = Math.min(sbox.x, ebox.x) - rbox.x + sx - 2
    y1 = Math.min(sbox.y, ebox.y) - rbox.y + sy - 2
    x2 = Math.max(sbox.x + sbox.width, ebox.x + ebox.width) - rbox.x + sx - 2
    y2 = Math.max(sbox.y + ebox.height, ebox.y + ebox.height) - rbox.y + sy - 2
    w = x2 - x1 + 1
    h = y2 - y1 + 1

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


s = new sheet root: '.container'
s.insert-col 3
s.insert-row 2
s.delete-row 2
s.delete-col 3
s.set-content {
  row: 3, col: 4, content: """
  this is a very long word.
  hello world!
  """
}
