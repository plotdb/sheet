 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Array, JSON, b64img, blockLoader, c, cssLoader, decache, defer, escape, libLoader, scriptLoader, url, version) {
      pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
if(!libLoader) {
  libLoader = {
    js: {url: {}},
    css: {url: {}},
    root: function(r) { libLoader._r = r; },
    _r: "/assets/lib",
    _v: "",
    version: function(v) { libLoader._v = (v ? "?v=" + v : ""); }
  }
  if(version) { libLoader.version(version); }
}

pug_mixins["script"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

};
pug_mixins["css"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
    }
  }
}).call(this);

};
pug_html = pug_html + "\u003Chtml\u003E";
if (!(libLoader || scriptLoader)) {
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
if(!decache) { decache = (version? "?v=" + version : ""); }
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
scriptLoader.config = (config ? config : {});
if (!scriptLoader.url[url]) {
scriptLoader.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
if(!cssLoader) { cssLoader = {url: {}}; }
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
cssLoader.config = (config ? config : {});
if (!cssLoader.url[url]) {
cssLoader.url[url] = true;
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }







}
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
function ellipsis(str, len) {
  return ((str || '').substring(0, len || 200) + (((str || '').length > (len || 200)) ? '...' : ''));
}














var b64img = {};
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAIA"
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};













