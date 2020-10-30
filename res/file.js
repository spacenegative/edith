function Vnumeric( x )  {
         /* str -> bool */ 
         var      r = x.match( /^-?[0-9]+$/ ) 
         if       ( r == null )  {
                  return   false }
         else  {
                  return   true }}
function escapeStr( x )  {
         /* string -> string */ 
         return ( x + '' ) . replace( /[\\"']/g, '\\$&').replace(/\u0000/g, '\\0' ) }

/* import Vnumeric escapeStr */  {
	/*  */ }
/**
* HtmlEscape in JavaScript, which is compatible with utf-8
* @author Ulrich Jensen, http://www.htmlescape.net
* Feel free to get inspired, use or steal this code and use it in your
* own projects.
* License:
* You have the right to use this code in your own project or publish it
* on your own website.
* If you are going to use this code, please include the author lines.
* Use this code at your own risk. The author does not warrent or assume any
* legal liability or responsibility for the accuracy, completeness or usefullness of
* this program code.
Html escape function for JavaScript, for escaping text within a html page, for situations where pre-escaping can't be done.
The Html Escape function is fast and easy to use.
The two main functions in the JavaScript source code is:
escapeHtml(text)
Which escapes a text with the correct html entities.
escapeHtmlTextArea
Which escapes a text, for use within text areas.
*/

  var hex=new Array('0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f');
  
  
  function escapeHtml(originalText)
  {
   var preescape="" + originalText;
   var escaped="";
    
   var i=0;
   for(i=0;i<preescape.length;i++)
   {
    var p=preescape.charAt(i);
     
    p=""+escapeCharOther(p);
    p=""+escapeTags(p);
    p=""+escapeBR(p);
   
    escaped=escaped+p;
   }
   return escaped;
  }

  function escapeHtmlTextArea(originalText)
  {
   
   
   var preescape="" + originalText;
   var escaped="";
   
   var i=0;
   for(i=0;i<preescape.length;i++)
   {
    var p=preescape.charAt(i);
    
    p=""+escapeCharOther(p);
    p=""+escapeTags(p);
   
    escaped=escaped+p;
   }
   
   return escaped;
  }
   
   
  function escapeBR(original)
  {
     var thechar=original.charCodeAt(0);
   
   switch(thechar) {
     case 10: return "<br/>"; break; //newline
     case '\r': break;
   }
   return original; 
  } 

  function escapeNBSP(original)
  {
     var thechar=original.charCodeAt(0);
   switch(thechar) {
     case 32: return "&nbsp;"; break; //space
   }
   return original; 
  } 


  function escapeTags(original)
  {
     var thechar=original.charCodeAt(0);
   switch(thechar) {
     case 60:return "&lt;"; break; //<
     case 62:return "&gt;"; break; //>
     case 34:return "&quot;"; break; //"
   }
   return original;
  
  }
   
  function escapeCharOther(original)
  {
     var found=true;
     var thechar=original.charCodeAt(0);
   switch(thechar) {
     case 38:return "&amp;"; break; //&
     case 198:return "&AElig;"; break; //Æ
     case 193:return "&Aacute;"; break; //Á
     case 194:return "&Acirc;"; break; //Â
     case 192:return "&Agrave;"; break; //À
     case 197:return "&Aring;"; break; //Å
     case 195:return "&Atilde;"; break; //Ã
     case 196:return "&Auml;"; break; //Ä
     case 199:return "&Ccedil;"; break; //Ç
     case 208:return "&ETH;"; break; //Ð
     case 201:return "&Eacute;"; break; //É
     case 202:return "&Ecirc;"; break; //Ê
     case 200:return "&Egrave;"; break; //È
     case 203:return "&Euml;"; break; //Ë
     case 205:return "&Iacute;"; break; //Í
     case 206:return "&Icirc;"; break; //Î
     case 204:return "&Igrave;"; break; //Ì
     case 207:return "&Iuml;"; break; //Ï
     case 209:return "&Ntilde;"; break; //Ñ
     case 211:return "&Oacute;"; break; //Ó
     case 212:return "&Ocirc;"; break; //Ô
     case 210:return "&Ograve;"; break; //Ò
     case 216:return "&Oslash;"; break; //Ø
     case 213:return "&Otilde;"; break; //Õ
     case 214:return "&Ouml;"; break; //Ö
     case 222:return "&THORN;"; break; //Þ
     case 218:return "&Uacute;"; break; //Ú
     case 219:return "&Ucirc;"; break; //Û
     case 217:return "&Ugrave;"; break; //Ù
     case 220:return "&Uuml;"; break; //Ü
     case 221:return "&Yacute;"; break; //Ý
     case 225:return "&aacute;"; break; //á
     case 226:return "&acirc;"; break; //â
     case 230:return "&aelig;"; break; //æ
     case 224:return "&agrave;"; break; //à
     case 229:return "&aring;"; break; //å
     case 227:return "&atilde;"; break; //ã
     case 228:return "&auml;"; break; //ä
     case 231:return "&ccedil;"; break; //ç
     case 233:return "&eacute;"; break; //é
     case 234:return "&ecirc;"; break; //ê
     case 232:return "&egrave;"; break; //è
     case 240:return "&eth;"; break; //ð
     case 235:return "&euml;"; break; //ë
     case 237:return "&iacute;"; break; //í
     case 238:return "&icirc;"; break; //î
     case 236:return "&igrave;"; break; //ì
     case 239:return "&iuml;"; break; //ï
     case 241:return "&ntilde;"; break; //ñ
     case 243:return "&oacute;"; break; //ó
     case 244:return "&ocirc;"; break; //ô
     case 242:return "&ograve;"; break; //ò
     case 248:return "&oslash;"; break; //ø
     case 245:return "&otilde;"; break; //õ
     case 246:return "&ouml;"; break; //ö
     case 223:return "&szlig;"; break; //ß
     case 254:return "&thorn;"; break; //þ
     case 250:return "&uacute;"; break; //ú
     case 251:return "&ucirc;"; break; //û
     case 249:return "&ugrave;"; break; //ù
     case 252:return "&uuml;"; break; //ü
     case 253:return "&yacute;"; break; //ý
     case 255:return "&yuml;"; break; //ÿ
     case 162:return "&cent;"; break; //¢
     default:
      found=false;
      break;
    }
    if(!found)
    {
     if(thechar>127) {
      var c=thechar;
      var a4=c%16;
      c=Math.floor(c/16);
      var a3=c%16;
      c=Math.floor(c/16);
      var a2=c%16;
      c=Math.floor(c/16);
      var a1=c%16;
      return "&#x"+hex[a1]+hex[a2]+hex[a3]+hex[a4]+";";  
     }
     else
     {
      return original;
     }
    }

   
  } 
/*!***************************************************
* mark.js v8.11.1
* https://markjs.io/
* Copyright (c) 2014–2018, Julian Kühnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Mark=t()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(n){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3;t(this,e),this.ctx=n,this.iframes=r,this.exclude=i,this.iframesTimeout=o}return n(e,[{key:"getContexts",value:function(){var e=[];return(void 0!==this.ctx&&this.ctx?NodeList.prototype.isPrototypeOf(this.ctx)?Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?this.ctx:"string"==typeof this.ctx?Array.prototype.slice.call(document.querySelectorAll(this.ctx)):[this.ctx]:[]).forEach(function(t){var n=e.filter(function(e){return e.contains(t)}).length>0;-1!==e.indexOf(t)||n||e.push(t)}),e}},{key:"getIframeContents",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=void 0;try{var i=e.contentWindow;if(r=i.document,!i||!r)throw new Error("iframe inaccessible")}catch(e){n()}r&&t(r)}},{key:"isIframeBlank",value:function(e){var t=e.getAttribute("src").trim();return"about:blank"===e.contentWindow.location.href&&"about:blank"!==t&&t}},{key:"observeIframeLoad",value:function(e,t,n){var r=this,i=!1,o=null,a=function a(){if(!i){i=!0,clearTimeout(o);try{r.isIframeBlank(e)||(e.removeEventListener("load",a),r.getIframeContents(e,t,n))}catch(e){n()}}};e.addEventListener("load",a),o=setTimeout(a,this.iframesTimeout)}},{key:"onIframeReady",value:function(e,t,n){try{"complete"===e.contentWindow.document.readyState?this.isIframeBlank(e)?this.observeIframeLoad(e,t,n):this.getIframeContents(e,t,n):this.observeIframeLoad(e,t,n)}catch(e){n()}}},{key:"waitForIframes",value:function(e,t){var n=this,r=0;this.forEachIframe(e,function(){return!0},function(e){r++,n.waitForIframes(e.querySelector("html"),function(){--r||t()})},function(e){e||t()})}},{key:"forEachIframe",value:function(t,n,r){var i=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=t.querySelectorAll("iframe"),s=a.length,c=0;a=Array.prototype.slice.call(a);var u=function(){--s<=0&&o(c)};s||u(),a.forEach(function(t){e.matches(t,i.exclude)?u():i.onIframeReady(t,function(e){n(t)&&(c++,r(e)),u()},u)})}},{key:"createIterator",value:function(e,t,n){return document.createNodeIterator(e,t,n,!1)}},{key:"createInstanceOnIframe",value:function(t){return new e(t.querySelector("html"),this.iframes)}},{key:"compareNodeIframe",value:function(e,t,n){if(e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING){if(null===t)return!0;if(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING)return!0}return!1}},{key:"getIteratorNode",value:function(e){var t=e.previousNode();return{prevNode:t,node:null===t?e.nextNode():e.nextNode()&&e.nextNode()}}},{key:"checkIframeFilter",value:function(e,t,n,r){var i=!1,o=!1;return r.forEach(function(e,t){e.val===n&&(i=t,o=e.handled)}),this.compareNodeIframe(e,t,n)?(!1!==i||o?!1===i||o||(r[i].handled=!0):r.push({val:n,handled:!0}),!0):(!1===i&&r.push({val:n,handled:!1}),!1)}},{key:"handleOpenIframes",value:function(e,t,n,r){var i=this;e.forEach(function(e){e.handled||i.getIframeContents(e.val,function(e){i.createInstanceOnIframe(e).forEachNode(t,n,r)})})}},{key:"iterateThroughNodes",value:function(e,t,n,r,i){for(var o,a=this,s=this.createIterator(t,e,r),c=[],u=[],l=void 0,h=void 0;void 0,o=a.getIteratorNode(s),h=o.prevNode,l=o.node;)this.iframes&&this.forEachIframe(t,function(e){return a.checkIframeFilter(l,h,e,c)},function(t){a.createInstanceOnIframe(t).forEachNode(e,function(e){return u.push(e)},r)}),u.push(l);u.forEach(function(e){n(e)}),this.iframes&&this.handleOpenIframes(c,e,n,r),i()}},{key:"forEachNode",value:function(e,t,n){var r=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},o=this.getContexts(),a=o.length;a||i(),o.forEach(function(o){var s=function(){r.iterateThroughNodes(e,o,t,n,function(){--a<=0&&i()})};r.iframes?r.waitForIframes(o,s):s()})}}],[{key:"matches",value:function(e,t){var n="string"==typeof t?[t]:t,r=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;if(r){var i=!1;return n.every(function(t){return!r.call(e,t)||(i=!0,!1)}),i}return!1}}]),e}(),o=function(){function o(e){t(this,o),this.ctx=e,this.ie=!1;var n=window.navigator.userAgent;(n.indexOf("MSIE")>-1||n.indexOf("Trident")>-1)&&(this.ie=!0)}return n(o,[{key:"log",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"debug",r=this.opt.log;this.opt.debug&&"object"===(void 0===r?"undefined":e(r))&&"function"==typeof r[n]&&r[n]("mark.js: "+t)}},{key:"escapeStr",value:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}},{key:"createRegExp",value:function(e){return"disabled"!==this.opt.wildcards&&(e=this.setupWildcardsRegExp(e)),e=this.escapeStr(e),Object.keys(this.opt.synonyms).length&&(e=this.createSynonymsRegExp(e)),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),this.opt.diacritics&&(e=this.createDiacriticsRegExp(e)),e=this.createMergedBlanksRegExp(e),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.createJoinersRegExp(e)),"disabled"!==this.opt.wildcards&&(e=this.createWildcardsRegExp(e)),e=this.createAccuracyRegExp(e)}},{key:"createSynonymsRegExp",value:function(e){var t=this.opt.synonyms,n=this.opt.caseSensitive?"":"i",r=this.opt.ignoreJoiners||this.opt.ignorePunctuation.length?"\0":"";for(var i in t)if(t.hasOwnProperty(i)){var o=t[i],a="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(i):this.escapeStr(i),s="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(o):this.escapeStr(o);""!==a&&""!==s&&(e=e.replace(new RegExp("("+this.escapeStr(a)+"|"+this.escapeStr(s)+")","gm"+n),r+"("+this.processSynomyms(a)+"|"+this.processSynomyms(s)+")"+r))}return e}},{key:"processSynomyms",value:function(e){return(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),e}},{key:"setupWildcardsRegExp",value:function(e){return(e=e.replace(/(?:\\)*\?/g,function(e){return"\\"===e.charAt(0)?"?":""})).replace(/(?:\\)*\*/g,function(e){return"\\"===e.charAt(0)?"*":""})}},{key:"createWildcardsRegExp",value:function(e){var t="withSpaces"===this.opt.wildcards;return e.replace(/\u0001/g,t?"[\\S\\s]?":"\\S?").replace(/\u0002/g,t?"[\\S\\s]*?":"\\S*")}},{key:"setupIgnoreJoinersRegExp",value:function(e){return e.replace(/[^(|)\\]/g,function(e,t,n){var r=n.charAt(t+1);return/[(|)\\]/.test(r)||""===r?e:e+"\0"})}},{key:"createJoinersRegExp",value:function(e){var t=[],n=this.opt.ignorePunctuation;return Array.isArray(n)&&n.length&&t.push(this.escapeStr(n.join(""))),this.opt.ignoreJoiners&&t.push("\\u00ad\\u200b\\u200c\\u200d"),t.length?e.split(/\u0000+/).join("["+t.join("")+"]*"):e}},{key:"createDiacriticsRegExp",value:function(e){var t=this.opt.caseSensitive?"":"i",n=this.opt.caseSensitive?["aàáảãạăằắẳẵặâầấẩẫậäåāą","AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćč","CÇĆČ","dđď","DĐĎ","eèéẻẽẹêềếểễệëěēę","EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïī","IÌÍỈĨỊÎÏĪ","lł","LŁ","nñňń","NÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøō","OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rř","RŘ","sšśșş","SŠŚȘŞ","tťțţ","TŤȚŢ","uùúủũụưừứửữựûüůū","UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿ","YÝỲỶỸỴŸ","zžżź","ZŽŻŹ"]:["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćčCÇĆČ","dđďDĐĎ","eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïīIÌÍỈĨỊÎÏĪ","lłLŁ","nñňńNÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rřRŘ","sšśșşSŠŚȘŞ","tťțţTŤȚŢ","uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿYÝỲỶỸỴŸ","zžżźZŽŻŹ"],r=[];return e.split("").forEach(function(i){n.every(function(n){if(-1!==n.indexOf(i)){if(r.indexOf(n)>-1)return!1;e=e.replace(new RegExp("["+n+"]","gm"+t),"["+n+"]"),r.push(n)}return!0})}),e}},{key:"createMergedBlanksRegExp",value:function(e){return e.replace(/[\s]+/gim,"[\\s]+")}},{key:"createAccuracyRegExp",value:function(e){var t=this,n=this.opt.accuracy,r="string"==typeof n?n:n.value,i="";switch(("string"==typeof n?[]:n.limiters).forEach(function(e){i+="|"+t.escapeStr(e)}),r){case"partially":default:return"()("+e+")";case"complementary":return"()([^"+(i="\\s"+(i||this.escapeStr("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿")))+"]*"+e+"[^"+i+"]*)";case"exactly":return"(^|\\s"+i+")("+e+")(?=$|\\s"+i+")"}}},{key:"getSeparatedKeywords",value:function(e){var t=this,n=[];return e.forEach(function(e){t.opt.separateWordSearch?e.split(" ").forEach(function(e){e.trim()&&-1===n.indexOf(e)&&n.push(e)}):e.trim()&&-1===n.indexOf(e)&&n.push(e)}),{keywords:n.sort(function(e,t){return t.length-e.length}),length:n.length}}},{key:"isNumeric",value:function(e){return Number(parseFloat(e))==e}},{key:"checkRanges",value:function(e){var t=this;if(!Array.isArray(e)||"[object Object]"!==Object.prototype.toString.call(e[0]))return this.log("markRanges() will only accept an array of objects"),this.opt.noMatch(e),[];var n=[],r=0;return e.sort(function(e,t){return e.start-t.start}).forEach(function(e){var i=t.callNoMatchOnInvalidRanges(e,r),o=i.start,a=i.end;i.valid&&(e.start=o,e.length=a-o,n.push(e),r=a)}),n}},{key:"callNoMatchOnInvalidRanges",value:function(e,t){var n=void 0,r=void 0,i=!1;return e&&void 0!==e.start?(r=(n=parseInt(e.start,10))+parseInt(e.length,10),this.isNumeric(e.start)&&this.isNumeric(e.length)&&r-t>0&&r-n>0?i=!0:(this.log("Ignoring invalid or overlapping range: "+JSON.stringify(e)),this.opt.noMatch(e))):(this.log("Ignoring invalid range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:n,end:r,valid:i}}},{key:"checkWhitespaceRanges",value:function(e,t,n){var r=void 0,i=!0,o=n.length,a=t-o,s=parseInt(e.start,10)-a;return(r=(s=s>o?o:s)+parseInt(e.length,10))>o&&(r=o,this.log("End range automatically set to the max value of "+o)),s<0||r-s<0||s>o||r>o?(i=!1,this.log("Invalid range: "+JSON.stringify(e)),this.opt.noMatch(e)):""===n.substring(s,r).replace(/\s+/g,"")&&(i=!1,this.log("Skipping whitespace only range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:s,end:r,valid:i}}},{key:"getTextNodes",value:function(e){var t=this,n="",r=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,function(e){r.push({start:n.length,end:(n+=e.textContent).length,node:e})},function(e){return t.matchesExclude(e.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},function(){e({value:n,nodes:r})})}},{key:"matchesExclude",value:function(e){return i.matches(e,this.opt.exclude.concat(["script","style","title","head","html"]))}},{key:"wrapRangeInTextNode",value:function(e,t,n){var r=this.opt.element?this.opt.element:"mark",i=e.splitText(t),o=i.splitText(n-t),a=document.createElement(r);return a.setAttribute("data-markjs","true"),this.opt.className&&a.setAttribute("class",this.opt.className),a.textContent=i.textContent,i.parentNode.replaceChild(a,i),o}},{key:"wrapRangeInMappedTextNode",value:function(e,t,n,r,i){var o=this;e.nodes.every(function(a,s){var c=e.nodes[s+1];if(void 0===c||c.start>t){if(!r(a.node))return!1;var u=t-a.start,l=(n>a.end?a.end:n)-a.start,h=e.value.substr(0,a.start),f=e.value.substr(l+a.start);if(a.node=o.wrapRangeInTextNode(a.node,u,l),e.value=h+f,e.nodes.forEach(function(t,n){n>=s&&(e.nodes[n].start>0&&n!==s&&(e.nodes[n].start-=l),e.nodes[n].end-=l)}),n-=l,i(a.node.previousSibling,a.start),!(n>a.end))return!1;t=a.end}return!0})}},{key:"wrapMatches",value:function(e,t,n,r,i){var o=this,a=0===t?0:t+1;this.getTextNodes(function(t){t.nodes.forEach(function(t){t=t.node;for(var i=void 0;null!==(i=e.exec(t.textContent))&&""!==i[a];)if(n(i[a],t)){var s=i.index;if(0!==a)for(var c=1;c<a;c++)s+=i[c].length;t=o.wrapRangeInTextNode(t,s,s+i[a].length),r(t.previousSibling),e.lastIndex=0}}),i()})}},{key:"wrapMatchesAcrossElements",value:function(e,t,n,r,i){var o=this,a=0===t?0:t+1;this.getTextNodes(function(t){for(var s=void 0;null!==(s=e.exec(t.value))&&""!==s[a];){var c=s.index;if(0!==a)for(var u=1;u<a;u++)c+=s[u].length;var l=c+s[a].length;o.wrapRangeInMappedTextNode(t,c,l,function(e){return n(s[a],e)},function(t,n){e.lastIndex=n,r(t)})}i()})}},{key:"wrapRangeFromIndex",value:function(e,t,n,r){var i=this;this.getTextNodes(function(o){var a=o.value.length;e.forEach(function(e,r){var s=i.checkWhitespaceRanges(e,a,o.value),c=s.start,u=s.end;s.valid&&i.wrapRangeInMappedTextNode(o,c,u,function(n){return t(n,e,o.value.substring(c,u),r)},function(t){n(t,e)})}),r()})}},{key:"unwrapMatches",value:function(e){for(var t=e.parentNode,n=document.createDocumentFragment();e.firstChild;)n.appendChild(e.removeChild(e.firstChild));t.replaceChild(n,e),this.ie?this.normalizeTextNode(t):t.normalize()}},{key:"normalizeTextNode",value:function(e){if(e){if(3===e.nodeType)for(;e.nextSibling&&3===e.nextSibling.nodeType;)e.nodeValue+=e.nextSibling.nodeValue,e.parentNode.removeChild(e.nextSibling);else this.normalizeTextNode(e.firstChild);this.normalizeTextNode(e.nextSibling)}}},{key:"markRegExp",value:function(e,t){var n=this;this.opt=t,this.log('Searching with expression "'+e+'"');var r=0,i="wrapMatches";this.opt.acrossElements&&(i="wrapMatchesAcrossElements"),this[i](e,this.opt.ignoreGroups,function(e,t){return n.opt.filter(t,e,r)},function(e){r++,n.opt.each(e)},function(){0===r&&n.opt.noMatch(e),n.opt.done(r)})}},{key:"mark",value:function(e,t){var n=this;this.opt=t;var r=0,i="wrapMatches",o=this.getSeparatedKeywords("string"==typeof e?[e]:e),a=o.keywords,s=o.length,c=this.opt.caseSensitive?"":"i";this.opt.acrossElements&&(i="wrapMatchesAcrossElements"),0===s?this.opt.done(r):function e(t){var o=new RegExp(n.createRegExp(t),"gm"+c),u=0;n.log('Searching with expression "'+o+'"'),n[i](o,1,function(e,i){return n.opt.filter(i,t,r,u)},function(e){u++,r++,n.opt.each(e)},function(){0===u&&n.opt.noMatch(t),a[s-1]===t?n.opt.done(r):e(a[a.indexOf(t)+1])})}(a[0])}},{key:"markRanges",value:function(e,t){var n=this;this.opt=t;var r=0,i=this.checkRanges(e);i&&i.length?(this.log("Starting to mark with the following ranges: "+JSON.stringify(i)),this.wrapRangeFromIndex(i,function(e,t,r,i){return n.opt.filter(e,t,r,i)},function(e,t){r++,n.opt.each(e,t)},function(){n.opt.done(r)})):this.opt.done(r)}},{key:"unmark",value:function(e){var t=this;this.opt=e;var n=this.opt.element?this.opt.element:"*";n+="[data-markjs]",this.opt.className&&(n+="."+this.opt.className),this.log('Removal selector "'+n+'"'),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,function(e){t.unwrapMatches(e)},function(e){var r=i.matches(e,n),o=t.matchesExclude(e);return!r||o?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT},this.opt.done)}},{key:"opt",set:function(e){this._opt=r({},{element:"",className:"",exclude:[],iframes:!1,iframesTimeout:5e3,separateWordSearch:!0,diacritics:!0,synonyms:{},accuracy:"partially",acrossElements:!1,caseSensitive:!1,ignoreJoiners:!1,ignoreGroups:0,ignorePunctuation:[],wildcards:"disabled",each:function(){},noMatch:function(){},filter:function(){return!0},done:function(){},debug:!1,log:window.console},e)},get:function(){return this._opt}},{key:"iterator",get:function(){return new i(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)}}]),o}();return function(e){var t=this,n=new o(e);return this.mark=function(e,r){return n.mark(e,r),t},this.markRegExp=function(e,r){return n.markRegExp(e,r),t},this.markRanges=function(e,r){return n.markRanges(e,r),t},this.unmark=function(e){return n.unmark(e),t},this}}); 
function mobile(  ) /* -> bool */  {
         return   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) }
