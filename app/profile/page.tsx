export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="w-full items-center justify-between font-mono text-sm lg:flex p-4">
        <p>Hey there! this is Profile page</p>
        <div>
          <a href="/courses">Courses</a> |{" "}
          <a href="/profile" className="ml-4">
            Profile
          </a>
        </div>
      </div>
    </main>
  );
}
