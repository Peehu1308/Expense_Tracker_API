const express=require('express')
const router=express.Router();
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {body, validationResult}=require('express-validator')
const prisma=require('../db')

router.post('/register',[
    body('email').isEmail(),
    body('password').isLength({min:6}),
],async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty())return res.status(400).json({errors:errors.array()});

    try{
        const {email,password}=req.body;

        const existing=await prisma.user.findUnique({where:{email}});
        if(existing)return res.status(409).json({error:"Email is already registered"});
        
        const hashedPassword=await bcrypt.hash(password,10);
        const user=await prisma.user.create({
            data:{email,password:hashedPassword},
            select:{id:true,email:true},
        });

        res.status(201).json({user});
    }
    catch(err){
        console.log(err)
    }
});

router.post('/login',[
    body('email').isEmail(),
    body('password').notEmpty(),
],async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty())return res.status(400).json({errors:errors.array()});

    try{
        const {email,password}=req.body;
        const user=await prisma.user.findUnique({where:{email}});
        if(!user)return res.status(404).json({error:"user not found"});

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(404).json({error:"invalid creentials"});

        const token=jwt.sign(
            {userId:user.id,email:user.email},
            process.env.JWT_SECRET,
            {expiresIn:'7d'}
        );
        res.json({token});
    }
    catch(err){
        console.log(err);
    }
})

module.exports=router;