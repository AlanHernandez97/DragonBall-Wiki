import CharacterCard from '../src/components/CharacterCard/CharacterCard'
import useCharacters from '../hooks/useCharacters';
import type { ICharacter } from '../Types/Character';
import { useEffect, useState } from 'react';

const Home = () => {
  const { characters } = useCharacters();
  const [favorites, setFavorites] = useState<ICharacter[]>(() => {
  const storedFavorites = localStorage.getItem('favoriteCharacters');
    return storedFavorites
      ? JSON.parse(storedFavorites)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      'favoriteCharacters',
      JSON.stringify  (favorites)
    );
  }, [favorites]);
  
  const handleAddFavorite = (planet: ICharacter) => {
    setFavorites((prev) => {
      const exists = prev.some((p) => p.id === planet.id);

      if (exists) return prev;

      return [...prev, planet];
    });
  };
  
  const handleRemoveFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.filter((character) => character.id !== id)
    );
  };
  return (
    <div className='bg-[#1A1D24] text-white p-4 shadow-lg'>
      <h1 className='text-3xl text-[#FF8A00]'>Archivo de Personajes</h1>
      <h3 className='text-lg text-gray-500'>
        Accediendo a datos técnicos de los habitantes del Universo 7. Las firmas de Ki en tiempo real y las estimaciones de nivel de poder
        son proporcionadas por los sistemas de alta velocidad de Capsule Corp.
      </h3>
      <div className='w-full flex flex-wrap gap-4 mt-4 items-center justify-center'>
        {characters && characters.map(character => (
          <CharacterCard key={character.id} character={character} onAddFavorite={handleAddFavorite} onRemoveFavorite={handleRemoveFavorite} isFavorite={favorites.some((fav) => fav.id === character.id)} />
        ))}
      </div>
    </div>
  )
}

export default Home