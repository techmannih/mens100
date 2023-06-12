const express=require("express")
const  router= new express.Router()

const MensRanking=require("../models/mens")





router.post("mens",async (req,res)=>{
    try{
        const addingMensRecords=new MensRanking(res.body)
        console.log(res.body)
        const inerstMens= await addingMensRecords.save()
        res.status(201).send(inerstMens)
    }catch(e){
        res.status(400).send(e);
    }
})





router.get("mens",async (req,res)=>{
    try{
        const getMens =await MensRanking.find({})
        res.send(getMens)
    }catch(e){
        res.status(400).send(e);
    }
})

router.get("mens",async (req,res)=>{
    try{
        const _id=req.params.id;
        const getMens =await MensRanking.findById(_id)
        res.send(getMens)
    }catch(e){
        res.status(400).send(e);
    }
})



module.exports=router()