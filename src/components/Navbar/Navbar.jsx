import { useState } from "react"
import { Hamburger } from "../hamburger/Hamburger"
import { Cart, MenuDesktop, MenuDesktopLinks, MenuDesktopLinksBtns, MenuMobile, MenuMobileBtns, Nav } from "./StyledNav"
import { FaCartArrowDown } from "react-icons/fa";


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
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {/* <div className={`links ${menu ? "active" : ""}`}>
          <Link to={"/"}> Home </Link>
          <Link to={"/products"}> Shop </Link>
          <Link to={"/about"}> About </Link>
          <Link to={"/contact"}> Contact </Link>
        </div> */}
        <MenuDesktop>
          <MenuDesktopLinks>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/products"}>Shop</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </MenuDesktopLinks>

          <MenuDesktopLinksBtns>
            <Link to={"/contact"} className="btn">
              Contáctanos
            </Link>

            <Cart>
              <FaCartArrowDown />
              <span>3</span>
            </Cart>
            <Link to={"/login"} className="btn">
              Acceso
            </Link>
          </MenuDesktopLinksBtns>
        </MenuDesktop>
        <Hamburger menu={menu} handleClick={handleClick} />
      </Nav>

      <MenuMobile>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Shop</Link>
          </li>
          <li>
            <Link to={"/about"}> About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>

        <MenuMobileBtns menu={menu}>
          <Link to={"/contact"} className="btn">
            Contáctanos
          </Link>
          <Link to={"/login"} className="btn">
            Acceso
          </Link>
        </MenuMobileBtns>
      </MenuMobile>
    </header>
  );
}

