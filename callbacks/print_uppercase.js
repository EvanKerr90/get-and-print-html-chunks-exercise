var getHTML = require('../http-functions');
var uppercase = ''

function printUpperCase(html) {
  uppercase += html.toUpperCase();
  console.log(uppercase);
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};


getHTML(requestOptions, printUpperCase);
