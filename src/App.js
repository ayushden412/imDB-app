import React, { useState } from "react";
import Axios from "axios";
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";
import Home from './home';

export const API_KEY = "a9118a3a";

function App() {
  const [searchQuery, updateSearchQuery] = useState("");

  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect("")
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };
  return (
    <div className="flex-auto flex-col">
      <div className="flex justify-between flex-row items-center p-2.5 text-2xl font-bold shadow-md">
        <div className="flex flex-row items-center">
          <img className="w-20 h-12 m-3.5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" />
        </div>
        <div className="flex flex-row px-2.5 py-2.5 rounded-md ml-8 w-2/4 bg-white">
          <input className="text-black text-base font-bold border-none outline-none ml-3.5"
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </div>
      </div>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
      <div className="flex flex-row flex-wrap p-7 gap-6 justify-evenly">
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
          <>
          <div className="bg-black flex-1">
            <h1 className="text-yellow-500 text-4xl font-bold">Featured Today</*Yellow*//h1>
          </div>
          <Home/>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
