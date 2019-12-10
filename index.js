const convertHtmlToPdf = require('pdf-puppeteer');
const api = require('./lib/api');
const formatter = require('./lib/formatter');

module.exports = function(username) {
  api.getProfile(username, formatter.toHtml);
}

require('./index')('atparkweb')
