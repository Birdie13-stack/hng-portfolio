import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import LandingPage from "./Pages/LandingPage";
import Layout from "./Components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>

    // <LandingPage />
  );
}

export default App;
