import MovieComp from "../../components/movieComp";

export default async function Movie({ media, filter, sort, genre, search }) {
  const url = "https://api.themoviedb.org/3/";
  const data = await fetch(
    `${url}${media}/${filter}?api_key=${process.env.API_KEY}&language=en-US&sort_by=${sort}&with_genres=${genre}&query=${search}`
  );
  const res = await data.json();
  return (
    <>
      <div className="grid gap-5  text-slate-200 grid-cols-fluid max-sm:grid-cols-2 ">
        {res.results.map((movie) => (
          <MovieComp
            key={movie.id}
            title={movie.title}
            image={movie.poster_path}
            id={movie.id}
            release={movie.release_date}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </>
  );
}
