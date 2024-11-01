import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReviewList from './components/ReviewList';
import AddReview from './components/AddReview';
import EditReview from './components/EditReview'; // Create similarly

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<ReviewList />} />
            <Route path="/add" element={<AddReview />} />
            <Route path="/edit/:id" element={<EditReview />} />
        </Routes>
    );
};

export default App;
