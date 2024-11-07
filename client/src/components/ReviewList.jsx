import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import toast, { Toaster } from "react-hot-toast";
import { Calendar, SortDesc, SortAsc } from 'lucide-react';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
});

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const [filterRating, setFilterRating] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('desc'); // 'desc' for newest first
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axiosInstance.get('/reviews');
                setReviews(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching reviews:', error);
                setIsLoading(false);
            }
        };
        fetchReviews();
    }, []);

    const sortedAndFilteredReviews = reviews
        .filter(review => filterRating ? review.rating === parseInt(filterRating) : true)
        .filter(review => 
            review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            review.author.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            const dateA = new Date(a.dateAdded);
            const dateB = new Date(b.dateAdded);
            return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
        });

    const StarRating = ({ rating }) => (
        <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
                <div key={index} className={`
                    w-4 h-4 transform rotate-45 
                    ${index < rating 
                        ? 'bg-yellow-400 shadow-lg' 
                        : 'bg-gray-200'
                    }
                `}/>
            ))}
        </div>
    );

    const formatDate = (dateAdded) => {
        return new Date(dateAdded).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <Toaster />
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-12 relative">
                        <div className="absolute inset-0 -skew-y-3 bg-gradient-to-r from-blue-100 to-purple-100 transform -z-10"></div>
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent py-8">
                            Book Reviews
                        </h1>
                        <p className="text-gray-600 text-lg mt-4">
                            Discover your next literary adventure
                        </p>
                    </div>

                    {/* Controls Section */}
                    <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            {/* Search Bar */}
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Search by title or author..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-6 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                                />
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-lg">
                                    🔍
                                </div>
                            </div>

                            {/* Sort Button */}
                            <button
                                onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
                                className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                            >
                                <Calendar className="w-5 h-5" />
                                {sortOrder === 'desc' ? (
                                    <SortDesc className="w-5 h-5" />
                                ) : (
                                    <SortAsc className="w-5 h-5" />
                                )}
                                <span className="hidden sm:inline">
                                    {sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}
                                </span>
                            </button>

                            {/* Rating Filter */}
                            <select
                                value={filterRating}
                                onChange={(e) => setFilterRating(e.target.value)}
                                className="px-6 py-3 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
                            >
                                <option value="">All Ratings</option>
                                {[5, 4, 3, 2, 1].map(num => (
                                    <option key={num} value={num}>
                                        {"★".repeat(num) + "☆".repeat(5-num)}
                                    </option>
                                ))}
                            </select>

                            {/* Add Button */}
                            <Link
                                to="/add"
                                className="group relative overflow-hidden px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl transition-all duration-300 transform hover:scale-105"
                            >
                                <span className="relative z-10">Add Review</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            </Link>
                        </div>
                    </div>

                    {/* Reviews Grid */}
                    {isLoading ? (
                        <div className="flex justify-center items-center py-12">
                            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : sortedAndFilteredReviews.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sortedAndFilteredReviews.map(review => (
                                <div
                                    key={review._id}
                                    className="group relative bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 transform rotate-45 translate-x-12 -translate-y-12"></div>
                                    
                                    <div className="p-6 relative">
                                        <div className="flex justify-between items-start mb-4">
                                            <h2 className="text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                                                {review.title}
                                            </h2>
                                            <Link
                                                to={`/edit/${review._id}`}
                                                className="ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-purple-100 transition-colors duration-300"
                                            >
                                                ✏️
                                            </Link>
                                        </div>
                                        
                                        <p className="text-gray-600 mb-2 italic">by {review.author}</p>
                                        <p className="text-sm text-gray-500 mb-3">
                                            {formatDate(review.dateAdded)}
                                        </p>
                                        
                                        <div className="mb-4">
                                            <StarRating rating={review.rating} />
                                        </div>
                                        
                                        <p className="text-gray-700 line-clamp-3 relative">
                                            {review.reviewText}
                                        </p>
                                        
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg">
                            <p className="text-gray-600 text-lg">✨ No reviews found matching your criteria ✨</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ReviewList;