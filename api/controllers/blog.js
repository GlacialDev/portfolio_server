const mongoose = require('mongoose');

module.exports.getArticles = function(req, res) {
  const something = [
    {
      "title" : "meow",
      "date" : "22.02.2222",
      "content" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet architecto blanditiis saepe, tenetur veniam, cupiditate distinctio voluptatum assumenda debitis enim aliquam hic natus quisquam! Ullam veritatis est illo repellat fugit animi ut nemo minima reiciendis, libero ea, dolores officia architecto! Adipisci accusantium tempore molestias officiis eos itaque similique dolore temporibus."
    }
  ]
  const blog = mongoose.model('blog');

  blog.find().then(items => {
    if (!items.length) {
      res.status(200).json({blogs: something});
    } else {
      res.status(200).json({blogs: items});
    }
  })
};

module.exports.createArticles = function(req, res) {
  const model = mongoose.model('blog');

  let item = new model({
    title: req.body.title,
    date: new Date(req.body.date),
    content: req.body.content
  });

  item
    .save()
    .then(item => {
      return res.status(201).json({status: 'добавлено'});
    }), err => {

      const error = Object
        .keys(err.errors)
        .map(key => err.errors[key].message)
        .join(', ');

        res.status(404).json({
          status: 'error' + error
        });
    };
};

module.exports.editArticles = function(req, res) {
  const id = req.params.id;
  let data = {
    title: req.body.title,
    date: new Date(req.body.date),
    content: req.body.content
  };
  const model = mongoose.model('blog');

  model
    .findByIdAndUpdate(id, {$set: data})
    .then((item) => {
      if(!!item) {
        res.status(200).json({status: 'обновлено'});
      } else {
        res.status(404).json({status: 'не нашло запись'});
      }
    }, (err) => {
        res.status(404).json({status: 'произошла ошибка обновления' + err});
    });
};

module.exports.deleteArticles = function(req, res) {
  const id = req.params.id;
  const model = mongoose.model('blog');

  model
    .findByIdAndRemove(id)
    .then((item) => {
      if(!!item) {
        res.status(200).json({status: 'удалено'});
      } else {
        res.status(404).json({status: 'не нашло запись'});
      }
    }, (err) => {
      res.status(404).json({status: 'произошла ошибка удаления' + err});
    });
};
