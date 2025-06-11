"use client";
import { GetUsersRequest } from "@/app/services/users.request";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useDebounce } from "use-debounce";
import { useState } from "react";

import UsersList from "./UsersList";

export default function Users() {
  const { data: session } = useSession();
  const token = session?.user?.token as string;
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(6);

  const { data: userData, isLoading } = useQuery({
    queryKey: ["getUsersApi", currentPage, debouncedSearch],
    queryFn: () => GetUsersRequest(token, currentPage, limit, debouncedSearch),
  });

  return (
    <main className="min-h-screen px-4 p-2 md:p-8 md:pt-20 font-sans text-md max-w-7xl">
      <div className="w-full font-sans text-md ">
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          User Management
        </p>
        <p className="text-muted-foreground">Manage all users in one place.</p>
      </div>
      <section className="h-fit border border-accent-primary mt-8 p-6 rounded-md">
        <UsersList
          userData={userData}
          isLoading={isLoading}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          limit={limit}
          setSearch={setSearch}
          debouncedSearch={debouncedSearch}
        />
      </section>
    </main>
  );
}
