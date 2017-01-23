var express = require('express');
var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes'); 

var path = require('path')
app.use(express.static(path.join(__dirname, 'public'))); //check les images dans public directory


//Routes--------/
//---home
app.get('/', routes.home);
//---single movie
app.get('/movies/:episode_number?',routes.movie_single);
//---not found
app.get('*', routes.notFound);
//---------------/

app.listen(process.env.PORT || 8080);