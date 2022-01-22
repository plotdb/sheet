 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (Array, JSON, b64img, blockLoader, c, cols, cssLoader, decache, defer, escape, libLoader, scriptLoader, url, version) {
      ;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
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

;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_mixins["script"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if(!Array.isArray(os)) { os = [os]; }
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var o = $$obj[pug_index0];
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (!libLoader.js.url[url]) {
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
libLoader.js.url[url] = true;
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var o = $$obj[pug_index0];
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (!libLoader.js.url[url]) {
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
libLoader.js.url[url] = true;
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

};
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_mixins["css"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if(!Array.isArray(os)) { os = [os]; }
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var o = $$obj[pug_index1];
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (!libLoader.css.url[url]) {
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
libLoader.css.url[url] = true;
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var o = $$obj[pug_index1];
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
if (!libLoader.css.url[url]) {
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
libLoader.css.url[url] = true;
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@plotdb\u002Fsrcbuild\u002Fdist\u002Flib.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
    }
  }
}).call(this);

};
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if (!(libLoader || scriptLoader)) {
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
scriptLoader.config = (config ? config : {});
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if (!scriptLoader.url[url]) {
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
scriptLoader.url[url] = true;
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
cssLoader.config = (config ? config : {});
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if (!cssLoader.url[url]) {
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
cssLoader.url[url] = true;
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";










}
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";









;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var b64img = {};
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAIA"
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";







;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";













;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cbase href=\"..\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/bootstrap/main/dist/css/bootstrap.min.css");
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/@loadingio/bootstrap.ext/main/index.min.css");
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/ldiconfont/main/ldif.min.css");
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/ldcover/main/index.min.css");
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("css/index.css");
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "html,body{width:100%;height:100%;background:#fff}.sheet{position:relative;border-width:1px;border-style:solid;border-color:#999;width:fit-content}.sheet .srow{display:grid;grid-template-columns:repeat(28,48px);width:fit-content}.sheet .scell{user-select:none;border-width:0 1px 1px 0;border-style:solid;border-color:#ddd;padding:1px;min-width:48px;min-height:26px;line-height:26px;flex:0 0 auto;box-sizing:border-box}.sheet .scell:last-child{border-right-width:0}.sheet .srow:last-child .scell{border-bottom-width:0}.sheet .srow.idx,.sheet .srow .scell:first-child{position:sticky;background:#f1f2f3;color:#919293;font-size:.85em;text-align:center}.sheet .srow.idx{z-index:101;top:0}.sheet .srow .scell:first-child{z-index:100;left:0}.sheet .scell.idx{user-select:none}.sel{z-index:10;border:1px solid #27f;position:absolute;display:none;user-select:none;pointer-events:none}.sel-main{z-index:11;border:2px solid #27f;position:absolute;display:none;user-select:none;pointer-events:none}.edit{z-index:21;border:2px solid #27f;position:absolute;display:none}.edit textarea{position:absolute;top:0;left:0;width:100%;height:100%;border:0;outline:0}\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 81;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-1024 rwd mx-auto my-4\"\u003E";
;pug_debug_line = 81;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"aspect-ratio ratio-2by1\"\u003E";
;pug_debug_line = 82;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sheet w-100 h-100\" style=\"overflow:scroll\"\u003E";
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"edit\"\u003E";
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Ctextarea\u003E\u003C\u002Ftextarea\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sel\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 85;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sel-main\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 86;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sel-main\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 87;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"srow idx\"\u003E";
;pug_debug_line = 88;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
var cols = " ABCDCEFGHIJKLMNOPQRSTUVWXYZ".split('')
;pug_debug_line = 89;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate cols
;(function(){
  var $$obj = cols;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var i = $$obj[pug_index2];
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell idx\"\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var i = $$obj[pug_index2];
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell idx\"\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5,6]
;(function(){
  var $$obj = [1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var k = $$obj[pug_index3];
;pug_debug_line = 92;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5,6]
;(function(){
  var $$obj = [1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var m = $$obj[pug_index4];
;pug_debug_line = 93;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"srow\"\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell idx\"\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = m + ( k - 1 ) * 6) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 95;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 97;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var i = $$obj[pug_index5];
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var j = $$obj[pug_index6];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var j = $$obj[pug_index6];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var i = $$obj[pug_index5];
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var j = $$obj[pug_index7];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var j = $$obj[pug_index7];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var m = $$obj[pug_index4];
;pug_debug_line = 93;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"srow\"\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell idx\"\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = m + ( k - 1 ) * 6) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 95;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 97;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var i = $$obj[pug_index8];
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
        var j = $$obj[pug_index9];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index9 in $$obj) {
      $$l++;
      var j = $$obj[pug_index9];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var i = $$obj[pug_index8];
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index10 = 0, $$l = $$obj.length; pug_index10 < $$l; pug_index10++) {
        var j = $$obj[pug_index10];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index10 in $$obj) {
      $$l++;
      var j = $$obj[pug_index10];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var k = $$obj[pug_index3];
;pug_debug_line = 92;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5,6]
;(function(){
  var $$obj = [1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index11 = 0, $$l = $$obj.length; pug_index11 < $$l; pug_index11++) {
        var m = $$obj[pug_index11];
;pug_debug_line = 93;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"srow\"\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell idx\"\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = m + ( k - 1 ) * 6) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 95;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 97;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index12 = 0, $$l = $$obj.length; pug_index12 < $$l; pug_index12++) {
        var i = $$obj[pug_index12];
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index13 = 0, $$l = $$obj.length; pug_index13 < $$l; pug_index13++) {
        var j = $$obj[pug_index13];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index13 in $$obj) {
      $$l++;
      var j = $$obj[pug_index13];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index12 in $$obj) {
      $$l++;
      var i = $$obj[pug_index12];
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index14 = 0, $$l = $$obj.length; pug_index14 < $$l; pug_index14++) {
        var j = $$obj[pug_index14];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index14 in $$obj) {
      $$l++;
      var j = $$obj[pug_index14];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index11 in $$obj) {
      $$l++;
      var m = $$obj[pug_index11];
;pug_debug_line = 93;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"srow\"\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell idx\"\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = m + ( k - 1 ) * 6) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 95;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 97;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index15 = 0, $$l = $$obj.length; pug_index15 < $$l; pug_index15++) {
        var i = $$obj[pug_index15];
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index16 = 0, $$l = $$obj.length; pug_index16 < $$l; pug_index16++) {
        var j = $$obj[pug_index16];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index16 in $$obj) {
      $$l++;
      var j = $$obj[pug_index16];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index15 in $$obj) {
      $$l++;
      var i = $$obj[pug_index15];
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index17 = 0, $$l = $$obj.length; pug_index17 < $$l; pug_index17++) {
        var j = $$obj[pug_index17];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index17 in $$obj) {
      $$l++;
      var j = $$obj[pug_index17];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/proxise/main/index.min.js");
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/@plotdb/json0/main/json0.min.js");
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/bootstrap.native/main/dist/bootstrap-native.min.js");
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/@loadingio/ldquery/main/index.min.js");
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/@loadingio/debounce.js/main/index.min.js");
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/ldcover/main/index.min.js");
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/ldview/main/index.min.js");
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/@plotdb/datadom/main/index.min.js");
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/@plotdb/csscope/main/index.min.js");
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/@plotdb/rescope/main/index.min.js");
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/dompurify/main/dist/purify.min.js");
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 102;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cscript type=\"module\"\u003E";
;pug_debug_line = 102;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "(function(e){return e.apply({})})(function(){var a,c,f,o,l,i,s,d,r,u,p=this;a=ld$.find(\".sheet\",0);c=ld$.find(a,\".sel\",0);f=ld$.find(a,\".sel-main\",0);o=ld$.find(a,\".edit\",0);l=ld$.find(a,\".edit textarea\",0);this.sel={};i=function(e){var t,n,r;e==null&&(e={});t=e.node?s(e.node):{row:0,col:0};if(!t){throw new Error(\"node not found in sheet\")}n=t.row+(e.row||0);r=t.col+(e.col||0);n=ld$.find(a,\".srow\",n);r=ld$.find(n,\".scell\",r);return r};s=function(e){var t,n,r;if(!(t=ld$.parent(e,\".srow\",a))){return}n=Array.from(t.childNodes).filter(function(e){return e.classList.contains(\"scell\")}).indexOf(e);r=Array.from(t.parentNode.childNodes).filter(function(e){return e.classList.contains(\"srow\")}).indexOf(t);return{col:n,row:r}};document.body.addEventListener(\"keydown\",function(e){var t,n,r;t=e.keyCode;n=function(){switch(t){case 37:return{row:0,col:-1};case 38:return{row:-1,col:0};case 39:return{row:0,col:1};case 40:return{row:1,col:0};default:return null}}();if(!n){return}if(p.sel.node){d()}r=p.sel.start;n.node=r;if(!r){return}r=i(n);if(!r){return}p.sel.start=r;p.sel.end=r;u();e.stopPropagation();return e.preventDefault()});document.body.addEventListener(\"keypress\",function(e){if(p.sel.start&&!p.sel.node){return r(p.sel.start)}});l.addEventListener(\"keydown\",function(e){if(e.keyCode===13){if(!(e.altKey||e.metaKey)){return d()}return l.setAttribute(\"rows\",2)}});l.addEventListener(\"mousedown\",function(e){return e.stopPropagation()});d=function(){if(!p.sel.node){return}p.sel.node.textContent=l.value||\"\";o.style.display=\"none\";f.style.display=\"none\";c.style.display=\"none\";return p.sel.node=null};r=function(e){var t,n,r;p.sel.node=e;console.log(s(e));t=e.getBoundingClientRect();n=a.getBoundingClientRect();r=o.style;r.left=t.x-n.x+a.scrollLeft-2+\"px\";r.top=t.y-n.y+a.scrollTop-2+\"px\";r.width=t.width+1+\"px\";r.height=t.height+1+\"px\";r.display=\"block\";l.value=e.textContent||\"\";return l.focus()};a.addEventListener(\"dblclick\",function(e){var t,n;t=e.target;if(!(n=ld$.parent(t,\".scell\",a))){return}return r(n)});a.addEventListener(\"mousedown\",function(e){var t,n;d();t=e.target;if(!(n=ld$.parent(t,\".scell\",a))){return}p.sel.start=n;p.sel.end=n;return u()});a.addEventListener(\"mousemove\",function(e){var t,n;if(!e.buttons){return}t=e.target;if(!(n=ld$.parent(t,\".scell\",a))){return}p.sel.end=n;return u()});return u=function(){var e,t,n,r,o,l,i,s,d,u;e=p.sel.start.getBoundingClientRect();t=p.sel.end.getBoundingClientRect();n=a.getBoundingClientRect();r=Math.min(e.x,t.x)-n.x+a.scrollLeft-2;o=Math.min(e.y,t.y)-n.y+a.scrollTop-2;l=Math.max(e.x+e.width,t.x+t.width)-n.x+a.scrollLeft-2;i=Math.max(e.y+t.height,t.y+t.height)-n.y+a.scrollTop-2;s=l-r+1;d=i-o+1;u=c.style;u.left=r+\"px\";u.top=o+\"px\";u.width=s+\"px\";u.height=d+\"px\";u.display=\"block\";return u=f.style,u.left=e.x-n.x+a.scrollLeft-2+\"px\",u.top=e.y-n.y+a.scrollTop-2+\"px\",u.width=e.width+1+\"px\",u.height=e.height+1+\"px\",u.display=\"block\",u}});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
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
        typeof c !== 'undefined' ? c : undefined, "cols" in locals_for_with ?
        locals_for_with.cols :
        typeof cols !== 'undefined' ? cols : undefined, "cssLoader" in locals_for_with ?
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
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 