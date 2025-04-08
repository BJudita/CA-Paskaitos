import * as yup from "yup";

export type InputData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  age: number | null;
  terms: boolean, //
};

const userSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Name can not be shorter then 3 characters"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup.string().required("Password is required").min(6, "Minimum 6 characters"),
  passwordConfirmation: yup.string().oneOf([yup.ref("password")], "Password must match").required("Password confirmation is required"),
  age: yup.number().nullable().min(13, "Age must be at least 13"),
  terms: yup.boolean().oneOf([true], "You must accept the terms and conditions").required("You must accept the terms and conditions"),
});

export const sendFormData = async (data: InputData) => {
  try {
    await userSchema.validate(data);
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return error.message;
    }
  }
};