import Movie from "../../movie/page";
import TvShow from "../../tvShow/page";

const page = (req) => {
  const { search } = req.params;

  return (
    <>
      <h1 className="text-slate-200 my-8  w-full border-slate-100 border-b-4 text-3xl ">
        Movies
      </h1>
      <Movie media="search" filter="movie"  search={search} />
      <h1 className="text-slate-200 my-8  w-full border-slate-100 border-b-4 text-3xl ">
        Tv-Shows
      </h1>
      <TvShow media="search" filter="tv"  search={search} />
    </>
  );
};

export default page;
