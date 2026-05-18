const mongoose=require('mongoose');

const ExpenseSchema=new mongoose.Schema({
    category:{
        type:String,
        enum:['Food',"Misc","Rent","Clothing",'Books'],
        required:true,

    },
    amount:{
        type:Number,
        required:true,

    },
    note:{
        type:String,
        required:false,
    },
},{
    timestamps:true,
})

module.exports=mongoose.model("Expenses",ExpenseSchema);