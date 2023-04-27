import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skills';
import Contact from './pages/Contact';
import Project from './pages/Project';
import First from './components/First'
function App() {
  return (
    <div >      <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
      <Route exact path="/" element={<First/>} />
        <Route exact path="/Home" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/skills" element={<Skill/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/projects" element={<Project/>} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
