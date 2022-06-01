# useForm Hook


Example: 
```
    const initialForm = {
        name: '',
        age: 21,
        email: ''
    }

    const [ formValues, handleInputChange, reset ] = useForm(initialForm)
```