import { Link } from "react-router-dom";
import styles from "./BurgerMenu.module.css";
import Button from "../components/Button";
import ModalContext from "../context/modalContext";
import { useContext } from "react";

const BurgerMenu = ({ onCloseBurger }) => {
  const ctx = useContext(ModalContext);

  const modalHandler = () => {
    ctx.onOpenModalHandler();
    onCloseBurger();
  };

  return (
    <section className={styles.hamburgerWrapper}>
      <div className={styles.hamburgerBtn}>
        <Button onClick={onCloseBurger}>X</Button>
      </div>

      <ul className={styles.hamburgerList}>
        <li>
          <Link onClick={onCloseBurger} to="/about" className={styles.navBtn}>
            O nas
          </Link>
        </li>
        <li>
          <Link onClick={onCloseBurger} to="/models" className={styles.navBtn}>
            Modele
          </Link>
        </li>
        <li>
          <Link onClick={onCloseBurger} to="/salons" className={styles.navBtn}>
            Salony
          </Link>
        </li>
        <li>
          <Link onClick={onCloseBurger} to="contact" className={styles.navBtn}>
            Kontakt
          </Link>
        </li>
        <li>
          <div className={styles.navBookBtn}>
            <Button onClick={modalHandler}>Umów jazdę próbną</Button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default BurgerMenu;
