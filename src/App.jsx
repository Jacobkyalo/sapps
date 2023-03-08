import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";
import "./App.css";
import FormContextProvider from "./contexts/FormContext";
import AddUnitModal from "./components/AddUnitModal";

function App() {
  return (
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
  );
}

export default App;
