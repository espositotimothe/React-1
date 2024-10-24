import { useState } from "react";
import "./App.css";

import PokemonCard from "./components.1/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1)
  }
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1)   
  }



  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button type="button" onClick={ handleClickPrevious }>Précédent</button>
      <button type="button" onClick={ handleClickNext }>Suivant</button>
    </div>
  );
}
export default App;

