"use client";
import { ReactNode, useEffect } from "react";
import type { ICharacter } from "../../Types/Character";
import type { IPlanet } from '../../Types/Planets';
import { CircleX } from "lucide-react";
import type { ITransformation } from "../../Types/Transformation";

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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;