import mongoose from 'mongoose';
import bcrypt from "bcryptjs";

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true,
        minLength:3,
        maxLength:30,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        maxLength:20,

    },

},{
    timestamps:true
}
)

UserSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
};




export const User=mongoose.model('User',UserSchema);