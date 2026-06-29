// ─────────────────────────────────────────────────────────────
// Chitrapatiya – TV Series Database
//
// HOW TO ADD A TV SERIES:
//   1. Add cast entries to data/cast.ts if the actors are new.
//   2. Add a new TVItem object to TV_DB below.
//   3. Fill in seasons[] → episodes[] with embedUrl + downloadLinks.
//   4. Assign one or more CategoryKey values in `categories`.
//   5. The site picks it up automatically — no other files to edit.
// ─────────────────────────────────────────────────────────────

import type { TVItem } from "@/types";

export const TV_DB: TVItem[] = [

  // ── Add new TV series below this line ────────────────────────

  {
    id: "tv_shining_vale",
    type: "tv",
    title: "Shining Vale",
    description:
      "A dysfunctional family moves into a house where, 50 years earlier, a woman named Rosemary committed a series of grisly murders. Pat, a once-successful author now battling addiction and a recent affair, begins to suspect she may be possessed by Rosemary's spirit - or is she simply losing her mind?",
    sinhalDescription: `භීතිය, හාස්යය සහ අද්භූත බලවේග මුසු වූ අපූර්ව කතාමාලාවක්!

පැට්රීෂියා "පැට්" පෙල්ප්ස් කියන්නේ ජීවිතයේ එක එක ප්‍රශ්න නිසා අතරමං වෙලා ඉන්න දක්ෂ ලේඛිකාවක්. තමන්ගේ විවාහ ජීවිතය බේරගන්නත්, ප්‍රශ්නවලින් නිදහස් වෙන්නත් හිතාගෙන ඇය ඇගේ පවුලත් එක්ක නගරයෙන් ඈත තියෙන, අවුරුදු ගණනාවක් පාලුවට ගිය පැරණි මන්දිරයක පදිංචියට එනවා.

හැබැයි ඒ අලුත් ගෙදරට ආවට පස්සේ පැට්ට විතරක් එක එක අද්භූත දේවල් පෙනෙන්න පටන් ගන්නවා. ඇයට දැනෙන්නේ එක්කෝ තමන්ගේ මොළේ අවුල් වෙලා, නැත්නම් ඒ ගෙදර ඉන්න හොල්මනක් තමන්ව පාලනය කරන්න හදනවා කියලා. තමන්ට පිස්සු හැදෙන්න කලින්, මේ අද්භූත බලවේගයෙන් තමන්ගේ පවුල බේරගන්න පැට් දරන උත්සාහය, බය හිතෙන ගමන්ම හිනායන විදිහට මේ කතාවෙන් බලාගන්න පුළුවන්.`,
    posterUrl:
      "https://images-ext-1.discordapp.net/external/oRAioR9lIUx-C-JqFzbw7kpZXN8lQqbidZYEafLCCkQ/https/i.ibb.co/xPkv376/ec61eec5-dd7c-4d92-929f-ef4300fdf3f5.png?format=webp&quality=lossless&width=587&height=881",
    backdropUrl:
      "https://images-ext-1.discordapp.net/external/Dz3BUvKwVht20R76vfo0dFo09XQhcC8hXdsaKJanbCk/https/i.ibb.co/gLJ2jBSM/main1.jpg?format=webp",
    imdbRating: 7.2,
    genres: ["Horror", "Comedy", "Drama"],
    categories: ["latest-tv", "trending"],
    releaseYear: 2022,
    language: "English",
    country: "USA",
    status: "Ongoing",
    totalSeasons: 2,
    castIds: [
      "cast_sv_1", "cast_sv_2", "cast_sv_3", "cast_sv_4",
      "cast_sv_5", "cast_sv_6", "cast_sv_7", "cast_sv_8",
      "cast_sv_9", "cast_sv_10", "cast_sv_11", "cast_sv_12",
    ],
    trailerUrl: "https://www.youtube.com/embed/7BQ_HKFsgxs",
    seasons: [
      {
        seasonNumber: 1,
        title: "Season 1",
        episodes: [
          {
            episodeNumber: 1,
            title: "Pilot",
            airDate: "2022-03-06",
            runtime: "28.49 min",
            thumbnailUrl:
              "https://images-ext-1.discordapp.net/external/7X2vA7HHK-Lx5MG7wOeo_Fvn7swV8mfHvNq8SVTyfWw/https/i.ibb.co/KzFbRtGv/ep1.png?format=webp&quality=lossless&width=1345&height=757",
            video: {
              embedUrl: "https://drive.google.com/file/d/1RVzj8LuESnhwqtbnMDQmA5ZSQXuv4v9Q/preview",
              downloadLinks: [{ quality: "720P", size: "450 MB", language: "English", subtitle: "English", downloadUrl: "/api/download?id=1RVzj8LuESnhwqtbnMDQmA5ZSQXuv4v9Q&filename=Shining_Vale_S01E01_720p.mp4" }],
            },
          },
          {
            episodeNumber: 2,
            title: "We Have Some News",
            airDate: "2022-03-13",
            runtime: "28:46min",
            thumbnailUrl:
              "https://images-ext-1.discordapp.net/external/EowteQO7KkknqL1GtUwPc7FFj4I9_oBUYZai8K65VNM/https/i.ibb.co/mm0gqDS/ep2.png?format=webp&quality=lossless&width=1345&height=757",
            video: {
              embedUrl: "https://drive.google.com/file/d/10ZJnjE-5ipP3ZR6F4HlziJI74KwG5VB4/preview",
              downloadLinks: [{ quality: "720P", size: "460 MB", language: "English", subtitle: "English", downloadUrl: "/api/download?id=10ZJnjE-5ipP3ZR6F4HlziJI74KwG5VB4&filename=Shining_Vale_S01E02_720p.mp4" }],
            },
          },
          {
            episodeNumber: 3,
            title: "Rosemary",
            airDate: "2022-03-20",
            runtime: "30 min",
            thumbnailUrl:
              "https://images-ext-1.discordapp.net/external/jz51aRQIm1HYbnIsIFSKv5MyH82pYHSzKzORDas2wWw/https/i.ibb.co/KcYW8Fp9/ep3.png?format=webp&quality=lossless&width=1345&height=757",
            video: {
              embedUrl: "https://drive.google.com/file/d/1Opx-5rtNJ6PwfEJzSlSge7ErNw4bKHOJ/preview",
              downloadLinks: [{ quality: "720P", size: "455 MB", language: "English", subtitle: "English", downloadUrl: "/api/download?id=1Opx-5rtNJ6PwfEJzSlSge7ErNw4bKHOJ&filename=Shining_Vale_S01E03_720p.mp4" }],
            },
          },
          {
            episodeNumber: 4,
            title: "The Dinner Party",
            airDate: "2022-03-27",
            runtime: "30 min",
            thumbnailUrl:
              "https://images-ext-1.discordapp.net/external/2nCmxkxHq_WeD8Axe8SQymQqYHKpUrVDrLYdX40wJPE/https/i.ibb.co/BKLyrc1g/ep4.png?format=webp&quality=lossless&width=1345&height=757",
            video: {
              embedUrl: "https://drive.google.com/file/d/1Ig_jXIU3OY2FGURzXfbZbLyKy105zCY_/preview",
              downloadLinks: [{ quality: "720P", size: "448 MB", language: "English", subtitle: "English", downloadUrl: "/api/download?id=1Ig_jXIU3OY2FGURzXfbZbLyKy105zCY_&filename=Shining_Vale_S01E04_720p.mp4" }],
            },
          },
          {
            episodeNumber: 5,
            title: "The Crossing",
            airDate: "2022-04-03",
            runtime: "30 min",
            thumbnailUrl:
              "https://images-ext-1.discordapp.net/external/l09YgJf-dyDXZ0T3iFMoU64Uv2m1Dvt5Klb8OuBnHKg/https/i.ibb.co/PzhyqHzt/ep5.png?format=webp&quality=lossless&width=1345&height=757",
            video: {
              embedUrl: "https://drive.google.com/file/d/1tI_xUfjVk7Z3KDv1Or09ukXatUft9oYX/preview",
              downloadLinks: [{ quality: "720P", size: "452 MB", language: "English", subtitle: "English", downloadUrl: "/api/download?id=1tI_xUfjVk7Z3KDv1Or09ukXatUft9oYX&filename=Shining_Vale_S01E05_720p.mp4" }],
            },
          },
          {
            episodeNumber: 6,
            title: "Bless This House",
            airDate: "2022-04-10",
            runtime: "30 min",
            thumbnailUrl:
              "https://images-ext-1.discordapp.net/external/3CriDWUNKixc_ACMBASBPMlRvrhQwqQos_9PvdFStt4/https/i.ibb.co/KxqJhvRj/ep6.png?format=webp&quality=lossless&width=1345&height=757",
            video: {
              embedUrl: "https://drive.google.com/file/d/1SJJ9JEPRZBYQsO-CCJdaFdY1bcZ0DdUY/preview",
              downloadLinks: [{ quality: "720P", size: "458 MB", language: "English", subtitle: "English", downloadUrl: "/api/download?id=1SJJ9JEPRZBYQsO-CCJdaFdY1bcZ0DdUY&filename=Shining_Vale_S01E06_720p.mp4" }],
            },
          },
          {
            episodeNumber: 7,
            title: "The Writing Group",
            airDate: "2022-04-17",
            runtime: "30 min",
            thumbnailUrl:
              "https://images-ext-1.discordapp.net/external/1luLdjCuySxvn0IzrUa0K2KnKY7NHjY9FBjB3Q94_HE/https/i.ibb.co/sd3PCyVr/ep7.png?format=webp&quality=lossless&width=1381&height=777",
            video: {
              embedUrl: "https://drive.google.com/file/d/1Pba-0G69wxs0m531eAeV4eooUCJzfBwZ/preview",
              downloadLinks: [{ quality: "720P", size: "450 MB", language: "English", subtitle: "English", downloadUrl: "/api/download?id=1Pba-0G69wxs0m531eAeV4eooUCJzfBwZ&filename=Shining_Vale_S01E07_720p.mp4" }],
            },
          },
          {
            episodeNumber: 8,
            title: "Season Finale",
            airDate: "2022-04-24",
            runtime: "35 min",
            thumbnailUrl:
              "https://images-ext-1.discordapp.net/external/sTZBSoS8RFPsrFXqkYjSKHEHYVNJRUxzb9uN9TM1rZ8/https/i.ibb.co/d4YycDnJ/ep8.png?format=webp&quality=lossless&width=1345&height=757",
            video: {
              embedUrl: "https://drive.google.com/file/d/1BgyYpn90p1G15iNrvds4GIPxlxQ6leJs/preview",
              downloadLinks: [{ quality: "720P", size: "520 MB", language: "English", subtitle: "English", downloadUrl: "/api/download?id=1BgyYpn90p1G15iNrvds4GIPxlxQ6leJs&filename=Shining_Vale_S01E08_720p.mp4" }],
            },
          },
        ],
      },
      {
        seasonNumber: 2,
        title: "Season 2",
        episodes: [
          {
            episodeNumber: 1,
            title: "Moving In",
            airDate: "2023-10-01",
            runtime: "30 min",
            thumbnailUrl: "https://images-ext-1.discordapp.net/external/ddRJXBQfYH24z5crM1nAU-m33wYQ0CMBitCG0FOeYhQ/https/i.ibb.co/JR93sxBb/ep-1.png?format=webp&quality=lossless&width=400&height=225",
            video: {
              embedUrl: "https://drive.google.com/file/d/15_tK5YprVzF6GqSqp0naHnEysxZJB6pL/preview",
              downloadLinks: [{ quality: "720P", size: "450 MB", language: "English", subtitle: "English", downloadUrl: "/api/download?id=15_tK5YprVzF6GqSqp0naHnEysxZJB6pL&filename=Shining_Vale_S02E01_720p.mp4" }],
            },
          },
          {
            episodeNumber: 2,
            title: "The Rat",
            airDate: "2023-10-08",
            runtime: "30 min",
            thumbnailUrl: "https://images-ext-1.discordapp.net/external/ZvU8mKc93jojMXp081ofQh9H9GWo9Z2tyhK3hJmVSoI/https/i.ibb.co/60K3BLKV/ep-2.png?format=webp&quality=lossless&width=1345&height=757",
            video: {
              embedUrl: "https://drive.google.com/file/d/1v3oNX5CPRW4JSnIxk83M-kJ8xbEKc32l/preview",
              downloadLinks: [{ quality: "720P", size: "450 MB", language: "English", subtitle: "English", downloadUrl: "/api/download?id=1v3oNX5CPRW4JSnIxk83M-kJ8xbEKc32l&filename=Shining_Vale_S02E02_720p.mp4" }],
            },
          },
          {
            episodeNumber: 3,
            title: "The Mirror",
            airDate: "2023-10-15",
            runtime: "30 min",
            thumbnailUrl: "https://images-ext-1.discordapp.net/external/16_ES3kUqmr9DmuVqHWiXZMLqBdC_DxmiNMxGO7RAUY/https/i.ibb.co/9kPV0SHV/ep-3.png?format=webp&quality=lossless&width=1345&height=757",
            video: {
              embedUrl: "https://drive.google.com/file/d/1YxiLSpgoVe9GdfzdY5PHlv9as_7_OdJJ/preview",
              downloadLinks: [{ quality: "720P", size: "450 MB", language: "English", subtitle: "English", downloadUrl: "/api/download?id=1YxiLSpgoVe9GdfzdY5PHlv9as_7_OdJJ&filename=Shining_Vale_S02E03_720p.mp4" }],
            },
          },
          {
            episodeNumber: 4,
            title: "Going Out",
            airDate: "2023-10-22",
            runtime: "30 min",
            thumbnailUrl: "https://images-ext-1.discordapp.net/external/XYV1nmgOjiYmTcboeAD-D1nFQSgU4Ver7Ra2bmQQh70/https/i.ibb.co/zhyg9cqN/ep-4.png?format=webp&quality=lossless&width=1345&height=757",
            video: {
              embedUrl: "https://drive.google.com/file/d/1E8_f2MbEinmVFPPWYkhPWSd_EM1VdFM0/preview",
              downloadLinks: [{ quality: "720P", size: "450 MB", language: "English", subtitle: "English", downloadUrl: "/api/download?id=1E8_f2MbEinmVFPPWYkhPWSd_EM1VdFM0&filename=Shining_Vale_S02E04_720p.mp4" }],
            },
          },
          {
            episodeNumber: 5,
            title: "The Kitchen",
            airDate: "2023-10-29",
            runtime: "30 min",
            thumbnailUrl: "https://images-ext-1.discordapp.net/external/Zy8wyLJ4vFbhoiHmJf9XlwnnJQKoLXOC9zki22Ci-0U/https/i.ibb.co/PzTgP7YJ/ep-5.png?format=webp&quality=lossless&width=1345&height=757",
            video: {
              embedUrl: "https://drive.google.com/file/d/1JGLzORONBp2Qj3oM5hPBqsVzyu6dtBpa/preview",
              downloadLinks: [{ quality: "720P", size: "450 MB", language: "English", subtitle: "English", downloadUrl: "/api/download?id=1JGLzORONBp2Qj3oM5hPBqsVzyu6dtBpa&filename=Shining_Vale_S02E05_720p.mp4" }],
            },
          },
          {
            episodeNumber: 6,
            title: "The Upstairs",
            airDate: "2023-11-05",
            runtime: "30 min",
            thumbnailUrl: "https://images-ext-1.discordapp.net/external/XiMvBUn66Gsipl-LHlPvWAw8s5i4Vj0x7V_Oa3b9Fhg/https/i.ibb.co/21YtBY0C/ep-6.png?format=webp&quality=lossless&width=1345&height=757",
            video: {
              embedUrl: "https://drive.google.com/file/d/1IEQxDBcWu7Bf3i9k5CaGIF8mw5_gF91-/preview",
              downloadLinks: [{ quality: "720P", size: "450 MB", language: "English", subtitle: "English", downloadUrl: "/api/download?id=1IEQxDBcWu7Bf3i9k5CaGIF8mw5_gF91-&filename=Shining_Vale_S02E06_720p.mp4" }],
            },
          },
          {
            episodeNumber: 7,
            title: "The Basement",
            airDate: "2023-11-12",
            runtime: "30 min",
            thumbnailUrl: "https://images-ext-1.discordapp.net/external/9TjtmbPGlaemXwkmSDuNumxCBY2MxFYukr9J9HGQXHU/https/i.ibb.co/MyWjNRMz/ep-7.png?format=webp&quality=lossless&width=1345&height=757",
            video: {
              embedUrl: "https://drive.google.com/file/d/14P9RA6Pxfv07wS4d9eqZ3X5nledINTQw/preview",
              downloadLinks: [{ quality: "720P", size: "450 MB", language: "English", subtitle: "English", downloadUrl: "/api/download?id=14P9RA6Pxfv07wS4d9eqZ3X5nledINTQw&filename=Shining_Vale_S02E07_720p.mp4" }],
            },
          },
          {
            episodeNumber: 8,
            title: "The Finale",
            airDate: "2023-11-19",
            runtime: "35 min",
            thumbnailUrl: "https://images-ext-1.discordapp.net/external/iuhVfH4idNJ71k4_wpgao_Yp1Mh_XvvzmIx2DgsdRec/https/i.ibb.co/j9n0DcNp/ep-8.png?format=webp&quality=lossless&width=1345&height=757",
            video: {
              embedUrl: "https://drive.google.com/file/d/1dLCO5FvKcbMurWtTdohZZx6Cd_7-Gnkn/preview",
              downloadLinks: [{ quality: "720P", size: "520 MB", language: "English", subtitle: "English", downloadUrl: "/api/download?id=1dLCO5FvKcbMurWtTdohZZx6Cd_7-Gnkn&filename=Shining_Vale_S02E08_720p.mp4" }],
            },
          },
        ],
      },
    ],
  },

  // ── Add more TV series above this line ───────────────────────
];
