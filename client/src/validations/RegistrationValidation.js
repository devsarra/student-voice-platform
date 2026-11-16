import * as yup from 'yup';
 
export const RegistrationValidation = yup.object().shape({
    uname: yup.string().required("name is required..").min(3, "name must be at least 3 chars"),
    email: yup.string().required("email is required..").email("Enter valid email.."),
    password: yup.string().required("enter password..").min(6, "password must be 6 chars").max(9, "password must be less than 10 chars"),
    cpassword: yup.string().required("confirm password..").oneOf([yup.ref("password")], "passwords must match"),
});