"use client";
import { ReactNode, useEffect } from "react";
import type { ICharacter } from "../../Types/Character";
import type { IPlanet } from '../../Types/Planets';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	character?: ICharacter;
	planet?: IPlanet;
}

const Modal = ({ isOpen, onClose, children, character, planet }: ModalProps) => {
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

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center w-full p-4">
			{/* Overlay */}
			<div
				className="absolute inset-0 bg-black/40 backdrop-blur-sm"
				onClick={onClose}
			/>

			{/* Modal */}
			<div className="relative z-10 bg-[#44474F] rounded-2xl shadow-xl w-full max-w-md max-h-[80vh] flex flex-col text-white">

				{/* CONTENIDO SCROLLEABLE */}
				<div className="p-6 overflow-y-auto">
					<div>
						<div className='w-1/2 rounded-lg overflow-hidden border border-black shadow-2xl mx-auto shadow-[#FF8A00]'>
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
								<p className="text-center">{character?.race}</p>
							</div>
							<div className="bg-[#191C22] text-white p-3 rounded-lg w-full">
								<p className="text-center">{character?.gender}</p>
							</div>
						</div>
					</div>
				</div>

				{/* FOOTER FIJO */}
				<div className="p-4 border-t">
					<button
						className="bg-red-500 text-white rounded-lg px-4 py-2 w-full"
						onClick={onClose}
					>
						Cerrar
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;