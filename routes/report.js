const express = require('express');
const { exec } = require('child_process');

const router = express.Router();

function useFormat(job) {
  job.output = job.format;
}

router.get('/report', (req, res) => {
  const job = { format: req.query.format, output: 'text' };
  useFormat(job);
  exec('report-gen --output ' + job.output, (err, stdout) => {
    res.type('text/plain').send(err ? 'failed' : stdout);
  });
});

module.exports = router;
