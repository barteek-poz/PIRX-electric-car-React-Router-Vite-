import styles from "./BookingModal.module.css";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../components/Button";
import bookingImg from "../img/booking.jpg";
import React, { useState } from "react";
import pl from "date-fns/locale/pl";
import { addDays, subDays } from "date-fns";
import { createPortal } from "react-dom";
registerLocale("pl", pl);



const Backdrop = (props) => {
  return <div className={styles.modalBackdrop} onClick={props.onCloseModal} ></div>;
};

const ModalOverlay = (props) => {
  const [date, setDate] = useState(null);
 


  return (
    <form className={styles.modalContainer}>
      <div className={styles.bookingInfo}>
        <h2 className={styles.bookingHeading}>
          Zarezerwuj jazdę próbną w PIRX
        </h2>
        <div className={styles.inputBox}>
          <input
            className={styles.bookingInput}
            placeholder="Imię i nazwisko"></input>
        </div>
        <div className={styles.userData}>
          <div className={styles.inputBox}>
            <input
              className={styles.bookingInput}
              placeholder="Adres e-mail"></input>
          </div>
          <div className={styles.inputBox}>
            <input
              className={styles.bookingInput}
              placeholder="Numer telefonu"></input>
          </div>
        </div>
        <div className={styles.dateData}>
          <div className={styles.inputBox}>
            <DatePicker
              className={styles.bookingInput}
              selected={date}
              onChange={(newDate) => setDate(newDate)}
              placeholderText="Wybierz datę"
              dateFormat="dd/MM/yyyy"
              locale="pl"
              minDate={subDays(new Date(), 0)}
              maxDate={addDays(new Date(), 120)}
            />
          </div>
          <div className={styles.inputBox}>
            <select name="bookingHour" className={`${styles.bookingSelect}`}>
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
          </div>
        </div>

        <div className={styles.salonData}>
          <div className={styles.inputBox}>
            <select name="bookingSalon" className={`${styles.bookingSelect}`}>
              <option
                className={styles.option}
                value="default"
                selected
                disabled>
                Wybierz salon
              </option>
              <option value="poznan">Poznań</option>
              <option value="warsaw">Warszawa</option>
              <option value="cracow">Kraków</option>
            </select>
          </div>
          <div className={styles.inputBox}>
            <select name="bookingSalon" className={`${styles.bookingSelect}`}>
              <option
                className={styles.option}
                value="default"
                selected
                disabled>
                Wybierz model auta
              </option>
              <option value="lena">Lena</option>
              <option value="anna">Anna</option>
              <option value="nostromo">Nostromo</option>
            </select>
          </div>
        </div>
        <div className={styles.bookingBtn}>
          <Button>Wyślij</Button>
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
        <Backdrop onCloseModal={props.onCloseModal}/>,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay onCloseModal={props.onCloseModal}/>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default BookingModal;

