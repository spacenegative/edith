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
