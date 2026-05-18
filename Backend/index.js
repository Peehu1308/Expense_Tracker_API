const dotenv=require('dotenv');
dotenv.config();
const express=require('express');

const errorHandler=require('./middleware/errorHandler')


const authRoutes=require('./routes/auth');

const app=express();
app.use(express.json());

app.use('/auth',authRoutes);

app.use(errorHandler);
const PORT=process.env.PORT|| 3000;
app.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`))
