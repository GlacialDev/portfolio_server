const path = require('path');
const formidable = require('formidable');
const http = require('request');

const apiOptions = {
  server: "http://localhost:3000"
}

module.exports.getAdminAbout = function(req, res) {
  const pathApi = '/api/get/skill';
  const requestOptions = {
    url: apiOptions.server + pathApi,
    method: 'GET',
    json: {}
  }
  const sendObj = { 
    title: 'Админка',
    adress: 'about'
  }
  http(requestOptions, function(error, response, body) {
    res.render('pages/admin', Object.assign(body, sendObj));
  })
};

module.exports.addSkill = function(req, res) {
  const pathApi = '/api/add/skill';
  const requestOptions = {
    url: apiOptions.server + pathApi,
    method: 'POST',
    json: {
      name: req.body.name,
      percent: req.body.percent,
      type: req.body.type
    } 
  };

  http(requestOptions, function(error, response, body) {
    res.redirect('/admin-about');
  });
};

module.exports.removeSkill = function(req, res) {
  const pathApi = '/api/skill/del:' + req.body.id;
  console.log(req.body);
  console.log(req.query);
  const requestOptions = {
    url: apiOptions.server + pathApi,
    method: 'DELETE',
    json: {}
  };

  http(requestOptions, function(error, response, body) {
    res.redirect('/admin-about');
  });
};