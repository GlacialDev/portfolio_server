const http = require('request');
  
const apiOptions = {
  server: 'http://localhost:3000/'
}

module.exports.getAbout = function(req, res) {
  const pathAPI = 'api/skill';
  const requestOptions = {
    url: apiOptions.server + pathAPI,
    method: 'GET',
    json: {}
  }
  const sendObj = { title: 'Обо мне'}
  http(requestOptions, function(error, response, body) {
    res.render('pages/about', Object.assign(body, sendObj));
  })
}