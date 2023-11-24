import { BurgerBtn } from "./burger";

 
export const Hamburger = ({menu, handleClick }) => {
  return (
    <BurgerBtn onClick={handleClick}>
      <div className="three col">
        <div
          className={`${menu ? "hamburger is-active" : "hamburger"}`}
          id="hamburger-1"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
      <div className={`${menu ? "bgOverlay is-active" : "hamburger"}`}></div>
    </BurgerBtn>
  );
};
