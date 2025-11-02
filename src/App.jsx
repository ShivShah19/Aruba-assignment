import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";

export default function App() {
  // Route configuration
  const routes = [
    { path: "/", element: <Navigate to="/signup" /> },
    { path: "/signup", element: <SignupForm /> },
    { path: "/login", element: <LoginForm /> },
    {
      path: "*",
      element: (
        <div className="flex items-center justify-center h-screen text-2xl font-semibold text-gray-700">
          404 — Page Not Found
        </div>
      ),
    },
  ];

  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}
