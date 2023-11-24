import { useState } from "react"
import { Hamburger } from "../hamburger/Hamburger"
import { Nav } from "./StyledNav"

import  logo  from "/src/assets/logoPig2.png"
import { Link } from "react-router-dom"


export const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(!menu)
        console.log(menu)
    }
    
  return (
    <header>
      <Nav>
        <h2>
          <a href="/#">
            <img src={logo} alt="logo" />
          </a>
        </h2>

        <div className={`links ${menu ? "active" : ""}`}>
          <Link to={"/"}> Home </Link>
          <Link to={"/products"}>
            {" "}
            Shop{" "}
          </Link>
          <Link to={"/about"}> About </Link>
          <Link to={"/contact"}> Contact </Link>
        </div>
        <Hamburger menu={menu} handleClick={handleClick} />
      </Nav>
    </header>
  );
}

