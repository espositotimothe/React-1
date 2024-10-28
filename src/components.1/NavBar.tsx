interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);
	const handleClickPrevious = () => {
		if (pokemonIndex > 0) {
			setPokemonIndex(pokemonIndex - 1);
		}
	};
	const handleClickNext = () => {
		if (pokemonIndex < pokemonList.length - 1) {
			setPokemonIndex(pokemonIndex + 1);
		}
	};

	return (
		<div>
			<button type="button" onClick={handleClickPrevious}>
				Précédent
			</button>
			<button type="button" onClick={handleClickNext}>
				Suivant
			</button>
		</div>
	);
}
export default NavBar;
