import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";
import "./App.css";
import FormContextProvider from "./contexts/FormContext";
import AddUnitModal from "./components/AddUnitModal";
import UserContextProvider from "./contexts/UserContext";
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  return (
    <UserContextProvider>
      <FormContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/dashboard/add" element={<ProtectedRoute><AddUnitModal /></ProtectedRoute>} />
            <Route path="/report" element={<ProtectedRoute>
              <Report />
              </ProtectedRoute>} />
          </Routes>
        </Router>
      </FormContextProvider>
    </UserContextProvider>
  );
}

export default App;
