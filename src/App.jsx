








import Login from "./Login"
import { Home } from "./Components/Home.jsx";
import { Adventure } from "./Components/Adventure.jsx";
import { GameTry } from "./Components/GameTry.jsx"
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import { Rules } from "./Rules"
import { About } from "./Components/About";
import "./Style/App.css"
import "./Home.css"
import './style.css'
  


function App() {
  return (


    
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/:user/:id" element={<GameTry />} />
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Rules" element={<Rules/>} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/gameTry/:hero" element={<GameTry />} />
      </Routes>
    </>
      
  )
}

export default App;