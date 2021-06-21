 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (JSON, b64img, blockLoader, cssLoader, decache, escape, scriptLoader, version) {
      ;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
scriptLoader.config = (config ? config : {});
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if (!scriptLoader.url[url]) {
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
scriptLoader.url[url] = true;
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
cssLoader.config = (config ? config : {});
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if (!cssLoader.url[url]) {
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
cssLoader.url[url] = true;
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";










;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";









;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var b64img = {};
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAQAICRAEAOw=="
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";







;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fbootstrap.ldui\u002Fmain\u002Findex.pug";













;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/bootstrap/main/css/bootstrap.min.css");
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/bootstrap.ldui/main/bootstrap.ldui.min.css");
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/ldiconfont/main/ldif.min.css");
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("assets/lib/ldcover/main/ldcv.min.css");
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("css/index.css");
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Fgrid.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Fgrid.pug";
pug_html = pug_html + "html,\nbody {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n}\n.sheet {\n  position: relative;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #999;\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n}\n.sheet .inner {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  width: fit-content;\n  height: fit-content;\n}\n.sheet .cell {\n  user-select: none;\n  border-width: 0 1px 1px 0;\n  border-style: solid;\n  border-color: #ddd;\n\u002F* use em may lead to nondeterminstic behavior in border rendering, due to rounding *\u002F\n  padding: 1px;\n  min-width: 48px;\n  min-height: 26px;\n  line-height: 26px;\n  flex: 0 0 auto;\n  box-sizing: border-box;\n  white-space: pre;\n  overflow: hidden;\n}\n.sheet .cell.idx {\n  position: sticky;\n  background: #f1f2f3;\n  color: #919293;\n  font-size: 0.85em;\n  text-align: center;\n  user-select: none;\n}\n.sheet .cell.idx.x {\n  z-index: 100;\n  left: 0;\n}\n.sheet .cell.idx.y {\n  z-index: 101;\n  top: 0;\n}\n.sheet .cell.idx.xy {\n  z-index: 102;\n  top: 0;\n  left: 0;\n}\n.sheet .cell.debug {\n  background: #f00;\n}\n.sheet .range {\n  z-index: 10;\n  position: absolute;\n  border: 1px solid #27f;\n  user-select: none;\n  opacity: 0;\n  pointer-events: none;\n}\n.sheet .caret {\n  z-index: 11;\n  position: absolute;\n  border: 2px solid #27f;\n  user-select: none;\n  opacity: 0;\n  pointer-events: none;\n}\n.sheet .edit {\n  z-index: 21;\n  border: 2px solid #27f;\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n.sheet .edit textarea {\n  display: block \u002F* eliminate small gap between .edit and textarea *\u002F;\n  border: none;\n  outline: none;\n}\n.sheet .layout {\n  display: inline-block;\n  position: absolute;\n  z-index: 0;\n  opacity: 1;\n  pointer-events: none;\n  user-select: none;\n  white-space: pre;\n  padding-bottom: 1.5em;\n}\n.sheet .show {\n  opacity: 1 !important;\n}\n\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Fgrid.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-1024 rwd mx-auto my-4\"\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Fgrid.pug";
pug_html = pug_html + "\u003Cdiv class=\"aspect-ratio ratio-2by1\"\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Fgrid.pug";
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/proxise/main/proxise.min.js");
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/@plotdb/json0/main/json0.min.js");
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/bootstrap.native/main/bootstrap-native.min.js");
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/bootstrap.ldui/main/bootstrap.ldui.min.js");
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/@loadingio/ldquery/main/ldq.min.js");
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/@loadingio/debounce.js/main/debounce.min.js");
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/ldcover/main/ldcv.min.js");
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/ldview/main/index.min.js");
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/@plotdb/datadom/main/datadom.min.js");
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/@plotdb/csscope/main/csscope.min.js");
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/@plotdb/rescope/main/rescope.min.js");
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("assets/lib/dompurify/main/purify.min.js");
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 95;pug_debug_filename = "src\u002Fpug\u002Fgrid.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 95;pug_debug_filename = "src\u002Fpug\u002Fgrid.pug";
pug_html = pug_html + "(function(it){\n  return it.apply({});\n})(function(){\n  var numToIdx, sheet, s;\n  numToIdx = function(v){\n    var ret, u;\n    if (v \u003C 0) {\n      return \"\";\n    }\n    ret = \"\";\n    do {\n      u = v % 26;\n      ret = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\".charAt(u) + ret;\n      v = (v - u) \u002F 26;\n    } while (v \u003E 0);\n    return ret;\n  };\n  sheet = function(opt){\n    var this$ = this;\n    opt == null && (opt = {});\n    this.root = typeof opt.root === 'string'\n      ? document.querySelector(opt.root)\n      : opt.root;\n    this.col = opt.col || 100;\n    this.row = opt.row || 100;\n    this.sel = {};\n    this.editing = {};\n    this.dom = Object.fromEntries(['sheet', 'inner', 'caret', 'range', 'edit', 'layout'].map(function(it){\n      var x$, n;\n      x$ = n = document.createElement('div');\n      x$.classList.add(it);\n      return [it, n];\n    }));\n    this.dom.textarea = document.createElement('textarea');\n    this.root.appendChild(this.dom.sheet);\n    ['inner', 'caret', 'range', 'edit', 'layout'].map(function(it){\n      return this$.dom.sheet.appendChild(this$.dom[it]);\n    });\n    this.dom.edit.appendChild(this.dom.textarea);\n    this._init();\n    return this;\n  };\n  sheet.prototype = import$(Object.create(Object.prototype), {\n    _init: function(){\n      var dom, i$, to$, r, j$, to1$, c, this$ = this;\n      this.regrid();\n      dom = this.dom.sheet;\n      for (i$ = 0, to$ = this.row; i$ \u003C to$; ++i$) {\n        r = i$;\n        for (j$ = 0, to1$ = this.col; j$ \u003C to1$; ++j$) {\n          c = j$;\n          this.addCell({\n            r: r,\n            c: c\n          });\n        }\n      }\n      dom.addEventListener('mousedown', function(e){\n        var p;\n        this$.edited();\n        if (!(p = ld$.parent(e.target, '.cell', dom))) {\n          return;\n        }\n        this$.sel.start = this$.sel.end = p;\n        return this$.renderSelection();\n      });\n      dom.addEventListener('mousemove', function(e){\n        var p;\n        if (this$.editing.on || !(e.buttons && (p = ld$.parent(e.target, '.cell', dom)))) {\n          return;\n        }\n        this$.sel.end = p;\n        return this$.renderSelection();\n      });\n      dom.addEventListener('dblclick', function(e){\n        var p;\n        if (!(p = ld$.parent(e.target, '.cell', dom))) {\n          return;\n        }\n        return this$.edit({\n          node: p,\n          quick: false\n        });\n      });\n      document.body.addEventListener('keydown', function(e){\n        var code, p1, p2, r1, r2, c1, c2, i$, r, j$, c, n, opt;\n        code = e.keyCode;\n        if (code === 8) {\n          if (!this$.sel.start) {\n            return;\n          }\n          p1 = this$.index(this$.sel.start);\n          p2 = this$.index(this$.sel.end);\n          r1 = Math.min(p1.row, p2.row);\n          r2 = Math.max(p1.row, p2.row);\n          c1 = Math.min(p1.col, p2.col);\n          c2 = Math.max(p1.col, p2.col);\n          for (i$ = r1; i$ \u003C= r2; ++i$) {\n            r = i$;\n            for (j$ = c1; j$ \u003C= c2; ++j$) {\n              c = j$;\n              n = this$.cell({\n                row: r,\n                col: c\n              });\n              if (n) {\n                n.textContent = \"\";\n              }\n            }\n          }\n          this$.renderSelection();\n        }\n        opt = (function(){\n          switch (code) {\n          case 37:\n            return {\n              row: 0,\n              col: -1\n            };\n          case 38:\n            return {\n              row: -1,\n              col: 0\n            };\n          case 39:\n            return {\n              row: 0,\n              col: 1\n            };\n          case 40:\n            return {\n              row: 1,\n              col: 0\n            };\n          default:\n            return null;\n          }\n        }());\n        if (!opt) {\n          return;\n        }\n        if (this$.editing.on && !this$.editing.quick) {\n          return;\n        }\n        this$.move(opt);\n        e.stopPropagation();\n        return e.preventDefault();\n      });\n      document.body.addEventListener('keypress', function(e){\n        if (this$.sel.start && !this$.editing.on) {\n          return this$.edit({\n            node: this$.sel.start,\n            quick: true\n          });\n        }\n      });\n      this.dom.textarea.addEventListener('keydown', function(e){\n        var lbox, box, ref$;\n        if (e.keyCode === 27 || (e.keyCode === 13 && !(e.altKey || e.metaKey))) {\n          this$.move({\n            row: 1,\n            col: 0\n          });\n          e.stopPropagation();\n          e.preventDefault();\n          return;\n        }\n        if (e.keyCode === 13 && (e.altKey || e.metaKey)) {\n          this$.dom.textarea.value += '\\n';\n          this$.dom.layout.textContent = this$.dom.textarea.value;\n          lbox = this$.dom.layout.getBoundingClientRect();\n          box = this$.editing.node.getBoundingClientRect();\n          return ref$ = this$.dom.textarea.style, ref$.width = Math.max(lbox.width, box.width + 1) + \"px\", ref$.height = Math.max(lbox.height, box.height + 1) + \"px\", ref$;\n        }\n      });\n      return this.dom.textarea.addEventListener('mousedown', function(e){\n        return e.stopPropagation();\n      });\n    },\n    move: function(opt){\n      var node;\n      opt == null && (opt = {});\n      if (this.editing.on) {\n        this.edited();\n      }\n      node = this.sel.start;\n      opt.node = node;\n      if (!node) {\n        return;\n      }\n      node = this.cell(opt);\n      if (!node) {\n        return;\n      }\n      this.sel.start = node;\n      this.sel.end = node;\n      return this.renderSelection();\n    },\n    edit: function(arg$){\n      var node, quick, ref$, lbox, box, rbox, sx, sy;\n      node = arg$.node, quick = arg$.quick;\n      ref$ = this.editing;\n      ref$.node = node;\n      ref$.quick = quick;\n      ref$.on = true;\n      this.dom.layout.textContent = node.textContent;\n      lbox = this.dom.layout.getBoundingClientRect();\n      box = node.getBoundingClientRect();\n      rbox = this.dom.sheet.getBoundingClientRect();\n      ref$ = [this.dom.sheet.scrollLeft, this.dom.sheet.scrollTop], sx = ref$[0], sy = ref$[1];\n      ref$ = this.dom.edit.style;\n      ref$.left = (box.x - rbox.x + sx - 2) + \"px\";\n      ref$.top = (box.y - rbox.y + sy - 2) + \"px\";\n      ref$.width = \"fit-content\";\n      ref$.height = \"fit-content\";\n      this.dom.edit.classList.toggle('show', true);\n      ref$ = this.dom.textarea.style;\n      ref$.width = Math.max(lbox.width, box.width + 1) + \"px\";\n      ref$.height = Math.max(lbox.height, box.height + 1) + \"px\";\n      this.dom.textarea.value = quick\n        ? ''\n        : node.textContent || '';\n      return this.dom.textarea.focus();\n    },\n    edited: function(){\n      var ref$, this$ = this;\n      if (!this.editing.on) {\n        return;\n      }\n      this.editing.node.textContent = this.dom.textarea.value || '';\n      ['edit', 'caret', 'range'].map(function(it){\n        return this$.dom[it].classList.toggle('show', false);\n      });\n      return ref$ = this.editing, ref$.node = null, ref$.on = false, ref$;\n    },\n    regrid: function(){\n      return this.dom.inner.style.gridTemplateColumns = \"repeat(\" + this.col + \", max-content)\";\n    },\n    addCell: function(arg$){\n      var r, c, div;\n      r = arg$.r, c = arg$.c;\n      div = document.createElement('div');\n      div.classList.add.apply(div.classList, !(c || r)\n        ? ['cell', 'idx', 'xy']\n        : !c\n          ? ['cell', 'idx', 'x']\n          : !r\n            ? ['cell', 'idx', 'y']\n            : ['cell']);\n      div.textContent = !(c || r)\n        ? ''\n        : !c\n          ? r\n          : !r ? numToIdx(c - 1) : '';\n      return this.dom.inner.insertBefore(div, this.dom.inner.childNodes[r * this.col + c]);\n    },\n    insertCol: function(c){\n      var i$, r;\n      for (i$ = this.row - 1; i$ \u003E= 0; --i$) {\n        r = i$;\n        this.addCell({\n          r: r,\n          c: c\n        });\n      }\n      this.col = this.col + 1;\n      this.regrid();\n      return this.reidx();\n    },\n    insertRow: function(r){\n      var i$, to$, c;\n      for (i$ = 0, to$ = this.col; i$ \u003C to$; ++i$) {\n        c = i$;\n        this.addCell({\n          r: r,\n          c: c\n        });\n      }\n      this.row = this.row + 1;\n      return this.reidx();\n    },\n    deleteCol: function(c){\n      var i$, r;\n      for (i$ = this.row - 1; i$ \u003E= 0; --i$) {\n        r = i$;\n        this.dom.inner.removeChild(this.dom.inner.childNodes[r * this.col + c]);\n      }\n      this.col = this.col - 1;\n      this.regrid();\n      return this.reidx();\n    },\n    deleteRow: function(r){\n      var i$, to$, c;\n      for (i$ = 0, to$ = this.col; i$ \u003C to$; ++i$) {\n        c = i$;\n        this.dom.inner.removeChild(this.dom.inner.childNodes[r * this.col]);\n      }\n      this.row = this.row - 1;\n      return this.reidx();\n    },\n    reidx: function(){\n      var i$, to$, r, c, results$ = [];\n      for (i$ = 0, to$ = this.row; i$ \u003C to$; ++i$) {\n        r = i$;\n        this.dom.inner.childNodes[r * this.col].textContent = r;\n      }\n      for (i$ = 0, to$ = this.col; i$ \u003C to$; ++i$) {\n        c = i$;\n        results$.push(this.dom.inner.childNodes[c].textContent = numToIdx(c - 1));\n      }\n      return results$;\n    },\n    setContent: function(arg$){\n      var row, col, content, node;\n      row = arg$.row, col = arg$.col, content = arg$.content;\n      node = this.dom.inner.childNodes[row * this.col + col];\n      return node.textContent = content;\n    },\n    index: function(node){\n      var idx, col, row;\n      idx = Array.from(this.dom.inner.childNodes).indexOf(node);\n      if (idx \u003C 0) {\n        return null;\n      }\n      col = idx % this.col;\n      row = (idx - col) \u002F this.col;\n      return {\n        row: row,\n        col: col\n      };\n    },\n    cell: function(opt){\n      var base, row, col;\n      opt == null && (opt = {});\n      base = opt.node\n        ? this.index(opt.node)\n        : {\n          row: 0,\n          col: 0\n        };\n      if (!base) {\n        throw new Error(\"node not found in sheet\");\n      }\n      row = base.row + (opt.row || 0);\n      col = base.col + (opt.col || 0);\n      return this.dom.inner.childNodes[row * this.col + col];\n    },\n    renderSelection: function(){\n      var sbox, ebox, rbox, sx, sy, x1, y1, x2, y2, w, h, ref$;\n      sbox = this.sel.start.getBoundingClientRect();\n      ebox = this.sel.end.getBoundingClientRect();\n      rbox = this.dom.sheet.getBoundingClientRect();\n      sx = this.dom.sheet.scrollLeft;\n      sy = this.dom.sheet.scrollTop;\n      x1 = Math.min(sbox.x, ebox.x) - rbox.x + sx - 2;\n      y1 = Math.min(sbox.y, ebox.y) - rbox.y + sy - 2;\n      x2 = Math.max(sbox.x + sbox.width, ebox.x + ebox.width) - rbox.x + sx - 2;\n      y2 = Math.max(sbox.y + ebox.height, ebox.y + ebox.height) - rbox.y + sy - 2;\n      w = x2 - x1 + 1;\n      h = y2 - y1 + 1;\n      ref$ = this.dom.range.style;\n      ref$.left = x1 + \"px\";\n      ref$.top = y1 + \"px\";\n      ref$.width = w + \"px\";\n      ref$.height = h + \"px\";\n      ref$ = this.dom.caret.style;\n      ref$.left = (sbox.x - rbox.x + sx - 2) + \"px\";\n      ref$.top = (sbox.y - rbox.y + sy - 2) + \"px\";\n      ref$.width = (sbox.width + 1) + \"px\";\n      ref$.height = (sbox.height + 1) + \"px\";\n      this.dom.range.classList.toggle('show', true);\n      return this.dom.caret.classList.toggle('show', true);\n    }\n  });\n  s = new sheet({\n    root: '.container'\n  });\n  s.insertCol(3);\n  s.insertRow(2);\n  s.deleteRow(2);\n  s.deleteCol(3);\n  return s.setContent({\n    row: 3,\n    col: 4,\n    content: \"this is a very long word.\\nhello world!\"\n  });\n});\nfunction import$(obj, src){\n  var own = {}.hasOwnProperty;\n  for (var key in src) if (own.call(src, key)) obj[key] = src[key];\n  return obj;\n}\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "JSON" in locals_for_with ?
        locals_for_with.JSON :
        typeof JSON !== 'undefined' ? JSON : undefined, "b64img" in locals_for_with ?
        locals_for_with.b64img :
        typeof b64img !== 'undefined' ? b64img : undefined, "blockLoader" in locals_for_with ?
        locals_for_with.blockLoader :
        typeof blockLoader !== 'undefined' ? blockLoader : undefined, "cssLoader" in locals_for_with ?
        locals_for_with.cssLoader :
        typeof cssLoader !== 'undefined' ? cssLoader : undefined, "decache" in locals_for_with ?
        locals_for_with.decache :
        typeof decache !== 'undefined' ? decache : undefined, "escape" in locals_for_with ?
        locals_for_with.escape :
        typeof escape !== 'undefined' ? escape : undefined, "scriptLoader" in locals_for_with ?
        locals_for_with.scriptLoader :
        typeof scriptLoader !== 'undefined' ? scriptLoader : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 