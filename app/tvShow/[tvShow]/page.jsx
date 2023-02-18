import Image from "next/image";

export default async function tvShow({ params }) {
  const { tvShow } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/${tvShow}?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 5 } }
  );
  const res = await data.json();
  console.log(res);
  return (
    <div>
      <div className="text-slate-200  ">
        <h2 className="text-2xl">{res.name}</h2>
        <h2 className="text-lg">{res.release_date}</h2>
        <h2>Type: {res.type} </h2>
        <div className="w-fit-content">
          <Image
            alt={res.name}
            className="col-span-2 my-9 rounded-md  "
            src={res.backdrop_path ? imagePath + res.backdrop_path : "/assets/No-Image-Placeholder.png" }
            width={800}
            height={800}
            priority
          />
        </div>
        <h2 className="bg-slate-600 inline-block my-2 py-2 px-4 rounded-md">
          {" "}
          {res.status}{" "}
        </h2>
      </div>
    </div>
  );
}
