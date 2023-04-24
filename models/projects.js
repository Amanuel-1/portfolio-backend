const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema({
    title:{type:String,
           required:true
          },
    projectImg:{
        
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true 
    },
    tags: {
        type:Array,
        required:true
    },
    link:{
        type:String,
        required:true
    } ,
    viewCount:{
        type:Number,
        default:0
    },
    
    likeCount:{ 
        type:Number,
        default:0
    }
       
},{timestamps:true});
    



module.exports= mongoose.model('Project',projectSchema);