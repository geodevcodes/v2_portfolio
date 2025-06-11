import { GetUserProfileRequest } from "@/app/services/users.request";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  const token = session?.user?.token as string;
  const userId = session?.user?._id as string;

  const { data: userProfileData } = useQuery({
    queryKey: ["getUserProfileApi"],
    queryFn: () => GetUserProfileRequest(userId, token),
  });

  return (
    <main className="min-h-screen px-4 p-2 md:p-8 md:pt-20 font-sans text-md max-w-7xl">
      <div className="w-full font-sans text-md ">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          Settings
        </p>
        <p className="text-muted-foreground">
          Manage the settings of your account
        </p>
      </div>
      <section className="h-fit border border-accent-primary mt-8 p-6 rounded-md">
        {/* ====Name === */}
        <div>
          <label htmlFor="name">
            <span>Name</span>
            <input
              type="text"
              placeholder="Full name"
              value={userProfileData?.data?.fullName}
              className="w-full border border-slate dark:bg-black/30 rounded-sm p-3 focus:outline-none mt-2 text-sm"
            />
          </label>
        </div>

        {/* ====Email === */}
        <div className="mt-3">
          <label htmlFor="email">
            <span>Email</span>
            <input
              type="email"
              value={userProfileData?.data?.email}
              placeholder="Email"
              disabled
              className="w-full border border-slate dark:bg-black/30 rounded-sm p-3 focus:outline-none mt-2 text-sm text-muted-foreground cursor-not-allowed"
            />
          </label>
        </div>
        {/* ====Color Scheme === */}
        <div className="mt-3">
          <label htmlFor="colorScheme">
            <span>Color Scheme</span>
            <input
              type="Color Scheme"
              placeholder="Color"
              className="w-full border border-slate dark:bg-black/30 rounded-sm p-3 focus:outline-none mt-2 text-sm"
            />
          </label>
        </div>
        <div className="mt-3">
          <Button>Save Now</Button>
        </div>
      </section>
    </main>
  );
}
