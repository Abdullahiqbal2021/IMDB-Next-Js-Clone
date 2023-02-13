import Result from "@/components/Result";
import React from "react";

export default async function SearchPage({ params }) {
  console.log(params.searchTerm);
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${params.searchTerm}`
  );
  if (!res.ok) {
    throw new Error("Error Fetching search query");
  }
  const data = await res.json();
  const results = data.results;
  console.log(results);
  return (
    <div>
      {results &&
        results.length ===
        <h1 className="text-center pt-6">No Result Found</h1>}
      {results && <Result results={results} />}
    </div>
  );
}
