import TvShowComp from "./tvShowComp";
export default async function tvShow({ media, filter, sort, genre, search }) {
  const url = "https://api.themoviedb.org/3/";
  const data = await fetch( media ?
    `${url}${media}/${filter}?api_key=${process.env.API_KEY}&language=en-US&sort_by=${sort}&with_genres=${genre}&query=${search}` : `${url}movie/popular?api_key=${process.env.API_KEY}&language=en-US&sort_by=${sort}&with_genres=${genre}&query=${search}`
  );
  const res = await data.json();
  return (
    <>
      <div className="grid gap-5  text-slate-200 grid-cols-fluid max-sm:grid-cols-2">
        {res.results?.map((show) => (
          <div key={show.id}>
          <TvShowComp
          
            title={show.name}
            image={show.poster_path}
            id={show.id}
            release={show.first_air_date}
            rating={show.vote_average}
          />
          </div>
        ))}
      </div>
    </>
  );
}
