import Filter from "./filter";
export default async function filterGenre() {
    const url = "https://api.themoviedb.org/3/";
    const dataMovie = await fetch(
      `${url}genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`
    );
    const res = await dataMovie.json();

    const dataTv = await fetch(
      `${url}genre/tv/list?api_key=${process.env.API_KEY}&language=en-US`
    );
    const resTv = await dataTv.json();
    return(
        <>
        < Filter genreMovies={res} genreTv={resTv}/>
        </>
    )
}