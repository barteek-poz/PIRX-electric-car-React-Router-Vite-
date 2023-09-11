import styles from "./AboutUs.module.css";
import { FaLeaf } from "react-icons/fa";
import { ImPowerCord } from "react-icons/im";
import { PiCompassToolBold } from "react-icons/pi";
import {AiFillTool} from "react-icons/ai"
import {RiMoneyEuroCircleLine} from "react-icons/ri"
import {BsBank} from "react-icons/bs"

const AboutUs = () => {
  return (
    <section className={styles.aboutUs} id="aboutUs">
      <h2 className={styles.heading}>O nas</h2>
      <div className={styles.aboutUsText}>
        <p className={styles.info}>
          PIRX to młoda europejska marka zajmująca się produkcją aut
          elektrycznych. Nasze projekty są odpowiedzią na postępujący kryzys
          klimatyczny, rosnące ceny paliw oraz coraz gorszą jakość powietrza na
          ulicach. Umów się na jazdę próbną i sprawdź co przygotowali dla Ciebie
          nasi inżynierowie.
        </p>
      </div>
      <div className={styles.infoIconBox}>
        <div className={styles.infoIcon}>
          <FaLeaf className={styles.icon} />W trosce o środowisko produkujemy auta zasilane w 100% energią elektryczną
        </div>
        <div className={styles.infoIcon}>
          <ImPowerCord className={styles.icon} />
          Dzięki zastosowaniu uniwersalnych ogniw zasilających, nasze auta
          naładujesz na każdej stacji
        </div>
        <div className={styles.infoIcon}>
          <PiCompassToolBold className={styles.icon} />
          Nasze auta odznaczają się minimialistycznym,
         ponadczasowym designem
        </div>
        <div className={styles.infoIcon}>
          <AiFillTool className={styles.icon} />Nasze auta
          stworzone są z ekologicznych komponentów, w pełni odnawialnych komponentów
        </div>
        <div className={styles.infoIcon}>
          <RiMoneyEuroCircleLine className={styles.icon} />
          Poprzez wyjątkowo niskie zużycie, nasze auta uchodzą za najoszczędniejsze na rynku
        </div>
        <div className={styles.infoIcon}>
          <BsBank className={styles.icon} />
          Pomożemy Ci w dobraniu odpowiedniego sposobu sfinansowania zakupu auta
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
