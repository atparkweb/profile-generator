const api_url = 'https://api.github.com/users';
const axios = require('axios');

module.exports = {
  getProfile(username, callback) {
    axios.get(`#{api_url}/#{username}`).then(
      (response)=> {
	callback(JSON.parse(response))
      }
    )
  }
}
