"use client";
import LanguageSwitcher from "@/app/components/language-switcher/LanguageSwitcher";
import { ModeToggle } from "@/app/components/modeToggle/ModeToggle";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
  const route = usePathname();
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    setVisibility(false);
  }, [route]);

  const isActive = (path: string) => route === path;

  return (
    <div
      className={clsx(
        "flex border-b border-slate bg-background text-[#8CA5B5] fixed w-full z-50",
        visibility && "h-full flex-col overflow-y-scroll md:h-auto"
      )}
    >
      <div className="flex items-center justify-between px-3 w-full md:w-[25%] border-b border-slate md:border-none">
        <Link href="/" className="p-4 text-[#8CA5B5] dark:text-primary">
          geodevcodes
        </Link>

        {/* Hamburger */}
        <div className="relative z-[2000] px-4 md:hidden flex items-center gap-4">
          <ModeToggle />
          <label
            htmlFor="checkbox"
            className="flex flex-col bg-primary-background border border-slate p-2 rounded-lg"
          >
            <span
              className={clsx(
                "h-[3px] w-[24px] bg-[#8CA5B5] my-[2.5px] transition-all",
                visibility && "rotate-[135deg] relative top-2"
              )}
            ></span>
            <span
              className={clsx(
                "h-[3px] w-[24px] bg-[#8CA5B5] my-[2.5px] transition-all",
                visibility && "rotate-[45deg] relative"
              )}
            ></span>
            <span
              className={clsx(
                "h-[3px] w-[24px] bg-[#8CA5B5] my-[2.5px] transition-all",
                visibility && "rotate-[45deg] relative -top-2"
              )}
            ></span>
          </label>

          <input
            id="checkbox"
            type="checkbox"
            aria-hidden="true"
            tabIndex={-1}
            className="fixed -translate-x-[99999px]"
            checked={visibility}
            onChange={() => setVisibility((prev) => !prev)}
          />
        </div>
      </div>

      <div className="flex-1 p-0 md:flex">
        <ul
          className={clsx(
            "list-none flex flex-col md:flex-row w-full md:w-full overflow-y-auto",
            visibility ? "block" : "hidden md:flex"
          )}
        >
          {[
            { path: "/", label: "_hello" },
            { path: "/about", label: "_about-me" },
            { path: "/projects", label: "_projects" },
            { path: "/blog", label: "_blogify" },
          ].map(({ path, label }, index, arr) => (
            <li
              key={path}
              className={clsx(
                "w-full text-left md:w-auto border-slate",
                "md:border-l first:md:border-l-0",
                "border-b md:border-b-0",
                index === arr.length - 2 && "md:border-r",
                index === arr.length - 1 &&
                  "md:border-none ml-0 md:ml-auto md:mr-20 flex items-center",
                isActive(path) && "relative dark:text-white"
              )}
            >
              <Link
                href={path}
                className={clsx(
                  "flex items-center gap-1 w-full p-4",
                  isActive(path)
                    ? "text-[#8CA5B5] dark:text-white"
                    : "md:text-[#8CA5B5]"
                )}
              >
                {label}
              </Link>
              {isActive(path) && (
                <span className="hidden md:block absolute bottom-0 left-0 w-full border-b-[3px] border-primary" />
              )}
            </li>
          ))}
          <li className="flex items-center md:mr-6 px-4">
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </div>
  );
}
