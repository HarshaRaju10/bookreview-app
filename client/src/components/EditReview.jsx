import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

// Create an axios instance with base URL for better management of requests
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // Adjust to your backend URL
});

const EditReview = () => {
    const { id } = useParams(); // Get the review ID from the URL
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState(1);
    const [reviewText, setReviewText] = useState('');
    const navigate = useNavigate();

    // Fetch review data based on the ID
    useEffect(() => {
        const fetchReview = async () => {
            try {
                const response = await axiosInstance.get(`/reviews/${id}`);
                const review = response.data;
                setTitle(review.title);
                setAuthor(review.author);
                setRating(review.rating);
                setReviewText(review.reviewText);
            } catch (error) {
                console.error('Error fetching review:', error);
            }
        };
        fetchReview();
    }, [id]);

    // Function to handle the update
    const handleUpdate = async (e) => {
        e.preventDefault();
        await axiosInstance.put(`/reviews/${id}`, { title, author, rating, reviewText });
        navigate('/');
    };

    // Function to handle deletion
    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this review?')) {
            await axiosInstance.delete(`/reviews/${id}`);
            navigate('/'); // Redirect after deletion
        }
    };

    return (
        <div>
            <h1>Edit Review</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required />
                <textarea placeholder="Review" value={reviewText} onChange={(e) => setReviewText(e.target.value)} required />
                <button type="submit">Update Review</button>
            </form>
            <button onClick={handleDelete}>Delete Review</button> {/* Delete button */}
        </div>
    );
};

export default EditReview;
