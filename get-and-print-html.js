var https = require('https');
var currentData = '';

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {

    response.setEncoding('utf-8');

    response.on('data', function (data) {
      currentData += data;
    });

    response.on('end', function() {
      console.log(currentData);
    });
  });

}

getAndPrintHTML();