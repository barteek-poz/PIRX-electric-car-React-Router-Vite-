import { useState } from "react";

const useInput = (validationRule) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState("");

  const valueIsValid = validationRule(inputValue);
 
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setInputValue("");
    setIsTouched(false);
  };

  return {
    inputValue,
    valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useInput