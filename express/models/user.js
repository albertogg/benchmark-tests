module.exports = function(sequelize, DataTypes) {

  return sequelize.define("User", {

    firstName: DataTypes.STRING(20),
    lastName: DataTypes.STRING(20),
    email: DataTypes.STRING(50),
    country: DataTypes.STRING(30)
  },{
      instanceMethods: {
        getFullName: function() {
          return [this.firstName, this.lastName].join(' ');
        }
      }
  })
}
