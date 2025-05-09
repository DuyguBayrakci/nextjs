import React from "react";
import Movies from "@/src/mocks/movies.json";
import Genres from "@/src/mocks/genres.json";
import { FeaturedMovie } from "../../components/featured-movie";
import { Categories } from "../../components/categories";
import { MoviesSection } from "@/src/components/movies-section";

function HomeContainer({ populerMovies, selectedCategory, categories }) {
  return (
    <div>
      <FeaturedMovie movie={Movies.results[6]} />
      <Categories categories={categories.slice(1, 6)} />
      {!!selectedCategory.movies.length && (
        <MoviesSection
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(1, 7)}
        />
      )}

      <MoviesSection title="Popular Films" movies={populerMovies.slice(1, 7)} />
      <MoviesSection
        title="Your Favorites"
        movies={Movies.results.slice(7, 13)}
      />
    </div>
  );
}

export default HomeContainer;
