import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from "./Auth.module.css";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      login(data.token);
      navigate('/');
    } else {
      alert(data.error);
    }
  };

  return (
    <div className={styles.container}>
    <form className={styles.auth} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="email">Email adress</label><br />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <br />
      <label htmlFor="password">Password</label><br />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
      <br /><br />
      <button type="submit">Login</button>
    </form>
</div>
  );
}
