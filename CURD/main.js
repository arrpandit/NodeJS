
const express = require('express');
const data = require('../restApi/MOCK_DATA.json')
const {mongooseConnection} = require('./connection')
const userRouter = require('./routes/user')
const {logReqRes} = require('../CURD/middleware/index')
const app = express();
const PORT = process.env.PORT || 3000

//mongo Connection
mongooseConnection("mongodb://127.0.0.1:27017/learning")
.then(()=>console.log("DB Connected"))
.catch((err)=>console.log(err))


//middleware
app.use(logReqRes("log.txt"))
app.use(express.json({extends:false}))


//route
app.use('/app/user',userRouter)

//server
app.listen(PORT,()=>console.log(`server running on ${PORT}`))