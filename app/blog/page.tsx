import BlogHome from "@/app/components/blog/BlogHome";
import type { Metadata } from "next";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Blog | Rasheed Olatunde",
  description: "Blog",
};
export default async function BlogPage() {
  const session = await auth();
  return (
    <>
      <BlogHome session={session} />
    </>
  );
}
