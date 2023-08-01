const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    Name : {
        type:String,
        required:true        
    },
    Email : {
        type:String,
        required:true        
    },
    Gender : {
        type:String,
        required:true        
    }
})

const usermodule = mongoose.model("user",userSchema)

module.exports = usermodule