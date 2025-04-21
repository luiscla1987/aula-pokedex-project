import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TypeBadge from '../components/TypeBadge';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    
    fetchPokemonData();
  }, [id]);

  if (!pokemon) return <div>Carregando...</div>;

  return (
    <div className="detail-container">
      <h1>{pokemon.name} : {pokemon.id}</h1>
      <h2>Altura: {pokemon.height} || Peso: {pokemon.weight}</h2>
      
      <img 
        src={pokemon.sprites.other['official-artwork'].front_default} 
        alt={pokemon.name} 
      />
      <img 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name} 
      />
      
      <div className="types">
        {pokemon.types.map((type, index) => (
          <TypeBadge key={index} type={type.type.name} />
        ))}
      </div>
      <div className="stats">
        <h2>Estatísticas</h2>
        {pokemon.stats.map((stat, index) => (
          <div key={index} className="stat-bar">
            <span>{stat.stat.name} </span>
            <progress value={stat.base_stat} max="255" />
          </div>
        ))}
      </div>
      <div className="moves">
        <h2>Movimentos</h2>
        <ul>
            {pokemon.moves.slice(0,5).map((moveObj, index) => (
            <li key={index}>{moveObj.move.name}</li>
            ))}
        </ul>
    </div>
    <div className="held-items">
  <h2>Itens Segurados</h2>
  {pokemon.held_items.length === 0 ? (
    <p>Nenhum item segurado.</p>
  ) : (
    <ul>
      {pokemon.held_items.map((heldItemObj, index) => (
        <li key={index}>
          {heldItemObj.item.name}
        </li>
      ))}
    </ul>
  )}
</div>
    </div>
  );
};

export default PokemonDetail;
