# 📘 QR Based Attendance System (Experiment 10)

## 🧠 Overview
The **QR Based Attendance System** is a full-stack web application that automates student attendance using QR codes.  
Each student has a unique QR code that can be scanned to instantly mark attendance in the database.  
The system provides a modern, fast, and paperless way to track attendance records in real time.

---

## 🚀 Features
- 📱 **QR Code Generation:** Each student has a unique QR code.  
- 📷 **QR Scanning:** Attendance marked instantly via scanner or camera.  
- 🧾 **Attendance Reports:** View daily and cumulative attendance.  
- 🔒 **Authentication:** Secure login for teachers/admins.  
- 🌐 **Responsive UI:** Works smoothly across devices.  

---

## 🏗️ Tech Stack

### **Frontend**
- React.js  
- HTML, CSS, JavaScript  
- Bootstrap / TailwindCSS  

### **Backend**
- Node.js with Express.js  
- Mongoose ORM  

### **Database**
- MongoDB (NoSQL)  

---

## ⚙️ Folder Structure
```
Project/
└── QR based Attendance System/
    ├── frontend/
    ├── backend/
    ├── .gitignore
    └── README.md
```

---

## 🧩 Setup Instructions

### 🔧 Prerequisites
Make sure you have installed:
- Node.js (v16+)
- npm (v8+)
- MongoDB (local or cloud via MongoDB Atlas)

---

### 💻 Steps to Run

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Riya-prog-byte/PBLJ_23BCS14042_KRG_2B.git
cd "Experiment10/attendance-system"
```

#### 2️⃣ Backend Setup
```bash
cd backend
npm install
# Configure your MongoDB connection string in .env
npm start
```
Example `.env`:
```
MONGO_URI=mongodb://localhost:27017/attendance
PORT=5000
```

#### 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm start
```

#### 4️⃣ Access the Application
Open your browser → [http://localhost:3000](http://localhost:3000)

---

## 🧠 Future Enhancements
- Integration with Face Recognition  
- Cloud-based storage (AWS / Firebase)  
- Admin Analytics Dashboard  
- Email / SMS attendance notifications  

---

## 🧑‍💻 Contributors
| Name | ID | Role |
|------|----|------|
| Riya | 23BCS14042 | Backend,Frontend Development & Documentation |
---
