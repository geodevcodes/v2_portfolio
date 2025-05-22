import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Get requested locale
  const requested = await requestLocale;
  console.log(requested, "requested locale");

  // If the requested locale is valid, use it; otherwise use the default
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  console.log(locale, "final locale being used");

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
