import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import FooterPage from "./pages/FooterPage";
import AccountPage from "./pages/AccountPage";
import MyNavbar from "./components/NavBar/MyNavbar.jsx";
import MyFooter from "./components/Footer/MyFooter";

function App() {
  return (
    <Router>
      <MyNavbar />
      <div className="container mt-4 mb-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/footer" element={<FooterPage />} />
        </Routes>
      </div>
      <MyFooter name="thanh" year="2025" />
    </Router>
  );
}

export default App;
