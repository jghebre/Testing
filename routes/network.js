const express = require('express');
const net = require('net');
const { execFile } = require('child_process');

const router = express.Router();

router.get('/ping', (req, res) => {
  const { host } = req.query;
  const hostnamePattern = /^(?=.{1,253}\.?$)(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)(?:\.(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?))*\.?$/;

  if (typeof host !== 'string' || (!net.isIP(host) && !hostnamePattern.test(host))) {
    return res.status(400).type('text/plain').send('invalid host');
  }

  execFile('ping', ['-c', '1', host], (err, stdout) => {
    res.type('text/plain').send(err ? 'unreachable' : stdout);
  });
});

module.exports = router;
