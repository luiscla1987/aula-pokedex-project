# Aula 1 #

1. Instalação e configuração do ambiente:
```sh
    npx create-react-app pokedex
    cd pokedex
    npm install react-router-dom axios
```

2. Criar estrutura do projeto:
<!-- 
/src
  /components
    PokeList.js
    PokeCell.js
    DetailView.js
  /assets
  /styles
-->

3. Componente principal inicial:
```js
// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokeList from './components/PokeList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokeList />} />
      </Routes>
    </BrowserRouter>
  );
}

```

4. Requisição a API para lista inicial:
```js
// PokeList.js
const [pokemons, setPokemons] = useState([]);

useEffect(() => {
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
    .then(res => setPokemons(res.data.results));
}, []);
```

#renderização básica:
```js
{pokemons.map((pokemon, index) => (
  <PokeCell 
    key={index} 
    name={pokemon.name} 
    url={pokemon.url} 
  />
))}
```