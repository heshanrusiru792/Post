// ─────────────────────────────────────────────────────────────
// Chitrapatiya – Cast Database
//
// HOW TO ADD CAST:
//   1. Add a new Cast object below with a unique id.
//   2. Reference the id in castIds[] of a movie or TV series.
// ─────────────────────────────────────────────────────────────

import type { Cast } from "@/types";

export const CASTS_DB: Cast[] = [

  // ── The Coffee Table (2022) ───────────────────────────────

  {
    id: "cast_ct_1",
    name: "David Pareja",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThDiKh-_b0e-AUWNvmojzS7b79CKkH52SbAA&s",
    character: "Jesús",
    country: "Spain",
    biography: "Spanish actor known for his dramatic roles in Spanish cinema.",
  },
  {
    id: "cast_ct_2",
    name: "Estefanía de los Santos",
    photo: "https://bigarren.es/wp-content/uploads/2021/05/@vicovang-_MG_2595_008-scaled.jpg",
    character: "María",
    country: "Spain",
    biography: "Spanish actress recognised for her compelling performances.",
  },
  {
    id: "cast_ct_3",
    name: "Josep Maria Riera",
    photo: "https://image.tmdb.org/t/p/original/c6sl7M3ZZPkrc5nNmKvku6GDGII.jpg",
    character: "Carlos",
    country: "Spain",
    biography: "Veteran Spanish actor with a career spanning theatre and film.",
  },
  {
    id: "cast_ct_4",
    name: "Claudia Riera",
    photo: "https://resizing.flixster.com/7VHo4iHiNkUGhI7GfnvDrvPml1w=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/1540103_v9_aa.jpg",
    character: "Ruth",
    country: "Spain",
    biography: "Spanish actress known for her work in independent Spanish productions.",
  },
  {
    id: "cast_ct_5",
    name: "Gala Flores",
    photo: "https://static.filmin.es/images/es/actor/58486/1/card_0_3.webp",
    character: "Ruth",
    country: "Spain",
    biography: "Spanish actress, known for her role as Ruth in The Coffee Table.",
  },
  {
    id: "cast_ct_6",
    name: "Itziar Castro",
    photo: "https://m.media-amazon.com/images/M/MV5BYzEyMWQ3OTMtZjViMy00OWQzLTkxMmQtMzk5MTA2ZTM1ZTNiXkEyXkFqcGc@._V1_.jpg",
    character: "Amiga del Súper",
    country: "Spain",
    biography: "Spanish actress, known for her roles in Vis a Vis, La casa de papel, and The Coffee Table.",
  },
  {
    id: "cast_ct_7",
    name: "Emilio Gavira",
    photo: "https://media.themoviedb.org/t/p/w235_and_h235_face/iYCqFiBqQJwtjEIv5U17DlqpTZs.jpg",
    character: "Voz del Súper",
    country: "Spain",
    biography: "Spanish actor, known for his voice role as the supermarket announcer in The Coffee Table.",
  },
  {
    id: "cast_ct_8",
    name: "Eduardo Antuna",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaPCLL__1A350aBVSkgd0ZkOrWPltJcvdFWB5sXLD57lc8l8M-pcF3-sI&s=10",
    character: "Vendedor",
    country: "Spain",
    biography: "Spanish actor, known for his role as the furniture salesman in The Coffee Table.",
  },
  {
    id: "cast_ct_9",
    name: "Cristina Dilla",
    photo: "https://image.tmdb.org/t/p/w500/fxQ2ARZSZdCXt09GzwRmAQIYjbQ.jpg",
    character: "Vecina Madre",
    country: "Spain",
    biography: "Spanish actress, known for her role in The Coffee Table.",
  },
  {
    id: "cast_ct_10",
    name: "Clàudia Font",
    photo: "https://pbs.twimg.com/profile_images/1036930027303198726/rV_rZShZ_400x400.jpg",
    character: "Policía 2",
    country: "Spain",
    biography: "Spanish actress, known for her role as a police officer in The Coffee Table.",
  },
  {
    id: "cast_ct_11",
    name: "Pere Vall",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9dfdX4KYXZbaPMmhTDCnzVCQYcwYCuiVeHY4mfCalhNjr7LTYDtNF9bQ&s=10",
    character: "Cliente del Súper",
    country: "Spain",
    biography: "Spanish film critic and actor, known for his cameo as a supermarket customer in The Coffee Table.",
  },

  // ── Shining Vale ──────────────────────────────────────────

  {
    id: "cast_sv_1",
    name: "Gus Birney",
    photo: "https://m.media-amazon.com/images/M/MV5BNDNiNzgxYTMtYzAxYy00NzUyLTlkZTYtOGZjNjFjMWMyMzFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    character: "Gaynor Phelps",
    country: "USA",
    biography: "American actress, known for her roles in Dickinson, Manhunt, and Shining Vale.",
  },
  {
    id: "cast_sv_2",
    name: "Dylan Gage",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4NDCgCd27EoEJc2w5zwgTCRKKI9l7kJLf6H0a-MZi_fMdfBxKGprIOc&s=10",
    character: "Jake Phelps",
    country: "USA",
    biography: "American actor, known for his roles in Shining Vale, The Fosters, and All Night.",
  },
  {
    id: "cast_sv_3",
    name: "Derek Luh",
    photo: "https://m.media-amazon.com/images/M/MV5BODZkMTM1NGQtZDE0NS00NDQxLWI3NmMtZjIwMzU1ZmViMmFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    character: "Ryan",
    country: "USA",
    biography: "American actor and musician, known for his roles in Shining Vale, The Fosters, and Good Trouble.",
  },
  {
    id: "cast_sv_4",
    name: "Judith Light",
    photo: "https://www.televisionacademy.com/files/assets_r/containers/assets/bios/judith-light-2023-1-450x600.jpg/a09df7a7ca20f317f164906d3fff5e42/judith-light-2023-1-450x600.jpg",
    character: "Joan",
    country: "USA",
    biography: "American actress, known for her roles in Who's the Boss?, Transparent, and The Assassination of Gianni Versace.",
  },
  {
    id: "cast_sv_5",
    name: "Merrin Dungey",
    photo: "https://m.media-amazon.com/images/M/MV5BMzcxNGJiMzktY2Q3ZS00NWFkLWIxMDAtNmQ2N2RkYzc4MTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    character: "Kam",
    country: "USA",
    biography: "American actress, known for her roles in Alias, Malcolm in the Middle, and Brooklyn Nine-Nine.",
  },
  {
    id: "cast_sv_6",
    name: "Sherilyn Fenn",
    photo: "https://image.tmdb.org/t/p/w500/dccP3pHxQ66Dg7swNlYRwxIJwyE.jpg",
    character: "Maura",
    country: "USA",
    biography: "American actress, known for her roles in Twin Peaks, Box of Moonlight, and Fatal Instinct.",
  },
  {
    id: "cast_sv_7",
    name: "Alysia Reiner",
    photo: "https://www.filmindependent.org/wp-content/uploads/2023/06/Alysia-Reiner.jpg",
    character: "Kath",
    country: "USA",
    biography: "American actress and producer, known for her roles in Orange Is the New Black, Better Things, and Shining Vale.",
  },
  {
    id: "cast_sv_8",
    name: "Susan Park",
    photo: "https://m.media-amazon.com/images/M/MV5BZjQwYzI1MTgtNDYwMS00MjllLWEzNDgtZWQwMTMwZTRmYTU2XkEyXkFqcGc@._V1_.jpg",
    character: "Kira",
    country: "USA",
    biography: "American actress, known for her roles in Ghosts, Shining Vale, and Fresh Off the Boat.",
  },
  {
    id: "cast_sv_9",
    name: "Parvesh Cheena",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHMlNCvd7rRQ3lW9mlsdYA1oI4CpCbypcp2RkgXweTIStOCrr2NO30eog&s=10",
    character: "Gurveer",
    country: "USA",
    biography: "American actor, known for his roles in Outsourced, Crazy Ex-Girlfriend, and Shining Vale.",
  },
  {
    id: "cast_sv_10",
    name: "Alberto Frezza",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPeLk0rFT6dGDING7xhnh_hWO63PRH5EHOPKxtV-Bbln-RiCJ_PPE5raa&s=10",
    character: "Rob",
    country: "Italy",
    biography: "Italian actor, known for his roles in Station 19, Shining Vale, and The Vampire Diaries.",
  },
  {
    id: "cast_sv_11",
    name: "James M. Connor",
    photo: "https://m.media-amazon.com/images/M/MV5BMTcwNDQ0Nzg4OV5BMl5BanBnXkFtZTcwNTI2NDIzMQ@@._V1_FMjpg_UX1000_.jpg",
    character: "Bill",
    country: "USA",
    biography: "American actor, known for his roles in Desperate Housewives, Shining Vale, and 24.",
  },
  {
    id: "cast_sv_12",
    name: "Harriet Sansom Harris",
    photo: "https://m.media-amazon.com/images/M/MV5BZjkxNzQ5NDUtYmNhMS00ZWVjLWFiZTgtZjAyN2M3MTJlYjA2XkEyXkFqcGc@._V1_.jpg",
    character: "Evelyn",
    country: "USA",
    biography: "American actress, known for her roles in Frasier, Shining Vale, and The X-Files.",
  },

  // ── Add more cast members above this line ─────────────────
];
