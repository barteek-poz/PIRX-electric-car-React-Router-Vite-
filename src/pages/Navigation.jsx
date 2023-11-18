import { useContext, useState, useRef } from "react";
import Button from "../components/Button";
import styles from "./Navigation.module.css";
import BookingModal from "./BookingModal";
import ModalContext from "../context/modalContext";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import BurgerMenu from "../components/BurgerMenu";

const Navigation = () => {
  const [navFixed, setNavFixed] = useState(false);
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const ctx = useContext(ModalContext);

  const windowHeight = useRef([window.innerHeight]);

  const changeNav = () => {
    if (window.scrollY >= windowHeight.current[0] - 100) {
      setNavFixed(true);
    } else setNavFixed(false);
  };
  window.addEventListener("scroll", changeNav);

  const changeMenu = () => {
    if (window.innerWidth <= 950) {
      setBurgerMenuActive(true);
    } else setBurgerMenuActive(false);
  };

  window.addEventListener("resize", changeMenu);

  const openBurgerHandler = () => {
    setBurgerMenuOpen(true);
  };

  const closeBurgerHandler = () => {
    setBurgerMenuOpen(false);
  };
  const bookingModalHandler = () => {
    if (burgerMenuActive) {
      setBurgerMenuOpen((prevValue) => !prevValue);
      ctx.onOpenModalHandler();
    } else {
      ctx.onOpenModalHandler();
    }
  };

  return (
    <nav>
      <ul
        className={styles.nav}
        style={{
          position: navFixed ? "fixed" : "absolute",
          marginTop: navFixed ? "-2rem" : "0rem",
        }}>
        <li>
          <span className={styles.logo}>PIRX</span>
        </li>
        {!burgerMenuActive && (
          <>
            <li>
              <div className={styles.navLinks}>
                <Link
                  to="aboutUs"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className={styles.navBtn}>
                  O nas
                </Link>
                <Link
                  to="models"
                  spy={true}
                  smooth={true}
                  offset={-25}
                  duration={500}
                  className={styles.navBtn}>
                  Modele
                </Link>
                <Link
                  to="salons"
                  spy={true}
                  smooth={true}
                  offset={25}
                  duration={500}
                  className={styles.navBtn}>
                  Salony
                </Link>
                <Link
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={25}
                  duration={500}
                  className={styles.navBtn}>
                  Kontakt
                </Link>
              </div>
            </li>
            <li>
              <div className={styles.navBookBtn}>
                <Button onClick={bookingModalHandler}>Umów jazdę próbną</Button>
              </div>
            </li>{" "}
          </>
        )}
        {burgerMenuActive && (
          <FiMenu onClick={openBurgerHandler} className={styles.burgerMenu} />
        )}
      </ul>
      {ctx.bookingModal && <BookingModal />}
      {burgerMenuOpen && <BurgerMenu onCloseBurger={closeBurgerHandler} />}
    </nav>
  );
};

export default Navigation;
