import { Button } from "@/components/ui/button";
import Link from "next/link";

import { MdArrowRightAlt } from "react-icons/md";

const Form = () => {
  return (
    <div>
      <form>
        <div className="text-center py-4 text-2xl pb-8 font-bold">
          Contact Us
        </div>
        <div className="mb-[8px] space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            name="from_name"
            required
            className="w-full p-4 mb-[8px] rounded-[5px] border-[0.5px] border-slate-400 focus:outline-none cursor-text md:mb-0 mr-4 placeholder:text-sm"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="from_email"
            required
            className="w-full p-4 rounded-[5px] border-[0.5px] border-slate-400 focus:outline-none cursor-text placeholder:text-sm"
          />
        </div>
        <div className="mt-4">
          <textarea
            id="message"
            name="message"
            required
            rows={10}
            cols={50}
            placeholder="Your Message"
            className="w-full p-4 border-[0.5px] border-slate-400 focus:outline-none cursor-text rounded-[5px] placeholder:text-sm"
          ></textarea>
        </div>
        <div className="mt-4  flex mx-auto pr-4 md:pr-0 ">
          <Button asChild className="w-full  p-7 mt-4">
            <Link href="/" className="text-white">
              Submit
              <span className="ml-2">
                <MdArrowRightAlt size={20} />
              </span>
            </Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
