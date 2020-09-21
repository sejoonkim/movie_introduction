import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import MovieBlock from "../components/MovieBlock.js";
import { debounce } from "lodash";

function Movies() {
  const [isLoading, setIsLoading] = useState(true);
  const [movieList, setMovieList] = useState(null);

  let page = 7;
  let prevPage = 6;
  let scroll_position;
  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    setMovieList(movies);
    setIsLoading(false);
  };

  const addMovies = async (list) => {
    if (list && page === prevPage + 1) {
      prevPage = page;

      const {
        data: {
          data: { movies },
        },
      } = await axios.get(
        `https://yts.mx/api/v2/list_movies.json?limit=4&page=${page}`
      );
      const newMovieList = list.slice();
      const newArray = newMovieList.concat(movies);
      setMovieList(newArray);
      page = page + 1;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
  }, [movieList]);

  const checkScroll = debounce(() => {
    scroll_position = window.scrollY;
    if (scroll_position > document.body.scrollHeight - 700)
      addMovies(movieList, page);
  }, 250);

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
          {movieList.map((movie) => {
            return (
              <MovieBlock
                key={movie.id}
                id={movie.id}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
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
