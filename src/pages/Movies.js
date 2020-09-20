import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieBlock from "../components/MovieBlock.js";

function Movies() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState(null);
  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    setMovies(movies);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => {
            return (
              <MovieBlock
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                rating={movie.rating}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Movies;