/* import mobile */  {
	 /*  */ }
function showPage( currentPage ,newPage ,ROOT ,LOOP)  {
	 var pages = Array.from( ROOT.getElementsByClassName( "page" ) ) 
	 var pager = ROOT.getElementsByClassName( "pager" )[0] 
	 var n = pages.length 
	 if ( LOOP )  {
		  if ( newPage == n )  {
			   newPage = 0 }
		  if ( newPage == -1 )  {
			   newPage = n - 1 }}
	 else  {
		  if ( newPage == n )  {
			   newPage = n - 1 }
		  if ( newPage == -1 )  {
			   newPage = 0 }}
	 pager.innerText = (newPage+1) + "/" + n +"--" +FILE 
	 pages[currentPage].style.display = "none" 
	 pages[newPage].style.display = "flex" 
	 history.replaceState( null,null,"#"+newPage ) }
function paged( ROOT ,LEFT ,RIGHT ,s ,LOOP ) /* e,e,e,bool,bool */  {
	 //if s = true -> implement search 
	 //loop = true loop from last to first page 
	 //...paged 
	 //...paged 
	 function hi( term , text )  {
		  term = lowerAndRemoveAccents( term ) 
		  var l = term.length 
		  function dummy( text1,text2,text2formated,term )  {
			   var n = text2formated.indexOf( term ) 
			   if ( n == -1 )  {
				    return text1 + text2 }
			   else  {
				    var found =      "<span class='hi'>"      +text2.substr( n,l )      +"</span>" 
				    text1 += text2.substr( 0,n ) + found 
				    text2 = text2.substr( n+l ) 
				    text2formated = text2formated.substr( n+l ) 
				    return dummy( text1,text2,text2formated,term ) }}
		  return dummy( "",text,lowerAndRemoveAccents( text ),term ) }
	 //...paged 
	 function lowerAndRemoveAccents( text )  {
		  text = text.toLocaleLowerCase(  ) 
		  function replaceAll( x,y,text )  {
			   var text1 = text.replace( x,y ) 
			   if ( text1 == text )  {
				    return text }
			   else  {
				    return replaceAll( x,y,text1 ) }}
		  text = replaceAll( "ά","α",text ) 
		  text = replaceAll( "έ","ε",text ) 
		  text = replaceAll( "ή","η",text ) 
		  text = replaceAll( "ί","ι",text ) 
		  text = replaceAll( "ό","ο",text ) 
		  text = replaceAll( "ύ","υ",text ) 
		  text = replaceAll( "ώ","ω",text ) 
		  text = replaceAll( "Ά","Α",text ) 
		  text = replaceAll( "Έ","Ε",text ) 
		  text = replaceAll( "Ή","Η",text ) 
		  text = replaceAll( "Ί","Ι",text ) 
		  text = replaceAll( "Ό","Ο",text ) 
		  text = replaceAll( "Ύ","Υ",text ) 
		  text = replaceAll( "Ώ","Ω",text ) 
		  return text }
	 //...paged 
	 function search( e,ev )  {
		  ev.preventDefault(  ) 
		  var ROOT = e.parentElement.parentElement 
		  var pages = Array.from( ROOT.getElementsByClassName( "page" ) ) 
		  var input = e.getElementsByTagName( "input" )[0].value 
		  var n = pages.length 
		  for ( var i=0 ; i<n ; i++ )  {
			   pages[i].innerHTML = hi( input,pages[i].innerHTML ) }}
	 //...paged 
	 function getPage(  )  {
		  var x = location.hash 
		  if ( x == "" )  {
			   return 0 }
		  else  {
			   return parseInt( x.substr( 1 ) ) }}
	 //...paged 
	 function keyboardNextPage( ROOT,ev )  {
		  if ( !ev.altKey && !ev.ctrlKey && ev.keyCode == 35 )  {
			   var currentPage = getPage() 
			   showPage( currentPage , currentPage+1 , ROOT ,LOOP) }}
	 function keyboardPrevPage( ROOT,ev )  {
		  if ( !ev.altKey && !ev.ctrlKey && ev.keyCode == 36 )  {
			   var currentPage = getPage() 
			   showPage( currentPage , currentPage-1 , ROOT ,LOOP) }}
	 function mouseNext( ROOT,ev )  {
		  var currentPage = getPage() 
		  showPage( currentPage , currentPage+1 ,ROOT ,LOOP) }
	 function mousePrev( ROOT,ev )  {
		  var currentPage = getPage() 
		  showPage( currentPage ,currentPage-1 ,ROOT ,LOOP) }
	 function mobileNext( ROOT )  {
		  var currentPage = getPage() 
		  showPage( currentPage ,currentPage+1 ,ROOT ,LOOP) }
	 function mobilePrev( ROOT )  {
		  var currentPage = getPage() 
		  showPage( currentPage , currentPage-1 ,ROOT ,LOOP) }
	 //...paged 
	 function main( ROOT ,LEFT ,RIGHT ,s )  {
		  var FORM = ROOT.getElementsByTagName( "form" )[0] 
		  if ( s )  {
			   FORM .addEventListener( 'submit' , (ev)=> search( ROOT,ev ) ) }
		  var currentPage = getPage(  ) 
		  showPage( currentPage ,currentPage ,ROOT ,LOOP) 
		  if ( mobile() )  {
			   addEventListener( 'swiped-left' , ( e )=>mobileNext( ROOT ) ) 
			   addEventListener( 'swiped-right' , ( e )=>mobilePrev( ROOT ) ) }
		  else  {
			   COM.addEventListener('keydown' ,(ev)=>     keyboardNextPage(ROOT ,ev)) 
			   COM.addEventListener('keydown' ,(ev)=>    keyboardPrevPage(ROOT ,ev)) 
			   RIGHT .addEventListener('click' ,(ev)=>    mouseNext(ROOT ,ev)) }}
	 main( ROOT ,LEFT ,RIGHT ,s ) } 
