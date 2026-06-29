import mongoose from 'mongoose';

const ExpenseSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ['Food', 'Misc', 'Rent', 'Clothing', 'Books'],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    note: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Expenses = mongoose.model('Expenses', ExpenseSchema);
export default Expenses;