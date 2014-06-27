var express = require('express');
var app = express();

var routes = require('./routes/index.js');

app.set('view engine', 'ejs');

app.locals.company = "Widget Company"  //global variable available on all pages/partials

var server = app.listen(3000, startserver);

function startserver() {
    console.log('Listening on port 3000');
}

//these 2 routes are now defined in index.js in routes folder
app.get('/', routes.index);
app.get('/about', routes.about);


app.get('/who/:name?', 
	function(req, res){
	var name=req.params.name;
		res.render('default', {title: name, classname: 'about'});
	}
);


app.get('*', 
	function(req, res){
			res.send('404 - bad route');
	}
);
