import type { PokemonSprites } from "./PokemonSprites";
import type { PokemonType } from "./PokemonType";

export type Pokemon = {
  id: number;
  height: number;
  weight: number;
  name: string;
  order: number;
  sprites: PokemonSprites;
  types: PokemonType[];
};
