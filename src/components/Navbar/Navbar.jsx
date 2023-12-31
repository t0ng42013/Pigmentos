
import { Hamburger } from "../hamburger/Hamburger"
import {  MenuDesktop, MenuDesktopLinks, MenuDesktopLinksBtns, MenuMobile, MenuMobileBtns, Nav } from "./StyledNav"




import { Link } from "react-router-dom"
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import { CartMenu } from "../Cart/CartMenu";
import { CartIcon } from "../Cart/CartIcon";

export const Navbar = () => {
  
  const { isMenuOpen, isCartOpen, toggleMenu } = useContext(MenuContext);

  return (
    <header className="header">
      <Nav>
        <Link to="/">
          <img src="/assets/logoPig2.png" alt="logo" />
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

            <Link to={"/login"} className="btn btnStart">
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
          <Link onClick={() => toggleMenu()} to={"/contact"} className="btn">
            Contáctanos
          </Link>
          <Link
            onClick={() => toggleMenu()}
            to={"/login"}
            className="btn btnStart"
          >
            Acceso
          </Link>
        </MenuMobileBtns>
      </MenuMobile>

      <CartMenu isCartOpen={isCartOpen} />
    </header>
  );
}

