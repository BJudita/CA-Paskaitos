import * as yup from "yup";

export type InputData = {
  name: string;
  email: string;
  hasMiddleName: boolean;
  middleName: string;
  employmentStatus: string;
  schoolName: string;
  studentId: string;
  companyName: string;
  jobTitle: string;
  subscription: boolean;
  technologyCheckbox: boolean;
  businessCheckbox: boolean;
  healthCheckbox: boolean;
  emailCheckbox: boolean;
  phoneCheckbox: boolean;
  phone: string | null;
};

// Helper functions
const requiredString = (field: string, min: number) =>
  yup
    .string()
    .required(`${field} is required`)
    .min(min, `${field} cannot be shorter than ${min} characters`);

const conditionalRequiredString = (field: string, min: number) => () =>
  yup
    .string()
    .required(`${field} is required`)
    .min(min, `${field} cannot be shorter than ${min} characters`);

const conditionalPhone = () =>
  yup
    .string()
    .required("Phone number is required")
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Phone number is not valid");

const userSchema = yup
  .object()
  .shape({
    name: requiredString("Name", 3),
    email: yup.string().email("Email is not valid").required("Email is required"),
    hasMiddleName: yup.boolean(),
    middleName: yup.string().when("hasMiddleName", {
      is: true,
      then: conditionalRequiredString("Middle name", 2),
      otherwise: () => yup.string().notRequired(),
    }),

    employmentStatus: yup.string().required("Employment status is required"),

    schoolName: yup.string().when("employmentStatus", {
      is: "Student",
      then: conditionalRequiredString("School name", 2),
      otherwise: () => yup.string().notRequired(),
    }),

    studentId: yup.string().when("employmentStatus", {
      is: "Student",
      then: conditionalRequiredString("Student ID", 4),
      otherwise: () => yup.string().notRequired(),
    }),

    companyName: yup.string().when("employmentStatus", {
      is: (val: string) => val === "Employed" || val === "Self-employed",
      then: conditionalRequiredString("Company name", 2),
      otherwise: () => yup.string().notRequired(),
    }),

    jobTitle: yup.string().when("employmentStatus", {
      is: (val: string) => val === "Employed" || val === "Self-employed",
      then: conditionalRequiredString("Job title", 2),
      otherwise: () => yup.string().notRequired(),
    }),

    subscription: yup.boolean(),

    // Individual checkboxes don't need required validators anymore
    technologyCheckbox: yup.boolean(),
    businessCheckbox: yup.boolean(),
    healthCheckbox: yup.boolean(),
    emailCheckbox: yup.boolean(),
    phoneCheckbox: yup.boolean(),

    phone: yup.string().nullable().when("phoneCheckbox", {
      is: true,
      then: conditionalPhone,
      otherwise: () => yup.string().nullable(),
    }),
  })

  // Add group validation for topic checkboxes
  .test("at-least-one-topic", "Please select at least one topic", function (value) {
    if (value.subscription) {
      return (
        value.technologyCheckbox ||
        value.businessCheckbox ||
        value.healthCheckbox
      );
    }
    return true;
  })

  // Add group validation for contact methods
  .test("at-least-one-contact", "Please select at least one contact method", function (value) {
    if (value.subscription) {
      return value.emailCheckbox || value.phoneCheckbox;
    }
    return true;
  });


// Validation function scoped by form step
export const sendFormData = async (data: InputData, step: number) => {
  let schemaToValidate;

  if (step === 1) {
    schemaToValidate = userSchema.pick([
      "name",
      "email",
      "hasMiddleName",
      "middleName",
    ]);
  } else if (step === 2) {
    schemaToValidate = userSchema.pick([
      "employmentStatus",
      "schoolName",
      "studentId",
      "companyName",
      "jobTitle",
    ]);
  } else if (step === 3) {
    schemaToValidate = userSchema.pick([
      "subscription",
      "technologyCheckbox",
      "businessCheckbox",
      "healthCheckbox",
      "emailCheckbox",
      "phoneCheckbox",
      "phone",
    ]);
  } else {
    schemaToValidate = userSchema; // fallback
  }

  try {
    await schemaToValidate.validate(data, { abortEarly: false });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return error.errors;
    }
  }
};
