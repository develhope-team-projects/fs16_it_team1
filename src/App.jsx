import Login from "./Login"
import { Home } from "./Components/Home.jsx";
import { Adventure } from "./Components/Adventure.jsx";
import { Game } from "./Components/Game.jsx";
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/NavBar';
import { Rules } from "./Rules"
import { About } from "./Components/About";
import "./Style/App.css"
import "./Home.css"
import './style.css'
import Sidebar from "./Components/Sidebar.jsx";
import { useState } from "react";
  


function App() {

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const location = useLocation();
  // console.log(location);

  const funzioneDiChiusura = () => {
    setSidebarVisible(false)
  }

  function funzioneAperturaSideBar (){
    setSidebarVisible(true)
  }

  return (
    <>
    {sidebarVisible && <Sidebar onClose={funzioneDiChiusura}/>}
    {location && location.pathname !== '/' && <Navbar sidebarVisible={sidebarVisible} onOpenSideBar={funzioneAperturaSideBar}/>}
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/:user/:id" element={<Game />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Rules" element={<Rules/>} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/game/:hero" element={<Game />} />
      </Routes>
    </>
  )
}

export default App;