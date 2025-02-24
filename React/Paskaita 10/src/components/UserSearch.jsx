import React, { useState } from "react";

const UserSearch = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Ieškoti vartotojo..."
      value={term}
      onChange={handleChange}
    />
  );
};

export default UserSearch;