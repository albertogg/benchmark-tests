
var express = require('express'),
  orm = require('orm');
var app = express();

app.use(orm.express('???', {
  define: function(db, models, next) {
    models.user = require('./models/user')(db);
    return next();
  }
}));

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening to port', port);