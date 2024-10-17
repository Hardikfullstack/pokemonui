// 'use server'
import axios from "axios";
 
export async function getlistOfPokemonType() {
  return await axios.get("https://pokeapi.co/api/v2/type?limit=150");
}

 
export async function getlistOfPokemons() {
    return await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150");
}

 
export async function getPokemonByType(search: string) {
    return await axios.get("https://pokeapi.co/api/v2/type/"+ search);
}


export async function getPokemonById(id: string) {
    return await axios.get("https://pokeapi.co/api/v2/pokemon/"+ id);
}



