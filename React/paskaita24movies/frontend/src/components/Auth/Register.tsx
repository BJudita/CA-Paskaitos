import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";

export default function Register() {
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.ok) {
      alert('Account created! Please login');
      navigate('/login');
    } else {
      alert(data.error);
    }
  };

  return (
    <div className={styles.container}>
    <form className={styles.auth} onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label htmlFor="name">Name</label><br />
      <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Name" />
      <br />
      <label htmlFor="email">Email adress</label><br />
      <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" />
      <br />
      <label htmlFor="password">Password</label><br />
      <input value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} type="password" placeholder="Password" />
      <br />
      <br />
      <button type="submit">Register</button>
    </form>
    </div>
  );
}
