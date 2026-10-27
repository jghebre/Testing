const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

app.use(rateLimit({ windowMs: 60 * 1000, limit: 100 }));

app.use(require('./routes/network'));
app.use(require('./routes/disk'));
app.use(require('./routes/archive'));
app.use(require('./routes/logs'));
app.use(require('./routes/thumbnail'));
app.use(require('./routes/report'));
app.use(require('./routes/service'));
app.use(require('./routes/scan'));
app.use(require('./routes/dns'));

if (require.main === module) {
  app.listen(process.env.PORT || 3000);
}

module.exports = app;
