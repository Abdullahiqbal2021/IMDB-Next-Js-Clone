import Result from "@/components/Result";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "top_rated";

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${genre}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Something went wrong while fetching");
  }
  // console.log(data.results);
  return (
    <main>
      <Result results={data.results} />
    </main>
  );
}
