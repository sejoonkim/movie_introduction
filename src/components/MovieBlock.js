import React from "react";
import "./MovieBlock.css";
import { Link } from "react-router-dom";

function Movie({ id, year, title, summary, poster, genres, rating }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <div className="movie__top">
          <h3 className="movie__title">{title}</h3>
          <h3 className="movie__rating">{rating}</h3>
        </div>

        <p className="movie__summary">{summary.slice(0, 180)}...</p>

        <Link
          to={{
            pathname: `/movie/${id}`,
            state: {
              year,
              title,
              summary,
              poster,
              genres,
            },
          }}
        >
          자세히 보기
        </Link>
      </div>
    </div>
  );
}

export default Movie;
