
import { BurgerBtn, HamburgerContainer } from "./burger";


import { FaAlignJustify } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { CartIcon } from "../Cart/CartIcon";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

export const Hamburger = () => {
  
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);

  return (
    <HamburgerContainer>
      <BurgerBtn onClick={toggleMenu}>
        {!isMenuOpen ? <FaAlignJustify /> : <MdClose />}
      </BurgerBtn>

      <CartIcon />
    </HamburgerContainer>
  );
};
