export default defineCachedEventHandler(
  async (event) => {
    const { pokemon } = event.context.params;
    const data = await $fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const idealData = {
      id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
    };
    return idealData;
  },
  { maxAge: 60 * 5 }
);
