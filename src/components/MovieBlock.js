import React from "react";
import "./MovieBlock.css";
import { Link } from "react-router-dom";

function Movie({ id, title, summary, poster, rating }) {
  return (
    <div className="movie">
      <img
        className="movie__small-image"
        src={poster}
        alt={title}
        title={title}
      />
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
              id,
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
