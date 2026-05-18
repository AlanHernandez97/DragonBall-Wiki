"use client";
import { ReactNode, useEffect } from "react";
import type { ICharacter } from "../../Types/Character";
import type { IPlanet } from '../../Types/Planets';
import { CircleX } from "lucide-react";
import type { ITransformation } from "../../Types/Transformation";
import PowerSlider from "../components/UI/PowerSlider/PowerSlider";
import PowerCard from "../components/PowerCard/PowerCard";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	character: ICharacter | null;
	planet?: IPlanet;
	transformations: ITransformation[];
}

const Modal = ({ isOpen, onClose, character, planet }: ModalProps) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);


	if (!isOpen) return null;

	console.log('Character:', character)

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
			{/* Overlay */}
			<div
				className="absolute inset-0 bg-black/40 backdrop-blur-sm"
				onClick={onClose}
			/>

			{/* Modal */}
			<div className="relative z-10 bg-[#44474F] rounded-2xl shadow-xl w-200 max-h-[80vh] flex flex-col text-white">

				{/* CONTENIDO SCROLLEABLE */}
				<div className="p-6 overflow-y-auto">
					<div>
						<div>
							<CircleX onClick={onClose} className="absolute top-4 right-4 cursor-pointer" />
						</div>
						<div className='w-1/3 rounded-lg overflow-hidden border border-black shadow-2xl mx-auto shadow-[#FF8A00]'>
							<img
								src={character?.image}
								alt="imagen-personaje"
								className='object-cover transition-transform duration-300 hover:scale-110'
							/>
						</div>

						<div className="flex flex-col gap-2 mt-4">
							<h2 className="text-3xl font-bold mb-4 mx-auto">
								{character?.name}
							</h2>
							<p>
								{character?.description}
							</p>
						</div>

						<div className="flex gap-4 mt-4 w-full">
							<div className="bg-[#191C22] text-white p-3 rounded-lg w-full">
								<p>Raza</p>
								<p >{character?.race}</p>
							</div>
							<div className="bg-[#191C22] text-white p-3 rounded-lg w-full">
								<p>Género:</p>
								<p >{character?.gender}</p>
							</div>
						</div>
						<div className="my-4">
							<PowerSlider label="Ki" value={character?.ki} maxValue={character?.maxKi} color="#FF8A00" />
						</div>
						<div className="w-[700px] p-3 border border-black rounded-xl bg-[#191C22] my-4 mx-auto">
							<div className="w-full flex flex-col gap-2">
								<div className="w-full flex justify-between items-center">
									<p className="text-[#FF8A00] text-xl font-bold uppercase">Planeta de origen</p>
									<div className={`w-20 h-fit p-1 rounded-full text-sm text-center ${!character?.originPlanet?.isDestroyed ? "bg-emerald-100 text-emerald-500" : "bg-red-100 text-red-500"}`}>
										<p>{character?.originPlanet?.isDestroyed === true ? "Destuído" : "Con vida"}</p>
									</div>
								</div>
								<div className="flex gap-6 my-4 items-center flex-wrap lg:flex-nowrap">
									<div className="w-4/5">
										<p className="text-lg font-bold">{character?.originPlanet?.name}</p>
										<p className="text-sm">{character?.originPlanet?.description}</p>
									</div>
									<div className="">
										<img src={character?.originPlanet?.image} />
									</div>
								</div>
							</div>
						</div>
						<div className="w-full flex gap-4 flex-wrap my-4 mx-auto justify-start">
							{
								character?.transformations.map(power => (

									<PowerCard key={power.id} power={power} />

								))
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;