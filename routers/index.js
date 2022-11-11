const express = require('express');
const router = express.Router();

console.log('Router has been called ');

const homeCont = require('../controller/home');

router.get('/',homeCont.home);
router.post('/create-project',homeCont.create);
router.get('/destroy/:id',homeCont.destroy);

//All operation On a single project handle by viewProject router
router.use('/view-project',require('./viewProject'));


module.exports = router;