import { useEffect, useState } from 'react'
import PlanetCard from '../src/components/PlanetCard/PlanetCard';
import useCharacters from '../hooks/useCharacters';
import type { IPlanet } from '../Types/Planets';

const Planets = () => {
  const {planets} = useCharacters()
  const [favorites, setFavorites] = useState<IPlanet[]>(() => {
  const storedFavorites =
    localStorage.getItem('favoritePlanets');

    return storedFavorites
      ? JSON.parse(storedFavorites)
      : [];
  });

  const handleAddFavorite = (planet: IPlanet) => {
    setFavorites((prev) => {
      const exists = prev.some((p) => p.id === planet.id);

      if (exists) return prev;

      return [...prev, planet];
    });
  };

  const handleRemoveFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.filter((planet) => planet.id !== id)
    );
  };

  useEffect (() => {
    localStorage.setItem(
      'favoritePlanets',
      JSON.stringify(favorites)
    );
  }, [favorites]);
  return (
    <div className='bg-[#1A1D24] text-white p-4 shadow-lg'>
      <h1 className='text-3xl text-[#FF8A00]'>Archivo de Planetas</h1>
      <h3 className='text-lg text-gray-500'>
        Accediendo a datos técnicos de los planetas del universo 7.
      </h3>
      <div className='w-full flex flex-wrap gap-4 mt-4 items-center justify-center'>
        {planets && planets.map(planet => (
          <PlanetCard
            planet={planet}
            showButton={false}
            favorites={favorites}
            onAddFavorite={handleAddFavorite}
            onRemoveFavorite={handleRemoveFavorite}
            isFavorite={favorites.some((p) => p.id === planet.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Planets