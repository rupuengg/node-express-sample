const express = require('express');
const app = express();

const router = require('./routes/index');
app.use(router);

app.listen(8080, () => {
  console.log('App is running on http://localhost:8080');
});