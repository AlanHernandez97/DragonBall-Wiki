import { useEffect, useState } from "react"
import type { ICharacter } from '../Types/Character';
import { IPlanet } from "../Types/Planets";
import { ITransformation } from "../Types/Transformation";

const useCharacters = () => {
	const [characters, setCharacters] = useState<ICharacter[]>([]);
	const [planets, setPlanets] = useState<IPlanet[]>([]);
	const [transformations, setTransformations] = useState<ITransformation[]>([]);

	useEffect(() => {
		const fetchCharacters = async () => {
			try {

				const response = await fetch(`${import.meta.env.VITE_URL_BASE}/characters`);
				const data = await response.json();
				setCharacters(data.items);


			} catch (err) {
				console.log("error al obtener los personajes: ", err);
			}
		};




		fetchCharacters();


	}, []);

	useEffect(() => {
		const fetchPlanets = async () => {
			try {

				const response = await fetch(`${import.meta.env.VITE_URL_BASE}/planets`);
				const data = await response.json();
				setPlanets(data.items);
			} catch (err) {
				console.log("error al obtener los planetas: ", err);
			}
		}

		fetchPlanets();
	}, []);

	useEffect(() => {
		const fetchPowers = async () => {
			try {

				const response = await fetch(`${import.meta.env.VITE_URL_BASE}/transformations`);
				const data = await response.json();
				setTransformations(data);


			} catch (err) {
				console.log("error al obtener las transformaciones: ", err);
			}
		}

		fetchPowers();
	}, [])



	return {
		characters,
		planets,
		transformations
	}

}

export default useCharacters