const express = require('express');
const { exec } = require('child_process');

const router = express.Router();

router.get('/logs', (req, res) => {
  let file;
  const reader = {
    select(name) {
      file = name;
    },
    read() {
      exec('tail -n 20 logs/' + file, (err, stdout) => {
        res.type('text/plain').send(err ? 'missing' : stdout);
      });
    },
  };

  reader.select(req.query.file);
  reader.read();
});

module.exports = router;
