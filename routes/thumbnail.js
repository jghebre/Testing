const express = require('express');
const { exec } = require('child_process');

const router = express.Router();

router.get('/thumbnail', (req, res) => {
  let source;
  const converter = {
    load(name) {
      source = name;
      this.render();
    },
    render() {
      exec('convert uploads/' + source + ' -resize 64x64 thumbs/out.png', (err) => {
        res.send(err ? 'failed' : 'done');
      });
    },
  };

  converter.load(req.query.image);
});

module.exports = router;
