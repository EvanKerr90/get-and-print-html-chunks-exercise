var getHTML = require('../http-functions');
var lowercase = ''

function printLowerCase(html) {
  lowercase += html.toLowerCase();
  console.log(lowercase);
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};


getHTML(requestOptions, printLowerCase);
