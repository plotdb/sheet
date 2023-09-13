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

  @sel = {cut: {}}
  # TODO why we use `les` but not `sel`? figure it out and refactor this
  @les = {}
  @editing = {}
  @dom = Object.fromEntries <[sheet inner caret range edit layout range-cut slide-y slide-x]>.map ->
    n = document.createElement(\div)
      ..classList.add it
    [it, n]
  @dom.sheet.setAttribute \tabindex, -1
  @dom.textarea = document.createElement \textarea
  @root.appendChild(@dom.sheet)
  <[inner caret range edit layout range-cut slide-y slide-x]>.map ~> @dom.sheet.appendChild @dom[it]
  if !@opt.slider => @dom["slide-x"].style.display = @dom["slide-y"].style.display = \none
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
    @dom.sheet.addEventListener \contextmenu, (e) ~>
      @fire \menu.on, {evt: e, node: e.target}
      if @_menu-off => return
      @_menu-off = (e) ~>
        if e.type == \keydown and e.keyCode != 27 => return
        document.body.removeEventListener \click, @_menu-off
        document.body.removeEventListener \keydown, @_menu-off
        @_menu-off = null
        @fire \menu.off, {evt: e, node: e.target}
      document.body.addEventListener \click, @_menu-off
      document.body.addEventListener \keydown, @_menu-off

    dom = @dom.sheet
    dom.addEventListener \mousedown, (e) ~>
      # selection should skip right click
      if e.button > 1 => return
      @edited!
      if !(p = parent (e.target), '.cell', dom) => return
      idx = @index(p){row, col}
      # negative: clicking on idx cell.
      # we use `undefined` to indicate selecting a whole row/col.
      if idx.col < 0 or idx.row < 0 =>
        @les.node = @cell @les.start
        if !(e.shiftKey and @les.start) =>
          @les.start = {col: idx.col >? 0, row: idx.row >? 0}
          @les.node = @cell @les.start
        @les.end =
          col: if idx.col >= 0 => idx.col else undefined
          row: if idx.row >= 0 => idx.row else undefined
        @render-selection!
        return
      if e.shiftKey and @les.start => @les.end = idx
      else
        @les.start = @les.end = idx
        @les.node = p
      @render-selection!
    dom.addEventListener \mousemove, (e) ~>
      if @_slider.y.on or @_slider.x.on => return
      if @editing.on or !(e.buttons and (p = parent (e.target), '.cell', dom)) => return
      idx = @index(p){row, col}
      @les.end =
        col: if idx.col >= 0 => idx.col else undefined
        row: if idx.row >= 0 => idx.row else undefined
      @render-selection!
    dom.addEventListener \dblclick, (e) ~>
      if !(p = parent (e.target), '.cell', dom) => return
      @edit {node: p, quick: false}

    _dp = new DOMParser!
    _dparse = -> return _dp.parseFromString it, \text/html

    document.body.addEventListener \paste, (e) ~>
      if !parent(document.activeElement, '.sheet', dom) => return
      if !@les.start => return
      if \text/html in (e.clipboardData.types or []) =>
        # TODO / NOTE don't know why but it doesn't work if we put parseFromString
        # directly here. so anyway we wrap it in `_dparse` first.
        d = _dparse e.clipboardData.getData('text/html')
        data = Array.from(d.querySelectorAll \tr).map (n) ->
          Array.from(n.querySelectorAll 'th,td').map (n) -> n.textContent
      else
        raw = e.clipboardData.getData('text')
        data = parse-csv raw
      @set {row: @les.start.row, col: @les.start.col, data: data, range: true}
      if @sel.cut =>
        # NOTE we may need a general `hide-selection` api in the future.
        # at that time, we probably will want integrate this into it.
        s = @_to-text {sel: @sel.cut}
        if s == raw =>
          {sc,ec,sr,er} = @_bound sel: @sel.cut
          for row from sr to er => for col from sc to ec => @set {row, col, data: ""}
          navigator.clipboard.writeText ''
        @sel.cut = null
        @dom["range-cut"].classList.toggle \show, false

    dom.addEventListener \keydown, (e) ~>
      code = e.keyCode
      if e.keyCode == 67 and (e.metaKey or e.ctrlKey) => return @copy!
      if e.keyCode == 88 and (e.metaKey or e.ctrlKey) => return @copy cut: true
      if !@event-in-scope(e) => return
      if code == 8 =>
        if !@les.node => return
        {sc,ec,sr,er} = @_bound!
        data = for row from sr to er => for col from sc to ec => ''
        @set {row: sr, col: sc, data, range: true}
      if code == 189 and (e.metaKey or e.ctrlKey) => @slice!
      if code == 187 and (e.metaKey or e.ctrlKey) => @insert!

      opt = switch code
      | 37 => {y:  0, x: -1}
      | 38 => {y: -1, x:  0}
      | 39 => {y:  0, x:  1}
      | 40 => {y:  1, x:  0}
      | 9 =>  {y:  0, x:  1}
      | otherwise => null
      if !opt => return
      if @editing.on and !@editing.quick => return
      @move(opt <<< {select: e.shiftKey})
      e.stopPropagation!
      e.preventDefault!
      @dom.sheet.focus!  # we need focus to accept key event.

    dom.addEventListener \keypress, (e) ~>
      # ctrl+`-`: 189 in keydown, 31 in keypress
      # ctrl+`+`: 187 in keydown, 61 in keypress
      if e.keyCode in [31 61] and (e.metaKey or e.ctrlKey) => return
      if @les.node and !@editing.on =>
        @edit node: @les.node, quick: (if e.keyCode == 13 => false else true)
        # it's an event for toggling editing. don't send a newline into textarea
        if e.keyCode == 13 => e.preventDefault!

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

    _obj = @
    @_slider =
      hd: (evt) ->
        @ <<< on: true, p: evt[@t.2]
        document.addEventListener \mouseup, (e) ~> @hu e
        document.addEventListener \mousemove, (e) ~> @hm e
      hu: (evt) ->
        @on = false
        document.removeEventListener \mouseup, @hu
        document.removeEventListener \mousemove, @hm
      hm: (evt) ->
        if !@on => return
        d = @p - evt[@t.2]
        v = Math.sign(d) * @dir * Math.round(Math.log(Math.abs(d) >? 1))
        if v > 0 => _obj[@t.1] v
        if v < 0 => _obj[@t.0] v
        _obj.render-selection!
    @_slider.y = {n: \slide-y, on: false, p: 0, t: <[_mu _md clientY]>, dir: -1} <<< @_slider{hd, hu, hm}
    @_slider.x = {n: \slide-x, on: false, p: 0, t: <[_mr _ml clientX]>, dir: 1} <<< @_slider{hd, hu, hm}

    <[x y]>.map (n) ~> @dom[@_slider[n].n].addEventListener \mousedown, (e) ~> @_slider[n].hd e

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

  select: (o) ->
    if !arguments.length =>
      ret = {}
      if !@les.start => return null
      ret.col = @les.start.col
      ret.row = @les.start.row
      if !@les.end => ret <<< colspan: 1, rowspan: 1; return ret
      if !@les.end.col? => delete ret.col else ret.colspan = @les.end.col - ret.col + 1
      if !@les.end.row? => delete ret.row else ret.rowspan = @les.end.row - ret.row + 1
      return ret
    @les = {}
    if o =>
      @les = {start: {col: 0, row: 0}, end: {}}
      if o.row? =>
        @les.start.row = o.row
        @les.end.row = o.row + (if o.rowspan => (that >? 1) else 1) - 1
      if o.col? =>
        @les.start.col = o.col
        @les.end.col = o.col + (if o.colspan => (that >? 1) else 1) - 1
    @render-selection!
    return

  _bound: (o={}) ->
    sel = o.sel or @les
    [p1, p2] = [sel.start, sel.end]
    # TODO is this a good return value?
    if !(p1 and p2) => return {sc: 0, ec: 0, sr: 0, er: 0}
    [sc, ec] = if p1.col < p2.col or !p2.col? => [p1.col, p2.col] else [p2.col, p1.col]
    [sr, er] = if p1.row < p2.row or !p2.row? => [p1.row, p2.row] else [p2.row, p1.row]
    if !o.defined? or o.defined =>
      if !ec? => ec = Math.max.apply Math, @_data.map(->it.length)
      if !er? => er = @_data.length
    return {sc, ec, sr, er}

  _to-text: ({sel}) ->
    if !(sel and sel.start) => return ''
    c = []
    {sc, ec, sr, er} = @_bound {sel}
    for row from sr to er =>
      r = []
      for col from sc to ec =>
        if !(content = @_data[][row][col])? => content = ''
        # TODO advanced content support
        if typeof(content) == \object => continue
        r.push ('"' + (('' + content) or '').replace(/"/g,'""') + '"')
      c.push r.join(\\t)
    s = c.join(\\n)
    return s

  copy: (o={}) ->
    if !@les.start => return
    s = @_to-text {sel: @les}
    navigator.clipboard.writeText s
    if o.cut =>
      @sel.cut = start: @les.start, end: @les.end
      @render-selection @sel.cut, {cut: true}

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
    n.className = (className + ' ' + clsext).trim!

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
    @render-selection!

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
    if !(node = @cell opt) and !(node = @cell idx{col, row}) => return

    @les.node = node
    if opt.select =>
      ns = @index(node){col, row}
      # we use @les.start = @les.end below, which makes it the same object
      # since we may change them separatedly here, we have to ensure that they are different.
      # TODO the better way is to always give start/end a different object
      #      we shall do this in the future.
      if @les.end == @les.start => @les.end = JSON.parse(JSON.stringify(@les.start))
      # undefined = the whole col/row is selected, thus:
      #  - for lower bound, `undefined` = always larger
      #  - for upper bound, it doesn't have to be checked.
      # extending lower bound
      if ns.col < @les.start.col and (ns.col < @les.end.col or !(@les.end.col?)) =>
        (if @les.start.col > @les.end.col => @les.end else @les.start).col = ns.col
      if ns.row < @les.start.row and (ns.row < @les.end.row or !(@les.end.row?)) =>
        (if @les.start.row > @les.end.row => @les.end else @les.start).row = ns.row
      # extending upper bound
      if ns.col > @les.start.col and (ns.col > @les.end.col) =>
        (if @les.start.col < @les.end.col => @les.end else @les.start).col = ns.col
      if ns.row > @les.start.row and (ns.row > @les.end.row) =>
        (if @les.start.row < @les.end.row => @les.end else @les.start).row = ns.row
    else
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
    r = opt.roughly
    if opt.col? or opt.row? =>
      if opt.col < @frozen.col => x = opt.col
      else if opt.col - @pos.col < @frozen.col =>
        if r => x = @frozen.col else return null
      else x = (opt.col - @pos.col)
      if opt.row < @frozen.row => y = opt.row
      else if opt.row - @pos.row < @frozen.row =>
        if r => y = @frozen.row else return null
      else y = (opt.row - @pos.row)
      [x, y] = [x + @xif.col.1, y + @xif.row.1]
      if x < 0 or y < 0 or x >= @dim.col or y >= @dim.row => return null
      return @dom.inner.childNodes[y * @dim.col + x]
    else
      base = if opt.node => @index(opt.node) else {y: 0, x: 0}
      if !base => return #throw new Error("node not found in sheet")
      y = base.y + (opt.y or 0)
      x = base.x + (opt.x or 0)
      return @dom.inner.childNodes[y * @dim.col + x]

  editing: (v) ->
    return if !(v?) => @_editing
    else @_editing = !!v

  render-selection: (sel, o = {}) ->
    if !sel => sel = @les
    if !sel.start =>
      @dom.caret.classList.toggle \show, false
      @dom.range.classList.toggle \show, false
      return
    {sc,ec,sr,er} = @_bound defined: false, sel: sel
    rbox = @dom.inner.getBoundingClientRect!
    c0 = @cell({col: @pos.col + @frozen.col, row: @pos.row + @frozen.row})
    c1 = @cell {col: sc, row: sr, roughly: true}
    c2 = @cell {col: sc, row: er, roughly: true}
    c3 = @cell {col: ec, row: sr, roughly: true}
    c4 = @cell {col: ec, row: er, roughly: true}
    c5 = @cell {col: @pos.col + @dim.col - 2, row: @pos.row + @dim.row - 2}
    [b0,b1,b2,b3,b4,b5] = [c0,c1,c2,c3,c4,c5].map -> if it => it.getBoundingClientRect! else null
    b0 <<< {width: 0, height: 0}
    x1 = (b1 or b2 or (if sc > @pos.col => b5 else b0)).x - rbox.x
    y1 = (b1 or b3 or (if sr > @pos.row => b5 else b0)).y - rbox.y
    col-out = ec - @pos.col < 0
    row-out = er - @pos.row < 0
    x2 = (b3 or b4 or b5 or b0).x + (if col-out => 0 else (b3 or b4 or b5 or b0).width) - rbox.x
    y2 = (b2 or b4 or b5 or b0).y + (if row-out => 0 else (b2 or b4 or b5 or b0).height) - rbox.y
    w = x2 - x1 + 1
    h = y2 - y1 + 1

    if !ec? => w = @root.getBoundingClientRect!width
    if !er? => h = @root.getBoundingClientRect!height

    # use current node or selection start node
    # we original used `@cell(sel.start)` but it doesn't work
    # for cursor moving with keyboard while shift is pressed.
    snode = @les.node
    sbox = if !snode => null else snode.getBoundingClientRect!

    dom = if o.cut => @dom["range-cut"] else @dom.range
    dom.style <<<
      left: "#{x1}px"
      top: "#{y1}px"
      width: "#{w}px"
      height: "#{h}px"
    dom.classList.toggle \show, true
    if !o.cut =>
      if sbox =>
        @dom.caret.style <<<
          left: "#{sbox.x - rbox.x - 1}px"
          top: "#{sbox.y - rbox.y - 1}px"
          width: "#{(if col-out => 0 else sbox.width) + 2}px"
          height: "#{(if row-out => 0 else sbox.height) + 2}px"
          zIndex: (
            if sel.start.row + @xif.row.1 < @xif.row.2 and sel.start.col + @xif.col.1 < @xif.col.2 => 101
            else if sel.start.row + @xif.row.1 < @xif.row.2 or sel.start.col + @xif.col.1 < @xif.col.2 => 20
            else 15
          )
      @dom.caret.classList.toggle \show, !!sbox

  data: ->
    if !(it?) => return @_data
    @_data = it
    @render!

  sort: (o={}) ->
    {sc,ec,sr,er} = @_bound defined: false
    d = @_data.map (d,i) -> {d,i}
    d.sort (a,b) ~>
      if a.i < @frozen.row => if b.i >= @frozen.row => return -1
      if b.i < @frozen.row => if a.i >= @frozen.row => return 1
      a = if isNaN(+a.d[sc]) => a.d[sc] else +a.d[sc]
      b = if isNaN(+b.d[sc]) => b.d[sc] else +b.d[sc]
      (if o.dir == \asc => 1 else -1) * (if a > b => 1 else if a < b => -1 else 0)
    @_data = d.map (d) -> d.d
    @fire \change, {row: 0, col: 0, data: @_data, range: true}
    @render-selection!
    @render!

  insert: ->
    {sc,ec,sr,er} = @_bound defined: false
    if !ec? => d = @_data.splice sr, 0, []
    if !er? => d = @_data.map -> it.splice sc, 0, ''
    @fire \change, {row: sr, col: sc, data: d, range: true}
    @les.end = @les.start
    @render-selection!
    @render!
    return

  slice: ->
    {sc,ec,sr,er} = @_bound defined: false
    if !ec? => d = @_data.splice sr, (er - sr + 1)
    if !er? => d = @_data.map -> it.splice sc, (ec - sc + 1)
    @fire \change, {row: sr, col: sc, data: d, range: true}
    @les.end = @les.start
    @render-selection!
    @render!
    return

if module? => module.exports = sheet
else if window? => window.sheet = sheet