function hi_str( x ,y ,clas )  {
	let z = "<span class='" +clas +"'>" +y +"</span>" 
	x = x.replaceAll(y ,z) 
	return   x }
//highlight single string: y 
function hi_line(x ,f ,clas)  {
	//str ,(str->bool) ,str 
	if (f(x))  {
		return "<span class='" +clas +"'>" +x +"</span>" }
	return x }
function hi_enclosed( x ,delimiter ,clas )  {
	let xs = x.split(delimiter) 
	let n = xs.length 
	if ( n == 1 )  {
		return   x }
	let y = "" 
	for ( var i=0 ; i<n-1 ; i++ )  {
		if (i%2 == 0)  {
			y += xs[i] +"<span class='" +clas +"'>" +delimiter }
		else  {
			y += xs[i] +delimiter +"</span>" }}
	y += xs[n-1] 
	return y }
//highlight enclosed regions that start and end with the same delimiter 
function hi( x )  {
	let xs = window.location.href.split(".") 
	if ( xs.length > 1 )  {
		let ext = xs[1].split("/")[0] 
		switch (ext)  {
			case "cass": return cass(x) 
			case "jass": return jass(x) 
			case "rass": return rass(x) }
		return x }}
//x: innerText 
function cass( line )  {
	let ls = line.split(":") 
	if ( ls.length == 2 )  {
		line = ls[0] +":<em>" +ls[1] +"</em>" }
	let t = line.trim() 
	let p = comment_prefix(false) 
	if ( t.startsWith(p) )  {
		line = line.replace(p ,comment_prefix(true)) 
		line = "<span class='comment'>" +line +"</span>" }
	return line }
