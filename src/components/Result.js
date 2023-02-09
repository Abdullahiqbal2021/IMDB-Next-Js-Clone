import React from "react";

export default function Result({ results }) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>{result.title}</div>
      ))}
    </div>
  );
}
