import { useCallback, useEffect, useMemo, useState } from 'react';
import UserList from "./components/UserList";
import UserSearch from "./components/UserSearch";
import UserSort from "./components/UserSort";
import './App.css';
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]) // Saugome vartotojų sąrašą
  const [searchTerm, setSearchTerm] = useState(""); // Paieskos reiksme
  const [sortBy, setSortBy] =  useState("name"); // rusiavimo kriterijus  

   // Naudojame useEffect duomenims gauti tik vieną kartą (tuščias priklausomybių masyvas)
useEffect(() => {
  axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => setUsers(response.data))
  .catch((error) => console.error("Klaida gaunant duomenis", error))
}, []);

// useCallback, kad filtruojant ar rūšiuojant nereikėtų perkurti funkcijos kiekvieną kartą
const handleSearch = useCallback((term) => {
  setSearchTerm(term);
}, []);

const handleSort = useCallback((criteria) => {
  setSortBy(criteria);
});

// useMemo optimizuoja filtravimą ir rūšiavimą, kad būtų perskaičiuojama tik tada, kai keičiasi priklausomybės
const filteredAndSortedUsers = useMemo(() => {
  let filteredAndSortedUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
);
return filteredAndSortedUsers.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
}, [users, searchTerm, sortBy])

  return (
    <>
  <div className="App">
      <h1>Vartotojų sąrašas</h1>
      <UserSearch onSearch={handleSearch} />
      <UserSort onSort={handleSort} />
      <UserList users={filteredAndSortedUsers} />
    </div>
    </>
  )
}

export default App
