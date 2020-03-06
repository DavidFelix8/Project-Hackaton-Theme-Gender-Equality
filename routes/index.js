'use strict';
const { Router } = require('express');
const router = new Router();

const dataJson = require('../ratings.json');

router.get('/', (req, res, next) => {
  // console.log(dataJson);
  res.render('index');
});

//Router Post Main Page Form User
/* router.post('/formUser', (req, res, next) => {
  
  .then(data => {
   res.redirect(`/formCompany`);
  })
  .catch(error => {
    next(error);
  });
}) */

//Second Form
router.get('/formCompany', (req, res, next) => {
  res.render('formCompany');
});

//Router Post Second Form about company
router.post('/formCompany', (req, res, next) => {
  res.redirect('/submitted');
});

router.get('/submitted', (req, res, next) => {
  res.render('submitted');
});

module.exports = router;
