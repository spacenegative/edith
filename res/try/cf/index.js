/* import */  {
         /*  */ }
//       HELPERS 
function insertAfter( node ,newNode )  {
         node.parentNode.insertBefore(newNode ,node.nextSibling) }
function insertBefore( node ,newNode )  {
         node.parentNode.insertBefore(newNode ,node) }
function cursor( p )  {
         return   p.querySelector(".cursor") }
function page( )  {
         let n = parseFloat(document.location.hash.slice( 1 )) +1 
         return   document .querySelector( ".page:nth-child(" +n +")" ) }
function autosize( e )  {
         let lines = e.value.split( "\n" ) 
         let n = lines.length 
         e.setAttribute( "rows" ,n) }
//       autosize height of textarea 
function move( direction ) /* 1|-1 */  {
         let c = cursor(page()) 
         let next = c.nextSibling 
         if       ( direction == -1 )  {
                  next = c.previousSibling }
         if       ( next == null )  {
                  return }
         c.classList.remove("cursor") 
         next.classList.add("cursor") }
function newLineAfter(  )  {
         let c = cursor(page()) 
         c.classList.remove("cursor") 
         let li = document.createElement("li") 
         li.setAttribute("class" ,"cursor") 
         insertAfter(c ,li) 
         IN.focus() }
function newLineBefore(  )  {
         let c = cursor(page()) 
         c.classList.remove("cursor") 
         let li = document.createElement("li") 
         li.setAttribute("class" ,"cursor") 
         insertBefore(c ,li) 
         IN.focus() }
function insertTag(  )  {
         let c = cursor(page()) 
         let ls = c.innerText.split("\n") 
         ls = ls.map((l)=> "\t" +l) 
         c.innerHTML = format(ls.join("\n")) }
function removeTag(  )  {
         let c = cursor(page()) 
         let t = c.innerText 
         if       ( t.slice(0,1) == "\t" )  {
                  let ls = t.split("\n") 
                  ls = ls.map((l)=> l.slice(1)) 
                  c.innerHTML = format(ls.join("\n")) }}
function pageKeys(  )  {
         function keydown( ev )  {
                  //alert( ev.keyCode ) 
                  if       (ev.keyCode == 37) /* right */  {
                           removeTag() }
                  if       (ev.keyCode == 39) /* right */  {
                           insertTag() }
                  if       (ev.keyCode == 220) /* \ */  {
                           ev.preventDefault() 
                           newLineBefore() }
                  if       (ev.keyCode == 13) /* return */  {
                           ev.preventDefault() 
                           newLineAfter() }
                  if       (ev.keyCode == 93) /* mod */  {
                           ev.preventDefault() 
                           IN.value = cursor(page()).innerText 
                           IN.focus() 
                           autosize(IN) 
                           return }
                  if       (ev.keyCode == 40) /* down */  {
                           ev.preventDefault() 
                           move(1) 
                           return }
                  if       (ev.keyCode == 38) /* up */  {
                           ev.preventDefault() 
                           move(-1) 
                           return }
                  return }
         Array .from(document.getElementsByClassName( "page" )) 
         .map((s)=> s .addEventListener('keydown' ,keydown)) }
function inputKeys(  )  {
         function keydown( ev )  {
                  //alert( ev.keyCode ) 
                  if       (ev.keyCode == 9) /* tab */  {
                           ev.preventDefault() 
                           document.execCommand('insertText', true, '\t') 
                           return }
                  if       (ev.keyCode == 93) /* mod */  {
                           ev.preventDefault() 
                           let a = cursor(page()) 
                           a.innerHTML = format(IN.value) 
                           IN.value = "" 
                           page().focus() 
                           return }
                  return }
         IN .addEventListener('keydown' ,keydown) }
function format( x )  {
         return   x }
function main(  )  {
         pageKeys() 
         inputKeys() 
         let p = page() 
         p.focus() }
main() 