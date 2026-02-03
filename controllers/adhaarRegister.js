const RegisterModel = require("../model/Register.model");

const adhaarRegister=async(req,res,next)=>{
    //  console.log("Adhaar Register controller called")
    // res.json({status:"Adhaar Register controller called"})
    const MyForm =req.body;
    //step 1 - req
    console.log("MyForm:", MyForm);
    
    //step 2- data extract
    const {username,password} = MyForm;
    console.log("username:", username);
    console.log("password", password);
    

    //step 3- validate MONGO DB

    //step 4- store in MONGO DB
    const newUser = new RegisterModel({
        username: username,
        password: password,
    });
    await newUser.save();
    //step 5 - response
    res.json({ status:"Registration Successful"});
};
module.exports=adhaarRegister;