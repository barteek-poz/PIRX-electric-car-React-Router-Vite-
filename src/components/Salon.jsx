import styles from "./Salon.module.css";
import { FaLocationDot, FaClock, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Button from "./Button";
import { useContext, useEffect } from "react";
import ModalContext from "../context/modalContext";
import BookingModal from "../pages/BookingModal";

const Salon = (props) => {
  const ctx = useContext(ModalContext);
  
  return (
    <div className={styles.salonWrapper}>
      <div className={styles.salonHeadMobile}>
      <h4 className={styles.salonHeading}>{props.data.city}</h4>
      <div
        className={styles.salonImg}
        style={{ backgroundImage: `url(${props.img})` }}></div>
      </div>
      <div className={styles.salonInfoMobile}>
      <ul className={styles.salonInfo}>
        <li>
          <FaLocationDot className={styles.salonIcon} /> {props.data.address}
        </li>
        <li>
          <FaClock className={styles.salonIcon} /> {props.data.hours}
        </li>
        <li>
          <FaPhone className={styles.salonIcon} /> {props.data.phone}
        </li>
        <li>
          <IoMail className={styles.salonIcon} /> {props.data.mail}
        </li>
      </ul>
      <div className={styles.salonBtn}>
        <Button onClick={ctx.onOpenModalHandler}>Umów się na jazdę próbną</Button>
      </div>
      {ctx.bookingModal && <BookingModal />}
    </div>
      </div>
      
  );
};

export default Salon;
