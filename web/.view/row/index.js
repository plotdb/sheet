 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(e,n,r,t){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&n||t))throw e.message+=" on line "+r,e;var o,a,i,s;try{t=t||require("fs").readFileSync(n,{encoding:"utf8"}),o=3,a=t.split("\n"),i=Math.max(r-o,0),s=Math.min(a.length,r+o)}catch(t){return e.message+=" - could not read from "+n+" ("+t.message+")",void pug_rethrow(e,null,r)}o=a.slice(i,s).map(function(e,n){var t=n+i+1;return(t==r?"  > ":"    ")+t+"| "+e}).join("\n"),e.path=n;try{e.message=(n||"Pug")+":"+r+"\n"+o+"\n\n"+e.message}catch(e){}throw e}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;
    var locals_for_with = (locals || {});
    
    (function (JSON, b64img, blockLoader, cols, cssLoader, decache, escape, scriptLoader, version) {
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
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cbase href=\"..\"\u003E";
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
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "html,\nbody {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n}\n.sheet {\n  position: relative;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #999;\n  width: fit-content;\n\u002F*.srow\n    display: flex\n    flex-wrap: nowrap\n    width: fit-content\n  *\u002F\n}\n.sheet .srow {\n  display: grid;\n  grid-template-columns: repeat(28, 48px);\n  width: fit-content;\n}\n.sheet .scell {\n  user-select: none;\n  border-width: 0 1px 1px 0;\n  border-style: solid;\n  border-color: #ddd;\n\u002F* use em may lead to nondeterminstic behavior in border rendering, due to rounding *\u002F\n  padding: 1px;\n  min-width: 48px;\n  min-height: 26px;\n  line-height: 26px;\n  flex: 0 0 auto;\n  box-sizing: border-box;\n}\n.sheet .scell:last-child {\n  border-right-width: 0;\n}\n.sheet .srow:last-child .scell {\n  border-bottom-width: 0;\n}\n.sheet .srow.idx,\n.sheet .srow .scell:first-child {\n  position: sticky;\n  background: #f1f2f3;\n  color: #919293;\n  font-size: 0.85em;\n  text-align: center;\n}\n.sheet .srow.idx {\n  z-index: 101;\n  top: 0;\n}\n.sheet .srow .scell:first-child {\n  z-index: 100;\n  left: 0;\n}\n.sheet .scell.idx {\n  user-select: none;\n}\n.sel {\n  z-index: 10;\n  border: 1px solid #27f;\n  position: absolute;\n  display: none;\n  user-select: none;\n  pointer-events: none;\n}\n.sel-main {\n  z-index: 11;\n  border: 2px solid #27f;\n  position: absolute;\n  display: none;\n  user-select: none;\n  pointer-events: none;\n}\n.edit {\n  z-index: 21;\n  border: 2px solid #27f;\n  position: absolute;\n  display: none;\n}\n.edit textarea {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n}\n\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E";
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
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var i = $$obj[pug_index0];
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell idx\"\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = i) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var i = $$obj[pug_index0];
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
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var k = $$obj[pug_index1];
;pug_debug_line = 92;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5,6]
;(function(){
  var $$obj = [1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var m = $$obj[pug_index2];
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
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var i = $$obj[pug_index3];
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var j = $$obj[pug_index4];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var j = $$obj[pug_index4];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var i = $$obj[pug_index3];
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var j = $$obj[pug_index5];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var j = $$obj[pug_index5];
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
    for (var pug_index2 in $$obj) {
      $$l++;
      var m = $$obj[pug_index2];
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
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var i = $$obj[pug_index6];
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
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var i = $$obj[pug_index6];
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var j = $$obj[pug_index8];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var j = $$obj[pug_index8];
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
    for (var pug_index1 in $$obj) {
      $$l++;
      var k = $$obj[pug_index1];
;pug_debug_line = 92;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5,6]
;(function(){
  var $$obj = [1,2,3,4,5,6];
  if ('number' == typeof $$obj.length) {
      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
        var m = $$obj[pug_index9];
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
      for (var pug_index10 = 0, $$l = $$obj.length; pug_index10 < $$l; pug_index10++) {
        var i = $$obj[pug_index10];
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index11 = 0, $$l = $$obj.length; pug_index11 < $$l; pug_index11++) {
        var j = $$obj[pug_index11];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index11 in $$obj) {
      $$l++;
      var j = $$obj[pug_index11];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index10 in $$obj) {
      $$l++;
      var i = $$obj[pug_index10];
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index12 = 0, $$l = $$obj.length; pug_index12 < $$l; pug_index12++) {
        var j = $$obj[pug_index12];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index12 in $$obj) {
      $$l++;
      var j = $$obj[pug_index12];
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
    for (var pug_index9 in $$obj) {
      $$l++;
      var m = $$obj[pug_index9];
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
      for (var pug_index13 = 0, $$l = $$obj.length; pug_index13 < $$l; pug_index13++) {
        var i = $$obj[pug_index13];
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
  } else {
    var $$l = 0;
    for (var pug_index13 in $$obj) {
      $$l++;
      var i = $$obj[pug_index13];
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
// iterate [1,2,3,4,5]
;(function(){
  var $$obj = [1,2,3,4,5];
  if ('number' == typeof $$obj.length) {
      for (var pug_index15 = 0, $$l = $$obj.length; pug_index15 < $$l; pug_index15++) {
        var j = $$obj[pug_index15];
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index15 in $$obj) {
      $$l++;
      var j = $$obj[pug_index15];
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
;pug_debug_line = 102;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 102;pug_debug_filename = "src\u002Fpug\u002Frow\u002Findex.pug";
pug_html = pug_html + "(function(it){\n  return it.apply({});\n})(function(){\n  var sheet, sel, selMain, edit, input, getByIdx, index, updateText, enterEdit, render, this$ = this;\n  sheet = ld$.find('.sheet', 0);\n  sel = ld$.find(sheet, '.sel', 0);\n  selMain = ld$.find(sheet, '.sel-main', 0);\n  edit = ld$.find(sheet, '.edit', 0);\n  input = ld$.find(sheet, '.edit textarea', 0);\n  this.sel = {};\n  getByIdx = function(opt){\n    var base, row, col;\n    opt == null && (opt = {});\n    base = opt.node\n      ? index(opt.node)\n      : {\n        row: 0,\n        col: 0\n      };\n    if (!base) {\n      throw new Error(\"node not found in sheet\");\n    }\n    row = base.row + (opt.row || 0);\n    col = base.col + (opt.col || 0);\n    row = ld$.find(sheet, '.srow', row);\n    col = ld$.find(row, '.scell', col);\n    return col;\n  };\n  index = function(c){\n    var r, col, row;\n    if (!(r = ld$.parent(c, '.srow', sheet))) {\n      return;\n    }\n    col = Array.from(r.childNodes).filter(function(it){\n      return it.classList.contains('scell');\n    }).indexOf(c);\n    row = Array.from(r.parentNode.childNodes).filter(function(it){\n      return it.classList.contains('srow');\n    }).indexOf(r);\n    return {\n      col: col,\n      row: row\n    };\n  };\n  document.body.addEventListener('keydown', function(e){\n    var code, opt, node;\n    code = e.keyCode;\n    opt = (function(){\n      switch (code) {\n      case 37:\n        return {\n          row: 0,\n          col: -1\n        };\n      case 38:\n        return {\n          row: -1,\n          col: 0\n        };\n      case 39:\n        return {\n          row: 0,\n          col: 1\n        };\n      case 40:\n        return {\n          row: 1,\n          col: 0\n        };\n      default:\n        return null;\n      }\n    }());\n    if (!opt) {\n      return;\n    }\n    if (this$.sel.node) {\n      updateText();\n    }\n    node = this$.sel.start;\n    opt.node = node;\n    if (!node) {\n      return;\n    }\n    node = getByIdx(opt);\n    if (!node) {\n      return;\n    }\n    this$.sel.start = node;\n    this$.sel.end = node;\n    render();\n    e.stopPropagation();\n    return e.preventDefault();\n  });\n  document.body.addEventListener('keypress', function(e){\n    if (this$.sel.start && !this$.sel.node) {\n      return enterEdit(this$.sel.start);\n    }\n  });\n  input.addEventListener('keydown', function(e){\n    if (e.keyCode === 13) {\n      if (!(e.altKey || e.metaKey)) {\n        return updateText();\n      }\n      return input.setAttribute('rows', 2);\n    }\n  });\n  input.addEventListener('mousedown', function(e){\n    return e.stopPropagation();\n  });\n  updateText = function(){\n    if (!this$.sel.node) {\n      return;\n    }\n    this$.sel.node.textContent = input.value || '';\n    edit.style.display = 'none';\n    selMain.style.display = 'none';\n    sel.style.display = 'none';\n    return this$.sel.node = null;\n  };\n  enterEdit = function(p){\n    var box, rbox, ref$;\n    this$.sel.node = p;\n    console.log(index(p));\n    box = p.getBoundingClientRect();\n    rbox = sheet.getBoundingClientRect();\n    ref$ = edit.style;\n    ref$.left = (box.x - rbox.x + sheet.scrollLeft - 2) + \"px\";\n    ref$.top = (box.y - rbox.y + sheet.scrollTop - 2) + \"px\";\n    ref$.width = (box.width + 1) + \"px\";\n    ref$.height = (box.height + 1) + \"px\";\n    ref$.display = 'block';\n    input.value = p.textContent || '';\n    return input.focus();\n  };\n  sheet.addEventListener('dblclick', function(e){\n    var n, p;\n    n = e.target;\n    if (!(p = ld$.parent(n, '.scell', sheet))) {\n      return;\n    }\n    return enterEdit(p);\n  });\n  sheet.addEventListener('mousedown', function(e){\n    var n, p;\n    updateText();\n    n = e.target;\n    if (!(p = ld$.parent(n, '.scell', sheet))) {\n      return;\n    }\n    this$.sel.start = p;\n    this$.sel.end = p;\n    return render();\n  });\n  sheet.addEventListener('mousemove', function(e){\n    var n, p;\n    if (!e.buttons) {\n      return;\n    }\n    n = e.target;\n    if (!(p = ld$.parent(n, '.scell', sheet))) {\n      return;\n    }\n    this$.sel.end = p;\n    return render();\n  });\n  return render = function(){\n    var sbox, ebox, rbox, x1, y1, x2, y2, w, h, ref$;\n    sbox = this$.sel.start.getBoundingClientRect();\n    ebox = this$.sel.end.getBoundingClientRect();\n    rbox = sheet.getBoundingClientRect();\n    x1 = Math.min(sbox.x, ebox.x) - rbox.x + sheet.scrollLeft - 2;\n    y1 = Math.min(sbox.y, ebox.y) - rbox.y + sheet.scrollTop - 2;\n    x2 = Math.max(sbox.x + sbox.width, ebox.x + ebox.width) - rbox.x + sheet.scrollLeft - 2;\n    y2 = Math.max(sbox.y + ebox.height, ebox.y + ebox.height) - rbox.y + sheet.scrollTop - 2;\n    w = x2 - x1 + 1;\n    h = y2 - y1 + 1;\n    ref$ = sel.style;\n    ref$.left = x1 + \"px\";\n    ref$.top = y1 + \"px\";\n    ref$.width = w + \"px\";\n    ref$.height = h + \"px\";\n    ref$.display = 'block';\n    return ref$ = selMain.style, ref$.left = (sbox.x - rbox.x + sheet.scrollLeft - 2) + \"px\", ref$.top = (sbox.y - rbox.y + sheet.scrollTop - 2) + \"px\", ref$.width = (sbox.width + 1) + \"px\", ref$.height = (sbox.height + 1) + \"px\", ref$.display = 'block', ref$;\n  };\n});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "JSON" in locals_for_with ?
        locals_for_with.JSON :
        typeof JSON !== 'undefined' ? JSON : undefined, "b64img" in locals_for_with ?
        locals_for_with.b64img :
        typeof b64img !== 'undefined' ? b64img : undefined, "blockLoader" in locals_for_with ?
        locals_for_with.blockLoader :
        typeof blockLoader !== 'undefined' ? blockLoader : undefined, "cols" in locals_for_with ?
        locals_for_with.cols :
        typeof cols !== 'undefined' ? cols : undefined, "cssLoader" in locals_for_with ?
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