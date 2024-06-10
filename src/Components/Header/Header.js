import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(true);

  const menuToggleHandler = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const radfanClickHandler = () => {
    setMenuOpen(false); // Close the menu when navigating to contact
    navigate("/contact");
  };

  const skillsClickHandler = () => {
    setMenuOpen(false); // Close the menu when navigating to skills
    navigate("/skills");
  };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          ردفان.
        </Link>

        <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`}>
          <ul>
            <li>
              <Link to="/نبذة_عني" onClick={menuToggleHandler}>من أنا؟</Link>
            </li>
            <li>
              <Link to="/سيرتي_الذاتية" onClick={skillsClickHandler}>السيرة الذاتية</Link>
            </li>
            <li>
              <Link to="/مهاراتي" onClick={skillsClickHandler}>مهاراتي</Link>
            </li>
            <li>
              <Link to="/أعمالي" onClick={menuToggleHandler}>أعمالي</Link>
            </li>
          </ul>
          <button onClick={radfanClickHandler}>تواصل معي</button>
         
        </nav>

        <div className={classes.header__content__toggle} onClick={menuToggleHandler}>
          {!menuOpen ? (
             <AiOutlineClose />
          ) : (
            <BiMenuAltRight />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
