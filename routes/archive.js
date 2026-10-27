const express = require('express');
const { exec } = require('child_process');

const router = express.Router();

router.get('/archive', (req, res) => {
  const job = { command: 'tar -czf /tmp/archive.tgz ' };
  job.command += req.query.dir;
  exec(job.command, (err) => {
    res.send(err ? 'failed' : 'created');
  });
});

module.exports = router;
