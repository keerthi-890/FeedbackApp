Clueso.io Clone
Description

A full-stack clone of Clueso.io, a feedback collection platform. Users can register, login, and submit feedback with ratings. This project demonstrates frontend-backend integration using HTML, CSS, JavaScript, Node.js, Express, and MongoDB. JWT is used for authentication, and the app maintains a list of submitted feedbacks.

Features

User Registration and Login with JWT authentication
Submit feedback with message and rating
View list of feedbacks
Frontend built with HTML, CSS, and JavaScript
Backend built with Node.js, Express, and MongoDB

Tech Stack

Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB (Atlas)
Authentication: JWT
Version Control: Git, GitHub

Setup and Installation

Backend setup
cd backend
npm install


MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

Run backend server
npx nodemon server.js


Frontend setup
Open index.html 

Test the application

Register a new user
Login
Submit feedback

Project Structure
backend/
  ├── routes/
  │   ├── authRoutes.js
  │   └── feedbackRoutes.js
  ├── models/
  │   ├── User.js
  │   └── Feedback.js
  └── server.js
frontend/
  ├── index.html
  ├── style.css
  └── script.js



Assumptions and Notes

Email must be unique during registration
Feedback requires a rating from 1-5
JWT token is stored in localStorage

License

This project is for educational purposes and internship submission.
