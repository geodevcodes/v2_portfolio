import BlogDetails from "@/app/components/blog/BlogDetails";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

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
