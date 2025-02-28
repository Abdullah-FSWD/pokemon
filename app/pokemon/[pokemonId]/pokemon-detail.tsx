import { cn } from "@/lib/utils";
import { ArrowLeft, Heart, Share } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

type pokemonDetailsProps = {
  data: any;
  description: any;
};

export function PokemonDetails({ data, description }: pokemonDetailsProps) {
  const pokemonTypes = data.types
    .map((type) => type.type.name)
    .join(" ")
    .split(" ");
  console.log("data", data);
  return (
    <div className="max-w-5xl m-auto">
      <div className="border-muted-foreground border p-5 opacity-50 rounded-sm flex justify-between hover:bg-muted hover:shadow">
        <ArrowLeft className="size-5" />
        <div className="flex justify-end gap-4">
          <Heart fill="red" className="size-5" />
          <Share className="size-5" />
        </div>
      </div>
      <div className="p-4 border-foreground border my-4 md:flex block gap-2">
        <div className="p-5">
          <Image
            src={data?.sprites.other.dream_world.front_default}
            alt="image"
            width={300}
            height={300}
            className="border-inherit"
          />
        </div>
        <div>
          <div className="flex justify-start items-center">
            <div className="text-3xl text-center p-2 font-semibold capitalize">
              {data.name}
            </div>
            <div className="text-2xl opacity-40 text-center capitalize text-foreground p-3">
              #{data.id}
            </div>
          </div>
          <div className="flex justify-start gap-3 items-center rounded-md opacity-60 bg-background p-3 hover:opacity-80">
            {pokemonTypes.map((types, index) => (
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
          <div className="p-4 text-muted-foreground text-lg font-medium">
            {description.flavor_text_entries[0].flavor_text}
          </div>
          <div className="flex gap-3 p-4 justify-between">
            <div className="w-ful flex-1 border border-muted bg-muted/60 rounded-md p-2 text-muted-foreground font-semibold">
              Height:
              <p className="px-4 py-1 bg-muted/60 font-bold text-lg border-muted border">
                {data.height} m
              </p>
            </div>
            <div className="w-ful flex-1 border border-muted bg-muted/60 rounded-md p-2 text-muted-foreground font-semibold">
              Weight:
              <p className="px-4 py-1 bg-muted/60 font-bold text-lg border-muted border">
                {data.weight} kg
              </p>
            </div>
          </div>
        </div>
      </div>
      <Tabs className="p-5" defaultValue="stats">
        <TabsList className="flex w-full justify-between">
          <TabsTrigger value="stats" className="w-full text-center">
            Stats
          </TabsTrigger>
          <TabsTrigger value="moves" className="w-full text-center">
            Moves
          </TabsTrigger>
        </TabsList>
        <TabsContent value="stats" className="border-muted border">
          {data.stats.map((stat, index) => (
            <div key={index} className="p-1">
              <p className="capitalize px-3 pt-2 bg-muted rounded-md ">
                {"  "}
                {stat.stat.name}
              </p>
              <div className="flex bg-muted px-2 py-1 items-center ">
                <Progress
                  className="flex-1 items-center"
                  value={stat.base_stat}
                />
                <span className=" bg-muted text-center text-muted-foreground p-1">
                  {stat.base_stat} / 90
                </span>
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="moves">
          {data.moves.map((move, index) => (
            <div key={index} className="p-1">
              <p className="capitalize px-3 pt-2 bg-muted rounded-md ">
                {"  "}
                {move.move.name}
              </p>
              <div className="flex bg-muted px-2 py-1 items-center"></div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
