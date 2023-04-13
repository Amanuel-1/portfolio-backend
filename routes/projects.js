const express = require('express');
const multer = require('multer');

const {GetAllProjects,getAProject,createProject,deleteProject,updateProject,deleteAllProjects,BulkInsert} = require('../controllers/projectController');
const router = express.Router();

const storage  = multer.diskStorage({
    destination:"./uploads",
    filename:(req,file,cb)=>{
        const extension = ((file.mimetype).split('/'))[1] // file.mimetype ="image/jpeg"
        const title  =  req.body.title
        cb(null,`${title}-${file.originalname}`)
    }
})

const upload = multer({storage:storage });

//get requests .
router.get('/',GetAllProjects) 

//get a single request
router.get('/:id',getAProject)

// and this is a post request
router.post('/post',upload.single("projectImg"),createProject)

//update request 
router.patch('/update/:id',updateProject)

//delete request
 router.delete('/delete/:id',deleteProject)

 //drop all projects
 router.delete('/delete',deleteAllProjects)
 
 //bulk post for debugging only
 router.post('/bulkInsert',BulkInsert);

 //file uploader
//app.post() 

module.exports =router; 