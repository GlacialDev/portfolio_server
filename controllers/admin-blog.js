const path = require('path');
const formidable = require('formidable');
const http = require('request');

const apiOptions = {
  server: "http://localhost:3000"
}

module.exports.getAdminBlog = function(req, res) {
  res.render('pages/admin', { 
    title: 'Админка', 
    adress: 'blog',
    msgblog: req.query.msgblog
  });
}

module.exports.postArticle = function(req, res) {
  const pathApi = '/api/blog';
  const requestOptions = {
    url: apiOptions.server + pathApi,
    method: 'POST',
    json: {
      title: req.body.title,
      date: req.body.date,
      content: req.body.content
    }
  };

  http(requestOptions, function(error, response, body) {
    res.redirect('/admin-blog?msgblog=' + body.status);
  });
}