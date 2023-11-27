import Login from "./Login"
import { Home } from "./Components/Home.jsx";
import { Adventure } from "./Components/Adventure.jsx";
import { Game } from "./Components/Game.jsx";
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import { Rules } from "./Rules"
import { About } from "./Components/About";
import "./Style/App.css"
import "./Home.css"
import './style.css'
import { UserContext } from "./userContext.jsx";
import { useContext } from "react";

function App() {
  const user = useContext(UserContext);
  return (
    <>
    <UserContext.Provider value={user}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/:user/:id" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/About" element={<About />} />
        <Route path="/Rules" element={<Rules/>} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/game/:hero" element={<Game />} />
      </Routes>
    </UserContext.Provider>
    </>
  )
}

export default App;