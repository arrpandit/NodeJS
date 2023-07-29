const { isUtf8 } = require('buffer');
const fs = require('fs');

// fs.writeFileSync('./fsdata.txt', "Hello file system");

// fs.writeFile("./asyncfsdata.txt","hello async data fs file",(err)=>{
//     if(!err){
//         console.log("no error");
//     }else{
//         console.log("file not created");
//     }
// })

// const d = fs.readFileSync("./fsdata.txt","utf-8")

// console.log(d)


// fs.readFile('./asyncfsdata.txt',"utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


fs.appendFileSync('./fsdata.txt'," adding some data")
