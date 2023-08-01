const express = require('express');
const data = require('./MOCK_DATA.json')

const app = express();

app.get('/users',(req,res)=>{
    return res.json(data)
})

app.get('/users/:id',(req,res)=>{
    let id = Number(req.params.id)
    let user=""
    data.find((val)=>{
        if(val.id==id){
            console.log(val)
            user = val
        }
    })
    return res.json(user)
})

app.listen(3000,()=>console.log("server is runnig on 3000"))