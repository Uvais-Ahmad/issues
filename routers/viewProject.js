const express = require('express');
const router = express.Router();

const viewCont = require('../controller/viewProject_Cont');

//Route for view the project
router.get('/:id',viewCont.view);

//to add issue on project
router.post('/add-issue',viewCont.addIssue);
// to filter the issues
router.post('/filter/:id',viewCont.filter);
//to search the issues
router.post('/search/:id',viewCont.search);


module.exports = router;