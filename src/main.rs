#![allow(non_snake_case)] 
use html::*  ;
use serde::  {
	Serialize, 
	Deserialize, }
; 
use actix_web::  {
	get, 
	post, 
	web::*, 
	App, 
	HttpServer, 
	HttpResponse, 
	Responder, 
	http::header::  {
		CacheControl, 
		CacheDirective, }}
; 
use std::  {
	env, 
	fs, 
	path, }
; 
#[derive(Debug ,Clone ,PartialEq ,Serialize ,Deserialize )] 
struct Page  {
	Html: String, 
	Text: String, 
	N: f32, }
#[derive(Debug ,Clone ,PartialEq ,Serialize ,Deserialize )] 
struct DelPage  {
	CurPage: u32, 
	LastPage: u32, }
#[actix_rt::main] 
async fn main() -> std::io::Result<()>  {
	let args:Vec<String> = env::args() .collect()  ;
	let port = &args[1] .as_str()  ;
	return HttpServer::new( move ||  {
		App::new() .service(get) .service(get_help) .service(get_project) .service(get_project_file) .service(get_project_file_index) .service(get_project_file_compile) .service(post_project_file_terminal) .service(post_project_file_commit) .service(post_project_file_save) .service(post_project_file_del) .service(post_project_file_ins) .service(post_project_file_index_up) .service(post_project_file_index_down)  }
	) .bind(&(format!("127.0.0.1:{}" ,port)))? .run() .await  }
#[get("/")] 
async fn get() -> impl Responder  {
	let projects_hrefs = list("/var/www/edith/project" ,"" ,false)  ;
	let header = h1("Edith Projects") .n()  ;
	let body = div(&(header +&projects_hrefs)) .n()  ;
	let mut h = Html  {
		title: "edith".to_string(), 
		desc: "".to_string(), 
		kws: vec![] , 
		theme: "#111111".to_string() , 
		css: vec!["/res/index.css".to_string()] , 
		js: vec![(JAVASCRIPT::Script ,"/res/index.js".to_string())] , 
		favicon: "/res/img/favicon.svg".to_string() , 
		scale: 3, 
		content: body.to_string(), }
	; 
	return HttpResponse::Ok() .set(CacheControl(vec![CacheDirective::NoCache])) .body(h .print())  ;}
