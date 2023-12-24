import { useContext, useState, useRef } from "react";
import Button from "../components/Button";
import styles from "./Navigation.module.css";
import BookingModal from "./BookingModal";
import ModalContext from "../context/modalContext";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import BurgerMenu from "../components/BurgerMenu";
import CenterContainer from "../components/CenterContainer";

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
    <CenterContainer>
      <nav>
        <ul className={styles.nav}>
          <Link className={styles.logo} to='/'>
            PIRX
          </Link>
          {!burgerMenuActive && (
            <>
              <li>
                <div className={styles.navLinks}>
                  <Link className={styles.navBtn} to="/about">O nas</Link>
                  <Link className={styles.navBtn}
                    to='/models'>
                    Modele
                  </Link>
                  <Link className={styles.navBtn}
                    to="/salons"
                    >
                    Salony
                  </Link>
                  <Link className={styles.navBtn}
                    to="/contact"
                    >
                    Kontakt
                  </Link>
                </div>
              </li>
              <li>
                <div className={styles.navBookBtn}>
                  <Link to='/contact'
                  >
                    <Button>
                      
                    Umów jazdę próbną
                    </Button>
                  </Link>
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
    </CenterContainer>
  );
};

export default Navigation;
