const mongoose = require('mongoose');

module.exports.getSkills = function(req, res) {
  const something = [
    {
      "name" : "HTML",
      "type" : "frontend",
      "percent" : 75
    }
  ]
  const skill = mongoose.model('skill');

  skill.find().then(items => {
    if (!items.length) {
      res.status(200).json({skills: something});
    } else {
      res.status(200).json({skills: items});
    }
  })
};

module.exports.deleteSkills = function(req, res) {
  const id = req.query.id;
  const model = mongoose.model('skill');

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


module.exports.createSkills = function(req, res) {
  const model = mongoose.model('skill');

  let item = new model({
    name: req.body.name,
    type: req.body.type,
    percent: req.body.percent
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

module.exports.editSkills = function(req, res) {
  const id = req.params.id;
  let data = {
    name: req.body.name,
    type: req.body.type,
    percent: req.body.percent
  };
  const model = mongoose.model('skill');

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