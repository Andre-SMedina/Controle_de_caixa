import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Products from "./components/pages/Products";
import Home from "./components/pages/Home";
import Caixa from "./components/pages/Caixa";
import Balanco from "./components/pages/Balanco";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/caixa" element={<Caixa />} />
        <Route path="/balanco" element={<Balanco />} />
      </Routes>
    </Router>
  );
}

export default App;
