import { useActionState } from "react";
import { InputData, sendFormData } from "../../api";
import "./Form.css";

type FormState = {
  error: string | null;
  inputData: InputData;
};

export const Form = () => {
  const formSubmit = async (prev: FormState, formData?: FormData) => {
    const inputData = formData
      ? (Object.fromEntries(formData?.entries()) as unknown as InputData)
      : {
          name: "",
          email: "",
          password: "",
          passwordConfirmation: "",
          age: null,
          terms: false, 
        };
        const ageValue = formData?.get("age")?.toString().trim();
        inputData.age = ageValue && ageValue !== "" ? Number(ageValue) : null;

        inputData.terms = formData?.has("terms") ?? false;

    const error = await sendFormData(inputData);

    if (error) {
      return {
        ...prev,
        error,
      };
    }

    const currentFormState: FormState = {
      ...prev,
      error: null,
      inputData: inputData,
    };

    return currentFormState;
  };

  const [state, formAction, isPending] = useActionState<FormState>(formSubmit, {
    error: null,
    inputData: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      age: null,
      terms: false, 
    },
  });

  return (
    <div className="container">
    <div className="form-container">
        <h1>User Registration</h1>
    <form action={formAction}>
    <label htmlFor="name">Full Name: </label><br />
      <input type="text" name="name" placeholder="John Doe"/><br />

      <label htmlFor="email">Email Address: </label><br />
      <input type="email" name="email" placeholder="john@example.com"/> <br />
      
      <label htmlFor="password">Password: </label><br />
      <input type="password" name="password" /> <br />
      
      <label htmlFor="passwordConfirmation">Confirm Password: </label><br />
      <input type="password" name="passwordConfirmation" /> <br />
      
      <label htmlFor="password">Age: </label><br />
      <input type="number" name="age" placeholder="Age (optional)"/> <br />
    
      <label htmlFor="terms">
      <input className="checkInput" type="checkbox" name="terms"/>
       I accept the terms and conditions </label><br />

       <button type="submit"disabled={isPending}>Register</button>
      <p>{state.error}</p>
    </form>
    </div>
    </div>
  );
};