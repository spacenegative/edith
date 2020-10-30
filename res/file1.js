/* */  {
         /* */ }
function insert_lines( from ,to ,before)  {
         let p = page() 
         let ls = Array.from(p. getElementsByClassName("li")) 
         ls = ls.slice(from-1 ,to) 
         let n = ls.length 
         let c = cursor(p) 
         if       ( before )  {
                  for      ( var i=0 ; i<n ; i++ )  {
                           let clone = ls[i].cloneNode(true) 
                           insertBefore(c ,clone) }}
         else  {
                  for      ( var i=0 ; i<n ; i++ )  {
                           let clone = ls[i].cloneNode(true) 
                           insertAfter(c ,clone) }}}
function unselect_all(  )  {
         Array.from(PAGED. getElementsByClassName("sel")) 
         .map((s)=> s.classList.remove("sel")) 
         save_all() }
async    function save_all(  )  {
         let ps = Array.from(PAGED. getElementsByClassName("page")) 
         var      n = ps.length ; for      ( var i=0 ; i<n ; i++ )  {
                  var t = "" 
                  Array.from(ps[i].getElementsByTagName( "li" )) 
                  .map((l)=> t += linize(l.innerText) +"\n") 
                  let	o =  {
                           Html:	ps[i].innerHTML, 
                           Text:	t, 
                           N:	i +1000, }
                  await ajx(JSON.stringify(o) ,"save/") }}