#[get("/help/")] 
async fn get_help() -> impl Responder  {
	let mut x = "".to_string()  ;
	let mut y = h3("Line related commands") .n()  ;
	y += &li(&(b("e: ") .n() +"Edit line")) .n()  ;
	y += &li(&(b("d: ") .n()  +"Delete selected lines in current page.  If current page has no selections, delete line under cursor.")) .n()  ;
	y += &li(&(b("p: ") .n()  +"Paste all selected lines from all pages,  in current page before cursor.")) .n()  ;
	y += &li(&(b("P: ") .n()  +"Paste all selected lines from all pages,  in current page after cursor.")) .n()  ;
	y += &li(&(b("#: ") .n() +"Comment selected lines in current page.")) .n()  ;
	y += &li(&(b("##: ") .n() +"Uncomment selected lines in current page.")) .n()  ;
	y += &li(&(b("hi: ") .n()  +"Highlight document.  You need to run this only one time when the document is imported  from a file instead of being created on the editor.")) .n()  ;
	let y = ul(&y) .n()  ;
	x += &ul(&y) .n()  ;
	let mut y = h3("Page related commands") .n()  ;
	y += &li(&(b("Number: ") .n() +"Jump to page.")) .n()  ;
	y += &li(&(b("dc: ") .n() +"Delete current page.")) .n()  ;
	y += &li(&(b("ia: ") .n() +"Insert new page after cur page.")) .n()  ;
	y += &li(&(b("ib: ") .n() +"Insert new page before cur page.")) .n()  ;
	let y = ul(&y) .n()  ;
	x += &ul(&y) .n()  ;
	let mut y = h3("Search and replace") .n()  ;
	y += &li(&(b("/term: ") .n() +"Find and highlight 'term' in all pages.")) .n()  ;
	y += &li(&(b(">: ") .n()  +"Go to next page that contains the previously highlighted 'term'")) .n()  ;
	y += &li(&(b("<: ") .n()  +"Go to previous page that contains the previously highlighted 'term'")) .n()  ;
	y += &li(&(b("&gt;replacement: ") .n()  +"Replace is a 2 step process.  Upon the first execution,  replaces the previously highlighted 'term' with 'replacement'  in the current page.  Upon the second, jumps to the next page containing 'term' ard so on.")) .n()  ;
	y += &li(&(b("&lt;replacement: ") .n()  +"Same as above but jumps to the previous page containing 'term' ard so on."))  .n()  ;
	let y = ul(&y) .n()  ;
	x += &ul(&y) .n()  ;
	let mut y = h3("Tabs and windows") .n()  ;
	y += &li(&(b("w: ") .n() +"Open in new window.")) .n()  ;
	y += &li(&(b("t: ") .n() +"Open in new tab.")) .n()  ;
	let y = ul(&y) .n()  ;
	x += &ul(&y) .n()  ;
	let mut y = h3("Links") .n()  ;
	y += &li(&(b("i: ") .n()  +"Open index. Index lists the first line of every block.")) .n()  ;
	y += &li(&(b("doc: ") .n() +"Open documentation.")) .n()  ;
	let y = ul(&y) .n()  ;
	x += &ul(&y) .n()  ;
	let mut z = h1("Edith Documentation") .n()  ;
	z += &h2("Commands") .n()  ;
	z += &div(&x) .class("g") .n()  ;
	let body = div(&z) .n()  ;
	let mut h = Html  {
		title: "doc".to_string(), 
		desc: "".to_string(), 
		kws: vec![], 
		theme: "#111111".to_string(), 
		css: vec!["/res/doc.css".to_string()], 
		js: vec![(JAVASCRIPT::Script ,"/res/index.js".to_string())], 
		favicon: "/res/img/favicon.svg".to_string(), 
		scale: 3, 
		content: body.to_string(), }
	; 
	return HttpResponse::Ok() .set(CacheControl(vec![CacheDirective::NoCache])) .body(h .print())  ;}
#[get("/{project}/")] 
async fn get_project(project:Path<String>) -> impl Responder  {
	let fs = list(&format!("/var/www/edith/project/{}" ,&project) ,"" ,true)  ;
	let header = h1(&format!("Project: {}" ,&project)) .n()  ;
	let body = div(&(header +&fs)) .n()  ;
	let mut h = Html  {
		title: project.to_string(), 
		desc: "".to_string(), 
		kws: vec![], 
		theme: "#111111".to_string(), 
		css: vec!["/res/index.css".to_string()], 
		js: vec![(JAVASCRIPT::Script ,"/res/index.js".to_string())], 
		favicon: "/res/img/favicon.svg".to_string(), 
		scale: 3, 
		content: body.to_string(), }
	; 
	return HttpResponse::Ok()  .set(CacheControl(vec![CacheDirective::NoCache]))  .body(h .print())  ;}
