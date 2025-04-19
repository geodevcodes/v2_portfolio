import BlogDetails from "@/app/components/blog/BlogDetails";

export default async function BlogDetailsPage({ params }: { params: any }) {
  const blogSlug = params?.slug;
  return (
    <>
      <main className="px-4 p-2 mb-4 md:p-8 lg:mb-0  font-sans min-h-screen">
        <BlogDetails blogSlug={blogSlug} />
      </main>
    </>
  );
}