function jass_function( line )  {
	let tab = "nstoeadrlyiuuuut456iunstaeozxc" +"456uzxcaeo456uzxcaeo456uzxc" 
	if (line .includes(tab +"function" +tab +"("))  {
		return true }
	if (line .startsWith("function" +tab))  {
		return true }
	if (line .startsWith(tab +"function" +tab))  {
		return true }
	if (line .startsWith(tab +tab +"function" +tab))  {
		return true }
	if (line .startsWith(tab +tab +tab +"function" +tab))  {
		return true }
	if (line .startsWith("async" +tab +"function"))  {
		return true }
	if (line .startsWith(tab +"async" +tab +"function"))  {
		return true }
	if (line .startsWith(tab +tab +"async" +tab +"function"))  {
		return true }
	if (line .includes(tab +"function"))  {
		return true }
	return false }
function jass( line )  {
	let t = line.trim() 
	let p = comment_prefix(false) 
	if ( t.startsWith(p) )  {
		line = line.replace(p ,comment_prefix(true)) 
		line = "<span class='comment'>" +line +"</span>" }
	line = untab(line) 
	line = hi_line(line ,jass_function ,"function") /*"*/ 
	line = hi_str(line ,"(" ,"paren") 
	line = hi_str(line ,")" ,"paren") 
	line = hi_str(line ,"---&gt;" ,"return") /*"*/ 
	line = hi_enclosed(line ,"&quot;" ,"str") /*"*/ 
	return retab(line) }
