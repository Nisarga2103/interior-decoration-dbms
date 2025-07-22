
# 🏠 Canvas House – Interior Decoration Management System

**Canvas House** is a full-stack DBMS-driven application that manages every aspect of an interior decoration business — from client onboarding to designer assignment, project tracking, payment processing, and material supply chain management.

This project showcases practical skills in **backend development**, **database modeling**, **frontend integration**, and **full CRUD operations**.

---

## ✨ Key Highlights

- 🔁 Complete end-to-end workflow management for interior design projects
- 👥 Manages customers, designers, and project assignments
- 🧱 Real-time material inventory and supplier management
- 💸 Integrated payment tracking system
- 📦 Linked multiple relational models using MySQL
- 🖥️ Interactive web interface using HTML/CSS and Axios

---

## 🛠️ Tech Stack

| Layer        | Technology         |
|--------------|--------------------|
| Frontend     | HTML, CSS, JavaScript, Axios |
| Backend      | Node.js, Express.js |
| Database     | MySQL (via MySQL Workbench) |
| Tools Used   | VS Code, Postman, MySQL Workbench |

---

## 📐 Core Database Models

Here are some of the most **important tables and relationships** modeled:

### 1. `Customer`  
Manages client data like name, address, phone, email.

### 2. `Project`  
Stores project timelines and links with customer IDs.

### 3. `Designers`  
Tracks interior designers and their associated customers/projects.

### 4. `AssignedTo`  
Maps **which designer is working on which project**.

### 5. `Materials` & `Material Category`  
Keeps track of material stock, pricing, and classification.

### 6. `Suppliers`  
Links materials to projects and logs supplier info.

### 7. `Payments`  
Stores transaction details (amount, method, date) per customer.

---

## 🚀 How to Run the Project

### ▶️ Backend (Node + Express)
```bash
cd backend
npm install
node index.js
### 💻 Frontend (HTML/CSS + Axios)

```bash
cd frontend
# No installation needed
# Simply open the frontend in your browser
