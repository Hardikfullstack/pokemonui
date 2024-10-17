'use client'

import { getPokemonById } from '@/app/actions';
import { PokemonUrl } from '@/utils';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const PokemonDetails = ({id}:{id:string}) => {
    const router = useRouter();
    const [pokemonDetails, setPokemonDetails] = useState<any>({});

    useEffect(() => {
        fetchDetails();
    }, [id])

    const fetchDetails = async () => {
        const res = await getPokemonById(id);
        setPokemonDetails(res.data);
    }

    return(
        <>
            <div className='mx-20 my-20'>
            <p className="text-sm text-green-500 cursor-pointer" onClick={() => router.push("/")}>Back</p>
                <div className="flex justify-center p-4">
                    <div className="bg-white border border-gray-300 rounded-lg shadow-lg w-full max-w-md">
                        <div className="flex flex-col">
                            <div className="bg-gray-100 rounded-t-lg">
                            <div className="w-full h-48 bg-white">
                                <img src={PokemonUrl.replace('**', id || '')} alt="Card Image" className="w-full h-full object-contain" />
                            </div>
                            </div>
                            <div className="bg-gray-200 p-4 flex flex-col justify-between rounded-b-lg">
                            <div>
                                <span className="flex">
                                <h2 className="text-lg font-bold text-gray-800 mr-2">Name:</h2>
                                <p className="text-sm mt-1 text-gray-600">{pokemonDetails.name}</p>
                                </span>
                                <span className="flex">
                                <h2 className="text-lg font-bold text-gray-800 mr-2">Type:</h2>
                                <p className="text-sm mt-1 text-gray-600">{pokemonDetails?.types?.map((item: any) => item?.type?.name || '').join(',')}</p>
                                </span>
                                <span className="flex">
                                <h2 className="text-lg font-bold text-gray-800 mr-2">Stats:</h2>
                                <p className="text-sm mt-1 text-gray-600">{pokemonDetails?.stats?.map((i:any) => i?.stat?.name || '').join(',')}</p>
                                </span>
                                <span className="flex">
                                <h2 className="text-lg font-bold text-gray-800 mr-2">Abilities:</h2>
                                <p className="text-sm mt-1 text-gray-600">{pokemonDetails?.abilities?.map((i:any) => i?.ability?.name || '').join()}</p>
                                </span>
                                <span className="flex">
                                <h2 className="text-lg font-bold text-gray-800 mr-2">Some Moves:</h2>
                                <p className="text-sm mt-1 text-gray-600">{pokemonDetails?.moves?.slice(0,10)?.map((i: any) => i?.move?.name || '').join()}</p>
                                </span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default PokemonDetails;
