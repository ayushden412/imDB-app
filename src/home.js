import React, { useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
	const [movies, setMovies] = useState([]);

	const getMovieRequest = async () => {
		const url = `https://www.omdbapi.com/?s=avengers&apikey=a9118a3a`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);

	return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        movies.map(movie => (
                            <>
                                <div className="posterImage">
                                    <img src={`${movie.Poster}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.Title: ""}</div>
                                </div>
                            </>
                        ))
                    }
                </Carousel>
            </div>
        </>
    );
};

export default Home;