function rass_function( line )  {
	let tab = "nstoeadrlyiuuuut456iunstaeozxc" +"456uzxcaeo456uzxcaeo456uzxc" 
	if (line .startsWith("type" +tab))  {
		return true }
	if (line .includes(tab +"type" +tab))  {
		return true }
	if (line .startsWith("trait" +tab))  {
		return true }
	if (line .includes(tab +"trait" +tab))  {
		return true }
	if (line .startsWith("enum" +tab))  {
		return true }
	if (line .includes(tab +"enum" +tab))  {
		return true }
	if (line .includes("struct" +tab))  {
		return true }
	if (line .startsWith("fn" +tab))  {
		return true }
	if (line .startsWith("fn" +tab))  {
		return true }
	if (line .includes("fn" +tab))  {
		return true }
	if (line .startsWith("async" +tab +"fn" +tab))  {
		return true }
	if (line .startsWith(tab +"async" +tab +"fn" +tab))  {
		return true }
	if (line .startsWith("pub" +tab +"fn" +tab))  {
		return true }
	if (line .startsWith(tab +"pub" +tab +"fn" +tab))  {
		return true }
	if (line .startsWith("pub" +tab +"async" +tab +"fn" +tab))  {
		return true }
	if (line .startsWith(tab +"pub" +tab +"async" +tab +"fn" +tab))  {
		return true }
	return false }
function rass( line )  {
	let t = line.trim() 
	let p = comment_prefix(false) 
	if ( t.startsWith(p) )  {
		line = line.replace(p ,comment_prefix(true)) 
		line = "<span class='comment'>" +line +"</span>" }
	line = untab(line) 
	line = hi_line(line ,rass_function ,"function") /*"*/ 
	line = hi_str(line ,"(" ,"paren") 
	line = hi_str(line ,")" ,"paren") 
	line = hi_str(line ,"---&gt;" ,"return") /*"*/ 
	line = hi_enclosed(line ,"&quot;" ,"str") /*"*/ 
	return retab(line) }
function toml( line )  {
	let t = line.trim() 
	let p = comment_prefix(false) 
	if ( t.startsWith(p) )  {
		line = line.replace(p ,comment_prefix(true)) 
		line = "<span class='comment'>" +line +"</span>" }
	line = untab(line) 
	line = hi_str(line ,"(" ,"paren") 
	line = hi_str(line ,")" ,"paren") 
	line = hi_enclosed(line ,"&quot;" ,"str") /*"*/ 
	return retab(line) }
function txt( line )  {
	return retab(line) } 
/* */  {
	/*  */ }
function suggest()  {
	let line = IN.value 
	let cursor = IN .selectionStart 
	let n = line.length 
	line = line .slice(0 ,cursor) 
	let words = line .trim()  .replaceAll("\t" ," ")  .replaceAll("\n" ," ")  .replaceAll("," ," ")  .split(" ")  .filter((w)=> w != " ") 
	let ws = words .pop() .split("`") 
	if (ws .length == 1)  {
		return }
	let word = ws[0] 
	let x = "<ol>" 
	if ( word.length > 0 )  {
		COMPLETIONS   .filter((c)=> c .includes(word))   .map((c)=> x += "<li>" +c +"</li>") }
	AC.innerHTML = x +"</ol>" }
function complete(  )  {
	let line = IN.value 
	let cursor = IN .selectionStart 
	let before = line .slice(0 ,cursor) 
	let after = line .slice(cursor) 
	let chars = before .split("") .reverse() 
	let i1 = chars .indexOf(" ") 
	if ( i1 == -1 )  {
		i1 = 1000 }
	let i2 = chars .indexOf("\t") 
	if ( i2 == -1 )  {
		i2 = 1000 }
	let i3 = chars .indexOf("\n") 
	if ( i3 == -1 )  {
		i3 = 1000 }
	let i4 = chars .indexOf(",") 
	if ( i4 == -1 )  {
		i4 = 1000 }
	let i = Math .min(i1 ,i2) 
	i = Math .min(i ,i3) 
	i = Math .min(i ,i4) 
	let reversed = chars .join("") 
	let reversed_word = reversed .slice(0 ,i) 
	let rs = reversed_word .split("`") 
	if ( rs.length != 2 )  {
		return false }
	let n = parseFloat(rs[0]) 
	let completions = Array .from(AC .getElementsByTagName( "li" )) 
	if ( n > completions.length || n < 0)  {
		return false }
	let completion = completions[n-1].innerText 
	before = before.slice(0 ,-reversed_word.length) 
	IN.value = before +completion +after 
	cursor = (before +completion).length 
	IN .setSelectionRange(cursor ,cursor) 
	return true }
function completions()  {
	let e = ext() 
	switch (e)  {
		case "cass": return COMPLETE_CSS 
		case "jass": return COMPLETE_JAVASCRIPT 
		case "rass": return COMPLETE_RUST 
		case "rass": return COMPLETE_TOML 
		default:  return COMPLETE_TXT }}
