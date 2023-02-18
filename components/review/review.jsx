"use client";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
const review = ({ data, rating }) => {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const container = {
    hidden: { height: 0 },
    show: { height: "auto" },
  };
  return (
    <div className="grid border-b-2 border-slate-400">
      <div className="text-slate-200 grid gap-3">
        <div className="grid gap-5">
          <div className="flex gap-2">
            <Image
              className="rounded-full h-20 w-20"
              src={
                data.author_details.avatar_path
                  ? data.author_details.avatar_path.includes("https")
                    ? data.author_details.avatar_path.slice(1)
                    : imagePath + data.author_details.avatar_path
                  : "/assets/profile.jpg"
              }
              alt={data.author}
              height={200}
              width={200}
            />
            <div className="flex items-center w-fit h-fit gap-2">
              <p className="font-bold">{data.author}</p>
              <p className="text-slate-400 text-sm font-extralight">
                {new Date(data.created_at).toLocaleDateString("fr-CA", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </p>
            </div>
            
          </div>
          <div className="flex">
            {Array.from({ length: 10 }, (_, i) => (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-6 h-6 ${
                  i < rating ? "fill-slate-200 " : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            ))}
          </div>
         
        </div>

        <div>
          <Disclosure>
            {({ open }) => (
              <>
                <p> {data.content.slice(1, 300)}</p>
                <AnimatePresence>
                  {open && (
                    <Disclosure.Panel
                      static
                      as={motion.div}
                      initial="hidden"
                      exit="hidden"
                      animate="show"
                      variants={container}
                      className="text-gray-200 overflow-hidden"
                    >
                      {data.content.slice(300, -1)}
                    </Disclosure.Panel>
                  )}
                </AnimatePresence>

                {data.content.length > 300 ? (
                  <Disclosure.Button className=" rounded-full py-2 text-sm w-fit font-bold">
                    {open ? "Read less" : "Read more..."}
                  </Disclosure.Button>
                ) : null}
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default review;


