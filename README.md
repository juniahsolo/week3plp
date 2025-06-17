Task Manager App - React + Vite + Tailwind CSS
A modern task management application built with React, Vite, and Tailwind CSS, featuring state management, API integration, and responsive design.

🚀 Features
✔ Task Management – Add, complete, delete, and filter tasks
✔ Dark/Light Mode – Theme switching using useContext
✔ API Integration – Fetch and display data from JSONPlaceholder
✔ Responsive Design – Works on mobile, tablet, and desktop
✔ Reusable Components – Buttons, Cards, Navbar, Footer
✔ Custom Hooks – useLocalStorage for persistent tasks

🛠️ Tech Stack
Frontend: React (Vite)

Styling: Tailwind CSS

Routing: React Router

State Management: React Hooks (useState, useEffect, useContext)

API: JSONPlaceholder (for mock data)

📂 Project Structure
bash
src/  
├── components/      # Reusable UI components (Button, Card, Navbar, Footer)  
├── pages/           # Main views (Home, Tasks, API Data)  
├── hooks/           # Custom hooks (useLocalStorage, useTheme)  
├── utils/           # Utility functions (API fetchers, helpers)  
├── contexts/        # React contexts (ThemeContext)  
├── App.jsx          # Main app with routes  
└── main.jsx         # Vite entry point  
⚙️ Setup & Installation
1. Clone the Repository
bash
git clone https://github.com/juniahsolo/week3plp.git
cd week3plp
2. Install Dependencies
bash
npm install
3. Run the Development Server
bash
npm run dev
Open http://localhost:3000 in your browser.

🎨 Styling with Tailwind CSS
Dark Mode: Toggle between light/dark themes

Responsive: Mobile-first design with sm, md, lg breakpoints

Animations: Smooth transitions for interactive elements

📌 Key Functionality
🔹 Task Manager
Add, edit, and delete tasks

Filter tasks: All / Active / Completed

Persists tasks in localStorage

🔹 API Integration
Fetches posts from JSONPlaceholder

Displays data in a responsive grid

Loading & error states

🔹 Theme Switcher
Toggle between light/dark mode

Uses useContext for global state
🙌 Credits
Built with Vite + React

Styled with Tailwind CSS

Data from JSONPlaceholder