pug_html = pug_html + "\u003Chead\u003E\u003Cbase href=\"..\"\u003E";
pug_mixins["css"]("assets/lib/bootstrap/main/dist/css/bootstrap.min.css");
pug_mixins["css"]("assets/lib/@loadingio/bootstrap.ext/main/index.min.css");
pug_mixins["css"]("assets/lib/ldiconfont/main/ldif.min.css");
pug_mixins["css"]("assets/lib/ldcover/main/index.min.css");
pug_mixins["css"]("css/index.css");
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003Ehtml,body{width:100%;height:100%;background:#fff}.frame{border:1px solid #ccc;overflow:scroll}.sheet{position:absolute;display:grid;grid-template-columns:repeat(20,100px);top:0;left:0}.cell{border:1px solid #ccc;height:2em}.s1{background:red}.s2{background:#ff0}.s3{background:#0f0}.s4{background:#00f}\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"mx-auto rwd w-1024 my-4\"\u003E\u003Cdiv class=\"aspect-ratio ratio-3by2\"\u003E\u003Cdiv class=\"frame\"\u003E\u003Cdiv class=\"content\"\u003E\u003Cdiv class=\"sheet s1\"\u003E";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var c = $$obj[pug_index2];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var d = $$obj[pug_index3];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var e = $$obj[pug_index4];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var e = $$obj[pug_index4];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var d = $$obj[pug_index3];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var e = $$obj[pug_index5];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var e = $$obj[pug_index5];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var c = $$obj[pug_index2];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var d = $$obj[pug_index6];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var e = $$obj[pug_index7];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var e = $$obj[pug_index7];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var d = $$obj[pug_index6];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var e = $$obj[pug_index8];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var e = $$obj[pug_index8];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"sheet s2\"\u003E";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
        var c = $$obj[pug_index9];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index10 = 0, $$l = $$obj.length; pug_index10 < $$l; pug_index10++) {
        var d = $$obj[pug_index10];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index11 = 0, $$l = $$obj.length; pug_index11 < $$l; pug_index11++) {
        var e = $$obj[pug_index11];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index11 in $$obj) {
      $$l++;
      var e = $$obj[pug_index11];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index10 in $$obj) {
      $$l++;
      var d = $$obj[pug_index10];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index12 = 0, $$l = $$obj.length; pug_index12 < $$l; pug_index12++) {
        var e = $$obj[pug_index12];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index12 in $$obj) {
      $$l++;
      var e = $$obj[pug_index12];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index9 in $$obj) {
      $$l++;
      var c = $$obj[pug_index9];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index13 = 0, $$l = $$obj.length; pug_index13 < $$l; pug_index13++) {
        var d = $$obj[pug_index13];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index14 = 0, $$l = $$obj.length; pug_index14 < $$l; pug_index14++) {
        var e = $$obj[pug_index14];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index14 in $$obj) {
      $$l++;
      var e = $$obj[pug_index14];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index13 in $$obj) {
      $$l++;
      var d = $$obj[pug_index13];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index15 = 0, $$l = $$obj.length; pug_index15 < $$l; pug_index15++) {
        var e = $$obj[pug_index15];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index15 in $$obj) {
      $$l++;
      var e = $$obj[pug_index15];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"sheet s3\"\u003E";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index16 = 0, $$l = $$obj.length; pug_index16 < $$l; pug_index16++) {
        var c = $$obj[pug_index16];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index17 = 0, $$l = $$obj.length; pug_index17 < $$l; pug_index17++) {
        var d = $$obj[pug_index17];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index18 = 0, $$l = $$obj.length; pug_index18 < $$l; pug_index18++) {
        var e = $$obj[pug_index18];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index18 in $$obj) {
      $$l++;
      var e = $$obj[pug_index18];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index17 in $$obj) {
      $$l++;
      var d = $$obj[pug_index17];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index19 = 0, $$l = $$obj.length; pug_index19 < $$l; pug_index19++) {
        var e = $$obj[pug_index19];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index19 in $$obj) {
      $$l++;
      var e = $$obj[pug_index19];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index16 in $$obj) {
      $$l++;
      var c = $$obj[pug_index16];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index20 = 0, $$l = $$obj.length; pug_index20 < $$l; pug_index20++) {
        var d = $$obj[pug_index20];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index21 = 0, $$l = $$obj.length; pug_index21 < $$l; pug_index21++) {
        var e = $$obj[pug_index21];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index21 in $$obj) {
      $$l++;
      var e = $$obj[pug_index21];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index20 in $$obj) {
      $$l++;
      var d = $$obj[pug_index20];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index22 = 0, $$l = $$obj.length; pug_index22 < $$l; pug_index22++) {
        var e = $$obj[pug_index22];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index22 in $$obj) {
      $$l++;
      var e = $$obj[pug_index22];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"sheet s4\"\u003E";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index23 = 0, $$l = $$obj.length; pug_index23 < $$l; pug_index23++) {
        var c = $$obj[pug_index23];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index24 = 0, $$l = $$obj.length; pug_index24 < $$l; pug_index24++) {
        var d = $$obj[pug_index24];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index25 = 0, $$l = $$obj.length; pug_index25 < $$l; pug_index25++) {
        var e = $$obj[pug_index25];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index25 in $$obj) {
      $$l++;
      var e = $$obj[pug_index25];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index24 in $$obj) {
      $$l++;
      var d = $$obj[pug_index24];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index26 = 0, $$l = $$obj.length; pug_index26 < $$l; pug_index26++) {
        var e = $$obj[pug_index26];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index26 in $$obj) {
      $$l++;
      var e = $$obj[pug_index26];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index23 in $$obj) {
      $$l++;
      var c = $$obj[pug_index23];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index27 = 0, $$l = $$obj.length; pug_index27 < $$l; pug_index27++) {
        var d = $$obj[pug_index27];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index28 = 0, $$l = $$obj.length; pug_index28 < $$l; pug_index28++) {
        var e = $$obj[pug_index28];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index28 in $$obj) {
      $$l++;
      var e = $$obj[pug_index28];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index27 in $$obj) {
      $$l++;
      var d = $$obj[pug_index27];
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index29 = 0, $$l = $$obj.length; pug_index29 < $$l; pug_index29++) {
        var e = $$obj[pug_index29];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index29 in $$obj) {
      $$l++;
      var e = $$obj[pug_index29];
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
pug_mixins["script"]("assets/lib/proxise/main/index.min.js");
pug_mixins["script"]("assets/lib/@plotdb/json0/main/json0.min.js");
pug_mixins["script"]("assets/lib/bootstrap.native/main/dist/bootstrap-native.min.js");
pug_mixins["script"]("assets/lib/@loadingio/ldquery/main/index.min.js");
pug_mixins["script"]("assets/lib/@loadingio/debounce.js/main/index.min.js");
pug_mixins["script"]("assets/lib/ldcover/main/index.min.js");
pug_mixins["script"]("assets/lib/ldview/main/index.min.js");
pug_mixins["script"]("assets/lib/@plotdb/datadom/main/index.min.js");
pug_mixins["script"]("assets/lib/@plotdb/csscope/main/index.min.js");
pug_mixins["script"]("assets/lib/@plotdb/rescope/main/index.min.js");
pug_mixins["script"]("assets/lib/dompurify/main/dist/purify.min.js");
pug_html = pug_html + "\u003Cscript type=\"module\"\u003E(function(t){return t.apply({})})(function(){var l,t,y,n,s,b,e,x,i,f,d=this;l=ld$.find(\".frame\",0);t=ld$.find(\".content\",0);y=ld$.find(\".sheet\",0);n=ld$.find(\".sheet\",1);s=ld$.find(\".sheet\",2);b=ld$.find(\".sheet\",3);this.fbox=l.getBoundingClientRect();e=y.getBoundingClientRect();n.style.top=e.y+e.height-this.fbox.y+\"px\";x=s.getBoundingClientRect();b.style.top=x.y+x.height-this.fbox.y+\"px\";e=y.getBoundingClientRect();s.style.left=e.x+e.width-this.fbox.x+\"px\";i=n.getBoundingClientRect();b.style.left=i.x+i.width-this.fbox.x+\"px\";f=t.style;f.width=\"10000px\";f.height=\"10000px\";return l.addEventListener(\"scroll\",function(){var t,e,x,i,f,o,h;t=[l.scrollLeft,l.scrollTop],e=t[0],x=t[1];i=y.getBoundingClientRect();f=n.getBoundingClientRect();o=s.getBoundingClientRect();h=b.getBoundingClientRect();if(i.y+i.height-d.fbox.y\u003C0){y.style.top=f.y+f.height+x-d.fbox.y+\"px\"}else if(f.y+f.height-d.fbox.y\u003C0){n.style.top=i.y+i.height+x-d.fbox.y+\"px\"}else if(i.y-d.fbox.y\u003Ed.fbox.height){y.style.top=f.y-i.height+x-d.fbox.y+\"px\"}else if(f.y-d.fbox.y\u003Ed.fbox.height){n.style.top=i.y-f.height+x-d.fbox.y+\"px\"}if(o.y+o.height-d.fbox.y\u003C0){s.style.top=h.y+h.height+x-d.fbox.y+\"px\"}else if(h.y+h.height-d.fbox.y\u003C0){b.style.top=o.y+o.height+x-d.fbox.y+\"px\"}else if(o.y-d.fbox.y\u003Ed.fbox.height){s.style.top=h.y-o.height+x-d.fbox.y+\"px\"}else if(h.y-d.fbox.y\u003Ed.fbox.height){b.style.top=o.y-h.height+x-d.fbox.y+\"px\"}if(i.x+i.width-d.fbox.x\u003C0){y.style.left=o.x+o.width+e-d.fbox.x+\"px\"}else if(o.x+o.width-d.fbox.x\u003C0){s.style.left=i.x+i.width+e-d.fbox.x+\"px\"}else if(i.x-d.fbox.x\u003Ed.fbox.width){y.style.left=o.x-i.width+e-d.fbox.x+\"px\"}else if(o.x-d.fbox.x\u003Ed.fbox.width){s.style.left=i.x-o.width+e-d.fbox.x+\"px\"}if(f.x+f.width-d.fbox.x\u003C0){return n.style.left=h.x+h.width+e-d.fbox.x+\"px\"}else if(h.x+h.width-d.fbox.x\u003C0){return b.style.left=f.x+f.width+e-d.fbox.x+\"px\"}else if(f.x-d.fbox.x\u003Ed.fbox.width){return n.style.left=h.x-f.width+e-d.fbox.x+\"px\"}else if(h.x-d.fbox.x\u003Ed.fbox.width){return b.style.left=f.x-h.width+e-d.fbox.x+\"px\"}})});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "JSON" in locals_for_with ?
        locals_for_with.JSON :
        typeof JSON !== 'undefined' ? JSON : undefined, "b64img" in locals_for_with ?
        locals_for_with.b64img :
        typeof b64img !== 'undefined' ? b64img : undefined, "blockLoader" in locals_for_with ?
        locals_for_with.blockLoader :
        typeof blockLoader !== 'undefined' ? blockLoader : undefined, "c" in locals_for_with ?
        locals_for_with.c :
        typeof c !== 'undefined' ? c : undefined, "cssLoader" in locals_for_with ?
        locals_for_with.cssLoader :
        typeof cssLoader !== 'undefined' ? cssLoader : undefined, "decache" in locals_for_with ?
        locals_for_with.decache :
        typeof decache !== 'undefined' ? decache : undefined, "defer" in locals_for_with ?
        locals_for_with.defer :
        typeof defer !== 'undefined' ? defer : undefined, "escape" in locals_for_with ?
        locals_for_with.escape :
        typeof escape !== 'undefined' ? escape : undefined, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "scriptLoader" in locals_for_with ?
        locals_for_with.scriptLoader :
        typeof scriptLoader !== 'undefined' ? scriptLoader : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 