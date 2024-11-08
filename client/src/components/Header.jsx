import { Book, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <header className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="/"
            className="flex items-center space-x-2 hover:text-amber-500 transition-colors"
          >
            <Book className="h-8 w-8 text-amber-500" />
            <span className="font-serif text-xl font-bold">BookCritic</span>
          </a>

          <div className="flex items-center space-x-4">
            {localStorage.getItem("token") ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
              >
                Logout
              </button>
            ) : (
              <>
                <a href="/login">
                  <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                    Sign In
                  </button>
                </a>
                <a href="/signup">
                  <button className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors">
                    Sign Up
                  </button>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
