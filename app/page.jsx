import Link from "next/link";
import Movie from "./movie/page";
import TvShow from "./tvShow/page";
export default async function Home() {
  return (
    <main>
   
      <div>
          <h1 className="text-slate-200 my-8  w-full border-slate-100 border-b-4 text-3xl ">
            Popular Movies
          </h1>
        <div>
          <Movie media="movie"  filter="popular"/>
        </div>
      </div>

      <div>
          <h1 className="text-slate-200 my-8  w-full border-slate-100 border-b-4 text-3xl ">
            Popular Tv-Shows
          </h1>
        <TvShow  media="tv" filter="popular"  />
      </div>
    </main>
  );
}
