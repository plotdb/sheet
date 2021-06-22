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
pug_mixins["css"]("/assets/lib/bootstrap/main/css/bootstrap.min.css");
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("/assets/lib/bootstrap.ldui/main/bootstrap.ldui.min.css");
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("/assets/lib/ldiconfont/main/ldif.min.css");
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("/assets/lib/ldcover/main/ldcv.min.css");
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["css"]("/css/index.css");
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "html,\nbody {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  margin: 0;\n  padding: 0;\n}\n.sheet {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.sheet .inner {\n  position: absolute;\n  z-index: 1;\n  display: grid;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.sheet .cell {\n  position: relative;\n  user-select: none;\n  border-width: 0 1px 1px 0;\n  border-style: solid;\n  border-color: #ddd;\n\u002F* use em may lead to nondeterminstic behavior in border rendering, due to rounding *\u002F\n  padding: 1px;\n  min-width: 48px;\n  min-height: 26px;\n  line-height: 26px;\n  box-sizing: border-box;\n  white-space: pre;\n  overflow: hidden;\n}\n.sheet .cell.idx {\n  z-index: 100;\n  background: #f1f2f3;\n  color: #919293;\n  font-size: 0.85em;\n  text-align: center;\n  user-select: none;\n}\n.sheet .range {\n  z-index: 10;\n  border: 1px solid #27f;\n  user-select: none;\n  opacity: 0;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  position: absolute;\n}\n.sheet .caret {\n  z-index: 11;\n  border: 2px solid #27f;\n  user-select: none;\n  opacity: 0;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  position: absolute;\n}\n.sheet .edit {\n  z-index: 21;\n  border: 2px solid #27f;\n  opacity: 0;\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  position: absolute;\n}\n.sheet .edit textarea {\n  display: block \u002F* eliminate small gap between .edit and textarea *\u002F;\n  border: none;\n  outline: none;\n}\n.sheet .layout {\n  display: inline-block;\n  top: 0;\n  left: 0;\n  position: absolute;\n  z-index: 0;\n  opacity: 1;\n  pointer-events: none;\n  user-select: none;\n  white-space: pre;\n  padding-bottom: 1.5em;\n}\n.sheet .show {\n  opacity: 1 !important;\n}\n\u003C\u002Fstyle\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"p-4\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mx-auto rwd w-640\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"aspect-ratio ratio-1by1\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"shadow-sm border border-secondary rounded\" id=\"root\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/proxise/main/proxise.min.js");
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/@plotdb/json0/main/json0.min.js");
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/bootstrap.native/main/bootstrap-native.min.js");
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/bootstrap.ldui/main/bootstrap.ldui.min.js");
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/@loadingio/ldquery/main/ldq.min.js");
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/@loadingio/debounce.js/main/debounce.min.js");
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/ldcover/main/ldcv.min.js");
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/ldview/main/index.min.js");
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/@plotdb/datadom/main/datadom.min.js");
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/@plotdb/csscope/main/csscope.min.js");
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/@plotdb/rescope/main/rescope.min.js");
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_mixins["script"]("/assets/lib/dompurify/main/purify.min.js");
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Fdynocell\u002Findex.pug";
pug_html = pug_html + "var numToIdx, sheet, s;\nnumToIdx = function(v){\n  var ret, u;\n  if (v \u003C 0) {\n    return \"\";\n  }\n  ret = \"\";\n  u = v % 26;\n  ret = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\".charAt(u) + ret;\n  v = (v - u) \u002F 26;\n  while (v \u003E 0) {\n    u = v % 26;\n    ret = \" ABCDEFGHIJKLMNOPQRSTUVWXYZ\".charAt(u) + ret;\n    v = (v - u) \u002F 26;\n  }\n  return ret;\n};\nsheet = function(opt){\n  var this$ = this;\n  opt == null && (opt = {});\n  this.root = typeof opt.root === 'string'\n    ? document.querySelector(opt.root)\n    : opt.root;\n  this.data = opt.data || [];\n  this.col = opt.col || 100;\n  this.row = opt.row || 100;\n  this.dim = {\n    col: (opt.dim || (opt.dim = {})).col || 30,\n    row: (opt.dim || (opt.dim = {})).row || 30\n  };\n  this.fix = {\n    col: 1,\n    row: 1\n  };\n  this.pos = {\n    col: 0,\n    row: 0,\n    x: 0,\n    y: 0\n  };\n  this.sel = {};\n  this.editing = {};\n  this.dom = Object.fromEntries(['sheet', 'inner', 'caret', 'range', 'edit', 'layout'].map(function(it){\n    var x$, n;\n    x$ = n = document.createElement('div');\n    x$.classList.add(it);\n    return [it, n];\n  }));\n  this.dom.textarea = document.createElement('textarea');\n  this.root.appendChild(this.dom.sheet);\n  ['inner', 'caret', 'range', 'edit', 'layout'].map(function(it){\n    return this$.dom.sheet.appendChild(this$.dom[it]);\n  });\n  this.dom.edit.appendChild(this.dom.textarea);\n  this._init();\n  return this;\n};\nsheet.prototype = import$(Object.create(Object.prototype), {\n  _init: function(){\n    var i$, to$, r, j$, to1$, c, this$ = this;\n    for (i$ = 0, to$ = this.dim.row; i$ \u003C to$; ++i$) {\n      r = i$;\n      for (j$ = 0, to1$ = this.dim.col; j$ \u003C to1$; ++j$) {\n        c = j$;\n        this.addCell(c, r);\n      }\n    }\n    this.regrid();\n    document.body.addEventListener('keydown', function(e){\n      var delta;\n      return delta = (function(){\n        switch (e.keyCode) {\n        case 37:\n          return this._ml(1);\n        case 38:\n          return this._mu(1);\n        case 39:\n          return this._mr(1);\n        case 40:\n          return this._md(1);\n        default:\n          return null;\n        }\n      }.call(this$));\n    });\n    return document.body.addEventListener('wheel', function(e){\n      var ref$, dx, dy, ox, oy;\n      ref$ = [e.deltaX, e.deltaY], dx = ref$[0], dy = ref$[1];\n      ref$ = Math.abs(dx) \u003E Math.abs(dy)\n        ? [dx, 0]\n        : [0, dy], dx = ref$[0], dy = ref$[1];\n      ref$ = [this$.pos.x, this$.pos.y], ox = ref$[0], oy = ref$[1];\n      this$.pos.x += dx \u002F 30;\n      this$.pos.y += dy \u002F 30;\n      dx = Math.round(this$.pos.x) - Math.round(ox);\n      dy = Math.round(this$.pos.y) - Math.round(oy);\n      if (dy \u003E 0) {\n        this$._md(dy);\n      } else if (dy \u003C 0) {\n        this$._mu(dy);\n      } else if (dx \u003E 0) {\n        this$._mr(dx);\n      } else if (dx \u003C 0) {\n        this$._ml(dx);\n      }\n      return e.preventDefault();\n    }, {\n      passive: false\n    });\n  },\n  regrid: function(){\n    return this.dom.inner.style.gridTemplateColumns = \"repeat(\" + this.dim.col + \", max-content)\";\n  },\n  addCell: function(x, y){\n    var div;\n    div = document.createElement('div');\n    div.classList.add.apply(div.classList, !(x && y)\n      ? ['cell', 'idx']\n      : ['cell']);\n    div.textContent = !(x || y)\n      ? ''\n      : !x\n        ? y\n        : !y ? numToIdx(x - 1) : '';\n    return this.dom.inner.insertBefore(div, this.dom.inner.childNodes[y * this.dim.col + x]);\n  },\n  _content: function(arg$){\n    var x, y, n, ref$, key$, textContent, className;\n    x = arg$.x, y = arg$.y, n = arg$.n;\n    if (!n && !(n = this.dom.inner.childNodes[x + y * this.dim.col])) {\n      return;\n    }\n    ref$ = !(x || y)\n      ? [\"\", \"cell idx\"]\n      : !x\n        ? [y + this.pos.row, \"cell idx\"]\n        : !y\n          ? [numToIdx(x - 1 + this.pos.col), \"cell idx\"]\n          : [((ref$ = this.data)[key$ = this.pos.row + y - 1] || (ref$[key$] = []))[this.pos.col + x - 1] || '', \"cell\"], textContent = ref$[0], className = ref$[1];\n    return n.textContent = textContent, n.className = className, n;\n  },\n  _md: function(mag){\n    var inner, start, ref$, i$, j, j$, to$, i, idx, n;\n    mag == null && (mag = 1);\n    inner = this.dom.inner;\n    mag = Math.round(Math.abs(mag));\n    start = (ref$ = mag - (this.dim.row - this.fix.row)) \u003E 0 ? ref$ : 0;\n    for (i$ = start; i$ \u003C mag; ++i$) {\n      j = i$;\n      for (j$ = 0, to$ = this.dim.col; j$ \u003C to$; ++j$) {\n        i = j$;\n        idx = this.dim.col * this.fix.row;\n        if (!inner.childNodes[idx]) {\n          break;\n        }\n        inner.removeChild(inner.childNodes[idx]);\n      }\n    }\n    for (i$ = start; i$ \u003C mag; ++i$) {\n      j = i$;\n      for (j$ = 0, to$ = this.dim.col; j$ \u003C to$; ++j$) {\n        i = j$;\n        n = document.createElement('div');\n        this._content({\n          x: i,\n          y: this.dim.row + j,\n          n: n\n        });\n        inner.appendChild(n);\n      }\n    }\n    return this.pos.row += mag;\n  },\n  _mu: function(mag){\n    var inner, start, ref$, i$, j, j$, to$, i, lresult$, n, results$ = [];\n    mag == null && (mag = 1);\n    inner = this.dom.inner;\n    if (this.pos.row \u003C= 0) {\n      return;\n    }\n    mag = Math.round(Math.abs(mag));\n    if (mag \u003E= this.pos.row) {\n      mag = this.pos.row;\n    }\n    start = (ref$ = mag - (this.dim.row - this.fix.row)) \u003E 0 ? ref$ : 0;\n    for (i$ = start; i$ \u003C mag; ++i$) {\n      j = i$;\n      for (j$ = 0, to$ = this.dim.col; j$ \u003C to$; ++j$) {\n        i = j$;\n        if (!inner.childNodes.length) {\n          break;\n        }\n        inner.removeChild(inner.childNodes[inner.childNodes.length - 1]);\n      }\n    }\n    this.pos.row -= mag;\n    for (i$ = start; i$ \u003C mag; ++i$) {\n      j = i$;\n      lresult$ = [];\n      for (j$ = 0, to$ = this.dim.col; j$ \u003C to$; ++j$) {\n        i = j$;\n        n = document.createElement('div');\n        this._content({\n          x: i,\n          y: j + 1,\n          n: n\n        });\n        lresult$.push(inner.insertBefore(n, inner.childNodes[i + (j - start) * this.dim.col + this.dim.col * this.fix.row]));\n      }\n      results$.push(lresult$);\n    }\n    return results$;\n  },\n  _mr: function(mag){\n    var inner, start, ref$, i$, j, j$, to$, i, n;\n    mag == null && (mag = 1);\n    inner = this.dom.inner;\n    mag = Math.round(Math.abs(mag));\n    start = (ref$ = mag - (this.dim.col - this.fix.col)) \u003E 0 ? ref$ : 0;\n    for (i$ = start; i$ \u003C mag; ++i$) {\n      j = i$;\n      for (j$ = 0, to$ = this.dim.row; j$ \u003C to$; ++j$) {\n        i = j$;\n        inner.removeChild(inner.childNodes[i * this.dim.col + this.fix.col]);\n        n = document.createElement('div');\n        this._content({\n          x: this.dim.col + j,\n          y: i,\n          n: n\n        });\n        inner.insertBefore(n, inner.childNodes[(i + 1) * this.dim.col - 1]);\n      }\n    }\n    this.pos.col += mag;\n    return this.regrid();\n  },\n  _ml: function(mag){\n    var inner, start, ref$, i$, j, j$, to$, i, n;\n    mag == null && (mag = 1);\n    inner = this.dom.inner;\n    mag = Math.round(Math.abs(mag));\n    if (mag \u003E= this.pos.col) {\n      mag = this.pos.col;\n    }\n    if (this.pos.col \u003C= 0 || mag \u003C= 0) {\n      return;\n    }\n    start = (ref$ = mag - (this.dim.col - this.fix.col)) \u003E 0 ? ref$ : 0;\n    this.pos.col -= mag;\n    for (i$ = start; i$ \u003C mag; ++i$) {\n      j = i$;\n      for (j$ = 0, to$ = this.dim.row; j$ \u003C to$; ++j$) {\n        i = j$;\n        inner.removeChild(inner.childNodes[(i + 1) * this.dim.col - 1]);\n        n = document.createElement('div');\n        this._content({\n          x: j + 1,\n          y: i,\n          n: n\n        });\n        inner.insertBefore(n, inner.childNodes[i * this.dim.col + this.fix.col + j - start]);\n      }\n    }\n    return this.regrid();\n  }\n});\ns = new sheet({\n  root: '#root'\n});\nfunction import$(obj, src){\n  var own = {}.hasOwnProperty;\n  for (var key in src) if (own.call(src, key)) obj[key] = src[key];\n  return obj;\n}\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
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