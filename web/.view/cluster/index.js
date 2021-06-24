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
;pug_debug_line = 3;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
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
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cstyle type=\"text\u002Fcss\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "html,\nbody {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n}\n.frame {\n  border: 1px solid #ccc;\n  overflow: scroll;\n}\n.sheet {\n  position: absolute;\n  display: grid;\n  grid-template-columns: repeat(20, 100px);\n  top: 0;\n  left: 0;\n}\n.cell {\n  border: 1px solid #ccc;\n  height: 2em;\n}\n.s1 {\n  background: #f00;\n}\n.s2 {\n  background: #ff0;\n}\n.s3 {\n  background: #0f0;\n}\n.s4 {\n  background: #00f;\n}\n\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fplotdb\u002Fprojects\u002Fsheet\u002Fweb\u002Fsrc\u002Fpug\u002Fbase.pug";
;pug_debug_line = 31;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"mx-auto rwd w-1024 my-4\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"aspect-ratio ratio-3by2\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"frame\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"content\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sheet s1\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var c = $$obj[pug_index0];
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var d = $$obj[pug_index1];
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var e = $$obj[pug_index2];
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var e = $$obj[pug_index2];
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var d = $$obj[pug_index1];
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var e = $$obj[pug_index3];
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var e = $$obj[pug_index3];
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
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
    for (var pug_index0 in $$obj) {
      $$l++;
      var c = $$obj[pug_index0];
;pug_debug_line = 37;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var d = $$obj[pug_index4];
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var e = $$obj[pug_index5];
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var e = $$obj[pug_index5];
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var d = $$obj[pug_index4];
;pug_debug_line = 38;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var e = $$obj[pug_index6];
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var e = $$obj[pug_index6];
;pug_debug_line = 39;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
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

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sheet s2\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var c = $$obj[pug_index7];
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var d = $$obj[pug_index8];
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index9 = 0, $$l = $$obj.length; pug_index9 < $$l; pug_index9++) {
        var e = $$obj[pug_index9];
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index9 in $$obj) {
      $$l++;
      var e = $$obj[pug_index9];
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var d = $$obj[pug_index8];
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index10 = 0, $$l = $$obj.length; pug_index10 < $$l; pug_index10++) {
        var e = $$obj[pug_index10];
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index10 in $$obj) {
      $$l++;
      var e = $$obj[pug_index10];
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
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
    for (var pug_index7 in $$obj) {
      $$l++;
      var c = $$obj[pug_index7];
;pug_debug_line = 42;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index11 = 0, $$l = $$obj.length; pug_index11 < $$l; pug_index11++) {
        var d = $$obj[pug_index11];
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index12 = 0, $$l = $$obj.length; pug_index12 < $$l; pug_index12++) {
        var e = $$obj[pug_index12];
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index12 in $$obj) {
      $$l++;
      var e = $$obj[pug_index12];
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index11 in $$obj) {
      $$l++;
      var d = $$obj[pug_index11];
;pug_debug_line = 43;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index13 = 0, $$l = $$obj.length; pug_index13 < $$l; pug_index13++) {
        var e = $$obj[pug_index13];
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index13 in $$obj) {
      $$l++;
      var e = $$obj[pug_index13];
;pug_debug_line = 44;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
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

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sheet s3\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index14 = 0, $$l = $$obj.length; pug_index14 < $$l; pug_index14++) {
        var c = $$obj[pug_index14];
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index15 = 0, $$l = $$obj.length; pug_index15 < $$l; pug_index15++) {
        var d = $$obj[pug_index15];
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index16 = 0, $$l = $$obj.length; pug_index16 < $$l; pug_index16++) {
        var e = $$obj[pug_index16];
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index16 in $$obj) {
      $$l++;
      var e = $$obj[pug_index16];
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index15 in $$obj) {
      $$l++;
      var d = $$obj[pug_index15];
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index17 = 0, $$l = $$obj.length; pug_index17 < $$l; pug_index17++) {
        var e = $$obj[pug_index17];
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index17 in $$obj) {
      $$l++;
      var e = $$obj[pug_index17];
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
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
    for (var pug_index14 in $$obj) {
      $$l++;
      var c = $$obj[pug_index14];
;pug_debug_line = 47;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index18 = 0, $$l = $$obj.length; pug_index18 < $$l; pug_index18++) {
        var d = $$obj[pug_index18];
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index19 = 0, $$l = $$obj.length; pug_index19 < $$l; pug_index19++) {
        var e = $$obj[pug_index19];
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index19 in $$obj) {
      $$l++;
      var e = $$obj[pug_index19];
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index18 in $$obj) {
      $$l++;
      var d = $$obj[pug_index18];
;pug_debug_line = 48;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index20 = 0, $$l = $$obj.length; pug_index20 < $$l; pug_index20++) {
        var e = $$obj[pug_index20];
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index20 in $$obj) {
      $$l++;
      var e = $$obj[pug_index20];
;pug_debug_line = 49;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
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

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 50;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sheet s4\"\u003E";
;pug_debug_line = 51;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index21 = 0, $$l = $$obj.length; pug_index21 < $$l; pug_index21++) {
        var c = $$obj[pug_index21];
;pug_debug_line = 52;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index22 = 0, $$l = $$obj.length; pug_index22 < $$l; pug_index22++) {
        var d = $$obj[pug_index22];
;pug_debug_line = 53;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index23 = 0, $$l = $$obj.length; pug_index23 < $$l; pug_index23++) {
        var e = $$obj[pug_index23];
;pug_debug_line = 54;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index23 in $$obj) {
      $$l++;
      var e = $$obj[pug_index23];
;pug_debug_line = 54;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index22 in $$obj) {
      $$l++;
      var d = $$obj[pug_index22];
;pug_debug_line = 53;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index24 = 0, $$l = $$obj.length; pug_index24 < $$l; pug_index24++) {
        var e = $$obj[pug_index24];
;pug_debug_line = 54;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index24 in $$obj) {
      $$l++;
      var e = $$obj[pug_index24];
;pug_debug_line = 54;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
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
    for (var pug_index21 in $$obj) {
      $$l++;
      var c = $$obj[pug_index21];
;pug_debug_line = 52;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index25 = 0, $$l = $$obj.length; pug_index25 < $$l; pug_index25++) {
        var d = $$obj[pug_index25];
;pug_debug_line = 53;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index26 = 0, $$l = $$obj.length; pug_index26 < $$l; pug_index26++) {
        var e = $$obj[pug_index26];
;pug_debug_line = 54;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index26 in $$obj) {
      $$l++;
      var e = $$obj[pug_index26];
;pug_debug_line = 54;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

      }
  } else {
    var $$l = 0;
    for (var pug_index25 in $$obj) {
      $$l++;
      var d = $$obj[pug_index25];
;pug_debug_line = 53;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
// iterate [0,1,2,3,4,5,6,7]
;(function(){
  var $$obj = [0,1,2,3,4,5,6,7];
  if ('number' == typeof $$obj.length) {
      for (var pug_index27 = 0, $$l = $$obj.length; pug_index27 < $$l; pug_index27++) {
        var e = $$obj[pug_index27];
;pug_debug_line = 54;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cell\"\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index27 in $$obj) {
      $$l++;
      var e = $$obj[pug_index27];
;pug_debug_line = 54;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
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
;pug_debug_line = 57;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 57;pug_debug_filename = "src\u002Fpug\u002Fcluster\u002Findex.pug";
pug_html = pug_html + "(function(it){\n  return it.apply({});\n})(function(){\n  var frame, content, sheet1, sheet2, sheet3, sheet4, box1, box3, box2, ref$, this$ = this;\n  frame = ld$.find('.frame', 0);\n  content = ld$.find('.content', 0);\n  sheet1 = ld$.find('.sheet', 0);\n  sheet2 = ld$.find('.sheet', 1);\n  sheet3 = ld$.find('.sheet', 2);\n  sheet4 = ld$.find('.sheet', 3);\n  this.fbox = frame.getBoundingClientRect();\n  box1 = sheet1.getBoundingClientRect();\n  sheet2.style.top = (box1.y + box1.height - this.fbox.y) + \"px\";\n  box3 = sheet3.getBoundingClientRect();\n  sheet4.style.top = (box3.y + box3.height - this.fbox.y) + \"px\";\n  box1 = sheet1.getBoundingClientRect();\n  sheet3.style.left = (box1.x + box1.width - this.fbox.x) + \"px\";\n  box2 = sheet2.getBoundingClientRect();\n  sheet4.style.left = (box2.x + box2.width - this.fbox.x) + \"px\";\n  ref$ = content.style;\n  ref$.width = \"10000px\";\n  ref$.height = \"10000px\";\n  return frame.addEventListener('scroll', function(){\n    var ref$, sx, sy, box1, box2, box3, box4;\n    ref$ = [frame.scrollLeft, frame.scrollTop], sx = ref$[0], sy = ref$[1];\n    box1 = sheet1.getBoundingClientRect();\n    box2 = sheet2.getBoundingClientRect();\n    box3 = sheet3.getBoundingClientRect();\n    box4 = sheet4.getBoundingClientRect();\n    if (box1.y + box1.height - this$.fbox.y \u003C 0) {\n      sheet1.style.top = (box2.y + box2.height + sy - this$.fbox.y) + \"px\";\n    } else if (box2.y + box2.height - this$.fbox.y \u003C 0) {\n      sheet2.style.top = (box1.y + box1.height + sy - this$.fbox.y) + \"px\";\n    } else if (box1.y - this$.fbox.y \u003E this$.fbox.height) {\n      sheet1.style.top = (box2.y - box1.height + sy - this$.fbox.y) + \"px\";\n    } else if (box2.y - this$.fbox.y \u003E this$.fbox.height) {\n      sheet2.style.top = (box1.y - box2.height + sy - this$.fbox.y) + \"px\";\n    }\n    if (box3.y + box3.height - this$.fbox.y \u003C 0) {\n      sheet3.style.top = (box4.y + box4.height + sy - this$.fbox.y) + \"px\";\n    } else if (box4.y + box4.height - this$.fbox.y \u003C 0) {\n      sheet4.style.top = (box3.y + box3.height + sy - this$.fbox.y) + \"px\";\n    } else if (box3.y - this$.fbox.y \u003E this$.fbox.height) {\n      sheet3.style.top = (box4.y - box3.height + sy - this$.fbox.y) + \"px\";\n    } else if (box4.y - this$.fbox.y \u003E this$.fbox.height) {\n      sheet4.style.top = (box3.y - box4.height + sy - this$.fbox.y) + \"px\";\n    }\n    if (box1.x + box1.width - this$.fbox.x \u003C 0) {\n      sheet1.style.left = (box3.x + box3.width + sx - this$.fbox.x) + \"px\";\n    } else if (box3.x + box3.width - this$.fbox.x \u003C 0) {\n      sheet3.style.left = (box1.x + box1.width + sx - this$.fbox.x) + \"px\";\n    } else if (box1.x - this$.fbox.x \u003E this$.fbox.width) {\n      sheet1.style.left = (box3.x - box1.width + sx - this$.fbox.x) + \"px\";\n    } else if (box3.x - this$.fbox.x \u003E this$.fbox.width) {\n      sheet3.style.left = (box1.x - box3.width + sx - this$.fbox.x) + \"px\";\n    }\n    if (box2.x + box2.width - this$.fbox.x \u003C 0) {\n      return sheet2.style.left = (box4.x + box4.width + sx - this$.fbox.x) + \"px\";\n    } else if (box4.x + box4.width - this$.fbox.x \u003C 0) {\n      return sheet4.style.left = (box2.x + box2.width + sx - this$.fbox.x) + \"px\";\n    } else if (box2.x - this$.fbox.x \u003E this$.fbox.width) {\n      return sheet2.style.left = (box4.x - box2.width + sx - this$.fbox.x) + \"px\";\n    } else if (box4.x - this$.fbox.x \u003E this$.fbox.width) {\n      return sheet4.style.left = (box2.x - box4.width + sx - this$.fbox.x) + \"px\";\n    }\n  });\n});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
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