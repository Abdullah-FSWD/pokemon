"use client";

import { getPokemonDetails } from "@/lib/pokemonApis";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export type PokemonCardProps = {
  id: number;
  name: string;
};

export function PokemonCard({ id, name }: PokemonCardProps) {
  const [pokemonDetails, setPokemonDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const route = useRouter();
  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const details = await getPokemonDetails(`${id}`);
        setPokemonDetails(details);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  console.log(pokemonDetails?.types?.[0].type.name);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pokemonDetails) {
    return <div>Failed to load Pokemon details.</div>;
  }

  function handleClick(id: number) {
    route.push(`/pokemon/${id}`);
  }

  const typeToBgColor: Record<string, string> = {
    grass: "bg-[#76D02C]",
    fire: "bg-[#F08030]",
    water: "bg-[#6890F0]",
    bug: "bg-[#A8B820]",
    normal: "bg-[#A8A878]",
    poison: "bg-[#9B69B6]",
    electric: "bg-[#F8D030]",
    ground: "bg-[#E0C068]",
    fairy: "bg-[#EE99AC]",
    fighting: "bg-[#C03028]",
    psychic: "bg-[#F85888]",
    ghost: "bg-[#6A4C9C]",
    rock: "bg-[#B8A038]",
    flying: "bg-[#A7C7E7]",
  };

  const bgColor = pokemonDetails.types?.map(
    (type) => typeToBgColor[type.type.name]
  );

  // const pokemonTypes = pokemonDetails.types.map((type) =>
  //   type.type.name.split(" ")
  // );

  const pokemonTypes = pokemonDetails.types
    .map((type) => type.type.name)
    .join(" ")
    .split(" ");
  console.log("pokemonTypes", pokemonTypes);

  return (
    <>
      <div
        onClick={() => handleClick(id)}
        key={id}
        className={cn(
          "group hover:shadow-md transition overflow-hidden border rounded-lg p-3 h-full",
          bgColor
        )}
      >
        <div className="flex justify-between ">
          <div className="text-xl text-center p-2">{name}</div>
          <div className="text-2xl opacity-40 text-center p-2">#{id}</div>
        </div>
        <div className="relative w-full aspect-video rounded-md overflow-hidden justify-items-center bg-transparent">
          <Image
            src={pokemonDetails?.sprites.other.dream_world.front_default}
            alt="image"
            className="rounded-md"
            height={200}
            width={200}
          />
        </div>
        {/* <div>{pokemonTypes}</div> */}
        <div className="flex justify-around items-center rounded-md opacity-60 bg-background p-3 hover:opacity-80">
          {pokemonTypes.map((types, index) => (
            <div key={index} className="text-xl text-center p-2">
              {types}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
