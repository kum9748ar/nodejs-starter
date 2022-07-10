const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()
app.get("/",(req,res)=>{
    res.send("Hello World ")
})
const port = 5000
//Listen to your app  
app.listen(port,()=>{
    console.log("App is listing on " + port)
})