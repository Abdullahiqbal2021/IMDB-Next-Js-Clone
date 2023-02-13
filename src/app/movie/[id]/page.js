import Image from "next/image";
import React from "react";

const API_KEY = process.env.API_KEY;

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`
  );
  return await res.json();
}
export default async function MoviePage({ params }) {
  const movieId = params.id;

  const movie = await getMovie(movieId);

  return (
    <div className="w-full">
      <div className="p-4 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={`${movie.title} image is not available`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
        ></Image>
        <div className="p-2">
          <h2 className="text-lg font-bold">{movie.title || movie.name}</h2>
          <p className="text-lg my-3">
            {" "}
            <span className="font-semibold mr-2">Overview :</span>{" "}
            {movie.overview}
          </p>
          <p className="my-1">
            <span className="font-semibold mr-2">Date Released: </span>{" "}
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="my-1">
            <span className="font-semibold mr-2"> Rating: </span>{" "}
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
