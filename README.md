# MERN Authentication System

MERN Authentication System is a full-fledged authentication system built using the MERN stack (MongoDB, Express, React, Node.js). It includes essential features like user registration, login, email verification, and password reset, providing a secure and scalable solution for modern web applications.

---

## Features

### Core Features
- User registration
- Login with email and password
- JWT-based authentication
- User session persistence
- Protected routes with middleware

### Additional Features
- Email verification using OTP
- Password reset functionality
- Toast notifications for feedback
- Responsive UI with Tailwind CSS

---

## Tech Stack

### **Frontend**
- React
- React Router
- Axios
- Tailwind CSS

### **Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- Nodemailer
- Bcrypt.js

---

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js (v18 or higher)
- MongoDB (or MongoDB Atlas)
- Any SMTP email service (e.g., Gmail)

---

### Installation

#### Clone the Repository
```bash
git clone https://github.com/devanshbhurrak/mern-auth.git
cd mern-auth
```

#### Backend Setup
1. Navigate to the `backend` folder:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file in the `backend` folder with the following variables:
```
MONGO_URI=<YOUR_MONGODB_URI>
JWT_SECRET=<YOUR_SECRET>
SMTP_USER=<YOUR_EMAIL>
SMTP_PASS=<YOUR_EMAIL_PASSWORD>
CLIENT_URL=http://localhost:3000
```
4. Start the backend server:
```bash
npm start
```

#### Frontend Setup
1. Navigate to the `frontend` folder:
```bash
cd ../frontend
```
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file in the `frontend` folder with the following:
```
REACT_APP_API_URL=http://localhost:5000/api
```
4. Start the frontend app:
```bash
npm start
```

---

## Folder Structure

```
mern-auth/
├── backend/
│   ├── config/         # Configuration files
│   ├── controllers/    # Backend logic
│   ├── middleware/     # Middleware for authentication
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   ├── server.js       # Main server file
│   └── authRoutes.js   # Authentication routes
│
├── frontend/
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── assets/     # Images and icons
│   │   ├── components/ # Reusable React components
│   │   ├── context/    # Context for user authentication
│   │   ├── pages/      # Main pages of the app
│   │   ├── App.jsx     # Main React component
│   │   └── main.jsx    # Entry point for React app
│   └── index.html      # Base HTML file
│
└── README.md           # Project documentation
```

---

## API Endpoints

| Method | Endpoint                    | Description                      |
|--------|-----------------------------|----------------------------------|
| POST   | `/api/auth/register`        | Register a new user              |
| POST   | `/api/auth/login`           | Login user                       |
| POST   | `/api/auth/logout`          | Logout user                      |
| POST   | `/api/auth/send-verify-otp` | Send OTP for email verification  |
| POST   | `/api/auth/verify-account`  | Verify user email with OTP       |
| POST   | `/api/auth/send-reset-otp`  | Send OTP for password reset      |
| POST   | `/api/auth/reset-password`  | Reset the user password          |
| GET    | `/api/auth/is-auth`         | Check if user is authenticated   |
| GET    | `/api/user/data`            | Provide User Details             |

---
