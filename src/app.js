const express=require("express")
const port=process.env.PORT || 5600 ;
require("../src/db/conn")
const MensRanking=require("./models/mens");
const { default: mongoose } = require("mongoose");
const router = require("./routes/mens");
const app=express()

const router=require("./routes/mens")

app.use(express.json({ extended: false }))

app.use(router)






// app.get("/",async(req,res)=>{
//     res.send("hello from manish side")
// })

app.listen(port,()=>{
    console.log(`connection is live at ${port}`)
})