const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minLength:6,
        maxLength:20,

    },

},{
    timestamps:true
}
)

module.exports=mongoose.model('User',UserSchema);