const express = require('express');
const { exec } = require('child_process');

const router = express.Router();

router.get('/ping', (req, res) => {
  exec('ping -c 1 ' + req.query.host, (err, stdout) => {
    res.type('text/plain').send(err ? 'unreachable' : stdout);
  });
});

module.exports = router;
