const convertHtmlToPdf = require('pdf-puppeteer');
const api = require('./lib/api');

module.exports = {
  run(username) {
    api.getProfile(username, this.format);
  },
  format(profileData) {
    console.log(profileData);
  }
}
