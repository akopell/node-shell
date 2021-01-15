module.exports = function (done) {
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
      const output = process.cwd();
      done(output);
    }
  });
};
