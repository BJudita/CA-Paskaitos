import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import "./BrowsePage.css"
import { getPokemons, Pokemon} from '../../api/pokemonApi';

export default function BrowsePage() {
const [pokemons, setPokemons] = useState<Pokemon[]>([]);
const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);
const [page, setPage] = useState<number>(1);
const [totalPages, setTotalPages] = useState<number>(0);

const limit = 20
const offset = (page -1) * limit;

useEffect(() => {
    setLoading(true);
    setError(null);

    getPokemons(offset, limit)
    .then((data) => {
        setPokemons(data.results);
        setTotalPages(Math.ceil(data.count / limit));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
<div className="browse-container">
      <h1>Browse Pokémon</h1>

      {pokemons.length === 0 ? (
        <p>No Pokémon available.</p>
      ) : (
        <ul className="pokemon-list">
  {pokemons.map((pokemon) => {
    const pokemonId = pokemon.url.split('/').filter(Boolean).pop(); // Extract ID from URL

    return (
      <li key={pokemonId}>
        <Link to={`/pokemon/${pokemon.name}`}>
          <span>{pokemon.name}</span>
        </Link>
      </li>
    );
  })}
</ul>
      )}

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1}>
          Prev
        </button>
        <span className="page-list">
          Page {page} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  )
}
