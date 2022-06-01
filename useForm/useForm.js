import { useState } from "react"


export const useForm = ( initialState = {} ) => {

    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value     // name: target.value   o   email: target.value, para que sirva para todos los campos
        })
    }


    return [ values, handleInputChange, reset ]
}
