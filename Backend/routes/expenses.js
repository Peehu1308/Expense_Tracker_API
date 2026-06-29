import express from 'express';
import { body, validationResult } from 'express-validator';
import Expenses from '../models/expense.model.js';

const router = express.Router();

router.post('/add_expense', [
  body('amount').isNumeric(),
  body('category').notEmpty(),
], async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { amount, category, note } = req.body;
    const expenses = await Expenses.create({
      amount,
      category,
      note,
    });

    res.status(200).json({ message: 'code is working', data: expenses });
  } catch (err) {
    next(err);
  }
});

router.get('/get_expense', async (req, res, next) => {
  try {
    const expenses = await Expenses.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: 'Expenses fetched successfully',
      data: expenses,
    });
  } catch (err) {
    next(err);
  }
});

router.get('/get_expenses', async (req, res, next) => {
  try {
    const { category } = req.query;
    const filter = {};
    if (category) {
      filter.category = category;
    }
    const expenses = await Expenses.find(filter);
    res.status(200).json({ data: expenses });
  } catch (err) {
    next(err);
  }
});

export default router;