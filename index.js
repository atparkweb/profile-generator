const convertHtmlToPdf = require('pdf-puppeteer');
const api = require('./lib/api');
const formatter = require('./lib/formatter');
const fs = require('fs');

module.exports = function () {
  let username = process.argv[2]
  if (!username) {
    console.warn('No username provided. Usage: npm start [username]')
    return;
  }
  api.getProfile(username).then(function(data) {
    convertHtmlToPdf(formatter.toHtml(data), function(pdf) {
      fs.writeFileSync(`./output/${username}.pdf`, pdf, 'binary');
    });
  });
}

require('./index.js')();
