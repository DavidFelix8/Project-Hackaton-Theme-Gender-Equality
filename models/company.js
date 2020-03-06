'use strict';
const mongoose = require('mongoose');
//company schema
const schemaCompany = new mongoose.Schema({
  company_id: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true,
    ratings: {
      type: Number
    }
  },
  overal_satisfaction: {
    type: String,
    trimm: true
  }
});
const Company = mongoose.model('Company', schemaCompany);
module.exports = Company;
