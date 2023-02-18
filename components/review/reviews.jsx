import Review from "./review";
const reviews = async ({ movieID, type }) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/${type}/${movieID}/reviews?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 5 } }
  );
  const res = await data.json();
  console.log(res);
  return (
    <>
      <div className="grid gap-10 py-5">
        {res.results.map((obj) => (
          <Review data={obj} rating={obj.author_details.rating} />
        ))}
      </div>
    </>
  );
};

export default reviews;
