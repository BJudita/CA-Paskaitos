import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pokemon } from '../../api/pokemonApi';
import "./FavoritesPage.css";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Pokemon[]>([]);

  useEffect(() => {
    const favoritesData = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favoritesData);
  }, []);

  const removeFromFavorites = (pokemonId: number) => {
    const updatedFavorites = favorites.filter((pokemon) => pokemon.id !== pokemonId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div className="fav-container">
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>List is empty...</p>
      ) : (
        <ul>
          {favorites.map((pokemon) => (
            
            <li key={pokemon.id}>
              <div className="list">
                <Link to={`/pokemon/${pokemon.id}`}>
                 {pokemon.name}
              </Link>
              <button className="x" onClick={() => removeFromFavorites(pokemon.id)}>X</button></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}