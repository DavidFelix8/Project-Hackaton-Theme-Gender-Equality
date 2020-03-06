'use strict';

const { Router } = require('express');
const router = new Router();
const dataJson = require('../ratings.json');

router.get('/users', (req, res, next) => {
  res.render('users');
});

module.exports = router;
