var https = require('https');
var currentData = '';

module.exports = function getHTML (options, callback) {

  https.get(options, function (response) {

    response.setEncoding('utf-8');

    response.on('data', function (data) {
      currentData += data;

    response.on('end', callback(currentData));

    });

    });
}

function printHTML (html) {
  console.log(html);
}

