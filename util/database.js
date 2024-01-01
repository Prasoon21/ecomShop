const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Timely19@kang', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
