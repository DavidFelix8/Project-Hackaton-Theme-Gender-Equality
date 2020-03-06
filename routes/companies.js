'use strict';

const { Router } = require('express');
const router = new Router();
const dataJson = require('../ratings.json');

router.get('/bestcompanies', (req, res, next) => {
  res.render('bestcompanies');
});

router.get('/ironhack', (req, res, next) => {
  res.render('ironhack');
});

router.get('/allcompanies', (req, res, next) => {
  res.render('all-companies', { dataJson });
});

module.exports = router;
