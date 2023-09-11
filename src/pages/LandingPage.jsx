
import Button from "../components/Button";
import styles from "./LandingPage.module.css";
import { Link } from "react-scroll";
import Navigation from "./Navigation";

const LandingPage = () => {
  return (
    <section className={styles.landingPage} id="home">
      <Navigation/>
      <div className={styles.heroImg}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>
            Przyszłość motoryzacji zaczyna się dziś
          </h1>
          <div className={styles.heroBtn}>
            <Button>
              <Link
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className={styles.navBtn}>
                Poznajmy się
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
