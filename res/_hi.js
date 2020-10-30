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