"use client";

import { Menu, RadioGroup } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Filter = ({ genreMovies, genreTv }) => {
  const [searchMovie, setSearchMovie] = useState("");
  const [sort, setSort] = useState("popularity.desc");
  const [genreName, setGenreName] = useState("genre");
  const [switchMedia, setSwitchMedia] = useState(genreMovies);
  let paramMedia = switchMedia === genreMovies ? "Movie" : "Tv";
  console.log(paramMedia);
  const Router = useRouter();
  console.log(sort);
  const container = {
    hidden: {
      height: 0,
    },
    show: {
      height: "auto",
      transition: {
        duration: 0.5,
        staggerChildren: 0.02,
      },
    },
  };

  const itemA = {
    hidden: { scale: 0, opacity: 0, y: -100, transition: { duration: 0 } },
    show: { scale: 1, opacity: 1, y: 0 },
  };

  const handleRoute = async (genreName, genreId, e) => {
    e.preventDefault();
    setGenreName(genreName);
    Router.push(
      `/genre/${genreId}?genreName=${genreName}&sort=${sort}&media=${paramMedia}`
    );
  };
  console.log(searchMovie);

  const submit = (e) => {
    e.preventDefault();
    Router.push(`/search/${searchMovie}`);
  };

  return (
    <>
      <div className="flex w-full gap-3 lg:justify-between items-center">
        <div className=" w-fit  h-fit  lg:relative   ">
          <Menu onClick={() => setfilter("hej")}>
            {({ open, close }) => (
              <>
                <Menu.Button className="bg-slate-700 lg:bg-slate-700    border-slate-200 text-slate-200  rounded-md font-bold ">
                  <div className="flex gap-2 p-3 items-center ">
                    <span className="max-sm:hidden"> Filter </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-5 h-5 "
                    >
                      <motion.path
                        strokeLinecap="round"
                        d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                        animate={
                          open ? { rotate: "180deg" } : { rotate: "0deg" }
                        }
                        initial={
                          open ? { rotate: "0deg" } : { rotate: "180deg" }
                        }
                      />
                    </svg>
                  </div>
                </Menu.Button>
                <AnimatePresence>
                  {open && (
                    <Menu.Items
                      static
                      as={motion.div}
                      variants={container}
                      initial="hidden"
                      exit="hidden"
                      animate="show"
                      className="grid-cols-2 lg:-ml-4 border-slate-200   top-0 left-0 fixed bg-slate-800 min-h-screen  lg:rounded-b-3xl grid z-40 text-slate-200   w-full lg:w-max    lg:absolute  lg:top-auto lg:min-h-fit lg:p-0  max-lg:bg-opacity-90  "
                    >
                      <>
                        <Menu.Item
                          variants={itemA}
                          className="rounded-md list-none p-4  h-fit  max-lg:text-xl col-span-full"
                          as={motion.div}
                          disabled
                        >
                          <RadioGroup
                            value={switchMedia}
                            onChange={setSwitchMedia}
                            className="text-slate-200 flex  sm:gap-7 gap-3 flex-wrap justify-center  w-full pt-5 lg:justify-start"
                          >
                            <RadioGroup.Option
                              className="text-slate-200"
                              value={genreTv}
                            >
                              {({ checked }) => (
                                <span
                                  className={
                                    checked
                                      ? "bg-slate-700 rounded-full py-1 px-2 border-2  border-slate-200 text-lg"
                                      : "bg-slate-700 rounded-full py-1 px-2 text-lg "
                                  }
                                >
                                  Tv
                                </span>
                              )}
                            </RadioGroup.Option>
                            <RadioGroup.Option
                              className="text-slate-200"
                              value={genreMovies}
                            >
                              {({ checked }) => (
                                <span
                                  className={
                                    checked
                                      ? "bg-slate-700 rounded-full py-1 px-2 border-2  border-slate-200 text-lg"
                                      : "bg-slate-700 rounded-full py-1 px-2 text-lg "
                                  }
                                >
                                  Movie
                                </span>
                              )}
                            </RadioGroup.Option>
                          </RadioGroup>
                          <RadioGroup
                            value={sort}
                            onChange={setSort}
                            className="text-slate-200 flex  sm:gap-7 gap-3 flex-wrap justify-center  w-full pt-5 lg:justify-start "
                          >
                            <RadioGroup.Option value="popularity.desc">
                              {({ checked }) => (
                                <span
                                  className={
                                    checked
                                      ? "bg-slate-700 rounded-full py-1 px-2 border-2  border-slate-200 text-lg"
                                      : "bg-slate-700 rounded-full py-1 px-2 text-lg "
                                  }
                                >
                                  Popular
                                </span>
                              )}
                            </RadioGroup.Option>
                            <RadioGroup.Option value="release_date.desc">
                              {({ checked }) => (
                                <span
                                  className={
                                    checked
                                      ? "bg-slate-700 rounded-full py-1 px-2 border-2  border-slate-200 text-lg"
                                      : "bg-slate-700 rounded-full py-1 px-2 text-lg"
                                  }
                                >
                                  Latest
                                </span>
                              )}
                            </RadioGroup.Option>
                            <RadioGroup.Option value="vote_average.desc">
                              {({ checked }) => (
                                <span
                                  className={
                                    checked
                                      ? "bg-slate-700 rounded-full py-1 px-2 border-2  border-slate-200 text-lg"
                                      : "bg-slate-700 rounded-full py-1 px-2 text-lg"
                                  }
                                >
                                  Best Rated
                                </span>
                              )}
                            </RadioGroup.Option>
                            <RadioGroup.Option value="vote_average.asc">
                              {({ checked }) => (
                                <span
                                  className={
                                    checked
                                      ? "bg-slate-700 rounded-full py-1 px-2 border-2  border-slate-200 text-lg"
                                      : "bg-slate-700 rounded-full py-1 px-2 text-lg  "
                                  }
                                >
                                  Worst Rated
                                </span>
                              )}
                            </RadioGroup.Option>
                          </RadioGroup>
                        </Menu.Item>
                        <Menu.Item
                          className=" lg:hidden block absolute right-2 top-2"
                          onClick={close}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className=" w-10 h-10"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </Menu.Item>

                        {switchMedia.genres.map((obj, id) => (
                          <Menu.Item
                            key={id}
                            variants={itemA}
                            className="rounded-md list-none  h-fit  max-lg:text-xl self-center max-lg:justify-self-center"
                            as={motion.li}
                          >
                            {({ active, close }) => (
                              <Link
                                onClick={(e) =>
                                  handleRoute(obj.name, obj.id, e)
                                }
                                onClickCapture={close}
                                className={` w-full h-full block lg:px-5 lg:py-4  ${
                                  active ? "bg-slate-400 " : " "
                                }`}
                                href={`/genre/${obj.id}?genreName=${genreName}`}
                              >
                                {obj.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </>
                    </Menu.Items>
                  )}
                </AnimatePresence>
              </>
            )}
          </Menu>
        </div>
        <Link href="/" className="lg:block">

     

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 489.04 35.4"
            className="h-10 hidden  lg:block    "
          >
            <defs>
              <linearGradient
                id="a"
                y1={17.7}
                x2={489.04}
                y2={17.7}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0} stopColor="#90cea1" />
                <stop offset={0.56} stopColor="#3cbec9" />
                <stop offset={1} stopColor="#00b3e5" />
              </linearGradient>
            </defs>
            <title>{"Asset 5"}</title>
            <g data-name="Layer 2">
              <path
                d="M293.5 0h8.9l8.75 23.2h.1l8.9-23.2h8.35l-14.6 35.4h-6.25Zm46.6 0h7.8v35.4h-7.8Zm22.2 0h24.05v7.2H370.1v6.6h15.35V21H370.1v7.2h17.15v7.2H362.3Zm55 0H429a33.54 33.54 0 0 1 8.07 1 18.55 18.55 0 0 1 6.68 3 15.1 15.1 0 0 1 4.52 5.53A18.5 18.5 0 0 1 450 17.8a16.91 16.91 0 0 1-1.63 7.58 16.37 16.37 0 0 1-4.37 5.5 19.52 19.52 0 0 1-6.35 3.37A24.59 24.59 0 0 1 430 35.4h-12.71Zm7.81 28.2h4a21.57 21.57 0 0 0 5-.55 10.87 10.87 0 0 0 4-1.83 8.69 8.69 0 0 0 2.67-3.34 11.92 11.92 0 0 0 1-5.08 9.87 9.87 0 0 0-1-4.52 9 9 0 0 0-2.62-3.18 11.68 11.68 0 0 0-3.88-1.88 17.43 17.43 0 0 0-4.67-.62h-4.6ZM461.24 0h13.2a34.42 34.42 0 0 1 4.63.32 12.9 12.9 0 0 1 4.17 1.3 7.88 7.88 0 0 1 3 2.73A8.34 8.34 0 0 1 487.39 9a7.42 7.42 0 0 1-1.67 5 9.28 9.28 0 0 1-4.43 2.82v.1a10 10 0 0 1 3.18 1 8.38 8.38 0 0 1 2.45 1.85 7.79 7.79 0 0 1 1.57 2.62 9.16 9.16 0 0 1 .55 3.2 8.52 8.52 0 0 1-1.2 4.68 9.42 9.42 0 0 1-3.1 3 13.38 13.38 0 0 1-4.27 1.65 23.11 23.11 0 0 1-4.73.5h-14.5ZM469 14.15h5.65a8.16 8.16 0 0 0 1.78-.2 4.78 4.78 0 0 0 1.57-.65 3.34 3.34 0 0 0 1.13-1.2 3.63 3.63 0 0 0 .42-1.8 3.22 3.22 0 0 0-.47-1.82 3.33 3.33 0 0 0-1.23-1.13 5.77 5.77 0 0 0-1.7-.58 10.79 10.79 0 0 0-1.85-.17H469Zm0 14.65h7a8.91 8.91 0 0 0 1.83-.2 4.78 4.78 0 0 0 1.67-.7 4 4 0 0 0 1.23-1.3 3.71 3.71 0 0 0 .47-2 3.13 3.13 0 0 0-.62-2 4 4 0 0 0-1.58-1.15 7.83 7.83 0 0 0-2-.55 15.12 15.12 0 0 0-2.05-.15H469Zm-265 6.53h67a17.66 17.66 0 0 0 17.66-17.66A17.67 17.67 0 0 0 271 0h-66.94a17.67 17.67 0 0 0-17.66 17.67 17.66 17.66 0 0 0 17.66 17.66ZM10.1 6.9H0V0h28v6.9H17.9v28.5h-7.8ZM39 0h7.8v13.2h15.1V0h7.8v35.4h-7.8V20.1H46.75v15.3H39Zm41.2 0h24v7.2H88v6.6h15.35V21H88v7.2h17.15v7.2h-25Zm55 0H147l8.15 23.1h.1l8.2-23.1h11.75v35.4h-7.8V8.25h-.1L158 35.4h-5.95l-9-27.15H143V35.4h-7.8Z"
                style={{
                  fill: "url(#a)",
                }}
                data-name="Layer 1"
              />
            </g>
          </svg>
        </Link>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 190.24 81.52"
            className="h-10 block absolute bg-slate-500  lg:hidden"
          >
            <defs>
              <linearGradient
                id="a"
                y1={40.76}
                x2={190.24}
                y2={40.76}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0} stopColor="#90cea1" />
                <stop offset={0.56} stopColor="#3cbec9" />
                <stop offset={1} stopColor="#00b3e5" />
              </linearGradient>
            </defs>
            <title>{"Asset 2"}</title>
            <g data-name="Layer 2">
              <path
                d="M105.67 36.06h66.9a17.67 17.67 0 0 0 17.67-17.66A17.67 17.67 0 0 0 172.57.73h-66.9A17.67 17.67 0 0 0 88 18.4a17.67 17.67 0 0 0 17.67 17.66Zm-88 45h76.9a17.67 17.67 0 0 0 17.67-17.66 17.67 17.67 0 0 0-17.67-17.67h-76.9A17.67 17.67 0 0 0 0 63.4a17.67 17.67 0 0 0 17.67 17.66Zm-7.26-45.64h7.8V6.92h10.1V0h-28v6.9h10.1Zm28.1 0h7.8V8.25h.1l9 27.15h6l9.3-27.15h.1V35.4h7.8V0H66.76l-8.2 23.1h-.1L50.31 0h-11.8Zm113.92 20.25a15.07 15.07 0 0 0-4.52-5.52 18.57 18.57 0 0 0-6.68-3.08 33.54 33.54 0 0 0-8.07-1h-11.7v35.4h12.75a24.58 24.58 0 0 0 7.55-1.15 19.34 19.34 0 0 0 6.35-3.32 16.27 16.27 0 0 0 4.37-5.5 16.91 16.91 0 0 0 1.63-7.58 18.5 18.5 0 0 0-1.68-8.25ZM145 68.6a8.8 8.8 0 0 1-2.64 3.4 10.7 10.7 0 0 1-4 1.82 21.57 21.57 0 0 1-5 .55h-4.05v-21h4.6a17 17 0 0 1 4.67.63 11.66 11.66 0 0 1 3.88 1.87A9.14 9.14 0 0 1 145 59a9.87 9.87 0 0 1 1 4.52 11.89 11.89 0 0 1-1 5.08Zm44.63-.13a8 8 0 0 0-1.58-2.62 8.38 8.38 0 0 0-2.42-1.85 10.31 10.31 0 0 0-3.17-1v-.1a9.22 9.22 0 0 0 4.42-2.82 7.43 7.43 0 0 0 1.68-5 8.42 8.42 0 0 0-1.15-4.65 8.09 8.09 0 0 0-3-2.72 12.56 12.56 0 0 0-4.18-1.3 32.84 32.84 0 0 0-4.62-.33h-13.2v35.4h14.5a22.41 22.41 0 0 0 4.72-.5 13.53 13.53 0 0 0 4.28-1.65 9.42 9.42 0 0 0 3.1-3 8.52 8.52 0 0 0 1.2-4.68 9.39 9.39 0 0 0-.55-3.18Zm-19.42-15.75h5.3a10 10 0 0 1 1.85.18 6.18 6.18 0 0 1 1.7.57 3.39 3.39 0 0 1 1.22 1.13 3.22 3.22 0 0 1 .48 1.82 3.63 3.63 0 0 1-.43 1.8 3.4 3.4 0 0 1-1.12 1.2 4.92 4.92 0 0 1-1.58.65 7.51 7.51 0 0 1-1.77.2h-5.65Zm11.72 20a3.9 3.9 0 0 1-1.22 1.3 4.64 4.64 0 0 1-1.68.7 8.18 8.18 0 0 1-1.82.2h-7v-8h5.9a15.35 15.35 0 0 1 2 .15 8.47 8.47 0 0 1 2.05.55 4 4 0 0 1 1.57 1.18 3.11 3.11 0 0 1 .63 2 3.71 3.71 0 0 1-.43 1.92Z"
                style={{
                  fill: "url(#a)",
                }}
                data-name="Layer 1"
              />
            </g>
          </svg>

     

        <form className="w-full lg:w-1/2 " onSubmit={(e) => submit(e)}>
          <div className="w-full">
            <div className="flex gap-2   ">
              <input
                type="text"
                onChange={(e) => setSearchMovie(e.target.value)}
                placeholder="Search"
                className="block p-2.5 w-full z-20 text-sm  rounded-lg bg-gray-700  placeholder:font-bold text-slate-200 focus:outline-none  "
              />
              <Link className="text-slate-200" href={`search/${searchMovie}`}>
                <button
                  type="submit"
                  className=" h-full px-3 text-sm font-medium text-white bg-slate-600 rounded-full border border-gray-600 hover:bg-slate-400   "
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Filter;
