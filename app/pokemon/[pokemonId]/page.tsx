type PokemonIdPageProps = {
  params: Promise<{
    pokemonId: number;
  }>;
};

export default async function PokemonIdPage({ params }: PokemonIdPageProps) {
  const { pokemonId } = await params;
  
  console.log("params", pokemonId);
  return <div>Pokemon Id page {pokemonId} </div>;
}
