import Input from "../UI/Input";
function createFormFieldConfig(label, name, type, defaultValue = '') {
    return {
        renderInput: (handleChange, value, isValid, error, key) => {
            return (
                <Input
                    key={key}
                    name={name}
                    type={type}
                    label={label}
                    isValid={isValid}
                    value={value}
                    handleChange={handleChange}
                    errorMessage={error}
                />
            );
        },
        label,
        value: defaultValue,
        valid: false,
        errorMessage: '',
        touched: false,
    };
}
function createValidationRule(ruleName, errorMessage, validateFunc) {
    return {
        name: ruleName,
        message: errorMessage,
        validate: validateFunc,
    };
}
export function requiredRule(inputName) {
    return createValidationRule(
        'required',
        `${inputName} required`,
        (inputValue, formObj) => inputValue.length !== 0
    );
}

export function minLengthRule(inputName, minCharacters) {
    return createValidationRule(
        'minLength',
        `${inputName} should contain atleast ${minCharacters} characters`,
        (inputValue, formObj) => inputValue.length >= minCharacters
    );
}

export function maxLengthRule(inputName, maxCharacters) {
    return createValidationRule(
        'maxLength',
        `${inputName} cannot contain more than ${maxCharacters} characters`,
        (inputValue, formObj) => inputValue.length <= maxCharacters
    );
}
export function numericRule(inputName){
    return createValidationRule(
        'numeric characters only',
        `${inputName} must contain numeric characters only`,
        (inputValue, forObj) => (parseInt(inputValue, 10) !== NaN) 
    )
}
export const signupForm = {
    name: {
        ...createFormFieldConfig('Full Name', 'name', 'text'),
        validationRules:[
            requiredRule('name'),
            minLengthRule('name', 3),
            maxLengthRule('name', 25),
        ],
    },
    phonenumber: {
        ...createFormFieldConfig('Contact Number', 'phonenumber', 'text'),
        validationRules:[
            requiredRule('number'),
            minLengthRule('number', 10),
            maxLengthRule('number', 10),
        ],
    },
    address: {
        ...createFormFieldConfig('Delivery Address', 'address', 'text'),
        validationRules:[
            requiredRule('address'),
            minLengthRule('address', 8),
            maxLengthRule('address', 28),
        ],
    },
};
export default createFormFieldConfig;