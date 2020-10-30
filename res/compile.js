/* import */  {
	/*  */ }
function hi_str( x ,y ,clas )  {
	let z = "<span class='" +clas +"'>" +y +"</span>" 
	x = x.replaceAll(y ,z) 
	return x }
//highlight single string: y 
function main(  )  {
	let p = document.querySelector("pre") 
	setTimeout( function(  )  {
		window.scrollTo(0,9000) 
		p.style.opacity = 1 }
	,20 ) 
	let t = p.innerText 
	t = hi_str(t ,"Finished" ,"ok") 
	t = hi_str(t ,"error" ,"er") 
	t = hi_str(t ,"warning" ,"warning") 
	p.innerHTML = t 
	BACK.focus() }
main() 