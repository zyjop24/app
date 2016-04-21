var express = require('express');
var app = express();
var handlebars = require('express3-handlebars')
	.create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port',process.env.PORT || 3000);

app.use(express.static(__dirname+'/public'));
// console.log(__dirname);
app.get('/',function(req,res){
	res.render('home');
	// res.type('text/plain');
	// res.send('123');
});
app.get('/about',function(req,res){

	var fortunes=[1,2,3,4,5];
	var randomFortune=
		fortunes[Math.floor(Math.random()*fortunes.length)];


	res.render('pages/about/about',{fortune:randomFortune,user:'zyj'});
	// res.type('text/plain');
	// res.send('about123');
});
app.use(function(req,res,next){
	res.status(404);
	res.render('404');
	// res.type('text/plain');
	// res.status(404);
	// res.send('404 - Not Found');
});
app.use(function(err,req,res,next){
	console.error(err.stack);
	// res.type('text/plain');
	res.status(500);
	res.render('500');
	// res.send('500 - Server Error');
});

app.listen(app.get('port'),function(){
	console.log('Express started on http://localhost:'+app.get('port')+';press Crtl-C to terminate.');
});


// var func = function(req,res){
// 	res.type('text/plain');
// 	res.send(111);
// }
// app.get('/',function(req,res){

// });


// var currentRoute="/";
// var routes={
// 	"/":function(req,res){}
// };
// app.get=function(route,callback){
// 	routes[route]=callback;
// }

// app.handleReq=function(r){
// 	// r="/"
// 	var req={}
// 	var res={}
// 	routes[route](req,res);
// }