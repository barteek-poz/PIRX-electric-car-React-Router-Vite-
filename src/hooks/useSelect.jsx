import { useState } from "react";

const useSelect = (value) => {
  const [selectedValue, setSelectedValue] = useState("default");
  
  
  const selectValueHandler = (value) => {
    setSelectedValue(value);
    console.log(value);
    
  };

  const selectHasError = selectedValue === "default"

  const selectReset = () => {
    setSelectedValue("default");
  
  };
 
  return { selectedValue, selectValueHandler, selectHasError, selectReset };
};

export default useSelect;
