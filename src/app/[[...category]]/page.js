import React from "react";
import HomeContainer from "@/src/containers/home";
import Movies from "@/src/mocks/movies.json";

const API_URL = "https://api.themoviedb.org/3"; // doğru TMDB API base URL

const getPopularMovies = async () => {
  const res = await fetch(
    `${API_URL}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
  );
  return res.json();
};
const getCategories = async () => {
  const res = await fetch(
    `${API_URL}/genre/movie/list?api_key=${process.env.API_KEY}&page=1`
  );
  return res.json();
};

async function Home({ params }) {
  let selectedCategory;

  const { results: populerMovies } = await getPopularMovies();
  const { genres: categories } = await getCategories();

  if (params.category?.length > 0) {
    selectedCategory = true;
  }
  console.log(categories);
  return (
    <HomeContainer
      populerMovies={populerMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? Movies.results.slice(0, 7) : [],
      }}
    />
  );
}

export default Home;
