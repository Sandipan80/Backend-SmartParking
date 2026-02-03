const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const routes = require('./routes/index')
const chief = express()
chief.use(express.json())

chief.use(cors({
    origin: "*",
    methods:"GET",
}))

chief.use("/getStatus",(req,res,next)=>{
    const registerData = req.body;
    console.log("registerData:",registerData)

    res.json({status:"Server is running fine"})
    console.log("Sever Connected")
})


mongoose.connect("mongodb+srv://bhullarsandipan_db_user:DE4BE8PAB8Dcj1iH@backend-cluster.ckp0bzp.mongodb.net/")

.then(()=>{
    const PORT = 5001;
    chief.listen(PORT)
    console.log("Connected to MongoDB",);
    console.log("http://localhost:5001");
    
})
.catch(()=>{
    console.log("Connection Failed",);
    
})