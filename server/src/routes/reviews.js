import express from 'express';
import Review from '../models/Review.js';

const router = express.Router();

// GET /reviews
router.get('/', async (req, res) => {
    const reviews = await Review.find();
    res.json(reviews);
});

// GET /reviews/:id
router.get('/:id', async (req, res) => {
    const review = await Review.findById(req.params.id);
    res.json(review);
});

// POST /reviews
router.post('/', async (req, res) => {
    const newReview = new Review(req.body);
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
});

// PUT /reviews/:id
router.put('/:id', async (req, res) => {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedReview);
});

// DELETE /reviews/:id
router.delete('/:id', async (req, res) => {
    await Review.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

export default router;
