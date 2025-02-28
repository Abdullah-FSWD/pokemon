import { getMoves } from "@/lib/pokemonApis";
import { cn } from "@/lib/utils";

// eslint-disable-next-line no-async-promise-executor
export function MovesPage(data) {
  data.moves.map(async (move, index) => {
    const allMoves = await getMoves(move.move.url);
    console.log("all moves", allMoves);
    if (index >= 10) return <></>;
    return (
      <div
        key={index}
        className="p-2 flex justify-between px-3 pt-2 bg-muted rounded-md"
      >
        <div>
          <div className="capitalize px-3 pt-2 bg-muted rounded-md divide-y divide-primary ">
            {"  "}
            {move.move.name}
          </div>
          <div
            className={cn(
              "text-sm font-bold rounded-lg hover:bg-sky-500 px-3 mx-3 text-white uppercase",
              allMoves.type.name === "grass" && "bg-[#76D02C]",
              allMoves.type.name === "fire" && "bg-[#F08030]",
              allMoves.type.name === "water" && "bg-[#6890F0]",
              allMoves.type.name === "bug" && "bg-[#A8B820]",
              allMoves.type.name === "normal" && "bg-[#A8A878]",
              allMoves.type.name === "poison" && "bg-[#9B69B6]",
              allMoves.type.name === "electric" && "bg-[#F8D030]",
              allMoves.type.name === "ground" && "bg-[#E0C068]",
              allMoves.type.name === "fairy" && "bg-[#EE99AC]",
              allMoves.type.name === "fighting" && "bg-[#C03028]",
              allMoves.type.name === "psychic" && "bg-[#F85888]",
              allMoves.type.name === "ghost" && "bg-[#6A4C9C]",
              allMoves.type.name === "rock" && "bg-[#B8A038]",
              allMoves.type.name === "flying" && "bg-[#A7C7E7]"
            )}
          >
            {allMoves.type.name}
          </div>
        </div>
        <div>
          <div>Power: {allMoves.power}</div>
          <div>Accuracy: {allMoves.accuracy}</div>
        </div>
      </div>
    );
  });
}
