const fs = require('fs');

module.exports = function () {
  process.stdin.on('data', (data) => {
    const userInput = data.toString().trim();
    const cmd = userInput.split(' ')[0];
    const file = userInput.split(' ')[1];

    if (cmd === 'cat') {
      fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });
    }
  });

  // fs.readFile(filePath)
};
