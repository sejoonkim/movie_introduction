import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/MovieBlock.css";
import { Link } from "react-router-dom";

function Movie(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const getMovie = async () => {
    const {
      data: {
        data: { movie },
      },
    } = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${props.location.state.id}`
    );
    setMovie(movie);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <>
          <div className="movie">
            <img
              className="movie__large-image"
              src={movie.large_cover_image}
              alt={movie.title_long}
              title={movie.title_long}
            />
            <div className="movie__data">
              <div className="movie__top">
                <h3 className="movie__title">
                  {movie.title_long} Query was successful
                </h3>
                <h3 className="movie__rating">{movie.rating}</h3>
              </div>
              <div className="movie__middle">
                <h3 className="movie__like">Like : {movie.like_count}</h3>
                <h3 className="movie__count">
                  Download : {movie.download_count}
                </h3>
              </div>

              <p className="movie__description">{movie.description_full}</p>
            </div>
          </div>
          <Link to={{ pathname: `/movies` }}>리스트로 돌아가기</Link>
        </>
      )}
    </section>
  );
}

export default Movie;
