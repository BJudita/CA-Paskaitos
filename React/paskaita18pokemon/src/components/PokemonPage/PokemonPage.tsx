import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPokemonById, Pokemon } from '../../api/pokemonApi';
import '../HomePage/HomePage.css'

export default function PokemonPage() {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const { nameOrId } = useParams <{ nameOrId: string }>();
    
    const addToFavorites = () => {
        if (pokemon) {
          const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
          const isAlreadyFavorite = favorites.some((fav: Pokemon) => fav.id === pokemon.id);
    
          if (!isAlreadyFavorite) {
            favorites.push(pokemon);
            localStorage.setItem('favorites', JSON.stringify(favorites));
          }
        }
      };


useEffect(() => {
    if (!nameOrId) return;
    setLoading(true);
    setError(null);

    getPokemonById(nameOrId)
    .then((pokemonData) => {
        setPokemon(pokemonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [nameOrId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!pokemon) return <div>No Pokémon found</div>;

  return (

        <div className="container">
            <div className="left-box">      
      <h1 className="top-pad">{pokemon.name}</h1>
      {pokemon.sprites?.front_default ? (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      ) : (
        <p>No image available</p>
      )}
      <p><button className="add-btn" onClick={addToFavorites}>Add to favorites</button></p>
        </div>
       <div className="right-box">

      <p className="left"><strong>Types:</strong> {pokemon.types.map(type => type.type.name).join(', ')}</p>
      <p className="left top-pad"><strong>Abilities:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
      <p className="left"><strong>Stats:</strong></p>
      <ul>
        {pokemon.stats.map(stat => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      <p className="right">ID: {pokemon.id}</p> 
      </div>
    </div>
  );
}
