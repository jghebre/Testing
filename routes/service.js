const express = require('express');
const { exec } = require('child_process');

const router = express.Router();

const actions = {};
for (const name of ['start', 'stop', 'status']) {
  actions[name] = (unit, done) => exec(`systemctl ${name} ${unit}`, done);
}

router.get('/service/status', (req, res) => {
  actions.status(req.query.unit, (err, stdout) => {
    res.type('text/plain').send(err ? 'unknown' : stdout);
  });
});

module.exports = router;
