"use client";
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
        "flex border-b border-slate bg-background text-[#8CA5B5] fixed  w-full z-50",
        visibility && "h-full flex-col overflow-y-scroll md:h-auto"
      )}
    >
      <div className="flex items-center justify-between w-full md:w-[25%] md:flex- border-b border-slate md:border-none">
        <Link href="/" className="p-4 text-whit text-[#8CA5B5] dark:text-white">
          geodevcodes
        </Link>

        {/* Hamburger */}
        <div className="relative z-[2000] px-4 md:hidden">
          <label htmlFor="checkbox" className="flex flex-col">
            <span
              className={clsx(
                "h-[3px] w-[30px] bg-[#8CA5B5] my-[2.5px] transition-all",
                visibility && "rotate-[135deg] relative top-2"
              )}
            ></span>
            <span
              className={clsx(
                "h-[3px] w-[30px] bg-[#8CA5B5] my-[2.5px] transition-all",
                visibility && "rotate-[45deg] relative"
              )}
            ></span>
            <span
              className={clsx(
                "h-[3px] w-[30px] bg-[#8CA5B5] my-[2.5px] transition-all",
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

      <div className="flex-1 p-0 md:flex md:p-0">
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
            { path: "#", label: "_blogify" },
          ].map(({ path, label }, index, arr) => (
            <li
              key={path}
              className={clsx(
                "w-full text-left md:w-auto border-slate",
                "md:border-l first:md:border-l-0",
                "border-b md:border-b-0",
                index === arr.length - 2 && "md:border-r",
                index === arr.length - 1
                  ? "md:border-none ml-0 md:ml-auto md:mr-6"
                  : "",
                isActive(path) && "relative dark:text-white"
              )}
            >
              <Link
                href={path}
                className={clsx(
                  "block w-full p-4",
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
        </ul>
      </div>
    </div>
  );
}
