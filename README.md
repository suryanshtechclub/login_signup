# MERN OTP Authentication App

A full-stack **MERN** (MongoDB, Express, React, Node.js) application with **OTP-based login/signup authentication**. This project includes a React frontend and a Node.js backend, with email-based OTP functionality for secure user verification.

---

## 🗂️ Project Structure

```
LOGIN_SIGNUP/
├── mern-otp-auth/              # Backend
│   ├── models/                 # Mongoose models
│   │   └── user.js
│   ├── routes/                 # Express routes
│   │   └── auth.js
│   ├── Utils/                  # Utility functions
│   │   └── Mailer.js
│   ├── .env                    # Environment variables
│   ├── server.js               # Entry point
│   └── package.json
│
├── my-react-app/               # Frontend
│   ├── public/
│   ├── src/                    # React components and logic
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
│
└── README.md                   # Project readme (this file)
```

---

## 🚀 Features

- Full-stack MERN architecture
- Email-based OTP authentication
- User model with Mongoose
- Mailer utility using Nodemailer (or similar)
- React-based responsive UI
- Secure and scalable backend with Express

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- HTML/CSS

### Backend

- Node.js
- Express
- MongoDB with Mongoose
- Nodemailer (or any email service)
- dotenv for config

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/suryanshtechclub/login_signup.git
cd LOGIN_SIGNUP
```

---

### 2. Setup Backend (`mern-otp-auth`)

```bash
cd mern-otp-auth
npm install
```

Create a `.env` file in `mern-otp-auth` and add:

```env
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password_or_app_password
JWT_SECRET=your_jwt_secret_key
```

Run backend server:

```bash
node server.js
```

---

### 3. Setup Frontend (`my-react-app`)

```bash
cd ../my-react-app
npm install
npm run dev
```

App will be running on `http://localhost:5173` (Vite default port).

---

## ✅ API Routes

### `POST /api/auth/signup`

- Creates a new user and sends OTP

### `POST /api/auth/login`

- Verifies OTP and logs in the user

---

## 📦 Future Improvements

- Add JWT-based session management
- Add password hashing and secure session tokens
- Add UI components like toast notifications
- Resend OTP logic and timer on frontend

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

### Developed by [Suryansh Tech Club](https://github.com/suryanshtechclub) 🚀
