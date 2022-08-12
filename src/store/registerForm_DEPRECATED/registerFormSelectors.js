export const registerFormFields = (state) =>
    Object.values(state.registerFormReducer.fields);
export const registerFormIsSuccess = (state) =>
    state.registerFormReducer.isSuccess;
export const registerFormIsLoading = (state) =>
    state.registerFormReducer.isLoading;
export const registerFormIsValid = (state) => state.registerFormReducer.isValid;
export const registerFormIsSubmit = (state) =>
    state.registerFormReducer.isSubmit;
