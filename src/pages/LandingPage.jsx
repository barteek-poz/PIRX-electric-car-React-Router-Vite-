import Button from "../components/Button";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import CenterContainer from "../components/CenterContainer";

const LandingPage = () => {
  return (
    <CenterContainer>
      <section className={styles.landingPage} id="home">
        <div className={styles.heroImg}>
          <div className={styles.heroContent}>
            <h1 className={styles.heading}>
              Przyszłość motoryzacji zaczyna się dziś
            </h1>
            <div className={styles.heroBtn}>
              <Button>
                <Link
                  to="/about"
                  className={styles.heroBtn}
                  >
                  Poznajmy się
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </CenterContainer>
  );
};

export default LandingPage;
