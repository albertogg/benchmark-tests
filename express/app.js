var dotenv = require('dotenv')();
dotenv.load();

var express = require('express'),
	http    = require('http'),
 	db  = require('./ormConfig'),
 	seeds = require('./seeds');
var app = express();

var users = require('./controllers/users');
app.use(users);

app.set('port', process.env.PORT || 3000);

db.sequelize.sync({ force: false }).complete(function(err) {
	if (err) {
    	throw err
  	} else {
  		http.createServer(app).listen(app.get('port'), function() {
  			console.log('Express server listening on port ' + app.get('port') + '. env: ' + process.env.NODE_ENV);
  			db.User.findAll().success(function(users){
  				if(users.length == 0){
  					db.User.bulkCreate(seeds.users).success(function(){
  						console.log('seeds planted');
  					})
  				}
  			});
  		});
  	}
})
