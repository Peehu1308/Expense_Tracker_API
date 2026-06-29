import { User } from '../models/user.model.js';
import jwt from "jsonwebtoken"

const registerUser=async(req,res)=>{
    try{
        const {username,email,password}=req.body;

        if(!username || !email || !password){
            return res.status(400).json({message:"please fill all the fields"});
        }

        const existing=await User.findOne({email:email.toLowerCase()});
        if(existing){
            return res.status(409).json({message:"user already exists "});
        }

        const user=await User.create({
            username,
            email,
            password,
            loggedIn:false,
        });
        res.status(201).json({message:"user registered successfully",
            user:{id:user._id,email:user.email,username:user.username}
        });

    }
    catch(err){
        res.status(500).json({message:"internal error",error:err.message});
    }
}

const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email:email.toLowerCase()});

        if(!user)return res.status(404).json({message:"user not found"});

        const isMatch=await user.comparePassword(password);
        if(!isMatch)return res.status(400).json({
            message:"invalid credentials"
        })

        const token=jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        );

        

        res.status(200).json({
            message:"user logged in",
            token,
            user:{
                id:user._id,
                email:user.email,
                username:user.username,
            }
        });
    }
    catch(err){
        console.log(`internale server error ${err}`);
    }
}

const logoutUser=async(req,res)=>{
    try{
        const {email}=req.body;
        const user=await User.findOne({email});
        if(!user)return res.status(404).json({message:"user not found"});
        
        res.status(200).json(
            {message:"logout successfull"}
        );
    }
    catch(err){
        console.log(`unable to logout dues to ${err}`);
    }
}

export {loginUser,registerUser,logoutUser};