# My-Portfolio (MERN Stack)

A professional, modern, and responsive full-stack developer portfolio built with the MERN stack. All content is dynamically loaded from a backend and based on the provided resume.

## 🚀 Tech Stack

- **Frontend**: React.js, Material UI (MUI), Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Architecture**: MVC Pattern

## 🛠️ Setup Instructions

### 1. Prerequisites
- Node.js installed
- MongoDB installed locally or a MongoDB Atlas account

### 2. Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Environment Variables:
   - Open `.env` and update `MONGO_URI` with your connection string.
4. Seed the Database (Populate from Resume data):
   ```bash
   node seeder.js
   ```
5. Start the Server:
   ```bash
   npm start
   ```
   (Or use `nodemon server.js` for development)

### 3. Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Development Server:
   ```bash
   npm start
   ```

## 🧩 Features

- **Dynamic Content**: Projects and Skills are fetched from the MongoDB database.
- **Dark Mode**: Premium dark theme by default using MUI.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.
- **Animations**: Smooth transitions and entry animations using Framer Motion.
- **Contact Form**: Functional contact form that saves messages to the database.
- **SEO Optimized**: Meta tags and structured headings for better search visibility.

## 📄 Resume Usage
All content (About, Education, Experience, Projects) was extracted from `My-Resume.pdf` and rewritten for a professional portfolio layout.

## 📁 Project Structure

```
My-Portfolio/
├── backend/
│   ├── config/       # DB Connection
│   ├── controllers/  # API Logic
│   ├── models/       # Mongoose Schemas
│   ├── routes/       # API Endpoints
│   ├── server.js     # Entry Point
│   └── seeder.js     # Data Seeding Script
├── frontend/
│   ├── public/       # Static assets (including Resume)
│   └── src/
│       ├── components/ # Reusable UI components
│       ├── pages/      # Main page sections
│       ├── services/   # API communication
│       ├── theme/      # MUI Custom Theme
│       └── App.js       # Routing
└── My-Resume.pdf      # Original Source
```
