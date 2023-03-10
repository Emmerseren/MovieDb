import Movie from "@/components/movie";
import TvShow from "@/components/tvShow";

export default function genre(req) {
  const { genre } = req.params;
  const { genreName } = req.searchParams;
  const { sort } = req.searchParams;
  return (
    <div>
        <>
          <h1 className="text-slate-200 my-8  w-full border-slate-100 border-b-4 text-3xl ">
            {genreName} Movies
          </h1>
          <Movie media="discover" filter="movie" genre={genre} sort={sort} />
        </>
        <>
          <h1 className="text-slate-200 my-8  w-full border-slate-100 border-b-4 text-3xl ">
            {genreName} Shows
          </h1>
          <TvShow media="discover" filter="tv" genre={genre} sort={sort} />
        </>
    </div>
  );
}
