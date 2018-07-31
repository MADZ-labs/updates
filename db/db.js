const mysql = require('mysql');

const Log = require('log');

const log = new Log();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD || 'password',
  database: 'update_feature',
});

connection.connect((err) => {
  if (err) {
    log.error(`error connecting: ${err.stack}`);
  } else {
    log.info(`connected at ${connection.threadId}`);
  }
});

module.exports = connection;
