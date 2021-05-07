const express = require("express");
const bodyParser = require("body-parser");
const hbs = require("hbs");
const path = require("path");
const session = require("express-session");
const { v4: uuidv4 } = require('uuid');
const router = require("./router")


const app = express()

const publicDir = path.join(__dirname,"/public")
const partialDir = path.join(__dirname,"/views")


app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(publicDir))
app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:true
}))

app.use("/route",router)

app.set("view engine","hbs");
hbs.registerPartials(partialDir)


//home route
app.get("/",(req,res)=>{
    res.render("base",{title:"Login System"})
})



app.listen(3000,(req,res)=>{
    console.log("Server running on port 3000");
})