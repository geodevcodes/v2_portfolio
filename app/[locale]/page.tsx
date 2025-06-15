"use client"
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";


export default function Home() {
  const t = useTranslations("HelloPage");

  return (
    <main
      style={{ backgroundImage: "url('/bg-blur.svg')" }}
      className="bg-right bg-no-repeat bg-contain h-full bg-background flex items-center max-w-[1300px] ml-auto md:h-screen"
    >
      <div className="py-40 pl-4 md:p-0 md:m-auto w-3/4 md:w-11/12">
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
    </main>
  );
}
