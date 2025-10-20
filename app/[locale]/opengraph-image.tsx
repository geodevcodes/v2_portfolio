import generateOgImage from "@/app/components/opengraph-image/og-generator";

// Image metadata
export const alt = "About Rasheed Olatunde";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return generateOgImage("home", {
    title: "Rasheed Olatunde - Software Developer | React & Next.js | Nest.js Expert",
    description: "Experienced Software Developer with 4+ years of expertise in building high-performance web and mobile applications. Skilled in modern technologies and frameworks to deliver scalable, user-focused solutions. Known for strong leadership and the ability to simplify complex technical concepts for cross-functional teams.",
  });
}
