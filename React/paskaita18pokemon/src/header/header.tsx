import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/browse">Browse</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
      </nav>
    </header>
  );
}