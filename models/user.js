'use strict';
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  gender: {
    type: String,
    trim: true
  },
  company_name: {
    type: String,
    trim: true
  },
  sex_orientation: {
    type: String,
    trim: true
  },
  salary_satisfaction: {
    type: String,
    trim: true
  }
});
module.exports = mongoose.model('User', schema);