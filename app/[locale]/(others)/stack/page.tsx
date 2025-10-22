import { useTranslations } from "next-intl";
import type { Metadata } from "next";
import Image from "next/image";

const imageUrl = `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`;
const APP_NAME = "geodevcodes";
const APP_DEFAULT_TITLE =
  "Rasheed Olatunde - Stack | React & Next.js | Nest.js Expert";
const APP_TITLE_TEMPLATE = "%s | geodevcodes";
const APP_DESCRIPTION =
  "Experienced Software Developer with 4+ years of expertise in building high-performance web and mobile applications. Skilled in modern technologies and frameworks to deliver scalable, user-focused solutions. Known for strong leadership and the ability to simplify complex technical concepts for cross-functional teams.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
  formatDetection: {
    telephone: false,
  },
  keywords: [
    "Rasheed Olatunde",
    "geodevcodes",
    "Software Developer",
    "React Developer",
    "Next.js Developer",
    "Nest.js Developer",
    "Web Developer",
    "Mobile Developer",
    "React-Native Developer",
    "Full-Stack Developer",
    "JavaScript",
    "TypeScript",
    "Frontend Development",
    "Backend Development",
    "Web Applications",
    "Mobile Applications",
    "Tech Blog",
  ],
   openGraph: {
    siteName: APP_NAME,
    locale: "en_US",
    type: "website",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [imageUrl],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    site: "@geodevcodes",
    creator: "@geodevcodes",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://geodevcodes.vercel.app/stack",
  },
};

export default function Stack() {
  const t = useTranslations("StackPage");
  return (
    <main className="min-h-screen px-4 p-2 pb-32 md:p-8 md:py-16 lg:pt-20">
      <div className="w-full font-sans text-md ">
        <p className="text-2xl md:text-5xl font-bold mb-2">{t("title")}</p>
        <p className="text-muted-foreground">{t("content")}</p>
      </div>
      <section className="h-fit border border-accent-primary mt-8 p-6">
        <h3 className="mb-4 font-bold text-xl">Development</h3>
        <div className="justify-between gap-y-10 grid md:grid-cols-2 lg:grid-cols-3">
          <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md">
            <Image
              src="/tailwind.webp"
              alt="Tailwindcss image"
              width={60}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="object-cover w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
            <div>
              <p className="font-semibold">Tailwind</p>
              <p className="text-sm text-muted-foreground">Styling</p>
            </div>
          </div>

          <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md">
            <Image
              src="/shadcn.png"
              alt="Shadcn image"
              width={60}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="object-cover rounded-lg w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
            <div>
              <p className="font-semibold">Shadcn</p>
              <p className="text-sm text-muted-foreground">Component Library</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md">
            <Image
              src="/materialui.png"
              alt="Material UI image"
              width={60}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="object-cover rounded-lg w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
            <div>
              <p className="font-semibold">Material UI</p>
              <p className="text-sm text-muted-foreground">Component Library</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md">
            <Image
              src="/nextjs.webp"
              alt="nextjs image"
              width={60}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="object-cover w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
            <div>
              <p className="font-semibold">Next.js</p>
              <p className="text-sm text-muted-foreground">React Framework</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md">
            <Image
              src="/vue.png"
              alt="vuejs image"
              width={60}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="object-cover w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
            <div>
              <p className="font-semibold">Vue.js</p>
              <p className="text-sm text-muted-foreground">
                JavaScript Library
              </p>
            </div>
          </div>

          <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md">
            <Image
              src="/react-native.png"
              alt="React Native image"
              width={70}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="object-cover rounded-lg w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
            <div>
              <p className="font-semibold">React-Native</p>
              <p className="text-sm text-muted-foreground">Mobile App</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md">
            <Image
              src="/vercel.webp"
              alt="vercel image"
              width={60}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="object-cover w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
            <div>
              <p className="font-semibold">Vercel</p>
              <p className="text-sm text-muted-foreground">Hosting Provider</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md">
            <Image
              src="/firebase.jpeg"
              alt="Firebase image"
              width={60}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="object-cover rounded-lg w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
            <div>
              <p className="font-semibold">Firebase</p>
              <p className="text-sm text-muted-foreground">Hosting Provider</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md">
            <Image
              src="/aws.png"
              alt="AWS image"
              width={60}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="object-cover rounded-lg w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
            <div>
              <p className="font-semibold">AWS</p>
              <p className="text-sm text-muted-foreground">Hosting Provider</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md">
            <Image
              src="/figma.webp"
              alt="Figma image"
              width={60}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="object-cover rounded-lg w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
            <div>
              <p className="font-semibold">Figma</p>
              <p className="text-sm text-muted-foreground">Design Tool</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md">
            <Image
              src="/paystack.png"
              alt="PayStack image"
              width={60}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="object-cover rounded-lg w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
            <div>
              <p className="font-semibold">Paystack</p>
              <p className="text-sm text-muted-foreground">Payment Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====PRODUCTIVITY TOOLS SECTION */}
      <section className="h-fit border border-accent-primary mt-8 p-6">
        <h3 className="mb-4 font-bold text-xl">Productivity</h3>
        <div className="justify-between gap-y-10 grid md:grid-cols-2 lg:grid-cols-3">
          <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md">
            <Image
              src="/applemusic.webp"
              alt="Apple Music image"
              width={60}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="object-cover w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
            <div>
              <p className="font-semibold">Apple Music</p>
              <p className="text-sm text-muted-foreground">Music</p>
            </div>
          </div>

          <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md">
            <Image
              src="/grammerly.webp"
              alt="Grammerly image"
              width={60}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="object-cover w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
            <div>
              <p className="font-semibold">Grammerly</p>
              <p className="text-sm text-muted-foreground">Grammer</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md">
            <Image
              src="/calender.webp"
              alt="Google Calender image"
              width={60}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="object-cover w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
            <div>
              <p className="font-semibold">Google Calender</p>
              <p className="text-sm text-muted-foreground">Calender</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md">
            <Image
              src="/chrome.webp"
              alt="Google chrome image"
              width={60}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="object-cover w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
            <div>
              <p className="font-semibold">Chrome</p>
              <p className="text-sm text-muted-foreground">Browser</p>
            </div>
          </div>
          <div className="h-fit flex gap-x-2 items-center hover:bg-accent p-3 rounded-md">
            <Image
              src="/chatgpt.webp"
              alt="Chatgpt image"
              width={60}
              height={60}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              className="object-cover w-[50px] h-[50px] md:w-[60px] md:h-[60px]"
            />
            <div>
              <p className="font-semibold">ChatGPT</p>
              <p className="text-sm text-muted-foreground">Ai</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
