import { z } from "zod";

export const PokemonDetailSchema = z.object({
  stats: z.array(
    z.object({
      base_stat: z.number(),
      effort: z.number(),
      stat: z.object({
        name: z.string(),
        url: z.string().url(),
      }),
    })
  ),
  types: z.array(
    z.object({
      slot: z.number(),
      type: z.object({
        name: z.string(),
        url: z.string().url(),
      }),
    })
  ),
  weight: z.number(),
  versions: z.object({
    "generation-i": z.object({
      "red-blue": z.object({
        back_default: z.string().url(),
        back_gray: z.string().url(),
        back_transparent: z.string().url(),
        front_default: z.string().url(),
        front_gray: z.string().url(),
        front_transparent: z.string().url(),
      }),
      yellow: z.object({
        back_default: z.string().url(),
        back_gray: z.string().url(),
        back_transparent: z.string().url(),
        front_default: z.string().url(),
        front_gray: z.string().url(),
        front_transparent: z.string().url(),
      }),
    }),
    "generation-ii": z.object({
      crystal: z.object({
        back_default: z.string().url(),
        back_shiny: z.string().url(),
        back_shiny_transparent: z.string().url(),
        back_transparent: z.string().url(),
        front_default: z.string().url(),
        front_shiny: z.string().url(),
        front_shiny_transparent: z.string().url(),
        front_transparent: z.string().url(),
      }),
      gold: z.object({
        back_default: z.string().url(),
        back_shiny: z.string().url(),
        front_default: z.string().url(),
        front_shiny: z.string().url(),
        front_transparent: z.string().url(),
      }),
      silver: z.object({
        back_default: z.string().url(),
        back_shiny: z.string().url(),
        front_default: z.string().url(),
        front_shiny: z.string().url(),
        front_transparent: z.string().url(),
      }),
    }),
    "generation-iii": z.object({
      emerald: z.object({
        front_default: z.string().url(),
        front_shiny: z.string().url(),
      }),
      "firered-leafgreen": z.object({
        back_default: z.string().url(),
        back_shiny: z.string().url(),
        front_default: z.string().url(),
        front_shiny: z.string().url(),
      }),
      "ruby-sapphire": z.object({
        back_default: z.string().url(),
        back_shiny: z.string().url(),
        front_default: z.string().url(),
        front_shiny: z.string().url(),
      }),
    }),
    "generation-iv": z.object({
      "diamond-pearl": z.object({
        back_default: z.string().url(),
        back_female: z.null(),
        back_shiny: z.string().url(),
        back_shiny_female: z.null(),
        front_default: z.string().url(),
        front_female: z.null(),
        front_shiny: z.string().url(),
        front_shiny_female: z.null(),
      }),
      "heartgold-soulsilver": z.object({
        back_default: z.string().url(),
        back_female: z.null(),
        back_shiny: z.string().url(),
        back_shiny_female: z.null(),
        front_default: z.string().url(),
        front_female: z.null(),
        front_shiny: z.string().url(),
        front_shiny_female: z.null(),
      }),
      platinum: z.object({
        back_default: z.string().url(),
        back_female: z.null(),
        back_shiny: z.string().url(),
        back_shiny_female: z.null(),
        front_default: z.string().url(),
        front_female: z.null(),
        front_shiny: z.string().url(),
        front_shiny_female: z.null(),
      }),
    }),
    "generation-v": z.object({
      "black-white": z.object({
        animated: z.object({
          back_default: z.string().url(),
          back_female: z.null(),
          back_shiny: z.string().url(),
          back_shiny_female: z.null(),
          front_default: z.string().url(),
          front_female: z.null(),
          front_shiny: z.string().url(),
          front_shiny_female: z.null(),
        }),
        back_default: z.string().url(),
        back_female: z.null(),
        back_shiny: z.string().url(),
        back_shiny_female: z.null(),
        front_default: z.string().url(),
        front_female: z.null(),
        front_shiny: z.string().url(),
        front_shiny_female: z.null(),
      }),
    }),
    "generation-vi": z.object({
      "omegaruby-alphasapphire": z.object({
        front_default: z.string().url(),
        front_female: z.null(),
        front_shiny: z.string().url(),
        front_shiny_female: z.null(),
      }),
      "x-y": z.object({
        front_default: z.string().url(),
        front_female: z.null(),
        front_shiny: z.string().url(),
        front_shiny_female: z.null(),
      }),
    }),
    "generation-vii": z.object({
      icons: z.object({
        front_default: z.string().url(),
        front_female: z.null(),
      }),
      "ultra-sun-ultra-moon": z.object({
        front_default: z.string().url(),
        front_female: z.null(),
        front_shiny: z.string().url(),
        front_shiny_female: z.null(),
      }),
    }),
    "generation-viii": z.object({
      icons: z.object({
        front_default: z.string().url(),
        front_female: z.null(),
      }),
    }),
  }),
});

