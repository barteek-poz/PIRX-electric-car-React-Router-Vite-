import styles from "./BookingModal.module.css";
import React, { useContext, useState } from "react";
import { createPortal } from "react-dom";
import Select from "react-select";
import { useForm } from "react-hook-form";
import bookingImg from "../img/booking.jpg";
import Button from "../components/Button";
import ModalContext from "../context/modalContext";

const Backdrop = (props) => {
  return (
    <div
      className={styles.modalBackdrop}
      onClick={props.onCloseModalHandler}></div>
  );
};

const ModalOverlay = (props) => {
  const [salon, setSalon] = useState(null);
  const [model, setModel] = useState(null);
  const [errorSalon, setErrorSalon] = useState(false);
  const [errorModel, setErrorModel] = useState(false);
  const [formValid, setFormIsValid] = useState(false);

  const ctx = useContext(ModalContext); // ustalic dlaczego nie dziala props na onCloseModal

  const carModels = [
    { value: "Lena", label: "Lena" },
    { value: "Anna", label: "Anna" },
    { value: "Nostromo", label: "Nostromo" },
  ];

  const carSalons = [
    { value: "poznan", label: "Poznań" },
    { value: "warsaw", label: "Warszawa" },
    { value: "cracow", label: "Kraków" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      width: "100%",
      borderRadius: "5px",
      fontSize: "1.6rem",
    }),
    option: (styles, { data, isDisable, isFocused, isSelected }) => {
      return { ...styles, color: "black" };
    },
  };
  const salonChangeHandler = (selectedSalon) => {
    setSalon(selectedSalon);
    setErrorSalon(false);
  };

  const modelChangeHandler = (selectedModel) => {
    setModel(selectedModel);
    setErrorModel(false);
  };

  const onSubmitForm = (data) => {
    if (salon === null) {
      setErrorSalon(true);
      return;
    } else if (model === null) {
      setErrorModel(true);
      return;
    } else {
      setModel(null);
      setSalon(null);
      reset();
      setFormIsValid(true);
    }
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.formWrapper}>
        <form className={styles.formInputs}>
          <div className={styles.formHeader}>
            <h2 className={styles.formHeading}>
              Zarezerwuj jazdę próbną w PIRX
            </h2>
            <p className={styles.formText}> 
              Podaj swoje dane kontaktowe, następnie wybierz model auta oraz
              salon w którym chciałbyś odbyć jazdę próbną. Nasz konsultant
              skontaktuje się z Tobą, aby wybrać dogodny dla Ciebie termin.{" "}
            </p>
          </div>
          <div className={styles.inputBox}>
            <input
              className={styles.formInput}
              placeholder="Imię"
              type="text"
              name="name"
              {...register("name", {
                required: "Name is required",
              })}></input>
            {errors.name && errors.name.type === "required" && (
              <p className={styles.errorInput}>Name is required</p>
            )}
          </div>
          <div className={styles.inputBox}>
            <input
              className={styles.formInput}
              placeholder="Nazwisko"
              type="text"
              name="surname"
              {...register("name", {
                required: "Name is required",
              })}></input>
            {errors.name && errors.name.type === "required" && (
              <p className={styles.errorInput}>Name is required</p>
            )}
          </div>
          <div className={styles.inputBox}>
            <input
              className={styles.formInput}
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
            {errors.email && errors.email.type === "required" && (
              <p className={styles.errorInput}>Podaj adres email</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className={styles.errorInput}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles.inputBox}>
            <input
              className={styles.formInput}
              placeholder="Telefon"
              type="number"
              name="phone"
              {...register("phone", {
                required: "Podaj numer telefonu",
                minLength: {
                  value: 9,
                  message: "Numer powinien mieć 9 cyfr",
                },
              })}></input>
            {errors.phone && errors.phone.type && (
              <p className={styles.errorInput}>{errors.phone.message}</p>
            )}
          </div>
          <div className={styles.inputBox}>
            <Select
              placeholder="Wybierz salon"
              value={salon}
              onChange={salonChangeHandler}
              options={carSalons}
              styles={selectStyles}></Select>
            {errorSalon && <p className={styles.errorInput}>Wybierz salon</p>}
          </div>
          <div className={styles.inputBox}>
            <Select
              placeholder="Wybierz model"
              value={model}
              onChange={modelChangeHandler}
              options={carModels}
              styles={selectStyles}></Select>
            {errorModel && <p className={styles.errorInput}>Wybierz model</p>}
          </div>
          {formValid && (
            <p className={styles.formConfirm}>
              Formularz został wysłany. Nasz konsultant niedługo skontakuje się
              z Tobą w celu umówienia jazdy próbnej.
            </p>
          )}
          <div className={styles.formBtns}>
            {!formValid && (
              <Button onClick={handleSubmit(onSubmitForm)}>Wyślij</Button>
            )}
            {!formValid && (
              <Button onClick={ctx.onCloseModalHandler}>Anuluj</Button>
            )}
            {formValid && <Button>Zamknij</Button>}
          </div>
        </form>
        <div
          className={styles.bookingImg}
          style={{ backgroundImage: `url(${bookingImg})` }}></div>
      </div>
    </div>
  );
};

const BookingModal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onCloseModal={props.onCloseModalHandler} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay onCloseModal={props.onCloseModalHandler} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default BookingModal;
