
import type { IPlanet } from '../../../Types/Planets';
import { Star, StarOff } from 'lucide-react';

interface IPlanetCardProps {
	planet: IPlanet;
    favorites: IPlanet[];
    isFavorite: IPlanet[];
    onAddFavorite: (planet: IPlanet) => void;
    onRemoveFavorite: (id: number) => void;
}

const PlanetCard = ({ planet, favorites, isFavorite, onAddFavorite, onRemoveFavorite }: IPlanetCardProps) => {

	console.log(planet)
    console.log(favorites)
    console.log(isFavorite)
	return (
		<div className='w-80 h-72 bg-[#44474F] text-white p-2 shadow-lg rounded-lg mt-4 border border-[#44474F] hover:shadow-[#FF8A00] ease-in duration-400'>
			<div className='flex flex-col gap-4 pb-2 mb-2 items-center justify-center'>
				<div className='flex gap-4 pb-2 mb-2 items-center justify-center'>
                    <div className='w-1/2 h-fit rounded-lg overflow-hidden border border-black'>
					<img
						src={planet.image}
						alt="imagen-planeta"
						className='object-cover transition-transform duration-300 hover:scale-110'
					/>
				</div>
				<div className='w-1/2 my-10 flex flex-col gap-2'>
					<div className='p-1 text-xs bg-[#FF8A00] w-fit h-fit rounded-full text-center font-bold left-0'>{planet.isDestroyed ? 'Destruído' : 'Con vida'}</div>

					<h2 className='text-xl font-bold'>{planet.name}</h2>  
				</div>
                </div>
                <div className='flex justify-end items-center w-full'>
                    {
                        !isFavorite ? (
                        <div className='flex flex-col justify-start items-center' onClick={()=> onAddFavorite(planet)}>
                            <p className='text-[#FF8A00] text-sm'>Agregar a favoritos</p>
                            <Star className={isFavorite ? 'fill-[#ffd000] text-[#ffd000]' : 'text-white'}/>  
                        </div>
                        ) :  
                        <div className='flex flex-col justify-start items-center' onClick={()=> onRemoveFavorite(planet.id )}>
                            <p className='text-[#FF8A00] text-sm'>Quitar de favoritos</p>
                            <StarOff className={isFavorite ? 'fill-[#ffd000] text-[#ffd000]' : 'text-white'}/>  
                        </div>
                    }
                </div>
			</div>

		</div>
	)
}

export default PlanetCard;