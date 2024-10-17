import PokemonList from "../components/PokemonList"
import { getlistOfPokemonType } from "@/app/actions";

const Home = async() => {
  const res = await getlistOfPokemonType();    
    let typeList = res.data.results || [];

  return (
    <div className="mx-20 my-20"><PokemonList typeList={typeList} /></div>
  );
}

export default Home;