const request = require('request');

module.exports = function (done) {
  process.stdin.on('data', (data) => {
    const userInput = data.toString().trim();
    const cmd = userInput.split(' ')[0];
    const url = userInput.split(' ')[1];

    if (cmd === 'curl') {
      request(url, function (error, response, body) {
        if (error) {
          console.error('error:', error);
        }
        done(`statusCode: ${response && response.statusCode}`);
        done(`body: ${body}`);
      });
    }
  });
};
