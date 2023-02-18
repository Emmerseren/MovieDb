import Link from "next/link";
import Image from "next/image";

export default function MovieComp({ key, title, image, id, release, rating }) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  return (
    <Link key={key}  href={`movie/${id}`} className="">
      <h1 className="truncate font-bold text-1xl">{title}</h1>
      <div className="max-w-lg ">
        <Image
          className="my-5 w-full max-w-xl hover:scale-105 ease-in-out duration-100"
          src={image ? imagePath + image :"/assets/No-Image-Placeholder.png" } 
          width={200}
          height={500}
          alt={title}
          priority
        />
      </div>
      <div className="flex justify-between">
        <h2 className="text-sm font-bold">{new Date(release).getFullYear()}</h2>
        <div className="flex gap-2">
          <div className="px-2 grid content-center text-slate-900 text-sm font-bold rounded-sm bg-yellow-300">
            IMDb
          </div>
          {rating}
        </div>
      </div>
    </Link>
  );
}
