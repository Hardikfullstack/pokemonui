'use client'
import React, { useState, useEffect, useDeferredValue } from "react";
import { getlistOfPokemons, getPokemonByType } from "@/app/actions";
// import { useRouter } from "next/navigation";
import { PokemonData } from "@/utils";
import PokemonCardView from "./PokemonCardView";

type PokemonCardsType = {
    selectedType: string
    searchedText: string
}

const PokemonCards = ({selectedType, searchedText}: PokemonCardsType) => {
    // const router = useRouter();
    const [pokemonsList, setPokemonList] = useState<PokemonData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        setIsLoading(true);
        if(selectedType){
            fetchFilteredList(selectedType);
        } else {
        fetchList();
        }
    }, [selectedType]);

    const renderList = useDeferredValue(pokemonsList.filter(i => searchedText ? i.name.includes(searchedText): true))

    const fetchList = async () => {
        const res = await getlistOfPokemons();
        const finalList = res.data.results.map((item: PokemonData) => ({...item, id: item.url.split('/').reverse()[1]})) || [];  
        setPokemonList(finalList);
        setIsLoading(false);
    }

    const fetchFilteredList = async (type:string) => {
        const res = await getPokemonByType(type);
        const finalList = res?.data?.pokemon.map((i:any) => ({name:i?.pokemon?.name, url: i?.pokemon.url,id: i.pokemon.url.split('/').reverse()[1]})) || [];  
        setPokemonList([...finalList]);
        setIsLoading(false);
    }
    // const res = await getlistOfPokemons();    
      
    return(
    <>
    <div className="my-4">
        {isLoading ? <div>Loading...</div> : 
             renderList.length > 0 ?
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {renderList.map((item: PokemonData, index:number) => 
                        <PokemonCardView item={item} index={index}  key={"pokemoncard"+index} />
                    )}
                </div> : <div> No Pokemon found</div>
        }
    </div>
      </>
    )
};

export default PokemonCards;