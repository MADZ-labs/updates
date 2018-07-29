const express = require('express');

const Log = require('log');

const db = require('../db/db');

const log = new Log();

const app = express();
const port = process.env.PORT || 3004;

app.use(express.static('client/dist'));

app.get('/projects/:id', (req, res) => {
  db.query(`SELECT backers,date_created,ending_date,goal,money_raised FROM projects WHERE id=${req.params.id}`, (error, results) => {
    const project = results[0];
    db.query(`SELECT backers_only,comments,description,likes,title,update_date FROM updates WHERE project_id=${req.params.id}`, (updatesError, updatesResults) => {
      project.updates = updatesResults;
      res.send(project);
    });
  });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, log.info(`server running on port ${port}`));
}

module.exports = app;
