var getHTML = require('../http-functions');
var reverse = ''

function printReverse(html) {
  reverse += html.split("").reverse().join("");
  console.log(reverse);
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};


getHTML(requestOptions, printReverse);
