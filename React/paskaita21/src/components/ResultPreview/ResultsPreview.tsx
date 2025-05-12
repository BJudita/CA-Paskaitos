// components/ResultPreview.tsx
import React from "react";
import { InputData } from "../../api";
import "./ResultsPreviw.css";

interface Props {
  data: InputData;
}

const ResultPreview = ({ data }: Props) => {
  const formattedData = {
    fullName: data.name,
    email: data.email,
    hasMiddleName: data.hasMiddleName,
    middleName: data.middleName || null,
    employmentStatus: data.employmentStatus.toLowerCase(),
    schoolName: data.schoolName || null,
    studentID: data.studentId || null,
    companyName: data.companyName || null,
    jobTitle: data.jobTitle || null,
    subscribeNewsletter: data.subscription,
    "newsletter Topics": [
      data.technologyCheckbox && "Technology",
      data.businessCheckbox && "Business",
      data.healthCheckbox && "Health",
    ].filter(Boolean),
    contactMethod: data.phoneCheckbox ? "phone" : "email",
    phone: data.phone || null,
  };

  return (
    <div className="results">
      <p>Results</p>
      <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
        {JSON.stringify(formattedData, null, 2)}
      </pre>
    </div>
  );
};

export default ResultPreview;
