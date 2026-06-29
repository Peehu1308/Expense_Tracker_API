import mongoose from 'mongoose';

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




export const User=mongoose.model('User',UserSchema);