// IMPLEMENTATION OF MODULE FEDERATION FOR MICRO-FRONTEND

// import next from 'next';
// import NextFederationPlugin from '@module-federation/nextjs-mf';

// const { default: NextConfig } = next;

// const nextConfig = {
//   reactStrictMode: true,
//   webpack(config, options) {
//     const { isServer } = options;
//     config.plugins.push(
//       new NextFederationPlugin({
//         name: "main",
//         remotes: {
//           lms: `lms@http://localhost:3001/_next/static/${
//             isServer ? "ssr" : "chunks"
//           }/remoteEntry.js`,
//         },
//         filename: "static/chunks/remoteEntry.js",
//         exposes: {
//           "./nav": "./components/Nav.jsx",
//           "./footer": "./components/Footer.jsx",
//         },
//         shared: {
//           // whatever else
//         },
//       })
//     );

//     return config;
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
