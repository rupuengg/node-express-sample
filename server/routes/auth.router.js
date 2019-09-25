const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const user = req.body;

  return res.status(200).json({ data: user });
});

module.exports = router;