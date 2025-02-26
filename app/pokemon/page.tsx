import { getPokemons } from "@/lib/pokemonApis";
import { PokemonCard } from "./_components/pokemon-card";

async function PokemonHome() {
  const { results } = await getPokemons();

  if (!results) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
      {results.map(
        (
          pokemon: {
            name: string;
            url: string;
          },
          index: number
        ) => (
          <PokemonCard key={index} name={pokemon.name} id={index + 1} />
        )
      )}
    </div>
  );
}

export default PokemonHome;