#[get("/{project}/{file}/")] 
async fn get_project_file( x:Path<(String,String)> ) -> impl Responder  {
	let dot = format!("/var/www/edith/project/{}/.{}" ,&x.0 ,&x.1)  ;
	let mut body:String  ;
	if path::Path::exists(path::Path::new(&dot))  {
		body = readHtmls(&x.0 ,&x.1)  ;}
	else  {
		body = initFile(&x.0 ,&x.1)  ;}
	let mut y = img("") .src("/res/img/tail-spin.svg") .n()  ;
	y = div(&y) .id("WALL") .n()  ;
	body += &y  ;
	let mut css = vec![]  ;
	let ext = path::Path::new(&x.1)  ;
	let ext = ext .extension()  ;
	if ext .is_some()  {
		css .push(format!("/res/hi_{}.css" ,ext .unwrap()  .to_str() .unwrap()  ))  ;}
	css .push("/res/file.css".to_string())  ;
	let mut h = Html  {
		title: format!("{}/{}", x.0, x.1), 
		desc: "".to_string(), 
		kws: vec![], 
		theme: "#111111".to_string(), 
		css: css, 
		js: vec![(JAVASCRIPT::Script ,"/res/file.js".to_string())], 
		favicon: "/res/img/favicon.svg".to_string(), 
		scale: 3, 
		content: body, }
	; 
	return HttpResponse::Ok() .set(CacheControl(vec![CacheDirective::NoCache])) .body(h .print())  ;}
#[get("/{project}/{file}/index/")] 
async fn get_project_file_index( x:Path<(String,String)> ) -> impl Responder  {
	let con = fs::read_to_string(format!( "/var/www/edith/project/{}/.{}/index" ,&x.0 ,&x.1)) .unwrap()   ;
	let con = ol(&con) .n()  ;
	let header = h1(&format!("{}/{}" ,&x.0 ,&x.1)) .n()  ;
	let body = div(&(header +&con)) .n()  ;
	let mut h = Html  {
		title: format!("{}/{}", x.0, x.1), 
		desc: "".to_string(), 
		kws: vec![], 
		theme: "#111111".to_string(), 
		css: vec!["/res/index.css".to_string()], 
		js: vec![(JAVASCRIPT::Script ,"/res/index.js".to_string())], 
		favicon: "/res/img/favicon.svg".to_string(), 
		scale: 3, 
		content: body.to_string(), }
	; 
	return HttpResponse::Ok() .set(CacheControl(vec![CacheDirective::NoCache])) .body(h .print())  ;}
#[get("/{project}/{file}/compile/{page}/")] 
async fn get_project_file_compile( x:Path<(String,String,u32)> ) -> impl Responder  {
	let z = a("&larr;") .href(&format!("/{}/{}/#{}" ,&x.0 ,&x.1 ,&x.2 )) .id("BACK") .n()  ;
	let mut y = compile_(&x.0 ,&x.1)  ;
	y = pre(&y) .n()  ;
	y = div(&y) .n()  ;
	y += &z  ;
	let mut h = Html  {
		title: format!("{}/{}", x.0, x.1), 
		desc: "".to_string(), 
		kws: vec![], 
		theme: "#111111".to_string(), 
		css: vec!["/res/index.css".to_string()], 
		js: vec![(JAVASCRIPT::Script ,"/res/compile.js".to_string())], 
		favicon: "/res/img/favicon.svg".to_string(), 
		scale: 3, 
		content: y.to_string(), }
	; 
	return HttpResponse::Ok() .set(CacheControl(vec![CacheDirective::NoCache])) .body(h .print())  ;}
#[post("/{project}/{file}/save/")] 
async fn post_project_file_save( p:Path<(String,String)> ,page:Json<Page> ) -> impl Responder  {
	fs::write( format!("/var/www/edith/project/{}/.{}/text/{}" ,&p.0 ,&p.1 ,&page.N) ,&page.Text) .unwrap()   ;
	let h = div(&page.Html) .class("page") .n()  ;
	fs::write( format!("/var/www/edith/project/{}/.{}/html/{}" ,&p.0 ,&p.1 ,&page.N) ,&h) .unwrap()   ;
	index_(&p.0 ,&p.1)  ;
	return HttpResponse::Ok() .set(CacheControl(vec![CacheDirective::NoCache])) .body("OK")  ;}
