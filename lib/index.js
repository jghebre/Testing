const api = {
  Scanner: require('./scanner').Scanner,
};

for (const key in api) {
  if (Object.prototype.hasOwnProperty.call(api, key)) {
    exports[key] = api[key];
  }
}
