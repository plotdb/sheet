 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (Array, JSON, b64img, blockLoader, c, cssLoader, decache, defer, escape, libLoader, scriptLoader, url, version) {
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
  zh: "????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";







;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fnode_modules\u002F@loadingio\u002Fbootstrap.ext\u002Findex.pug";













;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
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
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_mixins["css"]("assets/lib/@plotdb/sheet/dev/index.min.css");
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "html,body{width:100%;height:100%;background:#fff;margin:0;padding:0}.sheet{position:relative;width:100%;height:100%;overflow:hidden}.sheet .inner{z-index:1;display:grid;width:100%;height:100%;overflow:hidden}.sheet .cell{position:relative;user-select:none;border-width:0 1px 1px 0;border-style:solid;border-color:#ddd;padding:1px 3px;min-width:48px;line-height:26px;box-sizing:border-box;white-space:pre}.sheet .cell.idx{z-index:100;background:#f1f2f3;color:#919293;font-size:.85em;text-align:center;user-select:none}.sheet .range{z-index:10;border:1px solid #27f;user-select:none;pointer-events:none;opacity:0;display:none;top:0;left:0;position:absolute}.sheet .caret{z-index:11;border:2px solid #27f;user-select:none;pointer-events:none;opacity:0;display:none;top:0;left:0;position:absolute}.sheet .edit{z-index:21;border:2px solid #27f;opacity:0;display:none;top:0;left:0;position:absolute}.sheet .edit textarea{display:block;border:0;outline:0}.sheet .layout{display:inline-block;top:0;left:0;position:absolute;z-index:0;opacity:0;pointer-events:none;user-select:none;white-space:pre}.sheet .show{opacity:1 !important;display:block}\u003C\u002Fstyle\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"p-4\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mx-auto rwd w-640\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"aspect-ratio ratio-1by1\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"shadow-sm border border-secondary rounded\" id=\"root\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
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
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_mixins["script"]("https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.1/papaparse.min.js");
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "\u003Cscript type=\"module\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "var parseCsv,numToIdx,sheet;parseCsv=function(t){return Papa.parse(t).data};numToIdx=function(t){var e,i;if(t\u003C0){return\"\"}e=\"\";i=t%26;e=\"ABCDEFGHIJKLMNOPQRSTUVWXYZ\".charAt(i)+e;t=(t-i)\u002F26;while(t\u003E0){i=t%26;e=\" ABCDEFGHIJKLMNOPQRSTUVWXYZ\".charAt(i)+e;t=(t-i)\u002F26}return e};sheet=function(t){var e=this;t==null&&(t={});this.root=typeof t.root===\"string\"?document.querySelector(t.root):t.root;this.data=t.data||[];this.col=t.col||100;this.row=t.row||100;this.dim={col:(t.dim||(t.dim={})).col||30,row:(t.dim||(t.dim={})).row||30};this.fix={col:1,row:1};this.pos={col:0,row:0};this.scrollPos={x:0,y:0};this.sel={};this.les={};this.editing={};this.dom=Object.fromEntries([\"sheet\",\"inner\",\"caret\",\"range\",\"edit\",\"layout\"].map(function(t){var e,i;e=i=document.createElement(\"div\");e.classList.add(t);return[t,i]}));this.dom.textarea=document.createElement(\"textarea\");this.root.appendChild(this.dom.sheet);[\"inner\",\"caret\",\"range\",\"edit\",\"layout\"].map(function(t){return e.dom.sheet.appendChild(e.dom[t])});this.dom.edit.appendChild(this.dom.textarea);this._init();return this};sheet.prototype=import$(Object.create(Object.prototype),{_init:function(){var t,e,i,o,n,r,s,x=this;for(t=0,e=this.dim.row;t\u003Ce;++t){i=t;for(o=0,n=this.dim.col;o\u003Cn;++o){r=o;this.addCell(r,i)}}this.regrid();this.dom.textarea.addEventListener(\"mousedown\",function(t){return t.stopPropagation()});s=this.dom.sheet;s.addEventListener(\"mousedown\",function(t){var e,i;x.edited();if(!(e=ld$.parent(t.target,\".cell\",s))){return}x.les.start=x.les.end={row:(i=x.index(e)).row,col:i.col};x.les.node=e;return x.renderSelection()});s.addEventListener(\"mousemove\",function(t){var e,i;if(x.editing.on||!(t.buttons&&(e=ld$.parent(t.target,\".cell\",s)))){return}x.les.end={row:(i=x.index(e)).row,col:i.col};return x.renderSelection()});s.addEventListener(\"dblclick\",function(t){var e;if(!(e=ld$.parent(t.target,\".cell\",s))){return}return x.edit({node:e,quick:false})});document.body.addEventListener(\"paste\",function(t){var e,i,o,n,r,s,d,h,l=[];if(!x.les.start){return}e=t.clipboardData.getData(\"text\");e=parseCsv(e);for(i=0,o=e.length;i\u003Co;++i){n=i;r=[];for(s=0,d=e[n].length;s\u003Cd;++s){h=s;r.push(x.set({row:n+x.les.start.row,col:h+x.les.start.col,data:e[n][h]}))}l.push(r)}return l});document.body.addEventListener(\"keydown\",function(t){var e,i,o,n,r,s,d,h,l,a,c,u,m,f,p;e=t.keyCode;if(e===8){if(!x.les.node){return}i=[x.les.start,x.les.end],o=i[0],n=i[1];i=o.col\u003Cn.col?[o.col,n.col]:[n.col,o.col],r=i[0],s=i[1];i=o.row\u003Cn.row?[o.row,n.row]:[n.row,o.row],d=i[0],h=i[1];for(l=d;l\u003C=h;++l){a=l;for(c=r;c\u003C=s;++c){u=c;((i=x.data)[a]||(i[a]=[]))[u]=\"\";i=[u-x.pos.col+1,a-x.pos.row+1],m=i[0],f=i[1];x._content({x:m,y:f})}}}p=function(){switch(e){case 37:return{y:0,x:-1};case 38:return{y:-1,x:0};case 39:return{y:0,x:1};case 40:return{y:1,x:0};default:return null}}();if(!p){return}if(x.editing.on&&!x.editing.quick){return}x.move(p);t.stopPropagation();return t.preventDefault()});document.body.addEventListener(\"keypress\",function(t){if(x.les.node&&!x.editing.on){return x.edit({node:x.les.node,quick:t.keyCode===13?false:true})}});this.dom.textarea.addEventListener(\"keydown\",function(t){var e,i,o;if(t.keyCode===27||t.keyCode===13&&!(t.altKey||t.metaKey)){x.move({row:1,col:0});t.stopPropagation();t.preventDefault();return}if(t.keyCode===13&&(t.altKey||t.metaKey)){x.dom.textarea.value+=\"\\n\";x.dom.layout.textContent=x.dom.textarea.value+\" \";e=x.dom.layout.getBoundingClientRect();i=x.editing.node.getBoundingClientRect();return o=x.dom.textarea.style,o.width=Math.max(e.width,i.width+1)+\"px\",o.height=Math.max(e.height,i.height+1)+\"px\",o}});return document.body.addEventListener(\"wheel\",function(t){var e,i,o,n,r,s;e=x.scrollPos;i=[t.deltaX,t.deltaY],o=i[0],n=i[1];i=Math.abs(o)\u003EMath.abs(n)?[o,0]:[0,n],o=i[0],n=i[1];i=[e.x,e.y],r=i[0],s=i[1];e.x+=o\u002F30;e.y+=n\u002F30;o=Math.round(e.x)-Math.round(r);n=Math.round(e.y)-Math.round(s);if(n\u003E0){x._md(n)}else if(n\u003C0){x._mu(n)}else if(o\u003E0){x._mr(o)}else if(o\u003C0){x._ml(o)}x.renderSelection();return t.preventDefault()},{passive:false})},regrid:function(){return this.dom.inner.style.gridTemplateColumns=\"repeat(\"+this.dim.col+\", max-content)\"},addCell:function(t,e){var i;i=document.createElement(\"div\");i.classList.add.apply(i.classList,!(t&&e)?[\"cell\",\"idx\"]:[\"cell\"]);i.textContent=!(t||e)?\"\":!t?e:!e?numToIdx(t-1):\"\";return this.dom.inner.insertBefore(i,this.dom.inner.childNodes[e*this.dim.col+t])},set:function(t){var e,i,o,n;e=t.row,i=t.col,o=t.data;((n=this.data)[e]||(n[e]=[]))[i]=o;return this._content({y:e-this.pos.row+1,x:i-this.pos.col+1})},_content:function(t){var e,i,o,n,r,s,d;e=t.x,i=t.y,o=t.n;if(!o&&!(o=this.dom.inner.childNodes[e+i*this.dim.col])){return}n=!(e||i)?[\"\",\"cell idx\"]:!e?[i+this.pos.row,\"cell idx\"]:!i?[numToIdx(e-1+this.pos.col),\"cell idx\"]:[((n=this.data)[r=this.pos.row+i-1]||(n[r]=[]))[this.pos.col+e-1]||\"\",\"cell\"],s=n[0],d=n[1];return o.textContent=s,o.className=d,o},_md:function(t){var e,i,o,n,r,s,d,h,l,a;t==null&&(t=1);e=this.dom.inner;t=Math.round(Math.abs(t));i=(o=t-(this.dim.row-this.fix.row))\u003E0?o:0;for(n=i;n\u003Ct;++n){r=n;for(s=0,d=this.dim.col;s\u003Cd;++s){h=s;l=this.dim.col*this.fix.row;if(!e.childNodes[l]){break}e.removeChild(e.childNodes[l])}}for(n=i;n\u003Ct;++n){r=n;for(s=0,d=this.dim.col;s\u003Cd;++s){h=s;a=document.createElement(\"div\");this._content({x:h,y:this.dim.row+r,n:a});e.appendChild(a)}}return this.pos.row+=t},_mu:function(t){var e,i,o,n,r,s,d,h,l,a,c=[];t==null&&(t=1);e=this.dom.inner;if(this.pos.row\u003C=0){return}t=Math.round(Math.abs(t));if(t\u003E=this.pos.row){t=this.pos.row}i=(o=t-(this.dim.row-this.fix.row))\u003E0?o:0;for(n=i;n\u003Ct;++n){r=n;for(s=0,d=this.dim.col;s\u003Cd;++s){h=s;if(!e.childNodes.length){break}e.removeChild(e.childNodes[e.childNodes.length-1])}}this.pos.row-=t;for(n=i;n\u003Ct;++n){r=n;l=[];for(s=0,d=this.dim.col;s\u003Cd;++s){h=s;a=document.createElement(\"div\");this._content({x:h,y:r+1,n:a});l.push(e.insertBefore(a,e.childNodes[h+(r-i)*this.dim.col+this.dim.col*this.fix.row]))}c.push(l)}return c},_mr:function(t){var e,i,o,n,r,s,d,h,l;t==null&&(t=1);e=this.dom.inner;t=Math.round(Math.abs(t));i=(o=t-(this.dim.col-this.fix.col))\u003E0?o:0;for(n=i;n\u003Ct;++n){r=n;for(s=0,d=this.dim.row;s\u003Cd;++s){h=s;e.removeChild(e.childNodes[h*this.dim.col+this.fix.col]);l=document.createElement(\"div\");this._content({x:this.dim.col+r,y:h,n:l});e.insertBefore(l,e.childNodes[(h+1)*this.dim.col-1])}}this.pos.col+=t;return this.regrid()},_ml:function(t){var e,i,o,n,r,s,d,h,l;t==null&&(t=1);e=this.dom.inner;t=Math.round(Math.abs(t));if(t\u003E=this.pos.col){t=this.pos.col}if(this.pos.col\u003C=0||t\u003C=0){return}i=(o=t-(this.dim.col-this.fix.col))\u003E0?o:0;this.pos.col-=t;for(n=i;n\u003Ct;++n){r=n;for(s=0,d=this.dim.row;s\u003Cd;++s){h=s;e.removeChild(e.childNodes[(h+1)*this.dim.col-1]);l=document.createElement(\"div\");this._content({x:r+1,y:h,n:l});e.insertBefore(l,e.childNodes[h*this.dim.col+this.fix.col+r-i])}}return this.regrid()},move:function(t){var e,i,o,n,r;t==null&&(t={});if(this.editing.on){this.edited()}if(!(t.node=this.les.node)){return}if(!(e=this.cell(t))){return}i=this.index(e);o=e.getBoundingClientRect();n=this.dom.sheet.getBoundingClientRect();if(o.x+o.width\u003En.x+n.width){this._mr(1)}if(o.y+o.height\u003En.y+n.height){this._md(1)}if(i.x===0){if(this.pos.col===0){return}else{this._ml(1)}}if(i.y===0){if(this.pos.row===0){return}else{this._mu(1)}}if(!(e=this.cell(t))){return}this.les.node=e;this.les.start=this.les.end={col:(r=this.index(e)).col,row:r.row};return this.renderSelection()},edit:function(t){var e,i,o,n,r,s,d,h,l;e=t.node,i=t.quick;o=this.editing;o.node=e;o.quick=i;o.on=true;this.dom.layout.textContent=e.textContent;n=this.dom.layout.getBoundingClientRect();r=e.getBoundingClientRect();s=this.dom.sheet.getBoundingClientRect();o=[this.dom.sheet.scrollLeft,this.dom.sheet.scrollTop],d=o[0],h=o[1];o=this.dom.edit.style;o.left=r.x-s.x+d-2+\"px\";o.top=r.y-s.y+h-2+\"px\";o.width=\"fit-content\";o.height=\"fit-content\";this.dom.edit.classList.toggle(\"show\",true);o=this.dom.textarea.style;o.width=Math.max(n.width,r.width+1)+\"px\";o.height=Math.max(n.height,r.height+1)+\"px\";this.dom.textarea.value=l=i?\"\":e.textContent||\"\";this.dom.textarea.focus();return this.dom.textarea.setSelectionRange(l.length,l.length)},edited:function(){var t,e,i,o,n=this;if(!this.editing.on){return}this.editing.node.textContent=t=this.dom.textarea.value||\"\";e=this.index(this.editing.node);((i=this.data)[o=this.pos.row+e.y-1]||(i[o]=[]))[this.pos.col+e.x-1]=t;[\"edit\",\"caret\",\"range\"].map(function(t){return n.dom[t].classList.toggle(\"show\",false)});return i=this.editing,i.node=null,i.on=false,i},index:function(t){var e,i,o,n,r,s;e=Array.from(this.dom.inner.childNodes).indexOf(t);if(e\u003C0){return null}i=e%this.dim.col;o=(e-i)\u002Fthis.dim.col;n=[i+this.pos.col-1,o+this.pos.row-1],r=n[0],s=n[1];return{x:i,y:o,col:r,row:s}},cell:function(t){var e,i,o;t==null&&(t={});e=t.node?this.index(t.node):{y:0,x:0};if(!e){throw new Error(\"node not found in sheet\")}i=e.y+(t.y||0);o=e.x+(t.x||0);return this.dom.inner.childNodes[i*this.dim.col+o]},renderSelection2:function(){var t;t=this.dom.range.style;t.left=x1+\"px\";t.top=y1+\"px\";t.width=w+\"px\";t.height=h+\"px\";t=this.dom.caret.style;t.left=sbox.x-rbox.x+sx-2+\"px\";t.top=sbox.y-rbox.y+sy-2+\"px\";t.width=sbox.width+1+\"px\";t.height=sbox.height+1+\"px\";this.dom.range.classList.toggle(\"show\",true);return this.dom.caret.classList.toggle(\"show\",true)},renderSelection:function(){var t,e,i,o,n,r,s,d,h,l,a,c,u,m,f,p,x=this;t=this.les.start.col-this.pos.col;e=this.les.start.row-this.pos.row;i=this.les.end.col-this.pos.col;o=this.les.end.row-this.pos.row;n=this.dom.inner.getBoundingClientRect();r=[t,i].map(function(t){if(t\u003C0){return{x:n.x-10,width:0}}else if(t\u003Ex.dim.col-1){return{x:n.x+n.width+10,width:0}}else{return x.dom.inner.childNodes[t+1].getBoundingClientRect()}});s=[e,o].map(function(t){if(t\u003C0){return{y:n.y-10,height:0}}else if(t\u003Ex.dim.row-1){return{y:n.y+n.height+10,height:0}}else{return x.dom.inner.childNodes[x.dim.col*(t+1)].getBoundingClientRect()}});d=Math.min.apply(Math,r.map(function(t){return t.x-n.x}));h=Math.max.apply(Math,r.map(function(t){return t.x-n.x+t.width}));l=Math.min.apply(Math,s.map(function(t){return t.y-n.y}));a=Math.max.apply(Math,s.map(function(t){return t.y-n.y+t.height}));c=h-d+1;u=a-l+1;m=!(t\u003E=0&&e\u003E=0&&t\u003Cthis.dim.col&&e\u003Cthis.dim.row)?null:this.dom.inner.childNodes[t+1+(e+1)*this.dim.col];f=!m?null:m.getBoundingClientRect();p=this.dom.range.style;p.left=d+\"px\";p.top=l+\"px\";p.width=c+\"px\";p.height=u+\"px\";this.dom.range.classList.toggle(\"show\",true);if(f){p=this.dom.caret.style;p.left=f.x-n.x-1+\"px\";p.top=f.y-n.y-1+\"px\";p.width=f.width+2+\"px\";p.height=f.height+2+\"px\"}return this.dom.caret.classList.toggle(\"show\",!!f)}});if(typeof module!=\"undefined\"&&module!==null){module.exports=sheet}else if(typeof window!=\"undefined\"&&window!==null){window.sheet=sheet}function import$(t,e){var i={}.hasOwnProperty;for(var o in e)if(i.call(e,o))t[o]=e[o];return t}\u003C\u002Fscript\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "\u003Cscript type=\"module\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "var s;s=new sheet({root:\"#root\"});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
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
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 