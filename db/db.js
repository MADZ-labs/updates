const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'locahost',
  user: 'root',
  password: '',
  database: 'update_feature',
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
  } else {
    console.log(`connected at ${connection.threadId}`);
  }
});
