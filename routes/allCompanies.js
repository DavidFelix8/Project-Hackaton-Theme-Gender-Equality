'use strict';

const { Router } = require('express');
const router = new Router();

router.get('/allcompanies', (req, res, next) => {
  res.render('allcompanies');
});
