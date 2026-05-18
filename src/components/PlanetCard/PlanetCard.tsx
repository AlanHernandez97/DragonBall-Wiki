import type { IPlanet } from "../../../Types/Planets"

interface IPlanetCardProps {
    planet: IPlanet;
}

const PlanetCard = ({ planet }: IPlanetCardProps) => {
    return (
        <div>
            <div>
                <p>{planet.name}</p>
                <p>{planet.description}</p>
            </div>
        </div>
    )
}

export default PlanetCard