const express = require('express');


const {GetAllProjects,getAProject,createProject,deleteAProject,updateProject,deleteAllProjects,BulkInsert} = require('../controllers/projectController');
const router = express.Router();

 


//get requests .
router.get('/',GetAllProjects) 

//get a single request
router.get('/:id',getAProject)

// and this is a post request
router.post('/post',createProject)

//update request 
router.patch('/update/:id',updateProject) 

//delete request 
 router.delete('/delete/:id',deleteAProject)

 //drop all projects
 router.delete('/drop',deleteAllProjects)
 
 //bulk post for debugging only
 router.post('/bulkInsert',BulkInsert);

 //file uploader 
//app.post() 

module.exports =router; 