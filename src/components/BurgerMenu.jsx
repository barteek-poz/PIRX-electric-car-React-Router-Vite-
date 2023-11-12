import { Link } from "react-scroll";
import styles from "./BurgerMenu.module.css";
import Button from "../components/Button";
import ModalContext from "../context/modalContext";
import { useContext } from "react";

const BurgerMenu = ({ onBurgerHandler }) => {
  const ctx = useContext(ModalContext);

  const closeBurgerHandler = () => {
    onBurgerHandler((prevValue) => !prevValue);
  };

  return (
    <section className={styles.hamburgerWrapper}>
      <div className={styles.hamburgerBtn}>
        <Button onClick={closeBurgerHandler}>X</Button>
      </div>

      <ul className={styles.hamburgerList}>
        <li>
          <Link
            onClick={closeBurgerHandler}
            to="aboutUs"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={styles.navBtn}>
            O nas
          </Link>
        </li>
        <li>
          <Link
            onClick={closeBurgerHandler}
            to="models"
            spy={true}
            smooth={true}
            offset={-25}
            duration={500}
            className={styles.navBtn}>
            Modele
          </Link>
        </li>
        <li>
          <Link
            onClick={closeBurgerHandler}
            to="salons"
            spy={true}
            smooth={true}
            offset={25}
            duration={500}
            className={styles.navBtn}>
            Salony
          </Link>
        </li>
        <li>
          <Link
            onClick={closeBurgerHandler}
            to="footer"
            spy={true}
            smooth={true}
            offset={25}
            duration={500}
            className={styles.navBtn}>
            Kontakt
          </Link>
        </li>
        <li>
          <div className={styles.navBookBtn}>
            <Button onClick={ctx.onOpenModalHandler}>Umów jazdę próbną</Button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default BurgerMenu;
