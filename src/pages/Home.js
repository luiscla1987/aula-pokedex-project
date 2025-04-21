import { useState, useEffect } from 'react';
import axios from 'axios';
import PokeList from '../components/PokeList';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        setPokemons(response.data.results);
      } catch (error) {
        console.error('Erro na requisição:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPokemons();
  }, []);

  return (
    <div className="home-container">
      {loading ? <div className="loading">Carregando...</div> : <PokeList data={pokemons} />}
    </div>
  );
};

export default Home;