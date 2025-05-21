import { IoLocationSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

import Form from "./Form";
import Map from "./Map";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <section>
        <div className="items-center justify-center">
          <div className="">
            <div className="pb-0 md:pt-12 lg:pb-10">
              <h2 className="text-3xl lg:text-5xl w-full text-center font-bold ">
                Contact Me
              </h2>
            </div>

            <h5 className=" mx-4 text-xl lg:text-3xl font-bold my-6 lg:my-8 lg:mb-12">
              Loremem dlso
            </h5>
            <div className="px-4 lg:flex justify-between md:space-y-4 lg:space-y-0">
              <div className="w-full lg:w-1/2">
                <div className="hover:bg-[#FBFBF5] border-2 border-[#FBFBF5] cursor-pointer text-center md:h-[200px] flex items-center justify-center shadow-md bg-white">
                  <div>
                    <div className="pt-4 flex items-center justify-center text-[#3C3E6A]">
                      <IoLocationSharp size={28} color="red" />
                    </div>
                    <div className="my-4">Our Location</div>
                    <p className="px-8 pb-8">
                      Lagos Island, Lagos State Nigeria.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mx-0 my-4 w-full lg:w-1/2 lg:mx-4 md:my-0">
                <div className="hover:bg-[#FBFBF5] border-2 border-[#FBFBF5] cursor-pointer text-center md:h-[200px] flex items-center justify-center shadow-md bg-white">
                  <div>
                    <div className="pt-4 flex items-center justify-center text-[#3C3E6A]">
                      <FiPhoneCall size={28} color="red" />
                    </div>
                    <div className="my-4">Call Us</div>
                    <p className="px-8 pb-8">+234 81 3364 2798</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="hover:bg-[#FBFBF5] border-2 border-[#FBFBF5] cursor-pointer text-center md:h-[200px] flex items-center justify-center shadow-md bg-white">
                  <div>
                    <div className="pt-4 flex items-center justify-center text-[#3C3E6A]">
                      <HiOutlineMail size={28} color="red" />
                    </div>
                    <div className="my-4">Email Us</div>
                    <p className="px-8 pb-8">olatunde336@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-24 mt-32">
          <div>
            <h5 className="text-center text-3xl font-bold pt-">Get in Touch</h5>
            <p className="text-center pb-4 md:pt-2 md:pb-16 text-gray-700 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>

            <div className="max-w-[1024px space-y-10 md:space-y-10 lg:space-y-0 lg:flex mx-auto">
              <div className="w-full p-4  lg:w-1/2 mr-4 bg-[#F7F8FA] md:px-8 rounded-md">
                <Form />
              </div>
              <div className="w-full h-[609.5px]  lg:w-1/2 rounded-md">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
