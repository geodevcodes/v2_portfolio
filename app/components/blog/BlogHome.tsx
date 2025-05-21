"use client";
import { BlogCard, BlogSmallCard } from "@/app/components/card/BlogCard";
import { GetBlogsRequest } from "@/app/services/blog.request";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { formatDate } from "@/lib/utils";
import CreateBlog from "./CreateBlog";
import { X } from "lucide-react";
import Link from "next/link";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function BlogHome({ session }: any) {
  const email = session?.user?.email;
  const [showCreateBlog, setShowCreateBlog] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const [limit] = useState(6);
  const router = useRouter();

  const { data: blogsData } = useQuery({
    queryKey: ["getBlogsApi", currentPage],
    queryFn: () => GetBlogsRequest(currentPage, limit),
  });

  useEffect(() => {
    if (!email) {
      setOpenDialog(true);
    }
  }, [email]);

  return (
    <>
      <main className="fle min-h-screen flex-col px-4 p-2 md:p-6 font-sans text-md">
        <div className="pb-20">
          <div className="md:border-b border-slate md:flex items-center justify-between">
            <p className="text-sm">
              <span className="text-3xl">./</span>{" "}
              <span className="text-2xl">Blog</span> Insights for your job
              search journey
            </p>
            <div
              className="hidden md:invisibl md:block"
              onClick={() => setShowCreateBlog((prev) => !prev)}
            >
              {showCreateBlog ? (
                <div className="my-4 flex p-2 md:p-3 justify-center items-center gap-[8px] rounded-[8px] text-white w-full md:w-[150px] cursor-pointer  px-3.5 py-4 font-light shadow-sm bg-primary">
                  <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
                  <p className="text-[#FFFFFF] text-sm md:text-md">
                    Back to Blog
                  </p>
                </div>
              ) : (
                <div className="my-4 flex p-2 md:p-3 justify-center items-center gap-[8px] rounded-[8px] text-white w-full md:w-[150px] cursor-pointer  px-3.5 py-4 font-light shadow-sm bg-primary">
                  <p className="text-[#FFFFFF] text-sm md:text-md">
                    Create Blog
                  </p>
                  <Plus className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              )}
            </div>
          </div>

          {showCreateBlog ? (
            <div className="mt-8 rounded-2xl border border-slate-200 dark:border-muted">
              <CreateBlog setShowCreateBlog={setShowCreateBlog} />
            </div>
          ) : (
            <section className="w-full max-w-5xl text-sm">
              {blogsData?.data?.[0] && (
                <Link href={`/blog/${blogsData.data[0].slug}`}>
                  <BlogCard
                    headings={blogsData.data[0].title}
                    content={blogsData.data[0].subTitle}
                    imageUrl={blogsData.data[0].banner}
                    createdAt={formatDate(blogsData.data[0].createdAt)}
                    readTime={blogsData.data[0].readTime}
                  />
                </Link>
              )}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 py-8 px- rounded-2xl">
                {blogsData?.data?.map((item: any, index: number) => (
                  <Link href={`/blog/${item.slug}`} key={index}>
                    <BlogSmallCard
                      headings={item.title}
                      content={item.subTitle}
                      imageUrl={item.banner}
                      createdAt={formatDate(item.createdAt)}
                      readTime={item.readTime}
                    />
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
        <AlertDialogContent>
          <AlertDialogTitle className="flex justify-between">
            Login
            <AlertDialogCancel onClick={() => router.push("/")}>
              <X />
            </AlertDialogCancel>
          </AlertDialogTitle>
          <AlertDialogDescription>
            Please Login to access the blog
          </AlertDialogDescription>

          <AlertDialogAction
            className="w-full mt-3 text-white"
            onClick={() => signIn("google", { callbackUrl: "/blog" })}
          >
            <FaGoogle className="mr-4" size={16} />
            Login with Google
          </AlertDialogAction>
          <AlertDialogDescription>
            By creating an account, you agree to our Terms of Service and
            Privacy Policy.
          </AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
