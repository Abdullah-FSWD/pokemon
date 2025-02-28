import axios from "axios";

export const getPokemons = async () => {
  try {
    const res = await axios(
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
    );
    const data = await res.data;
    return data;
  } catch (error) {
    return {
      // @ts-expect-error error is expectd
      error: `Something went wrong${error.message}`,
    };
  }
};

export const getPokemonDetails = async (id: string) => {
  try {
    const res = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.data;
    return data;
  } catch (error) {
    return {
      // @ts-expect-error error is expectd
      error: `Something went wrong${error.message}`,
    };
  }
};

export async function getMoves(url: string) {
  try {
    const res = await axios(url);
    const data = res.data;
    return data;
  } catch (error) {
    return {
      // @ts-expect-error error is expectd
      error: `Something went wrong${error.message}`,
    };
  }
}
