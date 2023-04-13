require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const path =  require('path')
const router_projects = require('./routes/projects');



const app = express();

//THESE ARE MIDDLEWARES.
app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use((req,res,next)=>{
   console.log(res.path, req.method,res.statusCode)
   next();
})
//constants [custom]
const port =process.env.PORT ;
//this is used to work with the routes in another file
app.use('/api/test',router_projects)

//to get a file from the api to the frontend



//database connection
mongoose.connect(process.env.MONGO_DB)
.then(()=>{
app.listen(port,()=>{
        console.log("the server now started on port "+ port)
    })
})
.catch((error)=>{
    console.log(error)
})