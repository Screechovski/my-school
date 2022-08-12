import {useSelector} from "react-redux";
import {
    registerFormFields,
    registerFormIsSuccess,
    registerFormIsLoading,
    registerFormIsValid,
    registerFormIsSubmit
} from "./registerFormSelectors";

export const registerFormHook = () => ({
    fields: useSelector(registerFormFields),
    isSuccess: useSelector(registerFormIsSuccess),
    isLoading: useSelector(registerFormIsLoading),
    isValid: useSelector(registerFormIsValid),
    isSubmit: useSelector(registerFormIsSubmit)
});
