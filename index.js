const convertHtmlToPdf = require('pdf-puppeteer');
const api = require('./lib/api');
const formatter = require('./lib/formatter');

module.exports = function(username) {
  api.getProfile(username).then(function(data) {
    console.log(data)
    convertHtmlToPdf(formatter.toHtml(data), function(pdf) {
      // TODO: Save the pdf content somewhere
    });
  });
}

require('./index')('atparkweb')
