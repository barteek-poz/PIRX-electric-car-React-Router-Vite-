import styles from "./Footer.module.css";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPerson,
  BsCheckLg,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <section className={styles.footerContainer} id="footer">
        <div className={styles.footerHead}>
          <h2 className={styles.footerHeading}>Dołącz do klubu PIRX</h2>
          <p className={styles.footerText}>
            Jako marka stale się rozwijamy projektując najnowocześniejsze
            rozwiąznia z branży EV. Dołącz do klubu PIRX i bądź na bieżąco z
            naszymi newsami, a także promocjami i specjalnymi wydarzeniami
            przeznaczonymi dla klubowiczów.
          </p>
        </div>
        <div className={styles.footerInputs}>
            <div className={styles.footerInputContainer}>
            <BsPerson />
          <input placeholder="Imię" className={styles.footerInput}></input>
            </div>
         <div className={styles.footerInputContainer}>
         <FiMail />
          <input placeholder="Adres email" className={styles.footerInput}></input>
         </div>
          <BsCheckLg className={styles.footerBtn}/>
        </div>
        <div className={styles.footerInfo}>
          <div>
            <h4 className={styles.footerLogo}>Pirx</h4>
            <BsFacebook className={styles.footerIcon}/>
            <BsTwitter className={styles.footerIcon}/>
            <BsInstagram className={styles.footerIcon}/>
          </div>
          <div className={styles.footerLinks}>
            <p className={styles.footerLinksHeading}>O nas</p>
            <ul className={styles.footerLinksList}>
              <li>Kim jesteśmy?</li>
              <li>Nasi partnerzy</li>
              <li>Sukcesy Pirx</li>
            </ul>
          </div>
          <div className={styles.footerLinks}>
            <p className={styles.footerLinksHeading}>Pomoc</p>
            <ul className={styles.footerLinksList}>
              <li>Serwis</li>
              <li>Wsparcie i instrukcje</li>
              <li>Stacje ładowania</li>
            </ul>
          </div>
          <div className={styles.footerLinks}>
            <p className={styles.footerLinksHeading}>Kontakt</p>
            <ul className={styles.footerLinksList}>
              <li>Infolinia</li>
              <li>Nasze salony</li>
              <li>Kariera w Pirx</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
