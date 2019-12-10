const api_url = 'https://api.github.com/users';
const axios = require('axios');

module.exports = {
  getProfile(username, callback) {
    let requestUrl = `${api_url}/${username}`;
    axios.get(requestUrl).then(
      function (response) {
	if (response.status!==200) throw new Error(response)
	callback(response.data)
      }).catch(function (error) {
	console.error(error);
      });
  }
}
