import React, { useEffect, useState } from "react";
import Axios from "axios";
import { API_KEY } from "../App";
import styled from "styled-components";

const MovieInfoComponent = (props) => {
  const [movieInfo, setMovieInfo] = useState();
  const { selectedMovie } = props;

  useEffect(() => {
    Axios.get(
      `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
    ).then((response) => setMovieInfo(response.data));
  }, [selectedMovie]);
  return (
    <div className="flex flex-row px-5 py-7 justify-center border-b-1-gray-600">
      {movieInfo ? (
        <>
          <img className="h-2/5 w-2/5" src={movieInfo?.Poster} alt={movieInfo?.Title} />
          <div className="flex flex-col m-12.5">
            <span className="text-3xl font-semibold text-white mx-7 my-3 whitespace-nowrap overflow-hidden capitalize text-ellipsis opacity-80">
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </span>
            <span className="text-base font-medium text-white overflow-hidden mx-7 my-1 capitalize text-ellipsis opacity-50">
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </span>
            <span className="text-base font-medium text-white overflow-hidden mx-7 my-1 capitalize text-ellipsis opacity-50">
              Year: <span>{movieInfo?.Year}</span>
            </span>
            <span className="text-base font-medium text-white overflow-hidden mx-7 my-1 capitalize text-ellipsis opacity-50">
              Language: <span>{movieInfo?.Language}</span>
            </span>
            <span className="text-base font-medium text-white overflow-hidden mx-7 my-1 capitalize text-ellipsis opacity-50">
              Rated: <span>{movieInfo?.Rated}</span>
            </span>
            <span className="text-base font-medium text-white overflow-hidden mx-7 my-1 capitalize text-ellipsis opacity-50">
              Released: <span>{movieInfo?.Released}</span>
            </span>
            <span className="text-base font-medium text-white overflow-hidden mx-7 my-1 capitalize text-ellipsis opacity-50">
              Runtime: <span>{movieInfo?.Runtime}</span>
            </span>
            <span className="text-base font-medium text-white overflow-hidden mx-7 my-1 capitalize text-ellipsis opacity-50">
              Genre: <span>{movieInfo?.Genre}</span>
            </span>
            <span className="text-base font-medium text-white overflow-hidden mx-7 my-1 capitalize text-ellipsis opacity-50">
              Director: <span>{movieInfo?.Director}</span>
            </span>
            <span className="text-base font-medium text-white overflow-hidden mx-7 my-1 capitalize text-ellipsis opacity-50">
              Actors: <span>{movieInfo?.Actors}</span>
            </span>
            <span className="text-base font-medium text-white overflow-hidden mx-7 my-1 capitalize text-ellipsis opacity-50">
              Plot: <span>{movieInfo?.Plot}</span>
            </span>
          </div>
          <span className="text-base font-semibold text-black bg-gray-600 h-fit p-2 rounded-xl cursor-pointer opacity-80" onClick={() => props.onMovieSelect()}>X</*Close*//span>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default MovieInfoComponent;
