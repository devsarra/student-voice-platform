import * as yup from 'yup';

export const LoginValidation = yup.object().shape({
    email: yup.string().required("Email is required..").email("Enter valid email.."),
    password: yup.string().required("Enter Password..").min(6, "Password must be 6 chars")
});