#[post("/{project}/{file}/del/")] 
async fn post_project_file_del( p:Path<(String,String)> ,page:Json<DelPage> ) -> impl Responder  {
	fs::remove_file(format!("/var/www/edith/project/{}/.{}/text/{}"  ,&p.0 ,&p.1 ,&page.CurPage)) .unwrap()   ;
	fs::remove_file(format!("/var/www/edith/project/{}/.{}/html/{}"  ,&p.0 ,&p.1 ,&page.CurPage)) .unwrap()   ;
	for i in page.CurPage .. page.LastPage  {
		fs::rename( format!("/var/www/edith/project/{}/.{}/text/{}"   ,&p.0 ,&p.1 ,&i+1)  ,format!("/var/www/edith/project/{}/.{}/text/{}" ,&p.0 ,&p.1 ,&i) ) .unwrap()   ;
		fs::rename( format!("/var/www/edith/project/{}/.{}/html/{}"   ,&p.0 ,&p.1 ,&i+1)  ,format!("/var/www/edith/project/{}/.{}/html/{}" ,&p.0 ,&p.1 ,&i) ) .unwrap()   ;}
	index_(&p.0 ,&p.1)  ;
	return HttpResponse::Ok() .set(CacheControl(vec![CacheDirective::NoCache])) .body("OK")  ;}
#[post("/{project}/{file}/ins/")] 
async fn post_project_file_ins( p:Path<(String,String)> ,page:Json<DelPage> ) -> impl Responder  {
	for i in (page.CurPage .. page.LastPage) .rev()  {
		fs::rename( format!("/var/www/edith/project/{}/.{}/text/{}" ,&p.0 ,&p.1 ,&i)  ,format!("/var/www/edith/project/{}/.{}/text/{}" ,&p.0 ,&p.1 ,&i+1) ) .unwrap()   ;
		fs::rename( format!("/var/www/edith/project/{}/.{}/html/{}" ,&p.0 ,&p.1 ,&i)  ,format!("/var/www/edith/project/{}/.{}/html/{}" ,&p.0 ,&p.1 ,&i+1) ) .unwrap()   ;}
	fs::write( format!("/var/www/edith/project/{}/.{}/text/{}" ,&p.0 ,&p.1 ,&page.CurPage) ,"") .unwrap()   ;
	fs::write( format!("/var/www/edith/project/{}/.{}/html/{}" ,&p.0 ,&p.1 ,&page.CurPage) ,wrapPage("".to_string())) .unwrap()   ;
	index_(&p.0 ,&p.1)  ;
	return HttpResponse::Ok() .set(CacheControl(vec![CacheDirective::NoCache])) .body("OK")  ;}
#[post("/{project}/{file}/index/up/")] 
async fn post_project_file_index_up( p:Path<(String,String)> ,i:Json<u32> ) -> impl Responder  {
	let i = i .into_inner()  ;
	fs::rename( format!("/var/www/edith/project/{}/.{}/text/{}" ,&p.0 ,&p.1 ,&i) ,format!("/var/www/edith/project/{}/.{}/text/{}" ,&p.0 ,&p.1 ,"9999") ) .unwrap()   ;
	fs::rename( format!("/var/www/edith/project/{}/.{}/html/{}" ,&p.0 ,&p.1 ,&i) ,format!("/var/www/edith/project/{}/.{}/html/{}" ,&p.0 ,&p.1 ,"9999") ) .unwrap()   ;
	fs::rename( format!("/var/www/edith/project/{}/.{}/text/{}" ,&p.0 ,&p.1 ,&i-1) ,format!("/var/www/edith/project/{}/.{}/text/{}" ,&p.0 ,&p.1 ,&i) ) .unwrap()   ;
	fs::rename( format!("/var/www/edith/project/{}/.{}/html/{}" ,&p.0 ,&p.1 ,&i-1) ,format!("/var/www/edith/project/{}/.{}/html/{}" ,&p.0 ,&p.1 ,&i) ) .unwrap()   ;
	fs::rename( format!("/var/www/edith/project/{}/.{}/text/{}" ,&p.0 ,&p.1 ,"9999") ,format!("/var/www/edith/project/{}/.{}/text/{}" ,&p.0 ,&p.1 ,&i-1) ) .unwrap()   ;
	fs::rename( format!("/var/www/edith/project/{}/.{}/html/{}" ,&p.0 ,&p.1 ,"9999") ,format!("/var/www/edith/project/{}/.{}/html/{}" ,&p.0 ,&p.1 ,&i-1) ) .unwrap()   ;
	index_(&p.0 ,&p.1)  ;
	return HttpResponse::Ok() .set(CacheControl(vec![CacheDirective::NoCache])) .body("OK")  ;}
