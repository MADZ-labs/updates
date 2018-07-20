const express = require('express');

const app = express();
const port = process.env.PORT || 3004;

app.use(express.static('client/dist'));

app.get('/updates', (req, res) => {
  res.send('get updates');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, console.log(`server running on port ${port}`));
}

module.exports = app;
