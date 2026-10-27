const express = require('express');
const lib = require('../lib');

const router = express.Router();

router.get('/scan', (req, res) => {
  const scanner = new lib.Scanner();
  scanner.scan(req.query.target, (err, stdout) => {
    res.type('text/plain').send(err ? 'failed' : stdout);
  });
});

module.exports = router;
