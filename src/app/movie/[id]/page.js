import MovieContainer from "@/src/containers/movie";
import { notFound } from "next/navigation";
import React from "react";
import Movies from "@/src/mocks/movies.json";

function MoviePage({ params }) {
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );
  if (!movieDetail) {
    notFound();
  }
  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
