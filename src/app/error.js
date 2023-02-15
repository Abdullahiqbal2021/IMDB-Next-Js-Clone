"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-12">
      <h1 className="text-xl">Something went wrong</h1>
      <button className="bg-amber-600 px-3 py-1 m-2 rounded hover:bg-amber-700 font-semibold" onClick={() => reset()}>Reload</button>
    </div>
  );
}
