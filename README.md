# 📚 Book Review Application

A full-stack **MERN** (MongoDB, Express, React, Node.js) application that allows users to **browse**, **add**, **edit**, and **delete** book reviews. Additionally, users can sign up and log in to manage their reviews, providing a personalized experience.

---

## 📂 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [API Endpoints](#-api-endpoints)
- [Authentication](#-authentication)
- [Tools Used](#-tools-used)

---

## ✨ Features
- **User Authentication**: Secure sign-up and login functionality using JWT.
- **CRUD Operations**: Users can create, read, update, and delete book reviews.
- **Responsive Design**: Fully responsive frontend built with React and Tailwind CSS.
- **RESTful API**: Backend built using Express and MongoDB.
- **Error Handling**: Robust error handling for all API endpoints.
- **Data Validation**: Secure data validation with `mongoose` schemas.

---

## 🛠️ Tech Stack
- **Frontend**: Vite (React), Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **Authentication**: JWT (JSON Web Token)
- **Styling**: Tailwind CSS
- **Development Tools**: Vite, Concurrently, Axios

---

## 🚀 Installation

### Prerequisites
Make sure you have **Node.js** and **npm** installed on your system.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/book-review.git
cd book-review
2. Setup Backend (Express Server)
```bash
Copy code
cd server
npm install
3. Setup Frontend (Vite React App)
bash
Copy code
cd ../client
npm install
4. Configure Environment Variables
Create a .env file in the server directory:

env
Copy code
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
5. Run the Application
In the root directory, run both frontend and backend concurrently:

bash
Copy code
npm run dev
Or, run them separately:
Backend

bash
Copy code
cd server
npm run dev
Frontend

bash
Copy code
cd client
npm run dev
🔑 Environment Variables
Make sure you have the following environment variables configured in your .env file for the server:

Variable	Description
PORT	The port number for the Express server
MONGO_URI	MongoDB Atlas connection string
JWT_SECRET	Secret key for JWT token signing
📁 Project Structure
css
Copy code
book-review/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── vite.config.js
├── server/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── server.js
│   │   └── .env
└── README.md
✨ Available Scripts
Run Both Frontend & Backend
bash
Copy code
npm run dev
Frontend Only
bash
Copy code
cd client
npm run dev
Backend Only
bash
Copy code
cd server
npm run dev
🌐 API Endpoints
Authentication Routes
Method	Endpoint	Description
POST	/auth/signup	Register a new user
POST	/auth/login	Log in an existing user
Review Routes
Method	Endpoint	Description
GET	/reviews	Get all reviews
GET	/reviews/:id	Get a single review by ID
POST	/reviews	Create a new review (Protected)
PUT	/reviews/:id	Update a review by ID (Protected)
DELETE	/reviews/:id	Delete a review by ID (Protected)
🔒 Authentication
To access protected routes, include the Authorization header with your request:

http
Copy code
Authorization: Bearer <your-token>
🛠️ Tools Used
Vite for blazing fast frontend development.
Axios for making HTTP requests.
Concurrently for running multiple servers.
JWT for secure authentication.
Mongoose for MongoDB object modeling.
Nodemon for live-reloading the server.
