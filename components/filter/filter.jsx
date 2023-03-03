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
  const Router = useRouter();
  console.log(paramMedia);
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
      `/filter/${genreId}?genreName=${genreName}&sort=${sort}&media=${paramMedia}`
    );
  };

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

                        {switchMedia.genres?.map((obj, id) => (
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
                                href={`/filter/${obj.id}?genreName=${genreName}&sort=${sort}&media=${paramMedia}`}
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

        <Link href="/" className="block lg:hidden">
          <Image
            src="./assets/logo.svg"
            width={300}
            height={40}
            className="h-10 w-fit-content"
            alt="Movie DB Logo"
          />
        </Link>

        <Link href="/" className="hidden lg:block">
          <Image
            src="./assets/Biglogo.svg"
            width={300}
            height={40}
            className="h-10 w-fit-content"
            alt="Movie DB Logo"
          />
        </Link>

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
