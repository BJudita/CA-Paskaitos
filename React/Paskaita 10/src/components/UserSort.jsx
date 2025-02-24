import React from "react";

const UserSort = ({ onSort }) => {
  return (
    <select onChange={(e) => onSort(e.target.value)}>
      <option value="name">Pagal vardą</option>
      <option value="email">Pagal el. paštą</option>
    </select>
  );
};

export default UserSort;