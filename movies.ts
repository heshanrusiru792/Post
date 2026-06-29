// ─────────────────────────────────────────────────────────────
// Chitrapatiya – Movies Database
//
// HOW TO ADD A MOVIE:
//   1. Add cast entries to data/cast.ts if the actors are new.
//   2. Add a new MovieItem object to MOVIES_DB below.
//   3. Assign one or more CategoryKey values in `categories`.
//   4. The site picks it up automatically — no other files to edit.
// ─────────────────────────────────────────────────────────────

import type { MovieItem } from "@/types";

export const MOVIES_DB: MovieItem[] = [

  // ── Add new movies below this line ───────────────────────────

  {
    id: "movie_coffee_table_2022",
    type: "movie",
    title: "The Coffee Table (2022)",
    description:
      "A recently-parented couple — Jesús and María — bring home a glass-topped coffee table against the wife's wishes. What follows is a harrowing chain of psychological dread and dark, unrelenting tension.",
    sinhalDescription: `The Coffee Table (ස්පාඤ්ඤ භාෂාවෙන්: El bache) චිත්‍රපටයෙන් කියවෙන්නේ මෑතකදී දරුවෙක් ලැබුණු ජේසුස් සහ මරියා කියන අඹුසැමි යුවළ වටා ගෙතුණු කතාවක්. ඔවුන් දෙන්නා අතර නිතරම පොඩි පොඩි මතභේද ඇතිවෙනවා. දවසක් ජේසුස් තමන්ගේ අභිමතය පරිදි, බිරිඳගේ අකමැත්ත මැද වීදුරු මුදුනක් සහිත සාලයේ තියන කෝපි මේසයක් (Coffee Table) මිලදී ගන්නවා. ඔහු හිතන්නේ ඒක තමන්ගේ පිරිමි අභිමානය රැකගන්න ගත්ත තීරණයක් කියලා.

නමුත් මේ සාමාන්ය කෝපි මේසය ඔවුන්ගේ නිවසට රැගෙන ආවාට පසු, කිසිවෙකුත් බලාපොරොත්තු නොවන අතිශය කණගාටුදායක, දරුණු අනතුරක් සිදුවෙනවා. එතැන් පටන් චිත්‍රපටය පුරා දිවෙන්නේ බිය, සැකය, සහ දරාගත නොහැකි මානසික පීඩනයෙන් පිරුණු පැය කිහිපයක්.

ඇයි මේක බලන්නම ඕනේ?
ලේ වැගිරීම් හෝ බිහිසුණු දර්ශන බහුලව නැතත්, ප්‍රේක්ෂකයාට දැනෙන මානසික කුතුහලය සහ 'ඊළඟට මොනවා වෙයිද?' කියන ගැස්ම උපරිමයෙන්ම ලබාදෙන්න අධ්‍යක්ෂ Caye Casas සමත් වෙලා තියනවා. මේක සිනමා විචාරකයින්ගේ ඉහළ ඇගයීමට ලක්වුණු, ලෙහෙසියෙන් අමතක නොවන අමුතුම අත්දැකීමක් දෙන චිත්‍රපටයක්!`,
    posterUrl:
      "https://images-ext-1.discordapp.net/external/UcQP3Ly7DxViRnxPHg3XX_o4TATL-gIdt0ZAzSgp3xo/https/i.ibb.co/tMJ2Qmf3/The-Coffee-Table2.jpg?format=webp&width=574&height=861",
    backdropUrl:
      "https://images-ext-1.discordapp.net/external/1YqkyysNHvGB9MVjcAOKFSfYQlDwtPCu94uDdjO4ekg/https/i.ibb.co/s0MHfwg/The-Coffee-Table.jpg?format=webp&width=1345&height=757",
    imdbRating: 6.7,
    genres: ["Comedy", "Thriller"],
    categories: ["latest-movies", "popular-movies", "trending"],
    releaseYear: 2022,
    language: "Spanish",
    country: "Spain",
    status: "Released",
    runtime: "90 min",
    castIds: [
      "cast_ct_1", "cast_ct_2", "cast_ct_3", "cast_ct_4",
      "cast_ct_5", "cast_ct_6", "cast_ct_7", "cast_ct_8",
      "cast_ct_9", "cast_ct_10", "cast_ct_11",
    ],
    video: {
      embedUrl:
        "https://drive.google.com/file/d/1xs_vE-RJLHvY2TOvlbUGVcDcp5YYl2eU/preview",
      downloadLinks: [
        {
          quality: "1080P",
          size: "2.5 GB",
          language: "Spanish",
          subtitle: "Sinhala",
          downloadUrl: "#",
        },
        {
          quality: "480P",
          size: "528 MB",
          language: "Spanish",
          subtitle: "Sinhala",
          downloadUrl:
            "https://github.com/heshanrusiru792/movies/releases/download/moviehere/The.Coffee.Table.2022.480p.mp4",
        },
      ],
    },
  },

  // ── Add more movies above this line ──────────────────────────
];
