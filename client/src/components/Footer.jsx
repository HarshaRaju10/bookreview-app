import { Book, Mail, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Book className="h-8 w-8 text-amber-500" />
              <span className="font-serif text-xl font-bold">BookCritic</span>
            </div>
            <p className="text-gray-400">
              Your trusted source for honest and thoughtful book reviews.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-amber-500 transition-colors">Contact</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-amber-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="/fiction" className="text-gray-400 hover:text-amber-500 transition-colors">Fiction</a></li>
              <li><a href="/non-fiction" className="text-gray-400 hover:text-amber-500 transition-colors">Non-Fiction</a></li>
              <li><a href="/mystery" className="text-gray-400 hover:text-amber-500 transition-colors">Mystery</a></li>
              <li><a href="/sci-fi" className="text-gray-400 hover:text-amber-500 transition-colors">Science Fiction</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <div className="space-y-4">
              <p className="text-gray-400">Subscribe to our newsletter for the latest reviews.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button className="px-4 py-2 bg-amber-500 text-white rounded-r-md hover:bg-amber-600 transition-colors">
                  Subscribe
                </button>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} BookCritic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}