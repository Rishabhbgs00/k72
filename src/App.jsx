import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Agence from "./Pages/Agence";
import Projects from "./Pages/Projects";
import Navbarr from "./Components/agence/common/navbarr";
import Navbar from "./Components/agence/common/Navbarr";



 
function App() {
  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter >
    <Navbarr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
