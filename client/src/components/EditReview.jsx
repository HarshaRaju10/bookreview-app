import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Star, Trash2 } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import toast, { Toaster } from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
});


const EditReview = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState('');
  const navigate = useNavigate();

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

const handleUpdate = async (e) => {
  const token = localStorage.getItem('token');
    e.preventDefault();
    await axiosInstance.put(`/reviews/${id}`, { title, author, rating, reviewText }, {
      headers: {
          Authorization: `Bearer ${token}`,
      },
  })
        .then(response => {
            toast.success('Review Updated Successfully!');
           
        })
        .catch(error => {
            console.error('Error updating review:', error);
            toast.error('Failed to update review.');
        });
};

const handleDelete = async () => {
  const token = localStorage.getItem('token');
    if (window.confirm('Are you sure you want to delete this review?')) {
        try {
            await axiosInstance.delete(`/reviews/${id}`, {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          });
            toast.success('Review Deleted Successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error deleting review:', error);
            toast.error('Failed to delete review.');
        }
    }
};


  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Toaster />
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-8 py-6 bg-indigo-600">
          <h1 className="text-2xl font-bold text-white text-center">Edit Review</h1>
        </div>
        
        <form onSubmit={handleUpdate} className="p-8 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Book Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="author" className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <div>
                            <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                                Rating
                            </label>
                            <div className="flex items-center space-x-2">
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <button
                                        key={value}
                                        type="button"
                                        onClick={() => setRating(value)}
                                        className={`w-12 h-12 flex items-center justify-center rounded-lg text-xl transition duration-200 ${
                                            rating >= value
                                                ? 'bg-yellow-400 text-white'
                                                : 'bg-gray-100 text-gray-400'
                                        }`}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                        </div>
          </div>

          <div>
            <label htmlFor="review" className="block text-sm font-medium text-gray-700">
              Your Review
            </label>
            <textarea
              id="review"
              rows={4}
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
            >
              Update Review
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="flex items-center justify-center px-4 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
            >
              <Trash2 className="w-5 h-5 mr-2" />
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
     <Footer />
     </div>
  );
};

export default EditReview;