
import type { ICharacter } from '../../../Types/Character';

interface ICharacterCardProps {
	character: ICharacter;
}

const CharacterCard = ({ character }: ICharacterCardProps) => {


	return (
		<div className='w-72 h-64 bg-[#44474F] text-white p-2 shadow-lg rounded-lg mt-4 border border-[#44474F] hover:shadow-[#FF8A00] ease-in duration-400'>
			<div className='flex gap-4 pb-2 mb-2 '>
				<div className='w-1/2 h-56 rounded-lg overflow-hidden border border-black'>
					<img
						src={character.image}
						alt="imagen-personaje"
						className='object-cover transition-transform duration-300 hover:scale-110'
					/>
				</div>
				<div className='w-1/2 my-10 flex flex-col gap-2'>
					<div className='p-1 text-xs bg-[#FF8A00] w-fit h-fit rounded-full text-center font-bold left-0'>{character.affiliation}</div>

					<h2 className='text-xl font-bold'>{character.name}</h2>

					<div className='flex justify-between items-center'>
						<p className='text-white text-xs'>Raza:</p>
						<p className='text-xs text-white'>{character.race}</p>
					</div>
					<div className='flex justify-between items-center'>
						<p className='text-white text-xs'>Ki base:</p>
						<p className='text-xs text-white'>{character.ki}</p>
					</div>
					<button className='mt-2 p-2 text-sm border border-black bg-[#FF8A00] rounded-lg text-center font-bold hover:scale-110 ease-in duration-300'>Ver más</button>
				</div>
			</div>
		</div>
	)
}

export default CharacterCard