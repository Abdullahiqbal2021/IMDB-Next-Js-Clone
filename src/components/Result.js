import React from "react";
import Card from "./Card";

export default function Result({ results }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 px-9 sm:px-0 justify-center content-center">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
