const http = require('request');

const apiOptions = {
  server: 'http://localhost:3000/'
}

module.exports.getBlog = function(req, res) {
  const pathAPI = 'api/blog';
  const requestOptions = {
    url: apiOptions.server + pathAPI,
    method: 'GET',
    json: {}
  }
  const sendObj = { title: 'Мой блог'}
  http(requestOptions, function(error, response, body) {
    res.render('pages/blog', Object.assign(body, sendObj));
  })
}