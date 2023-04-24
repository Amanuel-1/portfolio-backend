const mongoose = require('mongoose');

const Project = require('../models/projects');


//get all projects
const  GetAllProjects = async (req,res)=>{
    try{
     
       const query =await Project.find({}).sort({createdAt:-1});
            //console.log(query)
          res.status(200).json(query)
          
    }
    catch(err){
        res.status(500).json({mssg:"Something went wrong."})
    }
  

   
}

//get a single project
const getAProject = async (req,res)=>{
    const {id} = req.params;
    //console.log(id)

    if(!mongoose.Types.ObjectId.isValid(id)){ //checks if the id given is a valid mongoose id
      return res.status(400).json({mssg:"invalid id"}); 
}

  const query =  await Project.findOne({_id:id});
 
  

  if(!query){
    return res.status(404).json({mssg:"there is no project by that id ." }) 
  }
  else{
    res.status(200).json(query);

  }
}
//create a new project
 const createProject = async (req,res)=>{
    
   const {title,link,details,projectImg,tags} = req.body ;
   console.log(req.body)
   console.log(projectImg,"<<<<")
   
   try{
      
   const proj = await Project.create({title,link,details,projectImg,tags});
   res.status(201).json({mssg:"sent successfuly",
              request:proj   });
   }
   catch(err){ 
     console.log("oooooooooooops something went wrong")
      
      res.status(404).json({mssg:"oooooooooooops something went wrong"})
   } 
  }
//delete a single project

async function deleteAProject(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) { //checks if the id given is a valid mongoose id
    return res.status(400).json({ mssg: "invalid id" });
  }
  const query = await Project.findOneAndDelete({ _id: id });

  if (!query) {
    return res.status(400).json({ mssg: "no project found by that id" });
  }
  console.log(`date created : ${query.createdAt}`);
  res.status(200).json(query);

}

//update a project
const updateProject =async (req,res)=>{
       const {id} =req.params;
       if(!mongoose.Types.ObjectId.isValid(id)){
         return res.status(400).json({mssg:"invalid id"});
       }
      
      const query  = await Project.findOneAndUpdate({_id:id},req.body,{new:true});
      // console.log(query)
      if(!query){
         return res.status(404).json({mssg:"no project found by that id"});
      }

      res.status(200).json(query);
      
      }


const deleteAllProjects =async(req,res)=>{
   const query = await Project.deleteMany({});
   if(!query){
      res.status(401).json({mssg:"delete unsuccessful"})
   }

   res.status(200).json({mssg:"all projects dropped successfully"})
}
const BulkInsert = async (req,res)=>{
  const query =await Project.collection.insertMany(req.body);

  if(!query){res.status(500).json({mssg:"something went wrong."})}

  res.status(200).json({mssg:"all projects posted successfully"})
}

module.exports ={getAProject,GetAllProjects,createProject,deleteAProject,updateProject,deleteAllProjects,BulkInsert}