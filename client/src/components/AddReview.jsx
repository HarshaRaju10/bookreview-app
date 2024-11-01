import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState(1);
    const [reviewText, setReviewText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/reviews', { title, author, rating, reviewText });
        navigate('/');
    };

    return (
        <div>
            <h1>Add Review</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required />
                <textarea placeholder="Review" value={reviewText} onChange={(e) => setReviewText(e.target.value)} required />
                <button type="submit">Add Review</button>
            </form>
        </div>
    );
};

export default AddReview;
