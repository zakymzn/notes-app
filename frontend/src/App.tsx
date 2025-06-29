import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";
import NotesPage from "./pages/NotesPage";
import HomePage from "./pages/HomePage";

function App() {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/"
        element={<Navigate to={isLoggedIn ? "/notes" : "/"} />}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/notes" element={<NotesPage />} />
    </Routes>
  );
}

export default App;

