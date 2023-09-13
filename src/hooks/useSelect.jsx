import { useState } from "react"

const useSelect = (value) => {
const [selectedValue, setSelectedValue] = useState('default')

const selectValueHandler = (value) => {
    setSelectedValue(value)
}

return {selectedValue, setSelectedValue}

}

export default useSelect