import { useState, useCallback } from 'react';
// form object :

// renderInput: (handleChange, value, isValid, error, key) => {
//     return (
//         <Input
//             key={key}
//             name={name}
//             type={type}
//             label={label}
//             isValid={isValid}
//             value={value}
//             handleChange={handleChange}
//             errorMessage={error}
//         />
//     );
// },
// label,
// value: defaultValue,
// valid: false,
// errorMessage: '',
// touched: false,
function useForm(formObj) {
    const [form, setForm] = useState(formObj);

    const isInputFieldValid = useCallback(
        (inputField) => {
            for (const rule of inputField.validationRules) {
                if (!rule.validate(inputField.value, form)) {
                    inputField.errorMessage = rule.message;
                    return false;
                }
            }

            return true;
        },
        [form]
    );
    const onInputChange = useCallback(
        (event) => {
            const { name, value } = event.target;
            // copy input object whose value was changed
            const inputObj = { ...form[name] };
            console.log(form); // email or password etc.
            // update value
            inputObj.value = value;

            // update input field's validity
            const isValidInput = isInputFieldValid(inputObj);
            // if input is valid and it was previously invalid
            // set its valid status to true
            if (isValidInput && !inputObj.valid) {
                inputObj.valid = true;
            } else if (!isValidInput && inputObj.valid) {
                // if input is not valid and it was previously valid
                // set its valid status to false
                inputObj.valid = false;
            }

            // mark input field as touched
            inputObj.touched = true;
            setForm({ ...form, [name]: inputObj });
        },
        [form, isInputFieldValid]
    );
    const isFormValid = useCallback(() => {
        let isValid = true;
        const arr = Object.values(form);

        for (let i = 0; i < arr.length; i++) {
            if (!arr[i].valid) {
                isValid = false;
                break;
            }
        }

        return isValid;
    }, [form]);
    function renderFormInputs() {
        return (
            // iterating over 4 input fields name, email, password and confirmpassword
            Object.values(form).map((inputObj) => {
                const { value, label, errorMessage, valid, renderInput } = inputObj;
                return renderInput(onInputChange, value, valid, errorMessage, label)
            })
        )
    }
    return { renderFormInputs, isFormValid };
}

export default useForm;