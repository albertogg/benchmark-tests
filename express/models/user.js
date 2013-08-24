
module.exports = (function(db) {
  var User = db.define('user', {
    firstName: String,
    lastName: String,
    email; String,
    country; String
  }, {
    methods: {
      fullName: function() {
        return this.firstName + ' ' + this.lastName;
      }
    }
  });

  return User;
})(db);