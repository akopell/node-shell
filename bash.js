process.stdout.write('prompt > ');

const done = (output) => {
  console.log(output);
  process.stdout.write('\nprompt > ');
};

const pwd = require('./pwd');

pwd(done);

const ls = require('./ls');

ls(done);

const cat = require('./cat');

cat(done);

const curl = require('./curl');

curl(done);
