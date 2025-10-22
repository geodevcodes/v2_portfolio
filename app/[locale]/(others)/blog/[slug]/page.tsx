import BlogDetails from "@/app/components/blog/BlogDetails";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { auth } from "@/auth";

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const session = await auth();
  const blogSlug = params?.slug;
  if (!session?.user || !blogSlug) {
    redirect("/");
  }
  return {
    title: `Blog Details - ${blogSlug} | geodevcodes`,
    description: `Read the detailed blog post about ${blogSlug} on geodevcodes.`,
    keywords: [
      blogSlug,
      "Rasheed Olatunde",
      "geodevcodes",
      "Software Developer",
      "React Developer",
    ],
  };
}

export default async function BlogDetailsPage({ params }: { params: any }) {
  const session = await auth();
  const blogSlug = params?.slug;
  if (!session?.user || !blogSlug) {
    redirect("/");
  }
  return (
    <>
      <main className="px-4 p-2 mb-4 pb-20 md:p-8 lg:mb-0 md:pt-16  font-sans min-h-screen">
        <BlogDetails blogSlug={blogSlug} />
      </main>
    </>
  );
}
