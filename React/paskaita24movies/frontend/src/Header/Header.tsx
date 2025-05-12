import { Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import styles from "./Header.module.css";

interface HeaderProps {
  searchText: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: () => void;
}

export default function Header({ searchText, onSearchChange, onSearchSubmit }: HeaderProps) {
  const { user, logout } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearchSubmit();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={searchText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Search by title..."
            className={styles.searchInput}
          />
          <button onClick={onSearchSubmit} className={styles.searchButton}>
            Search
          </button>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Create account</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <div className={styles.userInfo}>
  {user && (
    <>
      <div className={styles.userMenu}>
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}><span className={styles.userEmail}>{user.email}</span></button>
          <div className={styles.dropdownContent}>
            <Link to="/profile">User Profile</Link>
            <Link to="/my-reviews">My Reviews</Link>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </>
  )}
</div>
        {/* <div className={styles.userInfo}>
          {user && (
            <>
            {user.email} <button onClick={logout}>Logout</button>
            </>
          )}
        </div> */}
      </div>
    </header>
  );
}
