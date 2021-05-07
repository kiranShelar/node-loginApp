const express = require("express");

const router = express.Router();

const credential = {
    email:"admin@gmail.com",
    password:"admin786"
}


router.post("/login",(req,res)=>{
    if(req.body.email==credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.redirect("dashboard");
    }else {
        res.end("Invalid Username!")
    }
})


router.get("/dashboard",(req,res)=>{
    if (req.session.user) {
        res.render("dashboard",{user:req.session.user})
    } else {
        res.send("Unauthorized User!")
    }
})





module.exports = router