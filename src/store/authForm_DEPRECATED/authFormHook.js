import {useSelector} from "react-redux";
import {
    authFormFields,
    authFormIsSuccess,
    authFormIsLoading,
    authFormIsValid,
    authFormIsSubmit
} from "./authFormSelectors";

export const authFormHook = () => ({
    fields: useSelector(authFormFields),
    isSuccess: useSelector(authFormIsSuccess),
    isLoading: useSelector(authFormIsLoading),
    isValid: useSelector(authFormIsValid),
    isSubmit: useSelector(authFormIsSubmit)
});
