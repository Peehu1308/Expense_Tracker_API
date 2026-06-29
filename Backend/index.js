import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import errorHandler from './middleware/errorHandler.js';
import connectDB from './db.js';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import expenseRoutes from './routes/expenses.js';

const app=express();

connectDB();
app.use(express.json());


app.use(cors({origin:'http://localhost:5173'}));

app.use('/auth',authRoutes);
app.use('/expenses',expenseRoutes);

app.use(errorHandler);
const PORT=process.env.PORT|| 3000;
app.listen(PORT,()=>console.log(`Server running on PORT ${PORT}`))
