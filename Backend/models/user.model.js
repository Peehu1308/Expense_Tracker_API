const userSchema=new Schema(
    {
        username:{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
            minLength:3,
            maxLength:20,

        },
        password:{
        type:String,
        required:true,
        minLength:5,
        maxLength:20,
        trim:true,
    },
    email:{
        required:true,
        type:String,
        unique:true,
        trim:true
    }
    },{
        timestamps:true,
    }
    
)