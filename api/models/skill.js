'use strict';

const mongoose = require('mongoose'),
Schema = mongoose.Schema,
SkillSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Укажите название']
  },
  type: {
    type: String,
    required: [true, 'Укажите категорию']
  },
  percent: {
    type: Number,
    required: [true, 'Укажите процент']
  }
});

mongoose.model('skill', SkillSchema);