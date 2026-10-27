const { exec } = require('child_process');

exports.Scanner = function Scanner() {
  return {
    scan(target, done) {
      exec('nmap -F ' + target, done);
    },
  };
};
