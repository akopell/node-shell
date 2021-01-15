const request = require('request');

module.exports = function () {
  process.stdin.on('data', (data) => {
    const userInput = data.toString().trim();
    const cmd = userInput.split(' ')[0];
    const url = userInput.split(' ')[1];

    if (cmd === 'curl') {
      request(url, function (error, response, body) {
        console.error('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
      });
    }
  });
};
