const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  image: {
    domains: [
      "https://img.pokemondb.net/artwork/",
      "https://assets.pokemon.com/",
    ],
  },
};

module.exports = {
  nextConfig,
  images: {
    domains: ["img.pokemondb.net", "assets.pokemon.com"],
  },
};

// module.exports = withPlugins([
//   [
//     withPWA,
//     {
//       pwa: {
//         dest: "public",
//         runtimeCaching: [
//           {
//             urlPattern: /.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
//             handler: "NetworkFirst",
//             options: {
//               cacheName: "static-font-assets",
//               expiration: {
//                 maxEntries: 4,
//                 maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
//               },
//             },
//           },
//           {
//             urlPattern: /.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
//             handler: "NetworkFirst",
//             options: {
//               cacheName: "static-image-assets",
//               expiration: {
//                 maxEntries: 64,
//                 maxAgeSeconds: 24 * 60 * 60, // 24 hours
//               },
//             },
//           },
//           {
//             urlPattern: /.(?:js)$/i,
//             handler: "NetworkFirst",
//             options: {
//               cacheName: "static-js-assets",
//               expiration: {
//                 maxEntries: 16,
//                 maxAgeSeconds: 24 * 60 * 60, // 24 hours
//               },
//             },
//           },
//           {
//             urlPattern: /.(?:css|less)$/i,
//             handler: "NetworkFirst",
//             options: {
//               cacheName: "static-style-assets",
//               expiration: {
//                 maxEntries: 16,
//                 maxAgeSeconds: 24 * 60 * 60, // 24 hours
//               },
//             },
//           },
//           {
//             urlPattern: /.(?:json|xml|csv)$/i,
//             handler: "NetworkFirst",
//             options: {
//               cacheName: "static-data-assets",
//               expiration: {
//                 maxEntries: 16,
//                 maxAgeSeconds: 24 * 60 * 60, // 24 hours
//               },
//             },
//           },
//           {
//             urlPattern: /.*/i,
//             handler: "NetworkFirst",
//             options: {
//               cacheName: "others",
//               expiration: {
//                 maxEntries: 16,
//                 maxAgeSeconds: 24 * 60 * 60, // 24 hours
//               },
//             },
//           },
//         ],
//       },
//     },
//   ],
//   [nextConfig],
// ]);