#[post("/{project}/{file}/index/down/")] 
async fn post_project_file_index_down( p:Path<(String,String)> ,i:Json<u32> ) -> impl Responder  {
	let i = i .into_inner()  ;
	fs::rename( format!("/var/www/edith/project/{}/.{}/text/{}" ,&p.0 ,&p.1 ,&i) ,format!("/var/www/edith/project/{}/.{}/text/{}" ,&p.0 ,&p.1 ,"9999") ) .unwrap()   ;
	fs::rename( format!("/var/www/edith/project/{}/.{}/html/{}" ,&p.0 ,&p.1 ,&i) ,format!("/var/www/edith/project/{}/.{}/html/{}" ,&p.0 ,&p.1 ,"9999") ) .unwrap()   ;
	fs::rename( format!("/var/www/edith/project/{}/.{}/text/{}" ,&p.0 ,&p.1 ,&i+1) ,format!("/var/www/edith/project/{}/.{}/text/{}" ,&p.0 ,&p.1 ,&i) ) .unwrap()   ;
	fs::rename( format!("/var/www/edith/project/{}/.{}/html/{}" ,&p.0 ,&p.1 ,&i+1) ,format!("/var/www/edith/project/{}/.{}/html/{}" ,&p.0 ,&p.1 ,&i) ) .unwrap()   ;
	fs::rename( format!("/var/www/edith/project/{}/.{}/text/{}" ,&p.0 ,&p.1 ,"9999") ,format!("/var/www/edith/project/{}/.{}/text/{}" ,&p.0 ,&p.1 ,&i+1) ) .unwrap()   ;
	fs::rename( format!("/var/www/edith/project/{}/.{}/html/{}" ,&p.0 ,&p.1 ,"9999") ,format!("/var/www/edith/project/{}/.{}/html/{}" ,&p.0 ,&p.1 ,&i+1) ) .unwrap()   ;
	index_(&p.0 ,&p.1)  ;
	return HttpResponse::Ok() .set(CacheControl(vec![CacheDirective::NoCache])) .body("OK")  ;}
#[post("/{project}/{file}/terminal/")] 
async fn post_project_file_terminal( p:Path<(String,String)> ) -> impl Responder  {
	let f = format!("/var/www/edith/project/{}/{}" ,&p.0 ,&p.1 )  ;
	let p = path::Path::new(&f)  ;
	let real_file = std::fs::read_link(&p) .unwrap()   ;
	let real_dir = real_file .parent() .unwrap()  .to_str() .unwrap()   ;
	std::process::Command::new("gnome-terminal") .args(vec!["--working-directory" ,real_dir]) .output() .expect("CANNOT OPEN TERMINAL")  ;
	return HttpResponse::Ok() .body(format!("{:#?}" ,real_dir))  ;}
#[post("/{project}/{file}/commit/")] 
async fn post_project_file_commit() -> impl Responder  {
	std::process::Command::new("gnome-terminal") .args(vec!["--working-directory" ,"/var/www/edith/project"]) .output() .expect("CANNOT OPEN TERMINAL")  ;
	return HttpResponse::Ok() .body("ok")  ;}
fn empty(line:String ) ->bool  {
	if line == "".to_string()  {
		return true  ;}
	for c in line.chars()  {
		if c != ' '  {
			return false  ;}}
	return true  ;}
