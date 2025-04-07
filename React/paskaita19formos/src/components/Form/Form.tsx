import { useActionState, useState } from "react";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./Form.css";


type FormState = {
    formData: {
      name: string;
      email: string;
      age: string;
      escort: string;
      escortName: string;
      eventFormat: string;
      city: string;
      comment: string;
    };
    error?: string;
  };

export default function Form() {
  const [showEscortName, setShowEscortName] = useState(false);
    const [ state, submitAction, isPending] = useActionState<FormState, FormData>(handleSubmit, {
            formData: {
              name: "",
              email: "",
              age: "",
              escort: "", 
              escortName: "", 
              eventFormat: "", 
              city: "",
              comment: ""

            },
            error: undefined,
          });
          console.log(state);
        
          async function handleSubmit(prevState: FormState, formData: FormData): Promise<FormState> {
            try {
              await wait();
              const name = formData.get("name");
              const email = formData.get("email");
              const age = formData.get("age");
              const escort = formData.get("escort"); 
              const escortName = formData.get("escortName");
              const eventFormat = formData.get("eventFormat");
              const city = formData.get("city");
              const comment = formData.get("comment");

              if (
                typeof name !== "string" ||
                typeof email !== "string" ||
                typeof age !== "string"
              ) {
                return {
                  ...prevState,
                  error: "Missing or invalid required fields",
                };
              }
        
              return {
          formData: {
          name: "",
          email: "",
          age: "",
          escort: "",
          escortName: "",
          eventFormat: "",
          city: "",
          comment: "",
        },
      };
            } catch (error: unknown) {
              return {
                ...prevState,
                error: "Some error occurred",
              };
            }
          }
        
          return (
            <form action={submitAction}>
              <div className="form-row">
            <label htmlFor="name">Vardas: </label>
                <input defaultValue={state.formData.name} type="text" name="name" /> <br />
                </div><div className="form-row">
            <label htmlFor="email">El.paštas: </label>
                <input defaultValue={state.formData.email} type="email" name="email"  /> <br />
            </div><div className="form-row">
            <label htmlFor="age">Amžius: </label>
                <input defaultValue={state.formData.age} type="number" name="age"  /> <br />
                </div>
            <div className="check"> 
              <label htmlFor="escort">Ar turėsite palydovą? </label>
        <input 
        className="checkInput"
          type="checkbox"
          name="escort"
          onChange={(e) => setShowEscortName(e.target.checked)}
        />
        
</div>
      <br />

      {showEscortName && (
        <div className="form-row">
              <label htmlFor="city">Palydovo vardas: </label>
        <input
          defaultValue={state.formData.escortName}
          type="text"
          name="escortName"
        />
        </div>
      )}

              <br />
              <div className="form-row">
                <label></label>
              <select name="eventFormat" defaultValue={state.formData.eventFormat}>
                <option value="">Renginio formatas</option>
                <option value="live">Dalyvausiu gyvai</option>
                <option value="remote">Dalyvausiu nuotoliniu būdu</option>
              </select>
              </div>
              <br />
             <div className="form-row">
              <label htmlFor="city">Miestas: </label>
              <input defaultValue={state.formData.city} type="text" name="city" /> <br />
              </div><div className="form-row">
              <label htmlFor="comment">Papildomos pastabos: </label>
              <textarea
                name="comment"
                defaultValue={state.formData.comment}
              />
              </div>
              <br />
        
              <SubmitButton />
              {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
            </form>
          );
        }
        
        function wait() {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(true);
            }, 2000);
          });
        }