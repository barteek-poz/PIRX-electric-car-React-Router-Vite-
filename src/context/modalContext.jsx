import React from "react";
import { useState } from "react";

const ModalContext = React.createContext({
  bookingModal: false,
  onOpenModalHandler: () => {},
  onCloseModalHandler: () => {},
});

export const ModalContextProvider = (props) => {
  const [bookingModal, setBookingModal] = useState(false);

  const openModalHandler = () => {
    setBookingModal(true);
  };

  const closeModalHandler = () => {
    setBookingModal(false);
  };
  return (
    <ModalContext.Provider
      value={{bookingModal:bookingModal, onOpenModalHandler:openModalHandler, onCloseModalHandler:closeModalHandler}}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
