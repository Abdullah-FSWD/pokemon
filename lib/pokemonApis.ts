export const getPokemons = async () => {
  try {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
    );
    const data = await res.json();
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
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return {
      // @ts-expect-error error is expectd
      error: `Something went wrong${error.message}`,
    };
  }
};