var COMPLETE_CSS = [] 
COMPLETE_CSS .push("@media all and (max-width: 900px)") 
COMPLETE_CSS .push("&#123;&#123; call .Import \"..css\" &#125;&#125;") 
COMPLETE_CSS .push("overflow-wrap: break-word") 
COMPLETE_CSS .push("word-break: break-all") 
COMPLETE_CSS .push("text-align: center") 
COMPLETE_CSS .push("text-align: right") 
COMPLETE_CSS .push("text-align: left") 
COMPLETE_CSS .push("padding:") 
COMPLETE_CSS .push("padding-left:") 
COMPLETE_CSS .push("padding-right:") 
COMPLETE_CSS .push("padding-top:") 
COMPLETE_CSS .push("padding-bottom:") 
COMPLETE_CSS .push("margin:") 
COMPLETE_CSS .push("margin-left:") 
COMPLETE_CSS .push("margin-right:") 
COMPLETE_CSS .push("margin-top:") 
COMPLETE_CSS .push("margin-bottom:") 
COMPLETE_CSS .push("background-color:") 
COMPLETE_CSS .push("color:") 
COMPLETE_CSS .push("position: relative") 
COMPLETE_CSS .push("position: absolute") 
COMPLETE_CSS .push("position: sticky") 
COMPLETE_CSS .push("position: fixed") 
COMPLETE_CSS .push("display: none") 
COMPLETE_CSS .push("display: flex") 
COMPLETE_CSS .push("flex-direction: column") 
COMPLETE_CSS .push("display: grid") 
COMPLETE_CSS .push("grid-template-columns: 1fr 1fr") 
COMPLETE_CSS .push("grid-gap: ") 
COMPLETE_CSS .push("display: none") 
COMPLETE_CSS .push("box-shadow: inset 0 0 2rem #") 
COMPLETE_CSS .push("border: 1px solid #") 
var COMPLETE_JAVASCRIPT = [] 
COMPLETE_JAVASCRIPT .push("&#123;&#123; call .Import \"..js\" &#125;&#125;") 
COMPLETE_JAVASCRIPT .push("Array .from()") 
COMPLETE_JAVASCRIPT .push("parseFloat()") 
COMPLETE_JAVASCRIPT .push("(let x of xs)") 
COMPLETE_JAVASCRIPT .push("(var i=0 ;i&lt;n ;i++)") 
COMPLETE_JAVASCRIPT .push(".length") 
COMPLETE_JAVASCRIPT .push(".concat()") 
COMPLETE_JAVASCRIPT .push(".shift()") 
COMPLETE_JAVASCRIPT .push(".push()") 
COMPLETE_JAVASCRIPT .push(".split()") 
COMPLETE_JAVASCRIPT .push(".filter()") 
COMPLETE_JAVASCRIPT .push(".indexOf()") 
COMPLETE_JAVASCRIPT .push("window.onload = ") 
COMPLETE_JAVASCRIPT .push(".startsWith()") 
COMPLETE_JAVASCRIPT .push(".dataList") 
COMPLETE_JAVASCRIPT .push(".dataset") 
COMPLETE_JAVASCRIPT .push("document") 
COMPLETE_JAVASCRIPT .push("return") 
COMPLETE_JAVASCRIPT .push("pompt()") 
COMPLETE_JAVASCRIPT .push("alert()") 
COMPLETE_JAVASCRIPT .push("console.log()") 
COMPLETE_JAVASCRIPT .push("function") 
COMPLETE_JAVASCRIPT .push(".value") 
COMPLETE_JAVASCRIPT .push("JSON.stringify()") 
COMPLETE_JAVASCRIPT .push("JSON.parse()") 
COMPLETE_JAVASCRIPT .push(".parentElement") 
COMPLETE_JAVASCRIPT .push(".querySelector()") 
COMPLETE_JAVASCRIPT .push(".getElementsByTagName()") 
COMPLETE_JAVASCRIPT .push(".getElementsByClassName()") 
COMPLETE_JAVASCRIPT .push("addEventListener(\"\" ,)") 
COMPLETE_JAVASCRIPT .push("location.assign(\"\")") 
COMPLETE_JAVASCRIPT .push("location.replace(\"\")") 
COMPLETE_JAVASCRIPT .push("location.reload()") 
COMPLETE_JAVASCRIPT .push(".style.display") 
COMPLETE_JAVASCRIPT .push(".innerHTML") 
COMPLETE_JAVASCRIPT .push(".innerText") 
COMPLETE_JAVASCRIPT .push(".replaceWith()") 
COMPLETE_JAVASCRIPT .push(".remove()") 
COMPLETE_JAVASCRIPT .push(".classList.add()") 
COMPLETE_JAVASCRIPT .push(".classList.remove()") 
COMPLETE_JAVASCRIPT .push(".classList.replace()") 
COMPLETE_JAVASCRIPT .push(".classList.contains()") 
COMPLETE_JAVASCRIPT .push(".classList.forEach()") 
COMPLETE_JAVASCRIPT .push(".setAttribute()") 
COMPLETE_JAVASCRIPT .push(".removeAttribute()") 
var COMPLETE_RUST = [] 
COMPLETE_RUST .push(".aql_str(&!!(\"FOR i IN _col_ FILTER i._key == '{}' RETURN i \" ,key)) .await ... ") 
COMPLETE_RUST .push("#[derive(Debug ,Clone ,Serialize ,Deserialize)]") 
COMPLETE_RUST .push("#[derive(Debug ,Serialize ,Deserialize)]") 
COMPLETE_RUST .push("#![allow(non_snake_case)]") 
COMPLETE_RUST .push("#![allow(dead_code)]") 
COMPLETE_RUST .push("#[allow(unused_imports)]") 
COMPLETE_RUST .push("#[get(\"/\")]") 
COMPLETE_RUST .push("#[post(\"/\")]") 
COMPLETE_RUST .push("return ") 
COMPLETE_RUST .push("println!(\"{}\" ,)") 
COMPLETE_RUST .push("println!(\"{:?}\" ,)") 
COMPLETE_RUST .push("println!(\"{:#?}\" ,)") 
var COMPLETE_TOML = [] 
var COMPLETE_TXT = []  
var      FILE = file() 
const    M = new Mark(PAGED) 
var      DOUBLE_END = 0 
var      REPLACE = true 
var      COMPLETIONS = completions() 
//To add a new extention (EXT): 
//(1) add case @comment_prefix() 
//(2) add case @function completions() @_complete.jass 
//(3) add var COMPLETE_EXT @_complete.jass 
//(4) add function EXT() @_hi.jass 
//(5) create new cass file hi_EXT.cass 
//(6) add script: edith_EXT -even if it does nothing- 
async function ajx( x, url )  {
	if ( ( typeof x ) != 'string' )  {
		alert( "FIRST ARG TO 'ajx' MUST BE STRING" ) 
		return }
	var p = new Promise(function(ok ,er)  {
		var r = new XMLHttpRequest() 
		r .open("POST" ,url ,true) 
		r .setRequestHeader("Content-Type", "application/json") 
		r .send(x) 
		r .onreadystatechange = function (  )  {
			if ( r.readyState == 4 )  {
				if ( r.status == 200 )  {
					ok(r.responseText) }
				else  {
					er( r.status ) }}}}
	) 
	return p }
function prefixTabs( x )  {
	let tabs = "" 
	function collect( y )  {
		if ( y.slice(0 ,1) == "\t" )  {
			tabs += "\t" 
			collect(y.slice(1)) }}
	collect(x) 
	return tabs }
function apply( f ) /* (li)-> */  {
	let p = page() 
	let sel = Array.from(p.getElementsByClassName( "sel" )) 
	if ( sel.length > 0 )  {
		sel.map(f) }
	else  {
		f(cursor(p)) }}
//if there are selected lines in cur page apply f to them  else apply f to cursor li 
function insertAfter( node ,newNode )  {
	node.parentNode.insertBefore(newNode ,node.nextSibling) }
function insertBefore( node ,newNode )  {
	node.parentNode.insertBefore(newNode ,node) }
function cursor( p )  {
	let c = p.querySelector(".cursor") 
	if ( c == null )  {
		let li = document.createElement("li") 
		li.setAttribute("class" ,"cursor") 
		let ul = p.querySelector("ul") 
		ul.appendChild(li) 
		p.appendChild(ul) 
		return li }
	return c }
function page( )  {
	let n = parseFloat(document.location.hash.slice( 1 )) +2 
	return document .querySelector( ".page:nth-child(" +n +")" ) }
function autosize( e )  {
	let lines = e.value.split( "\n" ) 
	let n = lines.length 
	e.setAttribute( "rows" ,n) }
//autosize height of textarea 
function find_next(direction)  {
	let p = page() 
	let ps = PAGED .getElementsByClassName( "page" ) 
	let n = ps.length 
	let cur = parseFloat( document.location.hash.slice( 1 ) ) 
	if ( direction == 1 )  {
		for ( var i=cur+1 ; i<n ; i++ )  {
			let mark = ps[i].querySelector("mark") 
			if ( mark != null )  {
				showPage( cur ,i ,PAGED ,true ) 
				break }}}
	else  {
		for ( var i=cur-1 ; i>-1 ; i-- )  {
			let mark = ps[i].querySelector("mark") 
			if ( mark != null )  {
				showPage( cur ,i ,PAGED ,true ) 
				break }}}
	return }
function replace_selected( v )  {
	let p = page() 
	let mark = p.querySelector("mark") 
	let marks = Array .from(p.getElementsByTagName( "mark" ))   .filter((m)=> m != null)  .map((m)=> m.replaceWith(v)) }
function ext(  )  {
	let e = "" 
	let xs = window.location.href.split(".") 
	if ( xs.length > 1 )  {
		e = xs[1].split("/")[0] }
	return e }
function comment_prefix( html )  {
	let prefix = "" 
	if ( ext() == "cass" || ext() == "jass" || ext() == "rass" )  {
		prefix = "//" 
		if ( html )  {
			return "<span class='comment_symbol'>" +prefix +"</span>" }
		return prefix }
	if ( ext() == "toml" )  {
		prefix = "#" 
		if ( html )  {
			return "<span class='comment_symbol'>" +prefix +"</span>" }
		return prefix }
	prefix = "#" 
	if ( html )  {
		return "<span class='comment_symbol'>" +prefix +"</span>" }
	return prefix }
//if html==true reture html else return text 
function comment( li )  {
	let line = li.innerHTML 
	let t = line.trim() 
	li.innerHTML = "<span class='comment'>" +line.replace(t ,comment_prefix(true) +t) +"</span>" }
function uncomment( li )  {
	li.querySelector(".comment_symbol").remove() 
	li.innerHTML = li.querySelector(".comment").innerHTML }
