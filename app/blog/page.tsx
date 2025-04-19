import BlogHome from "@/app/components/blog/BlogHome";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Rasheed Olatunde",
  description: "Blog",
};
export default async function BlogPage() {
  return (
    <div>
      <BlogHome />
    </div>
  );
}
