import { Link } from 'react-router-dom';

const PokeList = ({ data }) => {
  return (
    <div className="grid-container">
      {data.map((pokemon, index) => (
        <div className="poke-card" key={pokemon.name}>
          <Link to={`/pokemon/${index + 1}`}>
            <img 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} 
              alt={pokemon.name}
            />
            <h3>{pokemon.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PokeList;