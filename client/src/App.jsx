import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReviewList from './components/ReviewList';
import AddReview from './components/AddReview';
import EditReview from './components/EditReview';
import Login from './components/Login'; 
import SignUp from './components/Signup';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<ReviewList />} />
            <Route path="/add" element={<AddReview />} />
            <Route path="/edit/:id" element={<EditReview />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
};

export default App;
