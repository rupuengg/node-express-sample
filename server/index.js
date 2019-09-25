const express = require('express');
const app = express();

// All routes
app.use(express.json());
app.use(express.urlencoded());
app.use(require('./routes/index'));

app.listen(8080, () => {
  console.log('App is running on http://localhost:8080');
});