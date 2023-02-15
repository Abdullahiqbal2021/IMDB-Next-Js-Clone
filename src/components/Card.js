import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ result }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt={`${result.title} image is not available`}
          width={600}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200 mx-auto"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        ></Image>
        <div className="line-clamp-2 text-md">
          <p>{result.overview}</p>
        </div>
        <h2 className="truncate font-bold text-lg">
          {result.title || result.original_title || ""}
        </h2>
      </Link>
    </div>
  );
}
