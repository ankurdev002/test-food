import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Ingredients from "./Pages/Ingredients";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ingredients" element={<Ingredients />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
