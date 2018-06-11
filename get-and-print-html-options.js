var https = require('https');
var currentData = '';

function getAndPrintHTML (options) {

  https.get(options, function (response) {

    response.setEncoding('utf-8');

    response.on('data', function (data) {
      currentData += data;

    response.on('end', function() {
      console.log(currentData);

    });
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);