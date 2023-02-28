import Link from "next/link";
import Image from "next/image";

export default function tvShowComp({ key, title, image, id, release, rating }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
      <Link key={key} href={`tvShow/${id}`}>
        <h1 className="truncate text-1xl font-bold">{title}</h1>
        <div className="max-w-lg group relative  ">
          <Image
            className="my-5  w-full  hover:scale-105  ease-in-out duration-100"
            src={image ? imagePath + image :"/assets/No-Image-Placeholder.png"}
            width={200}
            height={500}
            alt={title}
            priority
          />
             <div class="absolute top-0 p-4  justify-center left-0 w-full h-0 bg-slate-700 opacity-0 group-hover:h-full group-hover:opacity-100 bg-opacity-70 duration-300 grid">
          <h2 className="text-sm justify-self-start   row-span-full font-bold">
          Released:  {new Date(release).getFullYear()}
          </h2>

          <div className="rounded-full w-fit   p-2   justify-self-center  text-xl flex self-center border-slate-200 border-2">
            <div
              className={`radial-progress  ${
                rating >= 7
                  ? "text-green-300"
                  : rating < 4
                  ? "text-red-300"
                  : "text-yellow-300"
              }`}
              style={{ "--value": rating * 10 }}
            >
              <p className="text-slate-200">{Math.round(rating * 10) / 10}</p>
            </div>
          </div>
          <p className="font-bold">User Reviews</p>
        </div>
        </div>
      
      </Link>
  );
}
