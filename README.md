# Smart Leads Dashboard (Gigflow Dashboard)

A full-stack Lead Management Dashboard built using the MERN stack with TypeScript. The application includes authentication, role-based access control, lead filtering, CSV export, and Docker support.

## 🚀 Features

- JWT Authentication
- Role-Based Access Control (Admin & Sales User)
- Add, View, Search, Filter, and Delete Leads
- Debounced Search Functionality
- CSV Export
- Pagination
- Responsive Dashboard UI
- Dockerized Setup

## 🛠️ Tech Stack

Frontend:
- React (Vite)
- TypeScript
- Axios
- Tailwind CSS

Backend:
- Node.js
- Express.js
- TypeScript
- JWT Authentication

Database:
- MongoDB

DevOps:
- Docker
- Docker Compose

## 📦 Local Setup

### 1. Clone Repository

```bash
git clone https://github.com/kalyani1333/gigflow-dashboard.git
cd gigflow-dashboard

2. Create Environment File
Create a file named .env inside the backend folder and add:
Environment
PORT=5000
MONGO_URI=mongodb://mongo:27017/gigflow
JWT_SECRET=mysecretkey
3. Run Docker
Open terminal in the project root folder and run:
Bash
docker compose up --build
🌐 Project URLs
Frontend: http://localhost:5173⁠
Backend: http://localhost:5000⁠
GitHub Repository: https://github.com/kalyani1333/gigflow-dashboard⁠
🔑 API Routes
Auth Routes:
POST /api/auth/register
POST /api/auth/login
Lead Routes:
GET /api/leads
POST /api/leads
DELETE /api/leads/:id
👤 Roles
Admin
Add Leads
Delete Leads
Export CSV
Sales User
View Leads
Filter/Search Leads