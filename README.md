🛍️ Myntra Clone - E-commerce Web App

A full-stack Myntra clone built using ReactJS (frontend), Node.js/Express (backend), and MongoDB (database). The app mimics the shopping experience of Myntra — featuring product listings, filtering, cart functionality, and backend integration to manage data dynamically.

---

🚀 Features

- Responsive and modern UI similar to Myntra
- Product listing and image grid
- Add/remove from cart
- Backend with REST API for dynamic product and cart data
- Image assets managed in frontend
- Cross-browser compatible
- Lightweight and fast

---

🧰 Tech Stack

Frontend:
- ReactJS
- Chakra UI / CSS / Styled Components
- React Router DOM

Backend:
- Node.js
- Express.js
- MongoDB (Mongoose ODM)

Tools:
- Postman (API testing)
- VS Code
- Git & GitHub

---

📁 Folder Structure

MyntraClone_react-main/
├── server/                 # Express backend
│   ├── models/            # Mongoose models (e.g., CartModel)
│   ├── routes/            # Express routes (e.g., /cart)
│   ├── server.js          # Server entry file
├── src/                   # React frontend
│   ├── Components/        # React components
│   ├── Home_images/       # Product & banner images
│   ├── ProductList.jsx    # Product display component
│   ├── index.js           # ReactDOM entry
│   └── ...
├── package.json
├── README.md
└── ...

---

🛠️ Installation and Setup

🔧 Backend Setup:
cd server
npm install
npm start

- Make sure MongoDB is running
- Default server runs on http://localhost:5000

💻 Frontend Setup:
cd ..
npm install
npm run dev

- Default React app runs on http://localhost:3000

---

📡 API Routes (Backend)

- GET /cart         — Get all items in cart
- POST /cart        — Add item to cart
- DELETE /cart/:id  — Remove item from cart

📝 Project Description
We completed this project in 4 days during our unit-5 construct week. The backend includes essential libraries and a database to store user and product data. Features include:

Product filtering

Signup/Login functionality

Add-to-cart

Responsive UI

🔧 Future Improvements
Add an Admin Panel page for:

Directly adding/removing products

Managing orders

AWS integration for storage and backend

Avoid use of MySQL or MongoDB; use AWS-native services instead (e.g., DynamoDB, S3)
