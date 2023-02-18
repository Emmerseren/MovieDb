import Movie from "../../movie/page";
import TvShow from "../../tvShow/page";

const page = (req) => {
  console.log(req)
  const { search } = req.params;
  const { sort } = req.searchParams;
  console.log(sort)

  return (
    <>
      <h1 className="text-slate-200 my-8  w-full border-slate-100 border-b-4 text-3xl ">
        Movies
      </h1>
      <Movie media="search" filter="movie" sort={sort} search={search} />
      <h1 className="text-slate-200 my-8  w-full border-slate-100 border-b-4 text-3xl ">
        Tv-Shows
      </h1>
      <TvShow media="search" filter="tv" sort={sort} search={search} />
    </>
  );
};

export default page;
