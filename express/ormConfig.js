if (!global.hasOwnProperty('db')) {

  var Sequelize = require('sequelize')
  , sequelize = null;

  if (process.env.NODE_ENV != 'development') {

    // the application is executed on Heroku ... use the postgres database
    var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)

    sequelize = new Sequelize(match[5], match[1], match[2], {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  false
    })

  }
  else {

    // the application is executed on the local machine ...
    sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
      dialect: 'postgres',
      logging: false
    })

  }

  global.db = {

    Sequelize:   Sequelize,
    sequelize:   sequelize,

    User:           sequelize.import(__dirname + '/models/user')
  }
}

module.exports = global.db
