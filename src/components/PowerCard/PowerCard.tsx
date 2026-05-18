import type { ITransformation } from "../../../Types/Transformation"

interface IPowerCardProps {
    power: ITransformation;
}

const PowerCard = ({ power }: IPowerCardProps) => {
    return (
        <div className="w-1/4 p-3 bg-[#191C22] mx-auto rounded-xl hover:border hover:border-[#FF8A00]">
            <div className='w-3/4 rounded-lg overflow-hidden border border-black mx-auto'>
                <img
                    src={power.image}
                    alt="power-image"
                    className='object-cover transition-transform duration-300 hover:scale-110'
                />
            </div>
            <div className="my-4 w-full flex flex-col gap-3">
                <p className="text-xl font-bold">{power.name}</p>
                <p>{power.ki}</p>
            </div>
        </div>
    )
}

export default PowerCard