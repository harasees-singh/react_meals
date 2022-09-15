import useForm from "../hooks/use-form";
import { signupForm } from "../utils/formFieldConfig";
import './SignUpForm.css'
const SignUpForm = () => {

    const { renderFormInputs, isFormValid } = useForm(signupForm);

    return (
        <form className="signupForm">
            <h1>Sign Up</h1>

            {renderFormInputs()}

            <button type="submit" disabled={!isFormValid()}>
                Submit
            </button>
        </form>
    )
}
export default SignUpForm;