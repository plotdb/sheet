<-(->it.apply {}) _
frame = ld$.find '.frame', 0
content = ld$.find '.content', 0
sheet1 = ld$.find '.sheet', 0
sheet2 = ld$.find '.sheet', 1
sheet3 = ld$.find '.sheet', 2
sheet4 = ld$.find '.sheet', 3
@fbox = frame.getBoundingClientRect!
box1 = sheet1.getBoundingClientRect!
sheet2.style.top = (box1.y + box1.height - @fbox.y) + "px"
box3 = sheet3.getBoundingClientRect!
sheet4.style.top = (box3.y + box3.height - @fbox.y) + "px"
box1 = sheet1.getBoundingClientRect!
sheet3.style.left = (box1.x + box1.width - @fbox.x) + "px"
box2 = sheet2.getBoundingClientRect!
sheet4.style.left = (box2.x + box2.width - @fbox.x) + "px"

content.style <<< width: "10000px", height: "10000px"
frame.addEventListener \scroll, ~>
  [sx,sy] = [frame.scrollLeft, frame.scrollTop]
  box1 = sheet1.getBoundingClientRect!
  box2 = sheet2.getBoundingClientRect!
  box3 = sheet3.getBoundingClientRect!
  box4 = sheet4.getBoundingClientRect!

  if box1.y + box1.height - @fbox.y < 0 =>
    sheet1.style.top = (box2.y + box2.height + sy - @fbox.y) + "px"
  else if box2.y + box2.height - @fbox.y < 0 =>
    sheet2.style.top = (box1.y + box1.height + sy - @fbox.y) + "px"
  else if box1.y - @fbox.y > @fbox.height =>
    sheet1.style.top = (box2.y - box1.height + sy - @fbox.y) + "px"
  else if box2.y - @fbox.y > @fbox.height =>
    sheet2.style.top = (box1.y - box2.height + sy - @fbox.y) + "px"

  if box3.y + box3.height - @fbox.y < 0 =>
    sheet3.style.top = (box4.y + box4.height + sy - @fbox.y) + "px"
  else if box4.y + box4.height - @fbox.y < 0 =>
    sheet4.style.top = (box3.y + box3.height + sy - @fbox.y) + "px"
  else if box3.y - @fbox.y > @fbox.height =>
    sheet3.style.top = (box4.y - box3.height + sy - @fbox.y) + "px"
  else if box4.y - @fbox.y > @fbox.height =>
    sheet4.style.top = (box3.y - box4.height + sy - @fbox.y) + "px"

  if box1.x + box1.width - @fbox.x < 0 =>
    sheet1.style.left = (box3.x + box3.width + sx - @fbox.x) + "px"
  else if box3.x + box3.width - @fbox.x < 0 =>
    sheet3.style.left = (box1.x + box1.width + sx - @fbox.x) + "px"
  else if box1.x - @fbox.x > @fbox.width =>
    sheet1.style.left = (box3.x - box1.width + sx - @fbox.x) + "px"
  else if box3.x - @fbox.x > @fbox.width =>
    sheet3.style.left = (box1.x - box3.width + sx - @fbox.x) + "px"

  if box2.x + box2.width - @fbox.x < 0 =>
    sheet2.style.left = (box4.x + box4.width + sx - @fbox.x) + "px"
  else if box4.x + box4.width - @fbox.x < 0 =>
    sheet4.style.left = (box2.x + box2.width + sx - @fbox.x) + "px"
  else if box2.x - @fbox.x > @fbox.width =>
    sheet2.style.left = (box4.x - box2.width + sx - @fbox.x) + "px"
  else if box4.x - @fbox.x > @fbox.width =>
    sheet4.style.left = (box2.x - box4.width + sx - @fbox.x) + "px"

