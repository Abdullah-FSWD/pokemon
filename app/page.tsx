import { getPokemons } from "@/lib/pokemonApis";
import { PokemonCard } from "./_components/pokemon-card";
import { PokemonListSchema } from "@/lib/schema";

async function PokemonHome() {
  const results = await getPokemons();
  console.log(results);

  const data = PokemonListSchema.parse(results);
  console.log("data", data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
      {data.results?.map(
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
