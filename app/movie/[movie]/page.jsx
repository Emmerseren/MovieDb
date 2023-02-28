import Image from "next/image";
import Reviews from "@/components/review/reviews";

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 5 } }
  );
  const dataProvider = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 5 } }
    
  );
  const res = await data.json();
  return (
    <div className="grid w-fit py-10">
      <div className="text-slate-200 font-bold  ">
        <h2 className="text-2xl">{res.title}</h2>
        <Image
          alt={res.title}
          className="col-span-2 my-5 rounded-md "
          src={
            res.backdrop_path
              ? imagePath + res.backdrop_path
              : "/assets/No-Image-Placeholder.png"
          }
          width={800}
          height={800}
          priority
        />
        <div className="grid pb-7 gap-2  ">
          <h2 className="text-lg font-bold items-center gap-3 flex">
            
            Released: {" "} <p className="text-sm text-slate-400"> {new Date(res.release_date).getFullYear()}</p>
          </h2>
          <h2 className="flex text-lg font-bold items-center gap-3">
            Runtime: {" "} <p className="text-sm text-slate-400"> {res.runtime}  min </p>{" "}
          </h2>
          <h2 className="flex-wrap sm:flex items-center text-lg font-bold gap-3 ">
            Genre:{" "}
            <div className="flex gap-3">
            
            {res.genres.map((obj) => (
              <p key={obj.name} className="text-sm text-slate-400">{obj.name},</p>
              ))}{" "}
              </div>
          </h2>
          <h2 className="flex-wrap items-center text-lg font-bold gap-3">
            overview:
            <p className="text-sm text-slate-400 ">{res.overview}</p>
          </h2>
        </div>
        <h2 className={res.status== "Released" ? "bg-lime-700 inline-block my-2 py-2 px-4 rounded-md"  : "bg-red-700 inline-block my-2 py-2 px-4 rounded-md" }>
          {" "}
          {res.status}{" "}
        </h2>
      </div>
      <Reviews movieID={movie} type="movie"/>
    </div>
  );
}
