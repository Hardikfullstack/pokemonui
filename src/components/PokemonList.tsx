'use client'
import React, { SyntheticEvent, useState } from "react";
import PokemonCards from "./PokemonCards";
import { PokemonData } from "@/utils";

type PokemonListType = {
  typeList: PokemonData[]
}

const PokemonList = ({typeList}:PokemonListType) => {
    const [selectedType, setSelectedType] = useState<string>('');
    const [searchedText, setSearchedText] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedType(e.target.value)
      
    };

    const handleSearch = () => {
      const searched = document.getElementById('default-search')?.value || '';
      console.log("searchedText", searched);
      setSearchedText(searched);
    };

    return(
    <>
        <select defaultValue="" onChange={handleChange} className="bg-gray-50 max-w-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="">Select</option>
            {typeList.map((item:PokemonData, index: number) => <option key={'option'+index}  value={item.name}>{item.name}</option>)}
        </select>
        <div className="max-w-md my-4">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." required />
            <button onClick={handleSearch} style={{backgroundColor: '#22385c'}} className="text-white absolute end-0 inset-y-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-tl-none rounded-tr-md rounded-bl-none rounded-br-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-full">Search</button>
          </div>
        </div>
        <PokemonCards selectedType={selectedType} searchedText={searchedText} />
      </>
    )
};

export default PokemonList;