export const PokemonListSchema = z.object({
  count: z.number().nullable().optional(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z
    .array(
      z.object({
        name: z.string(),
        url: z.string().url(),
      })
    )
    .optional(),
});

// const AbilitySchema = z.object({
//   ability: z.object({
//     name: z.string(),
//     url: z.string().url(),
//   }),
//   is_hidden: z.boolean(),
//   slot: z.number(),
// });

// const CriesSchema = z.object({
//   latest: z.string().url(),
//   legacy: z.string().url(),
// });

// const GameIndexSchema = z.object({
//   game_index: z.number(),
//   version: z.object({
//     name: z.string(),
//     url: z.string().url(),
//   }),
// });

// const VersionDetailSchema = z.object({
//   rarity: z.number(),
//   version: z.object({
//     name: z.string(),
//     url: z.string().url(),
//   }),
// });

// const HeldItemSchema = z.object({
//   item: z.object({
//     name: z.string(),
//     url: z.string().url(),
//   }),
//   version_details: z.array(VersionDetailSchema),
// });

// const VersionGroupDetailSchema = z.object({
//   level_learned_at: z.number().int().nonnegative(),
//   move_learn_method: z.object({
//     name: z.string(),
//     url: z.string().url(),
//   }),
//   version_group: z.object({
//     name: z.string(),
//     url: z.string().url(),
//   }),
// });

// const MoveSchema = z.object({
//   move: z.object({
//     name: z.string(),
//     url: z.string().url(),
//   }),
//   version_group_details: z.array(VersionGroupDetailSchema),
// });

// const OtherSpritesSchema = z.object({
//   dream_world: z
//     .object({
//       front_default: z.string().url().nullable().optional(),
//       front_female: z.string().url().nullable().optional(),
//     })
//     .optional(),
//   home: z
//     .object({
//       front_default: z.string().url().nullable().optional(),
//       front_female: z.string().url().nullable().optional(),
//       front_shiny: z.string().url().nullable().optional(),
//       front_shiny_female: z.string().url().nullable().optional(),
//     })
//     .optional(),
//   "official-artwork": z
//     .object({
//       front_default: z.string().url().nullable(),
//       front_shiny: z.string().url().nullable().optional(),
//     })
//     .optional(),
//   showdown: z
//     .object({
//       front_default: z.string().url().nullable().optional(),
//       front_female: z.string().url().nullable().optional(),
//       front_shiny: z.string().url().nullable().optional(),
//       front_shiny_female: z.string().url().nullable().optional(),
//       back_default: z.string().url().nullable().optional(),
//       back_female: z.string().url().nullable().optional(),
//       back_shiny: z.string().url().nullable().optional(),
//       back_shiny_female: z.string().url().nullable().optional(),
//     })
//     .optional(),
// });

// const DefaultColorSchema = z
//   .object({
//     back_default: z.string().url().nullable(),
//     back_gray: z.string().url().nullable().optional(),
//     back_transparent: z.string().url().nullable().optional(),
//     front_default: z.string().url().nullable(),
//     front_gray: z.string().url().nullable().optional(),
//     front_transparent: z.string().url().nullable().optional(),
//   })
//   .optional();

// const ShinyColorImageSchema = z
//   .object({
//     back_default: z.string().url().nullable(),
//     back_shiny: z.string().url().nullable().optional(),
//     back_shiny_transparent: z.string().url().nullable().optional(),
//     back_transparent: z.string().url().nullable().optional(),
//     front_default: z.string().url().nullable(),
//     front_shiny: z.string().url().nullable().optional(),
//     front_shiny_transparent: z.string().url().nullable().optional(),
//     front_transparent: z.string().url().nullable().optional(),
//   })
//   .optional();

// const VersionsSpritesSchema = z.object({
//   "generation-i": z
//     .object({
//       "red-blue": DefaultColorSchema,
//       yellow: DefaultColorSchema,
//     })
//     .optional(),
//   "generation-ii": z
//     .object({
//       crystal: ShinyColorImageSchema,
//       gold: ShinyColorImageSchema,
//       silver: ShinyColorImageSchema,
//     })
//     .optional(),
//   "generation-iii": z
//     .object({
//       emerald: z
//         .object({
//           front_default: z.string().url().nullable(),
//           front_shiny: z.string().url().nullable(),
//         })
//         .optional(),
//       "firered-leafgreen": z
//         .object({
//           front_default: z.string().url().nullable(),
//           front_shiny: z.string().url().nullable(),
//           back_default: z.string().url().nullable(),
//           back_shiny: z.string().url().nullable(),
//         })
//         .optional(),
//       "ruby-sapphire": z
//         .object({
//           front_default: z.string().url().nullable(),
//           front_shiny: z.string().url().nullable(),
//           back_default: z.string().url().nullable(),
//           back_shiny: z.string().url().nullable(),
//         })
//         .optional(),
//     })
//     .optional(),
//   "generation-iv": z
//     .object({
//       "diamond-pearl": z
//         .object({
//           front_default: z.string().url().nullable(),
//           front_female: z.string().url().nullable().optional(),
//           front_shiny: z.string().url().nullable(),
//           front_shiny_female: z.string().url().nullable().optional(),
//           back_default: z.string().url().nullable(),
//           back_female: z.string().url().nullable().optional(),
//           back_shiny: z.string().url().nullable(),
//           back_shiny_female: z.string().url().nullable().optional(),
//         })
//         .optional(),
//       "heartgold-soulsilver": z
//         .object({
//           front_default: z.string().url().nullable(),
//           front_female: z.string().url().nullable().optional(),
//           front_shiny: z.string().url().nullable(),
//           front_shiny_female: z.string().url().nullable().optional(),
//           back_default: z.string().url().nullable(),
//           back_female: z.string().url().nullable().optional(),
//           back_shiny: z.string().url().nullable(),
//           back_shiny_female: z.string().url().nullable().optional(),
//         })
//         .optional(),
//       platinum: z
//         .object({
//           front_default: z.string().url().nullable(),
//           front_female: z.string().url().nullable().optional(),
//           front_shiny: z.string().url().nullable(),
//           front_shiny_female: z.string().url().nullable().optional(),
//           back_default: z.string().url().nullable(),
//           back_female: z.string().url().nullable().optional(),
//           back_shiny: z.string().url().nullable(),
//           back_shiny_female: z.string().url().nullable().optional(),
//         })
//         .optional(),
//     })
//     .optional(),
//   "generation-v": z
//     .object({
//       "black-white": z
//         .object({
//           front_default: z.string().url().nullable(),
//           front_female: z.string().url().nullable().optional(),
//           front_shiny: z.string().url().nullable(),
//           front_shiny_female: z.string().url().nullable().optional(),
//           back_default: z.string().url().nullable(),
//           back_female: z.string().url().nullable().optional(),
//           back_shiny: z.string().url().nullable(),
//           back_shiny_female: z.string().url().nullable().optional(),
//           animated: z
//             .object({
//               front_default: z.string().url().nullable(),
//               front_female: z.string().url().nullable().optional(),
//               front_shiny: z.string().url().nullable(),
//               front_shiny_female: z.string().url().nullable().optional(),
//               back_default: z.string().url().nullable(),
//               back_female: z.string().url().nullable().optional(),
//               back_shiny: z.string().url().nullable(),
//               back_shiny_female: z.string().url().nullable().optional(),
//             })
//             .optional(),
//         })
//         .optional(),
//     })
//     .optional(),
//   "generation-vi": z
//     .object({
//       "omegaruby-alphasapphire": z
//         .object({
//           front_default: z.string().url().nullable(),
//           front_female: z.string().url().nullable().optional(),
//           front_shiny: z.string().url().nullable(),
//           front_shiny_female: z.string().url().nullable().optional(),
//         })
//         .optional(),
//       "x-y": z
//         .object({
//           front_default: z.string().url().nullable(),
//           front_female: z.string().url().nullable().optional(),
//           front_shiny: z.string().url().nullable(),
//           front_shiny_female: z.string().url().nullable().optional(),
//         })
//         .optional(),
//     })
//     .optional(),
//   "generation-vii": z
//     .object({
//       icons: z
//         .object({
//           front_default: z.string().url().nullable(),
//           front_female: z.string().url().nullable().optional(),
//         })
//         .optional(),
//       "ultra-sun-ultra-moon": z
//         .object({
//           front_default: z.string().url().nullable(),
//           front_female: z.string().url().nullable().optional(),
//           front_shiny: z.string().url().nullable(),
//           front_shiny_female: z.string().url().nullable().optional(),
//         })
//         .optional(),
//     })
//     .optional(),
//   "generation-viii": z
//     .object({
//       icons: z
//         .object({
//           front_default: z.string().url().nullable(),
//           front_female: z.string().url().nullable().optional(),
//         })
//         .optional(),
//     })
//     .optional(),
// });

// const SpritesSchema = z.object({
//   back_default: z.string().url().nullable(),
//   back_female: z.string().url().nullable().optional(),
//   back_shiny: z.string().url().nullable(),
//   back_shiny_female: z.string().url().nullable().optional(),
//   front_default: z.string().url().nullable(),
//   front_female: z.string().url().nullable().optional(),
//   front_shiny: z.string().url().nullable(),
//   front_shiny_female: z.string().url().nullable().optional(),
//   other: OtherSpritesSchema.optional(),
//   versions: VersionsSpritesSchema.optional(),
// });

// // Main Pokémon schema
// const PokemonSchema = z.object({
//   abilities: z.array(AbilitySchema),
//   base_experience: z.number(),
//   cries: CriesSchema,
//   forms: z.array(
//     z.object({
//       name: z.string(),
//       url: z.string().url(),
//     })
//   ),
//   game_indices: z.array(GameIndexSchema),
//   height: z.number(),
//   held_items: z.array(HeldItemSchema),
//   id: z.number(),
//   is_default: z.boolean(),
//   location_area_encounters: z.string().url(),
//   moves: z.array(MoveSchema),
//   name: z.string(),
//   order: z.number(),
//   past_abilities: z.array(z.any()),
//   past_types: z.array(z.any()),
//   species: z.object({
//     name: z.string(),
//     url: z.string().url(),
//   }),
//   sprites: z.array(SpritesSchema),
//   stats: z
//     .array(
//       z.object({
//         base_stat: z.number().int(),
//         effort: z.number().int().nonnegative(),
//         stat: NamedAPIResourceSchema,
//       })
//     )
//     .optional(),
//   types: z
//     .array(
//       z.object({
//         slot: z.number().int().positive(),
//         type: NamedAPIResourceSchema,
//       })
//     )
//     .optional(),
//   weight: z.number().int().nonnegative().optional(),
// });
