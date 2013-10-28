var express = require('express');
var app = module.exports = express();


app.get('/users', function(request, response) {
	db.User.findAll({attributes: ['id', 'firstName', 'lastName', 'email', 'country']}).success(function(users){
		for(var i=0; i < users.length; i++){
			users[i].fullName = users[i].getFullName();
		}
		response.send(users);
	});
});
