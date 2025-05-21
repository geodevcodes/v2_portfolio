
export default function Home() {
  return (
    <>
      <main
        style={{ backgroundImage: "url('/bg-blur.svg')" }}
        className="bg-right bg-no-repeat bg-contain h-full bg-background flex items-center max-w-[1300px] ml-auto md:h-screen"
      >
        <div className="py-40 pl-4 md:p-0 md:m-auto w-3/4 md:w-11/12">
          <div className="text-[#e5e9f0]">
            <span className="md:text-sm">Hi all. I am</span>
            <h1 className="text-5xl lg:text-[3em] my-0.5 -mt-1.5">Rasheed Olatunde</h1>
            <h2 className="text-[#4d5bce] text-2xl">
              &gt; Software developer
            </h2>
          </div>

          <div className=" mt-20">
            <span className="text-textColor md:text-sm">
              {`//`} find my profile on Github:
            </span>
            <p className="text-white md:text-sm">
              <span className="text-[#4d5bce]">const</span>{" "}
              <span className="text-[#43d9ad]">githubLink</span> ={" "}
              <span className="text-[#e99287]">
                &quot;
                <a
                  target="_blank"
                  href="https://github.com/qudusayo"
                  rel="noreferrer"
                >
                  https://github.com/olatunde1998
                </a>
                &quot;
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
