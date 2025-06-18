"use client";
import DOMPurify from "isomorphic-dompurify";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-okaidia.css";

const code = `
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

  export default function Welcome() {
      const t = useTranslations("HelloPage");
      return (
        <div className="text-primary">
          <span className="md:text-sm">
            {t("greetings")}
          </span>
          <h1 className="text-5xl text-accent">
            {t("name")}
          </h1>
          <h2 className="text-accent-primary">
            &gt; {t("jobTitle")}
          </h2>
        </div>
  )}
   `;

const highlight = (code: string, language = "markup") => {
  return Prism.highlight(code, Prism.languages[language], language);
};

export default function Home() {
  const t = useTranslations("HelloPage");
  const language = "jsx";
  const highlightedCode = highlight(code, language);

  return (
    <main
      style={{ backgroundImage: "url('/bg-blur.svg')" }}
      className="bg-right bg-no-repeat bg-contain h-full bg-background flex items-center max-w-[1300px ml-auto md:h-screen"
    >
      <div className="flex justify-between items-center gap-16 mx-auto w-full">
        <div className="py-40 pl-4 md:p-0 lg:pl-10 xl:pl-48 md:m-auto w-3/4 md:w-11/12">
          <motion.div
            className="dark:text-[#e5e9f0]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="md:text-sm block"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t("greetings")}
            </motion.span>

            <motion.h1
              className="text-5xl lg:text-[3em] my-0.5 -mt-1.5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t("name")}
            </motion.h1>

            <motion.h2
              className="text-[#4d5bce] text-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              &gt; {t("jobTitle")}
            </motion.h2>
          </motion.div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <span className="text-textColor md:text-sm">
              {t("profileHandler")}
            </span>

            <p className="text-white md:text-sm">
              <span className="text-[#4d5bce]">const</span>{" "}
              <span className="text-[#43d9ad]">githubLink</span> ={" "}
              <span className="text-[#e99287]">
                &quot;
                <a
                  target="_blank"
                  href="https://github.com/olatunde1998"
                  rel="noreferrer"
                  className="hover:underline transition duration-300"
                >
                  https://github.com/olatunde1998
                </a>
                &quot;
              </span>
            </p>
          </motion.div>
        </div>
        <div className="hidden lg:block lg:w-[1000px] p-2">
          <pre className="relative rounded-md dark:bg-zinc-900 bg-gray-600 p-4 overflow-x-auto text-sm leading-relaxed shadow-[0_0_30px_rgba(0,255,255,0.2)] before:absolute before:inset-0 before:rounded-md before:-z-10 before:blur-md before:opacity-50 before:bg-gradient-to-r before:from-cyan-400 before:via-blue-500 before:to-fuchsia-500">
            <code
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(highlightedCode),
              }}
            ></code>
          </pre>
        </div>
      </div>
    </main>
  );
}
