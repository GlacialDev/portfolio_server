const mongoose = require('mongoose');

module.exports.getArticles = function(req, res) {
  const something = {
    "title" : "first",
    "date" : "2017 07 12",
    "content" : "loremlol"
  }

  const blog = mongoose.model('blog');
  
  blog.find().then(items => {
    if (!items.lenght) {
      res.status(200).json(article: something);
    } else {
      res.status(200).json(article: items);
    }
  })

};
module.exports.createArticles = function(req, res) {
  res.json('GET')
};
module.exports.editArticles = function(req, res) {
  res.json('PUT')
};
module.exports.deleteArticles = function(req, res) {
  res.json('DELETE')
};
