const api_url = 'https://api.github.com/users';
const axios = require('axios');

module.exports = {
  getProfile(username) {
    let requestUrl = `${api_url}/${username}`;
    return axios.get(requestUrl).then(
      function (response) {
	if (response.status !== 200) throw new Error(response)
	return response.data
      }).catch(function (error) {
	console.error(error);
      });
  }
}
