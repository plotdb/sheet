(function(){
  var json0, findPlugin, asc, serialize, deserialize, possess, locate, datadom;
  if ((typeof module != 'undefined' && module !== null) && (typeof require != 'undefined' && require !== null)) {
    json0 = require('@plotdb/json0');
  }
  findPlugin = function(plugins, n){
    var ref$, v, i$, to$, i;
    plugins == null && (plugins = []);
    n == null && (n = '');
    n = n.split('@');
    ref$ = !n[0]
      ? ["@" + n[1], n[2]]
      : [n[0], n[1]], n = ref$[0], v = ref$[1];
    for (i$ = 0, to$ = plugins.length; i$ < to$; ++i$) {
      i = i$;
      if (n === plugins[i].name) {
        return plugins[i];
      }
    }
    return null;
  };
  asc = function(n, node){
    if (Array.isArray(n.attr)) {
      n.attr.filter(function(it){
        return it && it[0];
      }).map(function(p){
        return node.setAttribute(p[0], p[1]);
      });
    }
    if (Array.isArray(n.style)) {
      n.style.filter(function(it){
        return it && it[0];
      }).map(function(p){
        return node.style[p[0]] = p[1];
      });
    }
    if (Array.isArray(n.cls)) {
      return node.classList.add.apply(node.classList, n.cls.filter(function(it){
        return it;
      }));
    }
  };
  /**
   * serialize a DOM tree.
   * @param {Element} node - DOM tree root node.
   * @param {Plugin(s)} plugins - plugin or array of plugins
   * @param {Window} win - window object. default `window`.
   * @return {Promise} - resolving {data, promise} where data is a serialized JSON representing the input DOM, and promise resolves when serializing is done.
   */
  serialize = function(node, plugins, win){
    var queue;
    win == null && (win = window);
    plugins = Array.isArray(plugins)
      ? plugins
      : plugins
        ? [plugins]
        : [];
    queue = [];
    return Promise.resolve().then(function(){
      var _;
      _ = function(node){
        var nodename, data, i$, to$, i, ret, style, attr, v, cls, plugin;
        nodename = node.nodeName.toLowerCase();
        switch (nodename) {
        case '#text':
          return {
            type: 'text',
            value: node.nodeValue
          };
        case '#comment':
          return {
            type: 'comment',
            value: node.nodeValue
          };
        case '#document-fragment':
          data = {
            type: 'document-fragment',
            child: []
          };
          for (i$ = 0, to$ = node.childNodes.length; i$ < to$; ++i$) {
            i = i$;
            if (ret = _(node.childNodes[i])) {
              data.child.push(ret);
            }
          }
          return data;
        default:
          style = !node.style
            ? []
            : (function(){
              var i$, to$, results$ = [];
              for (i$ = 0, to$ = node.style.length; i$ < to$; ++i$) {
                i = i$;
                results$.push(i);
              }
              return results$;
            }()).map(function(it){
              return [node.style[it], node.style[node.style[it]]];
            });
          attr = !node.attributes
            ? []
            : (function(){
              var i$, ref$, len$, results$ = [];
              for (i$ = 0, len$ = (ref$ = node.attributes).length; i$ < len$; ++i$) {
                v = ref$[i$];
                results$.push([v.nodeName, v.nodeValue]);
              }
              return results$;
            }()).filter(function(it){
              var ref$;
              return !(/^dd-/.exec(it[0]) || ((ref$ = it[0]) === 'style' || ref$ === 'class'));
            });
          cls = !node.classList
            ? []
            : (function(){
              var i$, ref$, len$, results$ = [];
              for (i$ = 0, len$ = (ref$ = node.classList).length; i$ < len$; ++i$) {
                v = ref$[i$];
                results$.push(v);
              }
              return results$;
            }());
          data = {
            style: style,
            attr: attr,
            cls: cls,
            child: [],
            plug: []
          };
          if (!node.hasAttribute('dd-plugin')) {
            for (i$ = 0, to$ = node.childNodes.length; i$ < to$; ++i$) {
              i = i$;
              if (ret = _(node.childNodes[i])) {
                data.child.push(ret);
              }
            }
            return data.type = 'tag', data.name = nodename, data;
          }
          data.type = 'custom';
          if (!(plugin = findPlugin(plugins, node.getAttribute('dd-plugin')))) {
            return data.plugin = "unknown", data;
          }
          data.plugin = plugin.name + "@" + plugin.version;
          ret = plugin.serialize({
            data: data,
            node: node,
            window: window,
            plugins: plugins
          });
          if (ret instanceof Promise) {
            queue.push(ret);
          }
          return data;
        }
      };
      return _(node);
    }).then(function(data){
      return {
        data: data,
        promise: Promise.all(queue)
      };
    });
  };
  /**
   * deserialize a JSON into corresponding DOM tree.
   * @param {json} n - JSON representation of a serialized DOM tree.
   * @param {Functions} plugins - plugin or array of plugins.
   * @return {Promise} - a promise resolving to an object containing following fields:
   *   - node {Element}: deserialized DOM tree or placeholder div for being replaced by instantiated block.
   *   - promise {Promise}: resolve to all pending block retrieval.
   */
  deserialize = function(n, plugins, win){
    var doc, queue;
    win == null && (win = window);
    plugins = Array.isArray(plugins)
      ? plugins
      : plugins
        ? [plugins]
        : [];
    doc = win.document;
    queue = [];
    return Promise.resolve().then(function(){
      var _;
      _ = function(n){
        var node, i$, ref$, len$, c, ret, promise, plugs, res$, plugin, t;
        switch (n.type) {
        case 'text':
          return doc.createTextNode(n.value);
        case 'comment':
          return doc.createComment(n.value);
        case 'document-fragment':
          node = doc.createDocumentFragment();
          for (i$ = 0, len$ = (ref$ = n.child || []).length; i$ < len$; ++i$) {
            c = ref$[i$];
            if (ret = _(c)) {
              node.appendChild(ret);
            }
          }
          return node;
        case 'tag':
          node = doc.createElement(n.name);
          asc(n, node);
          for (i$ = 0, len$ = (ref$ = n.child || []).length; i$ < len$; ++i$) {
            c = ref$[i$];
            if (ret = _(c)) {
              node.appendChild(ret);
            }
          }
          return node;
        default:
          ref$ = [doc.createElement('div'), null], node = ref$[0], promise = ref$[1];
          for (i$ = 0, len$ = (ref$ = n.child || []).length; i$ < len$; ++i$) {
            c = ref$[i$];
            if (ret = _(c)) {
              node.appendChild(ret);
            }
          }
          res$ = [];
          for (i$ = 0, len$ = (ref$ = n.plug || []).length; i$ < len$; ++i$) {
            c = ref$[i$];
            res$.push(_(c));
          }
          plugs = res$;
          if (!(plugin = findPlugin(plugins, n.plugin))) {
            node.appendChild(doc.createTextNode("(unknown)"));
            return node;
          }
          ret = plugin.deserialize({
            data: n,
            node: node,
            plugs: plugs,
            window: win,
            plugins: plugins
          });
          if (!ret) {
            node.appendChild(doc.createTextNode("(unknown)"));
          } else if (ret instanceof Promise) {
            node.appendChild(t = doc.createTextNode("(.. loading ..)"));
            promise = ret.then(function(newNode){
              if (t.parentNode) {
                t.parentNode.removeChild(t);
              }
              if (node !== newNode) {
                node.replaceWith(newNode);
              }
              newNode.setAttribute('dd-plugin', plugin.name + "@" + plugin.version);
              asc(n, newNode);
              return newNode;
            });
          } else if (ret instanceof win.Element) {
            node = ret;
          } else {
            node = ret.node, promise = ret.promise;
          }
          if (promise) {
            queue.push(promise);
          }
          node.setAttribute('dd-plugin', plugin.name + "@" + plugin.version);
          asc(n, node);
          return node;
        }
      };
      return _(n);
    }).then(function(node){
      return {
        node: node,
        promise: Promise.all(queue)
      };
    });
  };
  /**
   * inject custom object into custom node.
   * @param {Element} node - DOM tree root node.
   * @param {Plugin(s)} plugins - plugin or array of plugins
   * @param {Window} win - window object. default `window`.
   * @return {Promise} - resolving {data, promise} where data is a serialized JSON representing the input DOM, and promise resolves when serializing is done.
  
   * @param {Window} win - window object. default `window`.
   * @return {Promise} - resolving {data, promise} where data is a serialized JSON representing the input DOM, and promise resolves when serializing is done.
   */
  possess = function(node, plugins, win){
    var queue;
    win == null && (win = window);
    plugins = Array.isArray(plugins)
      ? plugins
      : plugins
        ? [plugins]
        : [];
    queue = [];
    return Promise.resolve().then(function(){
      var _;
      _ = function(n){
        var i$, to$, i, plugin, ret;
        if (!n.hasAttribute('dd-plugin')) {
          for (i$ = 0, to$ = n.childNodes.length; i$ < to$; ++i$) {
            i = i$;
            _(n.childNodes[i]);
          }
          return;
        }
        if (!(plugin = findPlugin(plugins, node.getAttribute('dd-plugin')))) {
          return;
        }
        ret = plugin.possess({
          node: node,
          plugins: plugins,
          window: window
        });
        if (ret instanceof Promise) {
          return queue.push(ret);
        }
      };
      return _(node);
    }).then(function(){
      return Promise.all(queue);
    });
  };
  /**
   * apply op based on a data / root pair.
   * @param {json} op - operational transformation
   * @param {json} data - serialized DOM tree
   * @param {Element} root - root of the corresponding DOM tree
   */
  locate = function(op, data, root){
    var n, obj, dd, i$, i, ref$, to$, j, p;
    n = obj = root;
    dd = data;
    for (i$ = op.p.length - 1; i$ >= 0; --i$) {
      i = i$;
      if ((ref$ = op.p[i]) === 'attr' || ref$ === 'style' || ref$ === 'cls' || ref$ === 'child' || ref$ === 'name' || ref$ === 'value' || ref$ === 'type') {
        break;
      }
    }
    for (i$ = 0, to$ = i - 1; i$ < to$; ++i$) {
      j = i$;
      p = op.p[i];
      obj = p === 'child' ? obj.childNodes : obj;
      dd = dd[p];
    }
    switch (op.p[i]) {
    case 'name':
    case 'value':
    case 'type':
      return deserialize(dd).then(function(arg$){
        var node, promise;
        node = arg$.node, promise = arg$.promise;
        obj.parentNode.insertBefore(node, obj);
        return obj.parentNode.removeChild(obj);
      });
    case 'style':
      obj.setAttribute('style', '');
      return dd.style.map(function(it){
        return obj.style[it[0]] = it[1];
      });
    case 'cls':
      return obj.setAttribute('class', dd.cls.join(' '));
    case 'attr':
      Array.from(obj.attributes).map(function(it){
        var ref$;
        if (!dd.attr[it.name] && !((ref$ = it.name) === 'custom' || ref$ === 'style' || ref$ === 'class')) {
          return obj.removeAttribute(it.name);
        }
      });
      return dd.attr.map(function(it){
        return obj.setAttribute(it[0], it[1]);
      });
    case 'child':
      if (op.ld) {
        obj.removeChild(obj.childNodes[op.p[i + 1]]);
      }
      if (op.li) {
        return deserialize(op.li).then(function(arg$){
          var node, promise;
          node = arg$.node, promise = arg$.promise;
          return obj.insertBefore(node, obj.childNodes[op.p[i + 1]]);
        });
      }
    }
  };
  datadom = function(opt){
    var that;
    opt == null && (opt = {});
    this.opt = opt;
    this.window = (that = opt.window)
      ? that
      : typeof window != 'undefined' && window !== null ? window : null;
    this.plugins = Array.isArray(opt.plugins)
      ? opt.plugins
      : opt.plugins
        ? [opt.plugins]
        : [];
    if (opt.data) {
      this.data = opt.data;
    } else if (opt.node) {
      this.node = opt.node;
    }
    return this;
  };
  datadom.prototype = import$(Object.create(Object.prototype), {
    init: function(){
      var this$ = this;
      if (this.data) {
        return deserialize(this.data, this.plugins, this.window).then(function(arg$){
          var node, promise;
          node = arg$.node, promise = arg$.promise;
          this$.node = node;
          return {
            node: node,
            promise: promise
          };
        });
      } else {
        if (!this.node) {
          this.node = document.createElement('div');
        }
        return serialize(this.node, this.plugins, this.window).then(function(arg$){
          var data, promise;
          data = arg$.data, promise = arg$.promise;
          this.data = data;
          return {
            data: data,
            promise: promise
          };
        });
      }
    },
    getData: function(){
      return this.data;
    },
    getNode: function(){
      return this.node;
    },
    update: function(ops){
      var i$, len$, op, results$ = [];
      ops == null && (ops = []);
      for (i$ = 0, len$ = ops.length; i$ < len$; ++i$) {
        op = ops[i$];
        json0.type.apply(this.data, [op]);
        results$.push(locate(op, this.data, this.node));
      }
      return results$;
    }
  });
  datadom.serialize = serialize;
  datadom.deserialize = deserialize;
  datadom.possess = possess;
  if (typeof module != 'undefined' && module !== null) {
    module.exports = datadom;
  } else if (typeof window != 'undefined' && window !== null) {
    window.datadom = datadom;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
