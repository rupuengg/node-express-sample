const express = require('express');
const authRouter = express.Router();

authRouter.post('/auth', function (req, res, next, val) {
  console.log('Req', req);
  console.log('Res', res);
  console.log('Next', next);
  console.log('Val', val);
});

module.exports = authRouter;