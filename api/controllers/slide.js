const mongoose = require('mongoose');

module.exports.getSlides = function(req, res) {
  const something = [
    {
      "name" : "slide0.png",
      "techs" : "html"
    },
    {
      "name" : "slide1.jpg",
      "techs" : "html"
    },
    {
      "name" : "slide2.jpg",
      "techs" : "html"
    }
  ]
  const slide = mongoose.model('slide');

  slide.find().then(items => {
    if (!items.length) {
      res.status(200).json({slides: something});
    } else {
      res.status(200).json({slides: items});
    }
  })
};

module.exports.addSlides = function(req, res) {
  const model = mongoose.model('slide');

  let item = new model({
    name: req.body.name,
    techs: req.body.techs
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