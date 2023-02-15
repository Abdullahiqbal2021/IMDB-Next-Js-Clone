import Casts from "@/components/Casts";
import Image from "next/image";
import React from "react";
// import ''

const API_KEY = process.env.API_KEY;

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US&page=1`
  );
  return await res.json();
}
async function getCasts(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&page=1`
  );
  return await res.json();
}
export default async function MoviePage({ params }) {
  const movieId = params.id;

  const movie = await getMovie(movieId);
  const casts = await getCasts(movieId);
  // console.log(casts.cast);

  return (
    <div className="w-full">
      <div className="p-4 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          priority
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path
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
            {Math.floor(movie.vote_average)} / 10
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto md:space-x-6 overflow-auto">
        <table className="w-full  border-amber-600 border-2">
          <thead className="text-amber-500 font-bold">
            <tr>
              <th className="py-4 ">Cast</th>
              <th>Original Name</th>
              <th>Character</th>
              <th>Department</th>
            </tr>
          </thead>
          <Casts casts={casts} />
        </table>
      </div>
    </div>
  );
}
