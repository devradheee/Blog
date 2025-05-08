const express = require('express');
const router = require('./routes/index');


//Routes
router.get('', (req, res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});



module.exports = router;