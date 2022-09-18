import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Products from "./components/pages/Products";
import Home from "./components/pages/Home";
import Caixa from "./components/pages/Caixa";
import Balanco from "./components/pages/Balanco";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";

import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/caixa" element={<Caixa />} />
          <Route path="/balanco" element={<Balanco />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
