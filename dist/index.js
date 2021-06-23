// Generated by LiveScript 1.6.0
(function(){
  var parseCsv, parent, numToIdx, sheet;
  parseCsv = function(txt){
    return Papa.parse(txt).data;
  };
  parent = function(n, s, e){
    var m;
    e == null && (e = document);
    m = n;
    while (n && n !== e) {
      n = n.parentNode;
    }
    if (n !== e) {
      return null;
    }
    if (!s) {
      return n;
    }
    n = m;
    while (n && n !== e && (!n.matches || (n.matches && !n.matches(s)))) {
      n = n.parentNode;
    }
    if (n === e && (!e.matches || !e.matches(s))) {
      return null;
    }
    return n;
  };
  numToIdx = function(v){
    var ret, u;
    if (v < 0) {
      return "";
    }
    ret = "";
    u = v % 26;
    ret = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(u) + ret;
    v = (v - u) / 26;
    while (v > 0) {
      u = v % 26;
      ret = " ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(u) + ret;
      v = (v - u) / 26;
    }
    return ret;
  };
  sheet = function(opt){
    var this$ = this;
    opt == null && (opt = {});
    this.root = typeof opt.root === 'string'
      ? document.querySelector(opt.root)
      : opt.root;
    this.data = opt.data || [];
    this.dim = {
      col: (opt.dim || (opt.dim = {})).col || 30,
      row: (opt.dim || (opt.dim = {})).row || 30
    };
    this.fix = {
      col: 1,
      row: 1
    };
    this.pos = {
      col: 0,
      row: 0
    };
    this.scrollPos = {
      x: 0,
      y: 0
    };
    this.sel = {};
    this.les = {};
    this.editing = {};
    this.dom = Object.fromEntries(['sheet', 'inner', 'caret', 'range', 'edit', 'layout'].map(function(it){
      var x$, n;
      x$ = n = document.createElement('div');
      x$.classList.add(it);
      return [it, n];
    }));
    this.dom.textarea = document.createElement('textarea');
    this.root.appendChild(this.dom.sheet);
    ['inner', 'caret', 'range', 'edit', 'layout'].map(function(it){
      return this$.dom.sheet.appendChild(this$.dom[it]);
    });
    this.dom.edit.appendChild(this.dom.textarea);
    this._init();
    return this;
  };
  sheet.prototype = import$(Object.create(Object.prototype), {
    _init: function(){
      var i$, to$, r, j$, to1$, c, dom, this$ = this;
      for (i$ = 0, to$ = this.dim.row; i$ < to$; ++i$) {
        r = i$;
        for (j$ = 0, to1$ = this.dim.col; j$ < to1$; ++j$) {
          c = j$;
          this.addCell(c, r);
        }
      }
      this.regrid();
      this.dom.textarea.addEventListener('mousedown', function(e){
        return e.stopPropagation();
      });
      dom = this.dom.sheet;
      dom.addEventListener('mousedown', function(e){
        var p, ref$;
        this$.edited();
        if (!(p = parent(e.target, '.cell', dom))) {
          return;
        }
        this$.les.start = this$.les.end = {
          row: (ref$ = this$.index(p)).row,
          col: ref$.col
        };
        this$.les.node = p;
        return this$.renderSelection();
      });
      dom.addEventListener('mousemove', function(e){
        var p, ref$;
        if (this$.editing.on || !(e.buttons && (p = parent(e.target, '.cell', dom)))) {
          return;
        }
        this$.les.end = {
          row: (ref$ = this$.index(p)).row,
          col: ref$.col
        };
        return this$.renderSelection();
      });
      dom.addEventListener('dblclick', function(e){
        var p;
        if (!(p = parent(e.target, '.cell', dom))) {
          return;
        }
        return this$.edit({
          node: p,
          quick: false
        });
      });
      document.body.addEventListener('paste', function(e){
        var data, i$, to$, r, lresult$, j$, to1$, c, results$ = [];
        if (!this$.les.start) {
          return;
        }
        data = e.clipboardData.getData('text');
        data = parseCsv(data);
        for (i$ = 0, to$ = data.length; i$ < to$; ++i$) {
          r = i$;
          lresult$ = [];
          for (j$ = 0, to1$ = data[r].length; j$ < to1$; ++j$) {
            c = j$;
            lresult$.push(this$.set({
              row: r + this$.les.start.row,
              col: c + this$.les.start.col,
              data: data[r][c]
            }));
          }
          results$.push(lresult$);
        }
        return results$;
      });
      document.body.addEventListener('keydown', function(e){
        var code, ref$, p1, p2, c1, c2, r1, r2, i$, row, j$, col, x, y, opt;
        code = e.keyCode;
        if (code === 8) {
          if (!this$.les.node) {
            return;
          }
          ref$ = [this$.les.start, this$.les.end], p1 = ref$[0], p2 = ref$[1];
          ref$ = p1.col < p2.col
            ? [p1.col, p2.col]
            : [p2.col, p1.col], c1 = ref$[0], c2 = ref$[1];
          ref$ = p1.row < p2.row
            ? [p1.row, p2.row]
            : [p2.row, p1.row], r1 = ref$[0], r2 = ref$[1];
          for (i$ = r1; i$ <= r2; ++i$) {
            row = i$;
            for (j$ = c1; j$ <= c2; ++j$) {
              col = j$;
              ((ref$ = this$.data)[row] || (ref$[row] = []))[col] = "";
              ref$ = [col - this$.pos.col + 1, row - this$.pos.row + 1], x = ref$[0], y = ref$[1];
              this$._content({
                x: x,
                y: y
              });
            }
          }
        }
        opt = (function(){
          switch (code) {
          case 37:
            return {
              y: 0,
              x: -1
            };
          case 38:
            return {
              y: -1,
              x: 0
            };
          case 39:
            return {
              y: 0,
              x: 1
            };
          case 40:
            return {
              y: 1,
              x: 0
            };
          default:
            return null;
          }
        }());
        if (!opt) {
          return;
        }
        if (this$.editing.on && !this$.editing.quick) {
          return;
        }
        this$.move(opt);
        e.stopPropagation();
        return e.preventDefault();
      });
      document.body.addEventListener('keypress', function(e){
        if (this$.les.node && !this$.editing.on) {
          return this$.edit({
            node: this$.les.node,
            quick: e.keyCode === 13 ? false : true
          });
        }
      });
      this.dom.textarea.addEventListener('keydown', function(e){
        var lbox, box, ref$;
        if (e.keyCode === 27 || (e.keyCode === 13 && !(e.altKey || e.metaKey))) {
          this$.move({
            row: 1,
            col: 0
          });
          e.stopPropagation();
          e.preventDefault();
          return;
        }
        if (e.keyCode === 13 && (e.altKey || e.metaKey)) {
          this$.dom.textarea.value += '\n';
          this$.dom.layout.textContent = this$.dom.textarea.value + " ";
          lbox = this$.dom.layout.getBoundingClientRect();
          box = this$.editing.node.getBoundingClientRect();
          return ref$ = this$.dom.textarea.style, ref$.width = Math.max(lbox.width, box.width + 1) + "px", ref$.height = Math.max(lbox.height, box.height + 1) + "px", ref$;
        }
      });
      return document.body.addEventListener('wheel', function(e){
        var spos, ref$, dx, dy, ox, oy;
        spos = this$.scrollPos;
        ref$ = [e.deltaX, e.deltaY], dx = ref$[0], dy = ref$[1];
        ref$ = Math.abs(dx) > Math.abs(dy)
          ? [dx, 0]
          : [0, dy], dx = ref$[0], dy = ref$[1];
        ref$ = [spos.x, spos.y], ox = ref$[0], oy = ref$[1];
        spos.x += dx / 30;
        spos.y += dy / 30;
        dx = Math.round(spos.x) - Math.round(ox);
        dy = Math.round(spos.y) - Math.round(oy);
        if (dy > 0) {
          this$._md(dy);
        } else if (dy < 0) {
          this$._mu(dy);
        } else if (dx > 0) {
          this$._mr(dx);
        } else if (dx < 0) {
          this$._ml(dx);
        }
        this$.renderSelection();
        return e.preventDefault();
      }, {
        passive: false
      });
    },
    regrid: function(){
      return this.dom.inner.style.gridTemplateColumns = "repeat(" + this.dim.col + ", max-content)";
    },
    addCell: function(x, y){
      var div;
      div = document.createElement('div');
      div.classList.add.apply(div.classList, !(x && y)
        ? ['cell', 'idx']
        : ['cell']);
      div.textContent = !(x || y)
        ? ''
        : !x
          ? y
          : !y ? numToIdx(x - 1) : '';
      return this.dom.inner.insertBefore(div, this.dom.inner.childNodes[y * this.dim.col + x]);
    },
    set: function(arg$){
      var row, col, data, ref$;
      row = arg$.row, col = arg$.col, data = arg$.data;
      ((ref$ = this.data)[row] || (ref$[row] = []))[col] = data;
      return this._content({
        y: row - this.pos.row + 1,
        x: col - this.pos.col + 1
      });
    },
    _content: function(arg$){
      var x, y, n, ref$, key$, textContent, className;
      x = arg$.x, y = arg$.y, n = arg$.n;
      if (!n && !(n = this.dom.inner.childNodes[x + y * this.dim.col])) {
        return;
      }
      ref$ = !(x || y)
        ? ["", "cell idx"]
        : !x
          ? [y + this.pos.row, "cell idx"]
          : !y
            ? [numToIdx(x - 1 + this.pos.col), "cell idx"]
            : [((ref$ = this.data)[key$ = this.pos.row + y - 1] || (ref$[key$] = []))[this.pos.col + x - 1] || '', "cell"], textContent = ref$[0], className = ref$[1];
      return n.textContent = textContent, n.className = className, n;
    },
    _md: function(mag){
      var inner, start, ref$, i$, j, j$, to$, i, idx, n;
      mag == null && (mag = 1);
      inner = this.dom.inner;
      mag = Math.round(Math.abs(mag));
      start = (ref$ = mag - (this.dim.row - this.fix.row)) > 0 ? ref$ : 0;
      for (i$ = start; i$ < mag; ++i$) {
        j = i$;
        for (j$ = 0, to$ = this.dim.col; j$ < to$; ++j$) {
          i = j$;
          idx = this.dim.col * this.fix.row;
          if (!inner.childNodes[idx]) {
            break;
          }
          inner.removeChild(inner.childNodes[idx]);
        }
      }
      for (i$ = start; i$ < mag; ++i$) {
        j = i$;
        for (j$ = 0, to$ = this.dim.col; j$ < to$; ++j$) {
          i = j$;
          n = document.createElement('div');
          this._content({
            x: i,
            y: this.dim.row + j,
            n: n
          });
          inner.appendChild(n);
        }
      }
      return this.pos.row += mag;
    },
    _mu: function(mag){
      var inner, start, ref$, i$, j, j$, to$, i, lresult$, n, results$ = [];
      mag == null && (mag = 1);
      inner = this.dom.inner;
      if (this.pos.row <= 0) {
        return;
      }
      mag = Math.round(Math.abs(mag));
      if (mag >= this.pos.row) {
        mag = this.pos.row;
      }
      start = (ref$ = mag - (this.dim.row - this.fix.row)) > 0 ? ref$ : 0;
      for (i$ = start; i$ < mag; ++i$) {
        j = i$;
        for (j$ = 0, to$ = this.dim.col; j$ < to$; ++j$) {
          i = j$;
          if (!inner.childNodes.length) {
            break;
          }
          inner.removeChild(inner.childNodes[inner.childNodes.length - 1]);
        }
      }
      this.pos.row -= mag;
      for (i$ = start; i$ < mag; ++i$) {
        j = i$;
        lresult$ = [];
        for (j$ = 0, to$ = this.dim.col; j$ < to$; ++j$) {
          i = j$;
          n = document.createElement('div');
          this._content({
            x: i,
            y: j + 1,
            n: n
          });
          lresult$.push(inner.insertBefore(n, inner.childNodes[i + (j - start) * this.dim.col + this.dim.col * this.fix.row]));
        }
        results$.push(lresult$);
      }
      return results$;
    },
    _mr: function(mag){
      var inner, start, ref$, i$, j, j$, to$, i, n;
      mag == null && (mag = 1);
      inner = this.dom.inner;
      mag = Math.round(Math.abs(mag));
      start = (ref$ = mag - (this.dim.col - this.fix.col)) > 0 ? ref$ : 0;
      for (i$ = start; i$ < mag; ++i$) {
        j = i$;
        for (j$ = 0, to$ = this.dim.row; j$ < to$; ++j$) {
          i = j$;
          inner.removeChild(inner.childNodes[i * this.dim.col + this.fix.col]);
          n = document.createElement('div');
          this._content({
            x: this.dim.col + j,
            y: i,
            n: n
          });
          inner.insertBefore(n, inner.childNodes[(i + 1) * this.dim.col - 1]);
        }
      }
      this.pos.col += mag;
      return this.regrid();
    },
    _ml: function(mag){
      var inner, start, ref$, i$, j, j$, to$, i, n;
      mag == null && (mag = 1);
      inner = this.dom.inner;
      mag = Math.round(Math.abs(mag));
      if (mag >= this.pos.col) {
        mag = this.pos.col;
      }
      if (this.pos.col <= 0 || mag <= 0) {
        return;
      }
      start = (ref$ = mag - (this.dim.col - this.fix.col)) > 0 ? ref$ : 0;
      this.pos.col -= mag;
      for (i$ = start; i$ < mag; ++i$) {
        j = i$;
        for (j$ = 0, to$ = this.dim.row; j$ < to$; ++j$) {
          i = j$;
          inner.removeChild(inner.childNodes[(i + 1) * this.dim.col - 1]);
          n = document.createElement('div');
          this._content({
            x: j + 1,
            y: i,
            n: n
          });
          inner.insertBefore(n, inner.childNodes[i * this.dim.col + this.fix.col + j - start]);
        }
      }
      return this.regrid();
    },
    goto: function(opt){
      opt == null && (opt = {
        row: 0,
        col: 0
      });
      import$(this.pos, opt);
      return this.render();
    },
    render: function(){
      var i$, to$, y, lresult$, j$, to1$, x, results$ = [];
      for (i$ = 0, to$ = this.dim.row; i$ < to$; ++i$) {
        y = i$;
        lresult$ = [];
        for (j$ = 0, to1$ = this.dim.col; j$ < to1$; ++j$) {
          x = j$;
          lresult$.push(this._content({
            x: x,
            y: y
          }));
        }
        results$.push(lresult$);
      }
      return results$;
    },
    move: function(opt){
      var node, idx, box, sbox, ref$;
      opt == null && (opt = {});
      if (this.editing.on) {
        this.edited();
      }
      if (!(opt.node = this.les.node)) {
        return;
      }
      if (!(node = this.cell(opt))) {
        return;
      }
      idx = this.index(node);
      box = node.getBoundingClientRect();
      sbox = this.dom.sheet.getBoundingClientRect();
      if (box.x + box.width > sbox.x + sbox.width) {
        this._mr(1);
      }
      if (box.y + box.height > sbox.y + sbox.height) {
        this._md(1);
      }
      if (idx.x === 0) {
        if (this.pos.col === 0) {
          return;
        } else {
          this._ml(1);
        }
      }
      if (idx.y === 0) {
        if (this.pos.row === 0) {
          return;
        } else {
          this._mu(1);
        }
      }
      if (!(node = this.cell(opt))) {
        return;
      }
      this.les.node = node;
      this.les.start = this.les.end = {
        col: (ref$ = this.index(node)).col,
        row: ref$.row
      };
      return this.renderSelection();
    },
    edit: function(arg$){
      var node, quick, ref$, lbox, box, rbox, sx, sy, v;
      node = arg$.node, quick = arg$.quick;
      ref$ = this.editing;
      ref$.node = node;
      ref$.quick = quick;
      ref$.on = true;
      this.dom.layout.textContent = node.textContent;
      lbox = this.dom.layout.getBoundingClientRect();
      box = node.getBoundingClientRect();
      rbox = this.dom.sheet.getBoundingClientRect();
      ref$ = [this.dom.sheet.scrollLeft, this.dom.sheet.scrollTop], sx = ref$[0], sy = ref$[1];
      ref$ = this.dom.edit.style;
      ref$.left = (box.x - rbox.x + sx - 2) + "px";
      ref$.top = (box.y - rbox.y + sy - 2) + "px";
      ref$.width = "fit-content";
      ref$.height = "fit-content";
      this.dom.edit.classList.toggle('show', true);
      ref$ = this.dom.textarea.style;
      ref$.width = Math.max(lbox.width, box.width + 1) + "px";
      ref$.height = Math.max(lbox.height, box.height + 1) + "px";
      this.dom.textarea.value = v = quick
        ? ''
        : node.textContent || '';
      this.dom.textarea.focus();
      return this.dom.textarea.setSelectionRange(v.length, v.length);
    },
    edited: function(){
      var v, p, ref$, key$, this$ = this;
      if (!this.editing.on) {
        return;
      }
      this.editing.node.textContent = v = this.dom.textarea.value || '';
      p = this.index(this.editing.node);
      ((ref$ = this.data)[key$ = this.pos.row + p.y - 1] || (ref$[key$] = []))[this.pos.col + p.x - 1] = v;
      ['edit', 'caret', 'range'].map(function(it){
        return this$.dom[it].classList.toggle('show', false);
      });
      return ref$ = this.editing, ref$.node = null, ref$.on = false, ref$;
    },
    index: function(node){
      var idx, x, y, ref$, col, row;
      idx = Array.from(this.dom.inner.childNodes).indexOf(node);
      if (idx < 0) {
        return null;
      }
      x = idx % this.dim.col;
      y = (idx - x) / this.dim.col;
      ref$ = [x + this.pos.col - 1, y + this.pos.row - 1], col = ref$[0], row = ref$[1];
      return {
        x: x,
        y: y,
        col: col,
        row: row
      };
    },
    cell: function(opt){
      var base, y, x;
      opt == null && (opt = {});
      base = opt.node
        ? this.index(opt.node)
        : {
          y: 0,
          x: 0
        };
      if (!base) {
        throw new Error("node not found in sheet");
      }
      y = base.y + (opt.y || 0);
      x = base.x + (opt.x || 0);
      return this.dom.inner.childNodes[y * this.dim.col + x];
    },
    renderSelection: function(){
      var sx, sy, ex, ey, rbox, xbox, ybox, x1, x2, y1, y2, w, h, snode, sbox, ref$, this$ = this;
      if (!this.les.start) {
        return;
      }
      sx = this.les.start.col - this.pos.col;
      sy = this.les.start.row - this.pos.row;
      ex = this.les.end.col - this.pos.col;
      ey = this.les.end.row - this.pos.row;
      rbox = this.dom.inner.getBoundingClientRect();
      xbox = [sx, ex].map(function(x){
        if (x < 0) {
          return {
            x: rbox.x - 10,
            width: 0
          };
        } else if (x > this$.dim.col - 1) {
          return {
            x: rbox.x + rbox.width + 10,
            width: 0
          };
        } else {
          return this$.dom.inner.childNodes[x + 1].getBoundingClientRect();
        }
      });
      ybox = [sy, ey].map(function(y){
        if (y < 0) {
          return {
            y: rbox.y - 10,
            height: 0
          };
        } else if (y > this$.dim.row - 1) {
          return {
            y: rbox.y + rbox.height + 10,
            height: 0
          };
        } else {
          return this$.dom.inner.childNodes[this$.dim.col * (y + 1)].getBoundingClientRect();
        }
      });
      x1 = Math.min.apply(Math, xbox.map(function(it){
        return it.x - rbox.x;
      }));
      x2 = Math.max.apply(Math, xbox.map(function(it){
        return it.x - rbox.x + it.width;
      }));
      y1 = Math.min.apply(Math, ybox.map(function(it){
        return it.y - rbox.y;
      }));
      y2 = Math.max.apply(Math, ybox.map(function(it){
        return it.y - rbox.y + it.height;
      }));
      w = x2 - x1 + 1;
      h = y2 - y1 + 1;
      snode = !(sx >= 0 && sy >= 0 && sx < this.dim.col && sy < this.dim.row)
        ? null
        : this.dom.inner.childNodes[(sx + 1) + (sy + 1) * this.dim.col];
      sbox = !snode
        ? null
        : snode.getBoundingClientRect();
      ref$ = this.dom.range.style;
      ref$.left = x1 + "px";
      ref$.top = y1 + "px";
      ref$.width = w + "px";
      ref$.height = h + "px";
      this.dom.range.classList.toggle('show', true);
      if (sbox) {
        ref$ = this.dom.caret.style;
        ref$.left = (sbox.x - rbox.x - 1) + "px";
        ref$.top = (sbox.y - rbox.y - 1) + "px";
        ref$.width = (sbox.width + 2) + "px";
        ref$.height = (sbox.height + 2) + "px";
      }
      return this.dom.caret.classList.toggle('show', !!sbox);
    }
  });
  if (typeof module != 'undefined' && module !== null) {
    module.exports = sheet;
  } else if (typeof window != 'undefined' && window !== null) {
    window.sheet = sheet;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
