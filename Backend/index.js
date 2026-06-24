const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const connectDB=require('./db')

const errorHandler=require('./middleware/errorHandler')


const authRoutes=require('./routes/auth');
const expenseRoutes=require('./routes/expenses')

const app=express();

connectDB();
app.use(express.json());

const cors=require('cors');
app.use(cors({origin:'http://localhost:5173'}));

app.use('/auth',authRoutes);
app.use('/expenses',expenseRoutes);

app.use(errorHandler);
const PORT=process.env.PORT|| 3000;
app.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`))