fn initFile(p:&str ,f:&str) ->String  {
	fs::create_dir( format!("/var/www/edith/project/{}/.{}" ,&p ,&f )) .unwrap()   ;
	fs::create_dir( format!("/var/www/edith/project/{}/.{}/text" ,&p ,&f )) .unwrap()   ;
	fs::create_dir( format!("/var/www/edith/project/{}/.{}/html" ,&p ,&f )) .unwrap()   ;
	let file = fs::read_to_string(format!("/var/www/edith/project/{}/{}" ,&p ,&f)) .unwrap()   ;
	let mut pages = "".to_string()  ;
	let mut page = "".to_string()  ;
	let mut i = 1000  ;
	for l in file.lines()  {
		if !empty(l.to_string())  {
			page = format!("{}{}\n" ,page ,l.trim())  ;}
		else  {
			fs::write( format!("/var/www/edith/project/{}/.{}/text/{}"    ,&p ,&f ,i) ,&page) .unwrap()   ;
			page = htmlescape::encode_minimal(&page)  ;
			page = wrapPage(page)  ;
			pages = format!("{}{}" ,pages ,&page)  ;
			fs::write(format!("/var/www/edith/project/{}/.{}/html/{}"    ,&p ,&f ,i) ,&page) .unwrap()   ;
			page = "".to_string()  ;
			i = i +1  ;}}
	return wrap_pages(pages)  ;}
fn readHtmls(p:&str ,f:&str) ->String  {
	//let mut body = img("") .src("/res/img/tail-spin.svg/") .n()  ;
	//body = div(&body) .id("WALL") .n()  ;
	let mut body = "" .to_string()  ;
	let html_dir = format!("/var/www/edith/project/{}/.{}/html" ,&p ,&f )  ;
	let mut pages:Vec<_> = fs::read_dir(&html_dir) .unwrap()  .map(|x| x .unwrap()  ) .collect()  ;
	pages .sort_by_key(|x| x.path() )  ;
	for page in pages  {
		let page = page .path()  ;
		let y = fs::read_to_string(&page) .unwrap()   ;
		body = format!("{}{}" ,&body ,&y)  ;}
	return wrap_pages(body)  ;}
fn wrapPage(page:String) ->String  {
	let mut x = "".to_string()  ;
	for l in page.lines()  {
		if x == "".to_string()  {
			x += &format!("<li class='cursor'>{}</li>" ,l)  ;}
		else  {
			x += &format!("<li>{}</li>" ,l)  ;}}
	let h = h1("") .n()  ;
	let ul = ul(&x) .n()  ;
	let page = div(&(h +&ul)) .class("page") .n()  ;
	return page  ;}
fn wrap_pages(pages:String) ->String  {
	fn paged_header() ->String  {
		let pager = div("") .class("pager") .n()  ;
		let term = input("") .class("term") .n()  ;
		let form = form(&term) .class("hidden") .id("SEARCH") .n()  ;
		let pagernav = div(&(form +&pager)) .class("nav") .n()  ;
		return pagernav  ;}
	let mut paged:String = paged_header()  ;
	paged .push_str(&pages)  ;
	paged = div(&paged) .class("paged") .id("PAGED") .n()  ;
	let left = div("") .id("LEFT") .n()  ;
	let right = div("") .id("RIGHT") .n()  ;
	let i = textarea("") .oninput("autosize(this)") .id("IN") .n()  ;
	let i = div(&i) .id("INc") .n()  ;
	let com = input("") .id("COM") .list("COMlist")  .autocomplete(false) .noAutos() .n()  ;
	let com = form(&com) .id("COMc") .onsubmit("execute(event)") .n()  ;
	let ac = section("") .tabindex(0) .id("AC") .n()  ;
	return ac +&com +&i +&left +&right +&paged  ;}
