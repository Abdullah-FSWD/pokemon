import { getPokemonDetails } from "@/lib/pokemonApis";
import { PokemonDetails } from "./pokemon-detail";
import axios from "axios";

type PokemonIdPageProps = {
  params: Promise<{
    pokemonId: number;
  }>;
};

export default async function PokemonIdPage({ params }: PokemonIdPageProps) {
  const { pokemonId } = await params;
  const response = await getPokemonDetails(`${pokemonId}`);
  const url = response.species.url;
  const newData = await axios(url);
  const description = newData.data;
  if (!description) {
    return null;
  }

  return <PokemonDetails data={response} description={description} />;
}
