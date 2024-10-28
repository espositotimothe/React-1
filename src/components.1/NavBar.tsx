import React from "react";

interface Pokemon {
	name: string;
	imgSrc?: string;
}

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

const NavBar: React.FC<NavBarProps> = ({
	pokemonIndex,
	setPokemonIndex,
	pokemonList,
}) => {
	return (
		<div className="navbar">
			{}
			{pokemonList.map((pokemon, index) => (
				<button key={pokemon.name} onClick={() => setPokemonIndex(index)}>
					{pokemon.name}
				</button>
			))}
		</div>
	);
};

export default NavBar;
