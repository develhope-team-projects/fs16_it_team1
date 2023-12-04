import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dice from "./Dice";

function Navbar( {onOpenSideBar, sidebarVisible}) {

  return (
    <nav className="navbar">
     
     {!sidebarVisible &&
          <div class="menu-icon-hamburger" onClick={onOpenSideBar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
      }

      <li className="List-Nav-Flex-Mobile">
          <div className="dice" id="animated-dice">
            <Dice />
          </div>
          <h2 className="Title">Dragons</h2>
        </li>




      <ul className="nav-container">


        <li className="List-Nav ">
          <p className="Tab">pippo</p>
        </li>

        <li className="List-Nav">
          <button>
            <Link className="Tab" to="/home">
              Home
            </Link>
          </button>
        </li>

        <li className="List-Nav-Flex">
          <div className="dice" id="animated-dice">
            <Dice />
          </div>
          <h2 className="Title">Dragons</h2>
        </li>

        <li className="List-Nav">
          <button>
            <Link className="Tab" to="/About">
              About
            </Link>
          </button>
        </li>
        <li className="List-Nav">
          <button>
            <Link className="Tab" to="/Rules">
              Rules
            </Link>
          </button>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;
