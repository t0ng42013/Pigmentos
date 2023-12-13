
import { Hamburger } from "../hamburger/Hamburger"
import {  MenuDesktop, MenuDesktopLinks, MenuDesktopLinksBtns, MenuMobile, MenuMobileBtns, Nav } from "./StyledNav"



import  logo  from "/src/assets/logoPig2.png"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import { CartMenu } from "../Cart/CartMenu";
import { CartIcon } from "../Cart/CartIcon";

export const Navbar = () => {
  
  const { isMenuOpen, isCartOpen } = useContext(MenuContext);

  return (
    <header>
      <Nav>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
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

            <CartIcon />

            <Link to={"/login"} className="btn">
              Acceso
            </Link>
          </MenuDesktopLinksBtns>
        </MenuDesktop>

        <Hamburger />
      </Nav>

      <MenuMobile className={`${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link onClick={() => toggleMenu()} to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => toggleMenu()} to={"/products"}>
              Shop
            </Link>
          </li>
          <li>
            <Link onClick={() => toggleMenu()} to={"/about"}>
              {" "}
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => toggleMenu()} to={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>

        <MenuMobileBtns>
          <Link to={"/contact"} className="btn">
            Contáctanos
          </Link>
          <Link to={"/login"} className="btn">
            Acceso
          </Link>
        </MenuMobileBtns>
      </MenuMobile>

      <CartMenu isCartOpen={isCartOpen} />
    </header>
  );
}

