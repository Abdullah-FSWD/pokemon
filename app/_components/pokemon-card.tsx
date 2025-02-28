"use client";

import { getPokemonDetails } from "@/lib/pokemonApis";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Skeleton } from "./skeleton";

export type PokemonCardProps = {
  id: number;
  name: string;
};

export function PokemonCard({ id, name }: PokemonCardProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  if (loading) {
    return <Skeleton />;
  }

  if (!pokemonDetails) {
    return <div>Failed to load Pokemon details.</div>;
  }

  function handleClick(id: number) {
    route.push(`/pokemon/${id}`);
  }
  const pokemonTypes = pokemonDetails.types
    .map((type: { type: { name: string } }) => type.type.name)
    .join(" ")
    .split(" ");

  return (
    <>
      <div
        onClick={() => handleClick(id)}
        key={id}
        className={cn(
          "group hover:shadow-md transition overflow-hidden border rounded-lg p-3 h-full"
          // bgColor
        )}
      >
        <div className="flex justify-between ">
          <div className="text-xl text-center p-2 capitalize">{name}</div>
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
        <div className="flex justify-around items-center rounded-md opacity-60 bg-background p-3 hover:opacity-80">
          {/*  @ts-expect-error expected  */}
          {pokemonTypes.map((types, index: number) => (
            <div
              key={index}
              className={cn(
                "text-sm  font-bold text-center p-0.5 rounded-lg hover:bg-sky-500 px-3 text-white uppercase",
                types === "grass" && "bg-[#76D02C]",
                types === "fire" && "bg-[#F08030]",
                types === "water" && "bg-[#6890F0]",
                types === "bug" && "bg-[#A8B820]",
                types === "normal" && "bg-[#A8A878]",
                types === "poison" && "bg-[#9B69B6]",
                types === "electric" && "bg-[#F8D030]",
                types === "ground" && "bg-[#E0C068]",
                types === "fairy" && "bg-[#EE99AC]",
                types === "fighting" && "bg-[#C03028]",
                types === "psychic" && "bg-[#F85888]",
                types === "ghost" && "bg-[#6A4C9C]",
                types === "rock" && "bg-[#B8A038]",
                types === "flying" && "bg-[#A7C7E7]"
              )}
            >
              {types}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
