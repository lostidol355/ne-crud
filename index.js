const request = require('request');

request('http://10.10.30.148:3007/quiz', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body);
  console.log(body.explanation);
});