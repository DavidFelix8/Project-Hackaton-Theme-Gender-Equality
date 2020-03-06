'use strict';

const { Router } = require('express');
const router = new Router();
const dataJson = require('../ratings.json');

router.get('/allcompanies', (req, res, next) => {
  res.render('all-companies', { dataJson });
});

module.exports = router;
