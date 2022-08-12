export const authFormFields = (state) =>
    Object.values(state.authFormReducer.fields);
export const authFormIsSuccess = (state) => state.authFormReducer.isSuccess;
export const authFormIsLoading = (state) => state.authFormReducer.isLoading;
export const authFormIsValid = (state) => state.authFormReducer.isValid;
export const authFormIsSubmit = (state) => state.authFormReducer.isSubmit;
