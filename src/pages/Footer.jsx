import styles from "./Footer.module.css";
import { useState } from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPerson,
  BsCheckLg,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { useForm } from "react-hook-form";
import Button from "../components/Button";

const Footer = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    
  } = useForm();

  const onSubmitForm = (data) => {
    if (data) {
      setFormIsValid(true);
      setTimeout(()=>{
        setFormIsValid(false)
      },5000);
    }
    reset()
  };

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
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className={styles.footerInputs}>
          <div>
            <div className={styles.footerInputContainer}>
              <BsPerson />
              <input
                className={styles.footerInput}
                placeholder="Imię"
                type="text"
                name="name"
                {...register("name", {
                  required: "Name is required",
                })}></input>
            </div>
            {errors.name && errors.name.type === "required" && (
              <p className={styles.errorInput}>Podaj imię</p>
            )}
          </div>

          <div>
            <div className={styles.footerInputContainer}>
              <FiMail />
              <input
                className={styles.footerInput}
                placeholder="Email"
                type="text"
                name="email"
                {...register("email", {
                  required: "Email is requierd",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Wymagany format : xxx@xx.xx",
                  },
                })}></input>
            </div>
            {errors.email && errors.email.type === "required" && (
              <p className={styles.errorInput}>Podaj adres email</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className={styles.errorInput}>{errors.email.message}</p>
            )}
          </div>
          {!formIsValid && (
            <Button onClick={handleSubmit(onSubmitForm)}>Wyślij</Button>
          )}
          {formIsValid && (
            <div className={styles.footerConfirm}>
              <p>
                Wysłano 
              </p>
              <BsCheckLg className={styles.footerBtn} />
            </div>
          )}
        </form>
        <div className={styles.footerInfo}>
          <div className={styles.footerLogoDiv}>
            <h4 className={styles.footerLogo}>Pirx</h4>
            <BsFacebook className={styles.footerIcon} />
            <BsTwitter className={styles.footerIcon} />
            <BsInstagram className={styles.footerIcon} />
          </div>
          <div className={styles.footerLinksContainer}>
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
        </div>
      </section>
    </div>
  );
};

export default Footer;
