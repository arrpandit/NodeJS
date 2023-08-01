const usermodule = require('../models/user')

async function haldleGetAllUsers(req,res){
    let alluser = await usermodule.find({})
    return res.json(alluser)
}

async function haldle_Add_user(req,res){
    const result = await usermodule.create({
        Name:req.body.Name,
        Email : req.body.Email,
        Gender : req.body.Gender
    })
    return res.status(201).json(result);
}


async function GetUsersbyID(req,res){
    const id = req.params.id
    let userbyID = await usermodule.findById(id)
    return res.json(userbyID)
}

async function DeleteUsersbyID(req,res){
    const id = req.params.id
    await usermodule.findByIdAndDelete(id)
    return res.json({message : "User deleted"})
}

async function patchUsersbyID(req,res){
    const id = req.params.id;
    await usermodule.findByIdAndUpdate(id, { Email: "tiwari@gmail.com" });
    return res.json(await usermodule.findById(id));
}


module.exports = {
    haldleGetAllUsers,
    haldle_Add_user,
    GetUsersbyID,
    DeleteUsersbyID,
    patchUsersbyID
}