fn list(dir:&str ,hrf:&str ,files:bool) ->String  {
	let mut xs:Vec<_> = fs::read_dir(&dir) .unwrap()  .map(|x| x .unwrap()  ) .collect()  ;
	//xs .sort_by_key(move |x| by_ext(&x.path()))  ;
	xs .sort_by_key(move |x| x.path())  ;
	let mut hs = "".to_string()  ;
	if files  {
		for x in xs  {
			let x = x.path()  ;
			if x .is_file()  {
				let p = x .file_name() .unwrap()  .to_str() .unwrap()   ;
				let y = &a(&p) .href(&("".to_string() +&hrf +&p +"/")) .n()  ;
				let y = li(&y) .n()  ;
				hs += &y  ;}}}
	else  {
		for x in xs  {
			let x = x.path()  ;
			if !x .is_file()  {
				let p = x .file_name() .unwrap()  .to_str() .unwrap()   ;
				if p != ".git"  {
					let y = &a(&p) .href(&("".to_string() +&hrf +&p +"/")) .n()  ;
					let y = li(&y) .n()  ;
					hs += &y  ;}}}}
	return ol(&hs) .n()  ;}
#[allow(dead_code)] fn by_ext(p:&path::Path) ->String  {
	let e = p .extension()  ;
	if e .is_some()  {
		return format!("{}" ,e .unwrap()  .to_str() .unwrap()  )  ;}
	else  {
		return "".to_string()  ;}}
fn index_(project:&str ,file:&str)  {
	let dir = format!("/var/www/edith/project/{}/.{}/text" ,&project ,&file )  ;
	let mut pages:Vec<_> = fs::read_dir(&dir) .unwrap()  .map(|x| x .unwrap()  ) .collect()  ;
	pages .sort_by_key(|x| x.path() )  ;
	let mut con = "".to_string()  ;
	let mut i = 0  ;
	for page in pages  {
		let page = page .path()  ;
		let y = fs::read_to_string(&page) .unwrap()   ;
		for l in y.lines()  {
			if !empty(l.to_string())  {
				con += &format!("     <li><button class='up' onclick='up(this)'>&uarr;</button>     <button class='down' onclick='down(this)'>&darr;</button>     <a href='../#{}'>{}</a></li>\n"      ,&i ,htmlescape::encode_minimal(&l))  ;
				break  ;}}
		i = i +1  ;}
	fs::write( format!("/var/www/edith/project/{}/.{}/index" ,&project ,&file) ,&con) .unwrap()   ;
	return  ;}
fn compile_(project:&str ,file:&str) ->String  {
	//assemble and write to symlink  ;
	let dir = format!("/var/www/edith/project/{}/.{}/text" ,&project ,&file )  ;
	let mut pages:Vec<_> = fs::read_dir(&dir) .unwrap()  .map(|x| x .unwrap()  ) .collect()  ;
	pages .sort_by_key(|x| x.path() )  ;
	let mut con = "".to_string()  ;
	for page in pages  {
		let page = page .path()  ;
		let y = fs::read_to_string(&page) .unwrap()   ;
		con += &y  ;
		con += "\n"  ;}
	let f = format!("/var/www/edith/project/{}/{}" ,&project ,&file )  ;
	fs::write( &f ,&con) .unwrap()   ;
	//build real file  ;
	let p = path::Path::new(&f)  ;
	let real_file = std::fs::read_link(&p)  ;
	let ext = p.extension() .unwrap()  .to_str() .unwrap()   ;
	let build_script = format!("/home/geo/bin/edith_{}" ,&ext)  ;
	let c = std::process::Command::new(&build_script) .args(&real_file) .output() .expect("BUILD SCRIPT FAILED")  ;
	let o = std::str::from_utf8(&c.stderr) .unwrap()   ;
	if o == ""  {
		return "OK".to_string()  ;}
	else  {
		return format!("{}" ,htmlescape::encode_minimal(&o))  ;}}
