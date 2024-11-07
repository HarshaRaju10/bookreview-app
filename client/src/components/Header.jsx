import { Book, User, Menu, X } from 'lucide-react';
import { useState } from 'react';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center space-x-2 hover:text-amber-500 transition-colors"
          >
            <Book className="h-8 w-8 text-amber-500" />
            <span className="font-serif text-xl font-bold">BookCritic</span>
          </a>

          

          <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors">
                Sign Up
              </button>
            </div>
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="hover:text-amber-500 transition-colors">Home</a>
              <a href="/reviews" className="hover:text-amber-500 transition-colors">Reviews</a>
              <a href="/genres" className="hover:text-amber-500 transition-colors">Genres</a>
              <a href="/authors" className="hover:text-amber-500 transition-colors">Authors</a>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search books..."
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}