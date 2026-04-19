import CharacterCard from '../src/components/CharacterCard/CharacterCard'
import useCharacters from '../hooks/useCharacters';

const Home = () => {
  const { characters } = useCharacters();
  return (
    <div className='bg-[#1A1D24] text-white p-4 shadow-lg'>
      <h1 className='text-3xl text-[#FF8A00]'>Archivo de Personajes</h1>
      <h3 className='text-lg text-gray-500'>
        Accediendo a datos técnicos de los habitantes del Universo 7. Las firmas de Ki en tiempo real y las estimaciones de nivel de poder
        son proporcionadas por los sistemas de alta velocidad de Capsule Corp.
      </h3>
      <div className='w-full flex flex-wrap gap-4 mt-4 items-center justify-center'>
        {characters && characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  )
}

export default Home