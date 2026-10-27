const express = require('express');
const { exec } = require('child_process');

const router = express.Router();

router.get('/whois', (req, res) => {
  exec('whois ' + req.query.domain, (err, stdout) => {
    res.type('text/plain').send(err ? 'failed' : stdout);
  });
});

router.get('/dns', (req, res) => {
  const lookup = { command: 'dig +short ' };
  lookup.command += req.query.domain;
  exec(lookup.command, (err, stdout) => {
    res.type('text/plain').send(err ? 'failed' : stdout);
  });
});

module.exports = router;
