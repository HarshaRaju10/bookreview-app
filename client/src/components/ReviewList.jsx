import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Create an axios instance with base URL for better management of requests
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // Adjust to your backend URL
});

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            console.log('Fetching reviews...'); // Log statement for debugging
            try {
                const response = await axiosInstance.get('/reviews');
                console.log('Response:', response.data); // Log the response for inspection
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error); // Log any errors encountered
            }
        };
        fetchReviews();
    }, []);

    return (
        <div>
            <h1>Book Reviews</h1>
            <Link to="/add">Add Review</Link>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map(review => (
                        <li key={review._id}>
                            <h2>{review.title}</h2>
                            <p>{review.author}</p>
                            <p>{review.rating} stars</p>
                            <p>{review.reviewText}</p>
                            <Link to={`/edit/${review._id}`}>Edit</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews found.</p> // Display message if no reviews are present
            )}
        </div>
    );
};

export default ReviewList;
