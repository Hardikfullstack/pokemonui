'use client'
import PokemonDetails from '@/components/PokemonDetails';
import { useParams } from 'next/navigation'

const PokemonView = () => {
    const params = useParams<{ id: string; }>();
    return(
        <PokemonDetails id={params.id} />
    )
};

export default PokemonView;
