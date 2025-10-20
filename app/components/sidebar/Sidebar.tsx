"use client";
import { ThemeToggle } from "@/app/components/theme-toggle/ThemeToggle";
import RasheedImage from "@/public/rasheed-img.jpeg";
import { sidebarRouteLinks } from "@/lib/LinkData";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { FaGoogle } from "react-icons/fa";
import { LogOut, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SideBar({ locale }: any) {
    const { data: session } = useSession();
  const pathname = usePathname();
  const t = useTranslations("Profile");

  const filteredSidebarRouteLinks = sidebarRouteLinks.filter((item) => {
    if (item.key === "my-profile") {
      return session?.user?.email;
    }
    return true;
  });

  return (
    <>
      <section className="-z-30 absolute md:z-30 xl:fixe w-[249px">
        <div className="md:border-r border-slate min-h-screen pt-20 flex flex-col justify-between md:fixed">
          <div>
            <div className="justify-between px-3 pb-6 hidden md:flex">
              <div className="flex gap-x-2">
                <Image
                  src={RasheedImage}
                  alt="profile image"
                  width={100}
                  height={100}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm font-semibold"> {t("name")}</p>
                  <Link href="/about" className="text-sm text-primary">
                    View Profile
                  </Link>
                </div>
              </div>
              <ThemeToggle />
            </div>

            <div className="hidden md:relative md:flex flex-col items-start w-full border-t md:border-slate pb-1">
              <div className="left-0 w-60">
                {/* ============ LINKS AND ICONS =========== */}
                {filteredSidebarRouteLinks?.map((item, index) => (
                  <div
                    key={index}
                    className="mt-2 flex flex-col items-start text-sm w-full"
                  >
                    <div className="flex w-full">
                      <Link
                        href={`${item.href}`}
                        className={`${
                          pathname === `/${locale}${item.href}`
                            ? "rounded-sm bg-accent dark:bg-accent w-full flex"
                            : "flex items-center"
                        }
                  flex items-center w-full hover:bg-accent dark:hover:bg-accent rounded-lg px-4 mx-3 py-2`}
                      >
                        <span>
                          <item.icon
                            size={16}
                            className="h-4 w-4 group-hover:cursor-pointer mr-4 mb-1 text-primary"
                          />
                        </span>
                        <p
                          className={`${pathname === item.href ? "" : ""}
                     text-sm hover:cursor-pointer text-foreground
                  `}
                        >
                          {item.name}
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex flex-col items-start border-t border-slate  w-full md:h-20 mt-30" />
          </div>

          {/* ============Login and SignOut Button ========== */}
          <section className="border-t border-slate pt-6 px- mt-28 hidden md:block pb-20">
            {session?.user?.email ? (
              <div
                className="bg-accent dark:bg-accent rounded-lg text-foreground flex items-center justify-center gap-4 p-2 cursor-pointer"
                onClick={async () => {
                  await signOut();
                  redirect("/");
                }}
              >
                <LogOut size={16} />
                <p>Sign out</p>
              </div>
            ) : (
              <div className="bg-primary rounded-lg text-foreground flex items-center justify-center gap-4 p-2 mx-3 cursor-pointer">
                <AlertDialog>
                  <AlertDialogTrigger className="flex items-center text-white text-sm">
                    <FaGoogle className="mr-2" size={16} /> Login with Google
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogTitle className="flex justify-between">
                      Login
                      <AlertDialogCancel>
                        <X />
                      </AlertDialogCancel>
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Please Login to access the full Platform
                    </AlertDialogDescription>

                    <AlertDialogAction
                      className="w-full mt-3 text-white"
                      onClick={() => signIn("google", { callbackUrl: "/" })}
                    >
                      <FaGoogle className="mr-4" size={16} />
                      Login with Google
                    </AlertDialogAction>
                    <AlertDialogDescription>
                      By creating an account, you agree to our Terms of Service
                      and Privacy Policy.
                    </AlertDialogDescription>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            )}
          </section>
        </div>
      </section>
    </>
  );
}
