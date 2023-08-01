const express = require('express');
const data = require('../restApi/MOCK_DATA.json')
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/learning")
.then(()=>console.log("Db Conected"))
.catch((err)=>console.log(err))
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

const app = express();
app.use(express.json({extends:false}))


//middleware
app.use((req,res,next)=>{
    // console.log("not move")
    next();
})

app.route('/app/user')
.get(async (req,res)=>{
    let alluser = await usermodule.find({})
    return res.json(alluser)
})
.post(async (req,res)=>{

    const result = await usermodule.create({
        Name:req.body.Name,
        Email : req.body.Email,
        Gender : req.body.Gender
    })
    // let body = req.body;
    // console.log(body)
    // data.push(body);
    return res.status(201).json(result);
})

//user get by id
app.route('/app/user/:id')
.get( async (req,res)=>{
    const id = req.params.id
    let userbyID = await usermodule.findById(id)
    // let user = " ";
    // data.find((res)=>{
    //     if(res.id==id){
    //         user = res;
    //     }
    // })
    return res.json(userbyID)
})
.patch(async (req,res)=>{
    const id = req.params.id
    await usermodule.findByIdAndUpdate(id , {Email : "tiwari@gmail.com"})
    // let user = " ";
    // data.find((res)=>{
    //     if(res.id==id){
    //         user = res;
    //     }
    // })
    return res.json(await usermodule.findById(id))
})
.delete(async(req,res)=>{
    const id = req.params.id
    await usermodule.findByIdAndDelete(id)
    // data.splice(id,1);
    return res.json({message : "User deleted"})
})





app.listen(3000,()=>console.log("server running on 3000"))