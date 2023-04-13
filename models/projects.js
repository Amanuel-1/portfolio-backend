const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema({
    title:{type:String,
           required:true
          },
    projectImg:{
        
        type:String
    
    },
    details:{
        type:String,
       
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
    }    
},{timestamps:true});
    



module.exports= mongoose.model('Project',projectSchema);