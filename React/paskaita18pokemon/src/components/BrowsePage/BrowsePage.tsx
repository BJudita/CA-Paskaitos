import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import "./BrowsePage.css"
import { getPokemons, Pokemon} from '../../api/pokemonApi';

export default function BrowsePage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [searchInput, setSearchInput] = useState<string>('');
// const [totalPages, setTotalPages] = useState<number>(0);
 
const limit = 20;
const offset = (page - 1) * limit;
const scrollPositionRef = useRef(0);


const handleScroll = () => {
  const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
  const threshold = document.documentElement.offsetHeight - 100;

  if (scrollPosition >= threshold && !loading) {
    window.requestAnimationFrame(() => {
      scrollPositionRef.current = window.scrollY;
      setPage((prevPage) => prevPage + 1);
    });
  }
};

useEffect(() => {
  if (!searchInput || page === 1) {
    setPokemons([]);
  }

  setLoading(true);
  setError(null);

  getPokemons(offset, limit)
    .then((data) => {

      const fetchPokemonDetails = async () => {
        try {
          const detailedPokemons = await Promise.all(
            data.results.map(async (pokemon) => {
              const pokemonData = await getPokemons(pokemon.name); 
              return pokemonData; 
            })
          );
          setPokemons((prevPokemons) => [...prevPokemons, ...detailedPokemons]);
        } catch (error) {
          setError("Failed to fetch detailed Pokémon data");
        } finally {
          setLoading(false);
        }
      };

      fetchPokemonDetails();
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
}, [page, searchInput]);

useEffect(() => {
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [loading]);

const handleSearch = () => {
  if (searchInput) {
    setPage(1); 
    setPokemons([]);
  }
};

if (loading && page === 1) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;

return (
  <div className="browse-container">
    <h1>Browse Pokémon</h1>

    <div className="search-container">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter Pokémon name or ID"
      />
      <button onClick={handleSearch}>Search</button>
    </div>

    {pokemons.length === 0 ? (
      <p>No Pokémon available.</p>
    ) : (
      <ul className="pokemon-list">
        {pokemons
          .filter((pokemon) => pokemon.name.toLowerCase().includes(searchInput.toLowerCase()))
          .map((pokemon, index) => {
            const pokemonId = pokemon.url.split('/').filter(Boolean).pop();
            const uniqueKey = `${pokemonId}-${page}-${index}`;

            return (
              <li key={uniqueKey}>
                <Link to={`/pokemon/${pokemon.name}`}>
                  <span>{pokemon.name}</span>
                </Link>
              </li>
            );
          })}
      </ul>
    )}

    {loading && <div className="loading-indicator">Loading more...</div>}
  </div>
);
}