import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// FUNCTION TO FORMAT DATE
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  return date.toLocaleDateString("en-US", options);
};

// Short Date Format
export const formatDateShort = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short", // 'Feb' instead of 'February'
    day: "numeric", // '5' instead of '05'
  };
  return date.toLocaleDateString("en-US", options);
};


// FUNCTION TO GENERATE SLUG
export function generateSlug(title: string) {
  const slug = title
    .toLowerCase() // Convert the title to lowercase
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^\w\-]+/g, "") // Remove non-word characters except dashes
    .replace(/\-\-+/g, "-") // Replace multiple consecutive dashes with a single dash
    .replace(/^\-+/, "") // Remove dashes from the beginning
    .replace(/\-+$/, ""); // Remove dashes from the end
  return slug;
}

// FUNCTION TO Shortening word
export function getShortTitle(title: string) {
  const splitBy = title.split(/[:–.]/); // Split by colon, dash, or period
  if (splitBy.length > 1) {
    return splitBy[0];
  }
  const words = title.trim().split(" ");
  return words.slice(0, 5).join(" "); // Fallback: first 5 words
}