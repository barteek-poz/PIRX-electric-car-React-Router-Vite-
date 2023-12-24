import styles from "./AboutUs.module.css";
import { FaLeaf } from "react-icons/fa";
import { ImPowerCord } from "react-icons/im";
import { PiCompassToolBold } from "react-icons/pi";
import { AiFillTool } from "react-icons/ai";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { BsBank } from "react-icons/bs";
import { IoMdReturnRight } from "react-icons/io";
import Footer from "./Footer";
import CenterContainer from "../components/CenterContainer";

const AboutUs = () => {
  return (
    <CenterContainer>
      <section className={styles.aboutUs} id="aboutUs">
        <h2 className={styles.heading}>O nas</h2>
        <div className={styles.aboutUsText}>
          <p className={styles.info}>
            PIRX to młoda europejska marka zajmująca się produkcją aut
            elektrycznych. Nasze projekty są odpowiedzią na postępujący kryzys
            klimatyczny, rosnące ceny paliw oraz coraz gorszą jakość powietrza
            na ulicach. Umów się na jazdę próbną i sprawdź co przygotowali dla
            Ciebie nasi inżynierowie.
          </p>
        </div>
        <div className={styles.infoIconBox}>
          <div className={styles.infoCard}>
            <div className={styles.frontCard}>
              <FaLeaf className={styles.icon} />
              Środowisko
              <IoMdReturnRight className={styles.iconTurn}></IoMdReturnRight>
            </div>
            <div className={styles.backCard}>
              W trosce o środowisko produkujemy auta zasilane w 100% energią
              elektryczną
            </div>
            
          </div>
          <div className={styles.infoCard}>
            <div className={styles.frontCard}>
              <ImPowerCord className={styles.icon} />
              Uniwersalność
              <IoMdReturnRight className={styles.iconTurn}></IoMdReturnRight>
            </div>
            <div className={styles.backCard}>
              Dzięki zastosowaniu uniwersalnych ogniw zasilających, nasze auta
              naładujesz na każdej stacji
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.frontCard}>
              <PiCompassToolBold className={styles.icon} />
              Design
              <IoMdReturnRight className={styles.iconTurn}></IoMdReturnRight>
            </div>
            <div className={styles.backCard}>
              Nasze auta odznaczają się minimialistycznym, ponadczasowym
              designem
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.frontCard}>
              <AiFillTool className={styles.icon} />
              Technologia
              <IoMdReturnRight className={styles.iconTurn}></IoMdReturnRight>
            </div>
            <div className={styles.backCard}>
              Nasze auta stworzone są z nowoczesnych, w pełni niezawodnych
              komponentów
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.frontCard}>
              <RiMoneyEuroCircleLine className={styles.icon} />
              Oszczędność
              <IoMdReturnRight className={styles.iconTurn}></IoMdReturnRight>
            </div>
            <div className={styles.backCard}>
              Poprzez wyjątkowo niskie zużycie, nasze auta uchodzą za
              najoszczędniejsze na rynku
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.frontCard}>
              <BsBank className={styles.icon} />
              Finanse
              <IoMdReturnRight className={styles.iconTurn}></IoMdReturnRight>
            </div>
            <div className={styles.backCard}>
              {" "}
              Pomożemy Ci w dobraniu odpowiedniego sposobu sfinansowania zakupu
              auta
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </CenterContainer>
  );
};

export default AboutUs;
