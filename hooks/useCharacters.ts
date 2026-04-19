import { useEffect, useState } from "react"
import type { ICharacter } from '../Types/Character';

const useCharacters = () => {
	const [characters, setCharacters] = useState<ICharacter[]>([]);

	useEffect(() => {
		const fetchCharacters = async () => {
			try {
				const response = await fetch('https://dragonball-api.com/api/characters');
				const data = await response.json();
				setCharacters(data.items);
			} catch (err) {
				console.log("error al obtener los personajes: ", err);
			}
		};

		fetchCharacters();
	}, []);

	return {
		characters
	}

}

export default useCharacters