'use client'
import { PokemonData, PokemonUrl } from "@/utils"
import { useRouter } from "next/navigation";

type ViewProp = {
    item: PokemonData
    index: number
}

const PokemonCardView = ({item}: ViewProp) => {
    const router = useRouter();
    return(
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col" >
            <div className="w-full h-48 bg-white">
                <img src={PokemonUrl.replace('**', item.id || '')} alt="Card Image" className="w-full h-full object-contain" />
            </div>

            <div className="w-full bg-gray-200 p-4 flex flex-col justify-between h-32">
                <div>
                <p className="text-xl font-bold	 text-gray-600">{item.name}</p>
                </div>

                <div>
                <p className="text-sm text-gray-600 cursor-pointer" onClick={()=> router.push(`/details/${item.id}`)}>Details</p>
                </div>
            </div>
        </div>
    )
}

export default PokemonCardView;