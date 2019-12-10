const convertHtmlToPdf = require('pdf-puppeteer');
const api = require('./lib/api');
const formatter = require('./lib/formatter');
const fs = require('fs');

module.exports = function(username) {
  api.getProfile(username).then(function(data) {
    console.log(data)
    convertHtmlToPdf(formatter.toHtml(data), function(pdf) {
      fs.writeFileSync(`./output/${username}.pdf`, pdf, 'binary');
    });
  });
}

require('./index')('atparkweb')