function linize( l )  {
	let ts = prefixTabs(l) 
	l = l.trim() 
	l = l .replaceAll("\n" ," ") 
	l = l .replaceAll("\t" ," ") 
	return ts +l }
//before saving 
function untab( x )  {
	x = x .replaceAll("\t"   ,"nstoeadrlyiuuuut456iunstaeozxc" +"456uzxcaeo456uzxcaeo456uzxc") 
	x = x .replaceAll("\n"   ,"nstoeadyiunstaeodrlyiu1233u21i" +"y123oeaueo456uzxcaeo456uzxc") 
	return   x }
function retab( x )  {
	x = x .replaceAll(  "nstoeadrlyiuuuut456iunstaeozxc" +"456uzxcaeo456uzxcaeo456uzxc" ,"\t") 
	x = x .replaceAll(  "nstoeadyiunstaeodrlyiu1233u21i" +"y123oeaueo456uzxcaeo456uzxc" ,"\n") 
	return   x }
function file(  )  {
	let hs = window.location.href.split("/") 
	hs.shift() 
	hs.shift() 
	hs.shift() 
	hs.pop() 
	return hs.join("/") }
//TEXT manipulation 
function move( direction ) /* 1|-1 */  {
	let c = cursor(page()) 
	let next = c.nextSibling 
	if ( direction == -1 )  {
		next = c.previousSibling }
	if ( next == null || next.tagName == undefined )  {
		return false }
	c.classList.remove("cursor") 
	next.classList.add("cursor") 
	return true }
function newLineAfter(  )  {
	let c = cursor(page()) 
	c.classList.remove("cursor") 
	let li = document.createElement("li") 
	li.setAttribute("class" ,"cursor") 
	insertAfter(c ,li) 
	IN.focus() 
	IN.value = prefixTabs(c.innerText) }
function newLineBefore(  )  {
	let c = cursor(page()) 
	c.classList.remove("cursor") 
	let li = document.createElement("li") 
	li.setAttribute("class" ,"cursor") 
	insertBefore(c ,li) 
	IN.focus() }
function insertTab( li )  {
	function ins( l )  {
		return "\t" +l }
	let l = li.innerText 
	let ls = l.split("\n") 
	li.innerHTML = hi(escapeHtml(ls .map(ins) .join("\n"))) }
function removeTab( li )  {
	function rem( l )  {
		if ( l.slice(0,1) == "\t" )  {
			return l.slice(1) }
		return l }
	let l = li.innerText 
	let ls = l.split("\n") 
	li.innerHTML = hi(escapeHtml(ls .map(rem) .join("\n"))) }
function delLine( li )  {
	if ( li.classList.contains("cursor") )  {
		if ( !move(1) )  {
			move(-1) }}
	li.remove() }
function copyLines( before )  {
	let sel = PAGED.getElementsByClassName( "sel" ) 
	let p = page() 
	let n = sel.length 
	if ( n > 0 )  {
		let c = cursor(p) 
		if ( before )  {
			for ( var i=0 ; i<n ; i++ )  {
				let clone = sel[i].cloneNode(true) 
				clone.classList.remove("sel") 
				clone.classList.remove("cursor") 
				insertBefore(c ,clone) }}
		else  {
			for ( var i=n-1 ; i>-1 ; i-- )  {
				let clone = sel[i].cloneNode(true) 
				clone.classList.remove("sel") 
				clone.classList.remove("cursor") 
				insertAfter(c ,clone) }
			return }}}
function insert_lines( s ,e ,before)  {
	let p = page() 
	let ls = Array.from(p. getElementsByTagName("li")) 
	ls = ls.slice(s-1 ,e) 
	let n = ls.length 
	let c = cursor(p) 
	if ( before )  {
		for ( var i=0 ; i<n ; i++ )  {
			let clone = ls[i].cloneNode(true) 
			clone.classList.remove("cursor") 
			insertBefore(c ,clone) }}
	else  {
		for      ( var i=n-1 ; i>-1 ; i-- )  {
			let clone = ls[i].cloneNode(true) 
			clone.classList.remove("cursor") 
			insertAfter(c ,clone) }}}
function delete_line_range(s ,e)  {
	s = s -1 
	let p = page() 
	let ps = Array.from(p .getElementsByTagName("li")) 
	for (var i=s ;i<e ;i++)  {
		ps[i].remove() }}
//delete lines without moving cursor 
function commentLines(f)  {
	let p = page() 
	let ss = Array .from(p.getElementsByClassName( "sel" )) 
	if ( ss.length > 0 )  {
		ss .map(f) }
	else  {
		f(cursor(p)) }}
function selectLine(  )  {
	let c = cursor(page()) 
	if ( c.classList.contains("sel") )  {
		c.classList.remove("sel") }
	else  {
		c.classList.add("sel") }}
function unselect_all()  {
	Array.from(PAGED. getElementsByClassName("sel")) .map((s)=> s.classList.remove("sel")) 
	save_all() }
function into_lis(  )  {
	let c = cursor(page()) 
	let cs = c .innerText.split("\n") 
	c.innerHTML = hi(escapeHtml(cs[0])) 
	var  n = cs.length 
	for ( var i=1 ; i<n ; i++ )  {
		let li = document.createElement("li") 
		li.innerHTML = hi(escapeHtml(cs[i])) 
		insertAfter(c ,li) 
		c = li }}
//split current -multiline- li into multiple li elements 
function resetCom(  )  {
	COM.value = "" 
	IN.focus() 
	COM.focus() }
//The change of focus to IN and then back to COM is to hide the COM autocompletion 
//PAGES 
async function del_page(  )  {
	let curPage = parseFloat( document.location.hash.slice( 1 )) +1000 
	let lastPage = Array .from(document.getElementsByClassName( "page" )).length +999 
	let o =  {
		CurPage: curPage, 
		LastPage: lastPage, }
	await ajx( JSON.stringify(o) ,"del/" ) 
	if (curPage == lastPage)  {
		document.location.hash = "#" +(curPage -1000 -1) }
	location .reload() }
//Delete current page 
async function ins_page_after(  )  {
	let n = parseFloat( document.location.hash.slice( 1 )) 
	let o =  {
		CurPage: n +1001, 
		LastPage: Array .from(document.getElementsByClassName( "page" )).length +1000, }
	await ajx( JSON.stringify(o) ,"ins/" ) 
	document.location.hash = "#" +(n+1) 
	location .reload() }
async function ins_page_before(  )  {
	let n = parseFloat( document.location.hash.slice( 1 )) 
	let o =  {
		CurPage: n +1000, 
		LastPage: Array .from(document.getElementsByClassName( "page" )).length +1000, }
	await ajx( JSON.stringify(o) ,"ins/" ) 
	location .reload() }
//KEYS 
function inKeys(  )  {
	function keydown( ev )  {
		//console.log( ev.keyCode ) 
		if (ev.keyCode == 27) /* esc */  {
			ev.preventDefault() 
			document.execCommand('insertText', true, '\n') 
			return }
		if (ev.keyCode == 9) /* tab */  {
			ev.preventDefault() 
			if (!complete())  {
				document.execCommand('insertText', true, '\t') }
			return }
		if (ev.keyCode == 13) /* return */  {
			ev.preventDefault() 
			let a = cursor(page()) 
			a.innerHTML = hi(escapeHtml(IN.value)) 
			IN.value = "" 
			COM.focus() 
			INc.style.zIndex = -1 
			AC.innerHTML = "" 
			save() }
		if (ev.keyCode == 35) /* double end */  {
			DOUBLE_END += 1 
			if ( DOUBLE_END == 2 )  {
				DOUBLE_END = 0 
				ev.preventDefault() 
				let a = cursor(page()) 
				a.innerHTML = hi(escapeHtml(IN.value)) 
				IN.value = "" 
				COM.focus() 
				INc.style.zIndex = -1 
				AC.innerHTML = "" 
				save() 
				return }}
		else  {
			if ( DOUBLE_END == 1 )  {
				DOUBLE_END = 0 }}
		//if (ev.keyCode == 32) /* space */  {
			//complete() 
			//return }
		return }
	IN .addEventListener('keydown' ,keydown) 
	IN .addEventListener('input' ,suggest) }
