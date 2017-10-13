'use strict';

const mongoose = require('mongoose'),
Schema = mongoose.Schema,
SlideSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Укажите название']
  },
  techs: {
    type: String,
    required: [true, 'Укажите название']
  }
});

mongoose.model('slide', SlideSchema);