import {
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiDribbbleFill,
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 z-[100000] flex justify-between w-full border-t border-slate bg-background text-[#8CA5B5]">
      <div className="flex items-center justify-center border-l border-transparent px-4 py-3">
        <span className="m-0">find me in:</span>
      </div>
      <div className="flex items-center justify-center border-l border-slate">
        <a
          aria-label="geodevcodes linkedin profile"
          href="http://linkedin.com/in/olatunderasheed"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center p-4"
        >
          <RiLinkedinFill fill="#607B96" size={25} />
        </a>
      </div>
      <div className="flex items-center justify-center border-l border-slate md:border-r-0">
        <a
          aria-label="Qudusayo twitter profile"
          href="https://twitter.com/geodevcodes"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center p-4"
        >
          <RiTwitterFill fill="#607B96" size={25} />
        </a>
      </div>
      <div className="flex items-center justify-center border-l border-slate border-r ">
        <a
          aria-label="geodevcodes github profile"
          href="https://github.com/olatunde1998/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center p-4"
        >
          <RiGithubFill fill="#607B96" size={25} />
        </a>
      </div>
      <div className="ml-auto flex items-center justify-center border-l border-slate px-4 py-3">
        <a
          aria-label="Designed by geodevcodes"
          href="https://dribbble.com/shots/18111356-Portfolio-Concept-V-2"
          target="_blank"
          rel="noreferrer"
          title="Designed by geodevcodes"
          className="flex items-center justify-center"
        >
          <span className="mr-2 hidden sm:inline">Designed by geodevcodes</span>
          <RiDribbbleFill fill="#607B96" size={25} />
        </a>
      </div>
    </footer>
  );
}
