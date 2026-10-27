const express = require('express');
const cmd = require('node-cmd');

const router = express.Router();

router.get('/disk-usage', (req, res) => {
  cmd.run('du -sh ' + req.query.path, (err, stdout) => {
    res.type('text/plain').send(err ? 'failed' : stdout);
  });
});

module.exports = router;
