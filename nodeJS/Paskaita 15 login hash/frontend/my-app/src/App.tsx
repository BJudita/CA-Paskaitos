import "./App.css";
import DashboardPage from "./components/DashboardPage/DashboardPage";
import LoginPage from "./components/LoginPage/LoginPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AuthContextProvider from "./Context/AuthContextProvider";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <AuthContextProvider>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </AuthContextProvider>
    </Routes>
  </Router>
  );
}

export default App;