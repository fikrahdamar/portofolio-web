import "./index.css";
import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Porto from "./pages/Porto";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/portfolio" element={<Porto />} />
    </Routes>
  );
}

export default App;
