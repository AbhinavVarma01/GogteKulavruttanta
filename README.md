# 🏠 GogteKulavruttanta

An evolving **MERN stack** web application built for the **Gogte family** to connect generations, share news, and organize events — all in one place.  
Currently, the frontend is functional, while the backend is a work-in-progress.

---

## ✨ Core Features (Frontend Implemented)
- **Login & Signup Interface** – Clean and responsive UI for authentication.
- **Interactive Family Tree** – Organized by generations with intuitive navigation.
- **News Board** – Dedicated space for family announcements, updates, and stories.
- **Event Section** – Event cards with RSVP capability (frontend-ready).
- **Member Profiles** – Personal profiles for each family member.
- **Responsive UI** – Works seamlessly on desktop and mobile.

---

## 🛠 Tech Stack

**Frontend**
- React 18 (with Hooks)
- React Router
- Tailwind CSS
- Axios
- Lucide React (Icons)

**Backend** 
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs for password hashing
- Express Validator for form validation

---

## 📦 Installation & Setup

1. **Clone the repository**
   git clone https://github.com/AbhinavVarma01/GogteKulavruttanta.git
2. Navigate to the project directory
   cd GogteKulavruttanta
3. Install dependencies
   npm install
4. Start the development server
    npm start
5. Open in browser
    Visit: http://localhost:3000

📂 Project Structure
GogteKulavruttanta/
│
├── backend/                            # Backend (Node.js/Express) - currently empty
│   ├── node_modules/                    # Backend dependencies (will be created after npm install)
│   ├── package.json                     # Backend dependencies & scripts (to be added later)
│   ├── server.js                        # Main server file (to be added later)
│   ├── routes/                          # API route handlers (to be added later)
│   ├── controllers/                     # Controller logic (to be added later)
│   ├── models/                          # Database models (to be added later)
│   └── config/                          # Configuration files (e.g., DB connection)
│
├── frontend/                            # Frontend React application
│   ├── node_modules/                    # Frontend dependencies
│   ├── public/                          # Static assets served as-is
│   │   ├── aarthi_plate.jpg
│   │   ├── aarthi.jpg
│   │   ├── aim.png
│   │   ├── axe.png
│   │   ├── background.jpg
│   │   ├── favicon.ico
│   │   ├── GogteVaatchaal.pdf
│   │   └── Granth.jpg
│   ├── src/                             # React source code
│   │   ├── components/                  # Reusable UI components
│   │   ├── assets/                      # Images, logos, icons (if not in public)
│   │   ├── styles/                      # CSS / styling files
│   │   ├── App.js                       # Main app component
│   │   ├── index.js                     # Entry point for React app
│   │   └── App.css / index.css          # Main stylesheet(s)
│   ├── package.json                     # Frontend dependencies & scripts
│   ├── package-lock.json                # Dependency lock file
│   └── README.md                        # Frontend-specific documentation (optional)
│
└── README.md                            # Main project README



📋 Prerequisites
Before you begin, make sure you have the following installed:

1. Node.js (v16 or higher recommended)
npm (comes with Node.js) or yarn
2. Git (for cloning the repository)
3. Code Editor – VS Code recommended
4. If you plan to run the backend later:
MongoDB (Local installation or MongoDB Atlas)

📱 Planned Usage Flow
Login/Register – Secure authentication with JWT (to be implemented).
Dashboard – See recent updates, upcoming events, and shortcuts.
Family Tree – Explore interactive generation-wise relationships.
News Section – Post stories, like, and comment.
Events – Create or RSVP to family gatherings.
Profile Page – Update personal details and family relations.


🔮 Roadmap
Implement backend API endpoints.
Add real database storage with MongoDB.
Role-based access for admins and members.
Cloud image storage for profiles and news posts.
Real-time updates with WebSockets.
Exportable family tree data.

📜 License
MIT License — see LICENSE file for details.

