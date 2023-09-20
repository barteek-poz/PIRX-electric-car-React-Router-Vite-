import styles from "./BookingModal.module.css";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../components/Button";
import bookingImg from "../img/booking.jpg";
import React, { useState } from "react";
import pl from "date-fns/locale/pl";
import { addDays, subDays } from "date-fns";
import { createPortal } from "react-dom";
import useInput from "../hooks/useInput";
import useSelect from "../hooks/useSelect";
registerLocale("pl", pl);

const Backdrop = (props) => {
  return (
    <div className={styles.modalBackdrop} onClick={props.onCloseModal}></div>
  );
};

const ModalOverlay = (props) => {
  const [date, setDate] = useState(null);
  const [hourHasError, setHourHasError] = useState(false);
  const [salonHasError, setSalonHasError] = useState(false);
  const [carHasError, setCarHasError] = useState(false);
  

  // NAME VALIDATION
  const {
    inputValue: nameValue,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetName,
  } = useInput((value) => value.trim() !== "");

  const nameInputClasses = nameHasError
    ? `${styles.bookingInput} ${styles.bookingInputInvalid}`
    : `${styles.bookingInput}`;

  // MAIL VALIDATION
  const {
    inputValue: mailValue,
    hasError: mailHasError,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    resetInput: resetMail,
  } = useInput((value) => value.includes("@"));

  const mailInputClasses = mailHasError
    ? `${styles.bookingInput} ${styles.bookingInputInvalid}`
    : `${styles.bookingInput}`;

  // PHONE VALIDATION
  const {
    inputValue: phoneValue,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    resetInput: resetPhone,
  } = useInput((value) => !isNaN(value) && value.trim().length === 9);
  const phoneInputClasses = phoneHasError
    ? `${styles.bookingInput} ${styles.bookingInputInvalid}`
    : `${styles.bookingInput}`;


  // SELECT HOUR VALIDATION
  const {
    selectedValue: hourValue,
    selectValueHandler: hourValueHandler,
    selectReset: hourReset,
    selectHasError: hourError
  } = useSelect();

  // SELECT SALON VALIDATION
  const {
    selectedValue: salonValue,
    selectValueHandler: salonValueHandler,
    selectReset: salonReset,
    selectHasError: salonError
  } = useSelect();

  // SELECT CAR VALIDATION
  const {
    selectedValue: carValue,
    selectValueHandler: carValueHandler,
    selectReset: carReset,
    selectHasError: carError
  } = useSelect();

  // FORM VALIDATION

  const submitFormHandler = (e) => {
    e.preventDefault()
    setHourHasError(false)
    setSalonHasError(false)
    setCarHasError(false)
    if (hourError) {
      console.log("error");
      setHourHasError(true);
      setSalonHasError(true)
      setCarHasError(true)
      return
    } else {
      hourReset
    }
  };

  return (
    <form className={styles.modalContainer} name="bookingForm">
      <div className={styles.bookingInfo}>
        <h2 className={styles.bookingHeading}>
          Zarezerwuj jazdę próbną w PIRX
        </h2>

        <input
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          className={nameInputClasses}
          placeholder="Imię i nazwisko"></input>

        <p
          className={styles.inputError}
          style={{ visibility: nameHasError ? "visible" : "hidden" }}>
          Należy podać swoje imię i naziwsko
        </p>

        <div className={styles.userData}>
          <div className={styles.inputBox}>
            <input
              onChange={mailChangeHandler}
              onBlur={mailBlurHandler}
              value={mailValue}
              className={mailInputClasses}
              placeholder="Adres e-mail"></input>
            <p
              className={styles.inputError}
              style={{ visibility: mailHasError ? "visible" : "hidden" }}>
              Adres e-mail powinien zawierać @
            </p>
          </div>

          <div className={styles.inputBox}>
            <input
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              value={phoneValue}
              className={phoneInputClasses}
              placeholder="Numer telefonu"></input>
            <p
              className={styles.inputError}
              style={{ visibility: phoneHasError ? "visible" : "hidden" }}>
              Wpisz poprawny numer telefonu
            </p>
          </div>
        </div>

        <div className={styles.dateData}>
          <div className={`${styles.inputBox} ${styles.datePicker}`}>
            <DatePicker
              className={`${styles.bookingInput}`}
              selected={date}
              onChange={(date) => setDate(date)}
              placeholderText="Wybierz datę"
              dateFormat="dd/MM/yyyy"
              locale="pl"
              minDate={subDays(new Date(), 0)}
              maxDate={addDays(new Date(), 120)}
            />
            <p className={styles.inputError}>Wybierz datę wizyty</p>
          </div>

          <div className={styles.inputBox}>
            <select
              name="bookingHour"
              className={`${styles.bookingInput}`}
                value={hourValue}
              onChange={(e) => hourValueHandler(e.target.value)}>
              <option
                className={styles.option}
                value="default"
                selected
                disabled>
                Wybierz godzinę
              </option>
              <option value="10">10:00</option>
              <option value="11">11:00</option>
              <option value="12">12:00</option>
              <option value="13">13:00</option>
              <option value="14">14:00</option>
              <option value="15">15:00</option>
              <option value="16">16:00</option>
              <option value="17">17:00</option>
            </select>
            <p
              className={styles.inputError}
              style={{ visibility: hourHasError ? "visible" : "hidden" }}>
              Wybierz godzinę wizyty
            </p>
          </div>
        </div>

        <div className={styles.salonData}>
          <div className={styles.inputBox}>
            <select name="bookingSalon" className={`${styles.bookingInput}`}
             value={salonValue}
             onChange={(e) => salonValueHandler(e.target.value)}>
              <option className={styles.option} value="default" disabled>
                Wybierz salon
              </option>
              <option value="poznan">Poznań</option>
              <option value="warsaw">Warszawa</option>
              <option value="cracow">Kraków</option>
            </select>
            <p className={styles.inputError}
            style={{ visibility: salonHasError ? "visible" : "hidden" }}>Wybierz salon</p>
          </div>

          <div className={styles.inputBox}>
            <select name="bookingSalon" className={`${styles.bookingInput}`}
            value={carValue}
            onChange={(event) => carValueHandler(event.target.value)}>
              <option className={styles.option} value="default" disabled>
                Wybierz model auta
              </option>
              <option value="lena">Lena</option>
              <option value="anna">Anna</option>
              <option value="nostromo">Nostromo</option>
            </select>
            <p className={styles.inputError}
            style={{ visibility: carHasError ? "visible" : "hidden" }}>Wybierz model auta</p>
          </div>
        </div>

        <div className={styles.bookingBtn}>
          <Button onClick={submitFormHandler}>Wyślij</Button>
          <Button onClick={props.onCloseModal}>Anuluj</Button>
        </div>
      </div>
      <div
        className={styles.bookingImg}
        style={{ backgroundImage: `url(${bookingImg})` }}></div>
    </form>
  );
};

const BookingModal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay onCloseModal={props.onCloseModal} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default BookingModal;
