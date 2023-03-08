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

function App() {
  return (
    <UserContextProvider>
      <FormContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/add" element={<AddUnitModal />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </Router>
      </FormContextProvider>
    </UserContextProvider>
  );
}

export default App;
