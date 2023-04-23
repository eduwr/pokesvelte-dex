type Spritekeys =
  | "back_default"
  | "back_female"
  | "back_shiny"
  | "back_shiny_female"
  | "front_default"
  | "front_female"
  | "front_shiny"
  | "front_shiny_female";

type Sprites = Partial<Record<Spritekeys, string>>;

type OtherKeys = "dream_world" | "home" | "official-artwork";

export type PokemonSprites = Sprites & {
  other: Partial<Record<OtherKeys, Sprites>>;
};
