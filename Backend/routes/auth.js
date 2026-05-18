const express=require('express')
const router=express.Router();
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {body, validationResult}=require('express-validator')
const User=require('../models/user.model')


router.post('/register',[
    body('email').isEmail(),
    body('password'),
],async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty())return res.status(400).json({errors:errors.array()});

    try{
        const {username,email,password}=req.body;

        const existing=await User.findOne({where:{email}});
        if(existing)return res.status(409).json({error:"Email is already registered"});
        
        const hashedPassword=await bcrypt.hash(password,10);
        const user=await User.create({
           email,password:hashedPassword,
        });

        res.status(201).json({user});
    }
    catch(err){
        next(err);
    }
});

router.post('/login',[
    body('email').isEmail(),
    body('password').notEmpty(),
],async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty())return res.status(400).json({errors:errors.array()});

    try{
        const {username,email,password}=req.body;
        const user=await User.findOne({email});
        if(!user)return res.status(404).json({error:"user not found"});

        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(404).json({error:"invalid credentials"});

        const token=jwt.sign(
            {userId:user._id,email:user.email},
            process.env.JWT_SECRET,
            {expiresIn:'7d'}
        );
        res.status(200).json({message:"login successful"})
        res.json({token});
    }
    catch(err){
        next(err);
    }
})

module.exports=router;