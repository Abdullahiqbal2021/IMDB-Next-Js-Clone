import Pagination from "@/components/Pagination";
import Result from "@/components/Result";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "top_rated";
  const page = searchParams.page || 1;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${genre}?api_key=${API_KEY}&language=en-US&page=${page}`,
    { next: { revalidate: 0 } }
  );
  const data = await res.json();
  if (data.errors) {
    return <h1 className="text-2xl text-center text-amber-500 mt-20">Page Not Found</h1>
  }
  if (!res.ok) {
    console.log("res is", data);
    throw new Error("Something went wrong while fetching");
  }
  // console.log(data.results);
  return (
    <main className="pb-7">
      <Result results={data.results} />
      <Pagination total_pages={data.total_pages} genre={genre} />
    </main>
  );
}