function comKeys(  )  {
	function keydown( ev )  {
		//console.log(ev.keyCode) 
		if (ev.keyCode == 8) /* backspace */  {
			if (   COM.value .startsWith("/")    || COM.value .startsWith(">")    || COM.value .startsWith("<")    || COM.value .startsWith("h:")    )  {
				return }
			ev.preventDefault() 
			resetCom() 
			return }
		if ( ev.shiftKey )  {
			if ( ev.keyCode == 38 || ev.keyCode == 40 )  {
				/* down|up */ 
				selectLine() }}
		if (ev.keyCode == 37) /* left */  {
			if (COM.value .startsWith("h:"))  {
				return }
			apply(removeTab) 
			save() 
			return }
		if (ev.keyCode == 39) /* right */  {
			if (COM.value .startsWith("h:"))  {
				return }
			apply(insertTab) 
			save() 
			return }
		if (ev.keyCode == 32) /* space */  {
			if (COM.value .startsWith("h:"))  {
				return }
			ev.preventDefault() 
			if (ev.getModifierState("CapsLock"))  {
				newLineBefore() }
			else  {
				newLineAfter() }
			INc.style.zIndex = 1 
			return }
		if (ev.keyCode == 9) /* tab --edit line */  {
			ev.preventDefault() 
			INc.style.zIndex = 1 
			IN.value = cursor(page()).innerText 
			IN.focus() 
			autosize(IN) 
			return }
		if (ev.keyCode == 40) /* . down */  {
			if (COM.value .startsWith("h:"))  {
				return }
			ev.preventDefault() 
			move(1) 
			save() 
			return }
		if (ev.keyCode == 38) /* , (up) */  {
			if (COM.value .startsWith("h:"))  {
				return }
			ev.preventDefault() 
			move(-1) 
			save() 
			return }
		return }
	COM.addEventListener('keydown' ,keydown) 
	return }
async function execute( ev )  {
	ev.preventDefault() 
	let v = COM.value 
	//...execute 
	//...execute LINE EDITING 
	if ( v == "d" ) /* delete lines in current page */  {
		apply(delLine) 
		resetCom() 
		save() 
		return }
	if ( v == "p" ) /* paste selected lines in current page before cursor */  {
		copyLines(true) 
		save() 
		return }
	if ( v == "P" ) /* paste selected lines in current page after cursor */  {
		copyLines(false) 
		save() 
		return }
	if ( v == "#" ) /* comment selected lines in current page */  {
		commentLines(comment) 
		save() 
		return }
	if ( v == "##" ) /* uncomment selected lines in current page */  {
		commentLines(uncomment) 
		save() 
		return }
	if ( v == "hi" ) /* hi cur page */  {
		Array.from(page().getElementsByTagName( "li" ))  .map((l)=> l.innerHTML = hi(escapeHtml(l.innerText))) 
		save() 
		return }
	if ( v == "l" ) /* */  {
		into_lis() 
		resetCom() 
		save() 
		return }
	if (v == "x")  {
		unselect_all() 
		resetCom() 
		return }
	if (v.startsWith("y"))  {
		let vs = v.slice(1).split(".") 
		if (vs.length == 1)  {
			let s = parseFloat(vs[0]) 
			insert_lines(s ,s ,false) }
		else  {
			let s = parseFloat(vs[0]) 
			let e = parseFloat(vs[1]) 
			insert_lines(s ,e ,false) }
		save() 
		return }
	if (v.startsWith("d") && v != "d" && v != "dd")  {
		let vs = v.slice(1).split("..") 
		let s 
		let e 
		if (vs.length == 1)  {
			s = parseFloat(vs[0]) 
			e = s }
		if (vs.length == 2)  {
			s = parseFloat(vs[0]) 
			e = parseFloat(vs[1]) }
		delete_line_range(s ,e) 
		resetCom() 
		save() 
		return }
	//...execute 
	//...execute TABS 
	if ( v == "w" ) /* open in new window */  {
		window .open( window.location.href ,"_blank"    ,"location=yes,status=yes" ) 
		resetCom() 
		return }
	if ( v == "t" ) /* open in new tab */  {
		window .open( window.location.href ,"_blank" ) 
		resetCom() 
		return }
	//...execute PAGE HEADER 
	if ( v.startsWith("h:") )  {
		let h = v.slice(2) 
		let p = page() 
		if (h == "")  {
			COM .value = "h:" +(p .querySelector("h1") .innerText) 
			return }
		p .querySelector("h1") .innerText = v .slice(2) 
		resetCom() 
		save() 
		return }
	//...execute PAGES 
	if ( Vnumeric( v ) ) /* jump to page */  {
		let n = parseFloat( v ) -1 
		let cur = parseFloat( document.location.hash.slice( 1 ) ) 
		showPage( cur ,n ,PAGED ,true ) 
		resetCom() 
		return }
	if ( v == "dd" ) /* delete current page */  {
		del_page() 
		resetCom() 
		return }
	if ( v == "ia" ) /* insert new page after cur page */  {
		ins_page_after() 
		resetCom() 
		return }
	if ( v == "ib" ) /* insert new page before cur page */  {
		ins_page_before() 
		COM.value = "" 
		return }
	if ( v == "sc" ) /* split current page into 2 */  {
		split_page() 
		COM.value = "" 
		return }
	//...execute SEARCH 
	if ( v .startsWith( "/" ) ) /* search */  {
		if ( v == "/" )  {
			M.unmark() 
			resetCom() 
			save_all() 
			return }
		v = v .slice( 1 ) 
		//M.unmark({done: function(){M.mark(v)}}) 
		M.mark(v) 
		resetCom() 
		save() 
		return }
	if (v .startsWith(">")) /* find next*/  {
		if ( v == ">" )  {
			find_next(1) 
			return }
		v = v .slice(1) 
		if ( REPLACE )  {
			replace_selected(v) 
			REPLACE = false 
			save() }
		else  {
			find_next(1) 
			REPLACE = true }
		return }
	if (v .startsWith("<")) /* find previous */  {
		if ( v == "<" )  {
			find_next(-1) 
			return }
		v = v .slice(1) 
		if ( REPLACE )  {
			replace_selected(v) 
			REPLACE = false 
			save() }
		else  {
			find_next(-1) 
			REPLACE = true }
		return }
	// find is a 2 step command and depends on the REPLACE var if REPLACE, replace marked text in current page else find next EX: find 'drl' and replace with 'nst' 1. /drl  2. >nst 
	//...execute LINKS 
	if ( v == "i" ) /* */  {
		let n = parseFloat( document.location.hash.slice( 1 )) 
		location .assign("index/#" +n) 
		return }
	if ( v == "help" )  {
		location .assign("/help/") 
		return }
	if ( v == "ter" )  {
		let r = await ajx("" ,"terminal/") 
		resetCom() 
		return }
	if ( v == "commit" )  {
		let r = await ajx("" ,"commit/") 
		resetCom() 
		return }
	if ( v == "c" )  {
		location .reload() 
		WALL.style.display = "flex" 
		let n = parseFloat( document.location.hash.slice( 1 )) 
		location .assign("compile/" +n +"/") 
		return }
	//...execute 
	return }
async function save(  )  {
	let n = parseFloat( document.location.hash.slice( 1 ) ) +1000 
	let p = page() 
	let t = "" 
	let ls = Array.from(p.getElementsByTagName( "li" )) 
	function f( li )  {
		t += linize(li.innerText) +"\n" }
	ls.map(f) 
	let o =  {
		Html: remove_empty_lines(p.innerHTML), 
		Text: t, 
		N: n, }
	await ajx(JSON.stringify(o) ,"save/") }
async function save_all()  {
	let ps = Array.from(PAGED. getElementsByClassName("page")) 
	var n = ps.length 
	for ( var i=0 ; i<n ; i++ )  {
		var t = "" 
		Array.from(ps[i].getElementsByTagName( "li" ))  .map((l)=> t += linize(l.innerText) +"\n") 
		let: o =  {
			Html: remove_empty_lines(ps[i].innerHTML), 
			Text: t, 
			N: i +1000, }
		await ajx(JSON.stringify(o) ,"save/") }}
function remove_empty_lines(x)  {
	return x  .trim() .split("\n")  .map((l)=> l.trim())  .filter((l)=> l != "")  .join("\n") }
function main(  )  {
	comKeys() 
	inKeys() 
	paged( PAGED ,LEFT ,RIGHT ,false ,false ) 
	COM.focus() 
	return }
main() 