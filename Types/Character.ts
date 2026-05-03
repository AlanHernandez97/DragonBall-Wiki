import type { IPlanet } from "./Planets";
import type { ITransformation } from './Transformation';

export interface ICharacter {
	id: number
	name: string
	race: string;
	originPlanet: IPlanet[];
	affiliation: string;
	description: string;
	image: string;
	gender: string;
	ki: string;
	maxKi: string;
	transformations: ITransformation[]
}