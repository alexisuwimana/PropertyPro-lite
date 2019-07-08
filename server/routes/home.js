const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index', {title: 'My PropertyPro-lite App', message: 'Welcome to PropertyPro-lite'});
  });

  module.exports = router;