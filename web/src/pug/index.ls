<-(->it.apply {}) _

sheet = ld$.find '.sheet', 0
sel = ld$.find sheet, '.sel', 0
sel-main = ld$.find sheet, '.sel-main', 0
edit = ld$.find sheet, '.edit', 0
input = ld$.find sheet, '.edit textarea', 0
@sel = {}

input.addEventListener \keydown, (e) ~>
  if e.keyCode == 13 =>
    console.log (e.altKey or e.metaKey)
    if !(e.altKey or e.metaKey) => return update-text!
    input.setAttribute \rows, 2


update-text = ~>
  if !@sel.node => return
  @sel.node.textContent = input.value or ''
  edit.style.display = \none
  sel-main.style.display = \none
  sel.style.display = \none
  @sel.node = null

sheet.addEventListener \dblclick, (e) ~>
  n = e.target
  if !(p = ld$.parent n, '.scell', sheet) => return
  @sel.node = p
  box = p.getBoundingClientRect!
  rbox = sheet.getBoundingClientRect!
  edit.style <<< 
    left: "#{box.x - rbox.x + sheet.scrollLeft - 2}px"
    top: "#{box.y - rbox.y + sheet.scrollTop - 2}px"
    width: "#{box.width + 1}px"
    height: "#{box.height + 1}px"
    display: \block
  input.value = p.textContent or ''
  input.focus!

sheet.addEventListener \mousedown, (e) ~>
  update-text!
  n = e.target
  if !(p = ld$.parent n, '.scell', sheet) => return
  @sel.start = p
  @sel.end = p
  render!

sheet.addEventListener \mousemove, (e) ~>
  if !e.buttons => return
  n = e.target
  if !(p = ld$.parent n, '.scell', sheet) => return
  @sel.end = p
  render!

render = ~>

  sbox = @sel.start.getBoundingClientRect!
  ebox = @sel.end.getBoundingClientRect!
  rbox = sheet.getBoundingClientRect!
  x1 = Math.min(sbox.x, ebox.x) - rbox.x + sheet.scrollLeft - 2
  y1 = Math.min(sbox.y, ebox.y) - rbox.y + sheet.scrollTop - 2
  x2 = Math.max(sbox.x + sbox.width, ebox.x + ebox.width) - rbox.x + sheet.scrollLeft - 2
  y2 = Math.max(sbox.y + ebox.height, ebox.y + ebox.height) - rbox.y + sheet.scrollTop - 2
  w = x2 - x1 + 1
  h = y2 - y1 + 1

  sel.style <<< 
    left: "#{x1}px"
    top: "#{y1}px"
    width: "#{w}px"
    height: "#{h}px"
    display: \block

  sel-main.style <<< 
    left: "#{sbox.x - rbox.x + sheet.scrollLeft - 2}px"
    top: "#{sbox.y - rbox.y + sheet.scrollTop - 2}px"
    width: "#{sbox.width + 1}px"
    height: "#{sbox.height + 1}px"
    display: \block
