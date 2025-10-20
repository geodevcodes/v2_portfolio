"use client";
import { KR, GB, CN, DE, SA, JP, FR } from "country-flag-icons/react/3x2";
import { useState, useEffect, useRef, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Globe } from "lucide-react";

const locales = [
  { name: "Korean", value: "ko", label: "KOR", flag: KR },
  { name: "English", value: "en", label: "ENG", flag: GB },
  { name: "Chinese", value: "zh-CN", label: "CHN", flag: CN },
  { name: "Deutsch", value: "de", label: "DE", flag: DE },
  { name: "Arabic", value: "ar", label: "AR", flag: SA },
  { name: "Japanese", value: "ja", label: "JP", flag: JP },
  { name: "Français", value: "fr", label: "FR", flag: FR },
];

export default function LanguageSwitcher() {
  const startTransition = useTransition()[1];
  const localActive = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      const pathWithoutLocale = pathname.replace(`/${localActive}`, "");
      router.replace(`/${nextLocale}${pathWithoutLocale}`);
      router.refresh();
    });
  };
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute right-10" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="border-[1.3px] border-slate bg-background text-[#8CA5B5] dark:text-white rounded-3xl py-1.5 px-2.5 w-[90px] flex items-center justify-between"
      >
        <span className="flex items-center gap-4">
          <span className="text-sm">
            {locales.find((locale) => locale.value === localActive)?.label}
          </span>
        </span>
        <Globe className="w-4 h-4 ml-3" />
      </button>

      {showDropdown && (
        <ul className="absolute z-[1000] -left-20 top-10 bg-white dark:bg-background border border-slate max-h-64 overflow-y-auto rounded-lg mt-1 w-[180px] shadow-lg">
          {locales.map((locale) => {
            const FlagComponent = locale.flag;
            return (
              <li
                key={locale.value}
                onClick={() => {
                  onSelectChange(locale.value);
                  setShowDropdown(false);
                }}
                className={`flex items-center px-4 py-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-primary-foreground ${
                  localActive === locale.value
                    ? "bg-slate-200 dark:bg-primary-foreground dark:hover:bg-primary-foreground"
                    : ""
                }`}
              >
                {FlagComponent && (
                  <FlagComponent className="w-6 h-4" title={locale.label} />
                )}
                <span className="ml-2">{locale.name}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
