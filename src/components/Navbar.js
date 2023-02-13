import React from "react";
import NavBarItem from "./NavBarItem";

export default function Navbar() {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <NavBarItem title="Trending" param="top_rated" />
      <NavBarItem title="Top Rated" param="popular" />
      <NavBarItem title="Latest" param="now_playing" />
    </div>
  );
}
