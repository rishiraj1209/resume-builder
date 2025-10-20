# 🧠 AI Resume Builder

An intelligent **AI-powered Resume Builder** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.  
This project allows users to **create, edit, and enhance resumes** effortlessly — with built-in **AI features for summary enhancement** and **image enhancement** using [ImageKit.io](https://imagekit.io).

---

## 🚀 Features

### 💼 Core Features
- **Create and Edit Resumes:** Add personal details, experience, education, projects, and skills.
- **AI-Powered Summary Enhancer:** Automatically improves your resume summary using AI for better professional tone and clarity.
- **Profile Photo Enhancer:** Upload and enhance profile pictures using **ImageKit.io** integration.
- **Auto-Save Resumes:** Changes are automatically saved for convenience.
- **Responsive UI:** Fully responsive design for desktop and mobile.
- **Authentication System:** Secure login and registration using JWT.

---

## 🧩 Tech Stack

### **Frontend**
- React.js (with Hooks & Context API/Redux)
- Tailwind CSS / CSS Modules for styling
- Axios for API communication

### **Backend**
- Node.js
- Express.js
- MongoDB with Mongoose ORM

### **AI & Integrations**
- OpenAI / Gemini API for Summary Enhancement
- ImageKit.io for Image Processing & Optimization

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/AI-Resume-Builder.git
cd AI-Resume-Builder
```
### 2️⃣ Set up the Backend
```bash
cd server
npm install
```
**Create a .env file inside the server folder and add:**
```bash
PORT=5000
MONGODB_URL=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
IMAGEKIT_PUBLIC_KEY=<your_imagekit_public_key>
IMAGEKIT_PRIVATE_KEY=<your_imagekit_private_key>
IMAGEKIT_URL_ENDPOINT=<your_imagekit_url_endpoint>
AI_API_KEY=<your_openai_or_gemini_api_key>
```
**Start the backend**
```bash
npm start
```
### 3️⃣ Set up the Frontend
```bash
cd ../client
npm install
npm run dev
```
### 🧠 AI Summary Enhancement

The AI Resume Builder integrates an AI model to improve your resume summary and Experience section.
It rewrites your summary and experience in a more professional, clear, and concise manner suitable for modern job applications.

### 🖼️ Image Enhancement with ImageKit.io

- Users can upload profile pictures that are automatically optimized and enhanced using ImageKit.

- The integration supports features like background removal, format conversion, and image compression.

### 📁 Project Structure
```pgsql
AI-Resume-Builder/
│
├── client/                 # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                 # Express Backend
│   ├── routes/
│   ├── models/
│   ├── controllers/
│   ├── configs/
│   ├── middlewares/
│   └── package.json
│
├── .gitignore
```

### 🌟 Future Enhancements

- 📄 Auto Update the resume according to job Description

- 🔍 AI-based job recommendation system.

- ☁️ Cloud storage integration (Google Drive / Dropbox).





