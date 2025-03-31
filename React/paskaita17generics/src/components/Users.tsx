import { useEffect, useState } from 'react'
import { getUserById, getUsers, User } from '../api/usersApi';

export default function Users() {
const [users, setUsers] = useState<User[]>([]);
const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
    getUsers()
      .then((users) => {
        setUsers(users);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
        <h1>Users List</h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>  
              <h2 style={{ textAlign: "left" }}><span>{user.id}. </span>{user.name}</h2>
              <p style={{ textAlign: "right" }}>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
