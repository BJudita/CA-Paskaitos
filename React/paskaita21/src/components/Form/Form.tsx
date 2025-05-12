import { useEffect, useState } from "react";
import { InputData, sendFormData } from "../../api";
import "./Form.css";
import ResultPreview from "../ResultPreview/ResultsPreview";

const localStorageKey = "userFormData";


const initialData: InputData = {
  name: "",
  email: "",
  hasMiddleName: false,
  middleName: "",
  employmentStatus: "",
  schoolName: "",
  studentId: "",
  companyName: "",
  jobTitle: "",
  subscription: false,
  technologyCheckbox: false,
  businessCheckbox: false,
  healthCheckbox: false,
  emailCheckbox: false, 
  phoneCheckbox: false,
  phone: null,
};

export const Form = () => {
  const [step, setStep] = useState(1);
  const [inputData, setInputData] = useState<InputData>(() => {
    const saved = localStorage.getItem(localStorageKey);
    return saved ? JSON.parse(saved) : initialData;
  });
  const [error, setError] = useState<string | null>(null);
  const [maxStepReached, setMaxStepReached] = useState(1);


  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(inputData));
  }, [inputData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleNext = async () => {
    const result = await sendFormData(inputData, step);
    if (result) {
      setError(result.join("\n"));
    } else {
      setError(null);
      const nextStep = step + 1;
      setStep(nextStep);
      setMaxStepReached((prev) => Math.max(prev, nextStep)); 
    }
  };


  const handleSubmit = async () => {
    const result = await sendFormData(inputData, step);
    if (result) {
      setError(result.join("\n"));
    } else {
      alert("Form submitted successfully!");
      localStorage.removeItem(localStorageKey); // Clear data after submit
    }
  };

  const renderDots = () => (
    <div className="dot-nav">
      {[1, 2, 3].map((s) => (
        <span
          key={s}
          className={`dot ${step === s ? "active" : ""} ${s <= maxStepReached ? "clickable" : "locked"}`}
          onClick={() => {
            if (s <= maxStepReached) setStep(s);
          }}
          style={{ cursor: s <= maxStepReached ? "pointer" : "not-allowed", opacity: s <= maxStepReached ? 1 : 0.4 }}
        />
      ))}
    </div>
  );

  return (
    <div className="container">
      <div className="form-container">
     

        <form onSubmit={(e) => e.preventDefault()}>
          {step === 1 && (
            <>
              <h2>User Registration</h2>
              {renderDots()}
              <label htmlFor="name">Full Name</label><br />
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={inputData.name}
                onChange={handleChange}
              /> <br />
              <label htmlFor="email">Email</label><br />
              <input
                type="email"
                name="email"
                placeholder="johndoe@example.com"
                value={inputData.email}
                onChange={handleChange}
              /> <br />
              <label className="checkboxText">
                <input
                  type="checkbox"
                  name="hasMiddleName"
                  checked={inputData.hasMiddleName}
                  onChange={handleChange}
                /> Has Middle Name
              </label> <br />
              {inputData.hasMiddleName && (
                <label className="middleName" htmlFor="middlename">Middle Name<input
                  type="text"
                  name="middleName"
                  value={inputData.middleName}
                  onChange={handleChange}
                /></label>
              )}
              <button onClick={handleNext}>Next</button>
            </>
          )}

          {step === 2 && (
            <>
              <h2>Employment Information</h2>
              {renderDots()}
              <select
                name="employmentStatus"
                value={inputData.employmentStatus}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Student">Student</option>
                <option value="Employed">Employed</option>
                <option value="Self-employed">Self-employed</option>
                <option value="Unemployed">Unemployed</option>
              </select> <br />

              {inputData.employmentStatus === "Student" && (
                <>
                <label htmlFor="schoolName">School Name</label>
                  <input
                    type="text"
                    name="schoolName"
                    placeholder="School Name"
                    value={inputData.schoolName}
                    onChange={handleChange}
                  /> <br />
                  <label htmlFor="schoolId">School Id</label>
                  <input
                    type="text"
                    name="studentId"
                    placeholder="Student ID"
                    value={inputData.studentId}
                    onChange={handleChange}
                  />
                </>
              )}

              {(inputData.employmentStatus === "Employed" ||
                inputData.employmentStatus === "Self-employed") && (
                <>
                <label htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    value={inputData.companyName}
                    onChange={handleChange}
                  /> <br />
                  <label htmlFor="jobTitle">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="Job Title"
                    value={inputData.jobTitle}
                    onChange={handleChange}
                  />
                </>
              )}

              <div className="buttons">
                <button type="button" onClick={handleNext}>Next</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2>Preferences</h2>
              {renderDots()}
              <label className="checkboxText">
                <input
                  type="checkbox"
                  name="subscription"
                  checked={inputData.subscription}
                  onChange={handleChange}
                />
                Subscribe to Newsletter
              </label> <br />

              {inputData.subscription && (
                <>
                <div className="topic">
                  <label>
                    <input
                    className="checkInput"
                      type="checkbox"
                      name="technologyCheckbox"
                      checked={inputData.technologyCheckbox}
                      onChange={handleChange}
                    />
                    Technology
                  </label>
                  <label>
                    <input
                    className="checkInput"
                      type="checkbox"
                      name="businessCheckbox"
                      checked={inputData.businessCheckbox}
                      onChange={handleChange}
                    />
                    Business
                  </label>
                  <label>
                    <input
                    className="checkInput"
                      type="checkbox"
                      name="healthCheckbox"
                      checked={inputData.healthCheckbox}
                      onChange={handleChange}
                    />
                    Health
                  </label> </div> <br />
                </>
              )} 

              <div>
                <p className="left">Preferred Contact Method:</p>
                <label className="radioText">
                  <input
                    type="radio"
                    name="emailCheckbox"
                    checked={inputData.emailCheckbox}
                    onChange={() =>
                      setInputData((prev) => ({
                        ...prev,
                        emailCheckbox: true,
                        phoneCheckbox: false,
                      }))
                    }
                  /> Email
                </label> <br />
                <label className="radioText">
                  <input
                    type="radio"
                    name="phoneCheckbox"
                    checked={inputData.phoneCheckbox}
                    onChange={() =>
                      setInputData((prev) => ({
                        ...prev,
                        emailCheckbox: false,
                        phoneCheckbox: true,
                      }))
                    }
                  /> Phone
                </label>
              </div> <br />

              {inputData.phoneCheckbox && (
                <><label className="phoneText" htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="55-134"
                  value={inputData.phone ?? ""}
                  onChange={(e) =>
                    setInputData((prev) => ({
                      ...prev,
                      phone: e.target.value,
                    }))
                  }
                /></>
              )}
              

              <div className="buttons">
                <button type="button" onClick={handleSubmit}>Submit</button>
              </div>
            </>
          )}
          {error && <p className="error">{error}</p>}
        </form>
      </div>
      <div><ResultPreview data={inputData} /></div>
    </div>
  );
};
