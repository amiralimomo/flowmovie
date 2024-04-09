import "./moviepage.css";
import poster from "../images/tt0468569_poster.jpg";
import imdbimg from "../images/icons8-imdb-48.png";
// import wideposter from "../images/d1.jpg";
// import wideposter2 from "../images/d2.jpg";
// import wideposter3 from "../images/d3.jpg";
import { ImageSlider } from "./moreimageshow";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useMovie } from "../hooks/getMovieData";

export const MoviePage = () => {

    const location = useLocation();
    const [movie, getMovie] = useMovie();
  
    useEffect(() => {
        window.scrollTo(0, 0)
        getMovie(location.state.id);

    }, [])

    return (
        <section className="movie-page-body">
            <div className="container pt-5 pb-5">
                <div className="d-flex justify-content-start">
                    <div>
                        <img className="movie-poster-img" src={movie.poster} alt="" />
                    </div>
                    <div className="movie ms-3">
                        {/* <h1>The Dark Knight</h1> */}
                        <h1>{movie.title}</h1>
                        <div className="movie-detail pt-2">

                            <span className="movie-year">{movie.year}</span><span >|</span>
                            <span className="movie-year">{movie.genres?.map((item, ind) => { return <span className="pe-1" key={ind}>{item}</span> })}</span><span >|</span>
                            <span className="movie-year">{movie.country}</span>
                        </div>
                        <div className="raiting pb-3  line">
                            <div className="d-flex align-items-center">
                                <img className="imdb-img" src={imdbimg} alt="" />
                                <span className="ps-2 raiting-span">{movie.imdb_rating}</span>

                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-alarm"></i>
                                <span className="ps-2 raiting-span">{movie.runtime}</span>

                            </div>
                        </div>
                        <div className="pt-3 line">
                            <p className="discription">{movie.plot}</p>
                        </div>
                        <div className="pt-3 director">
                            <span>Directors:</span>  <span>{movie.director}</span>
                        </div>
                        <div className="pt-3 director">
                            <span>Actors:</span>  <span>{movie.actors}</span>
                        </div>
                    </div>
                </div>
            </div>
                <ImageSlider images={movie.images} />
          
        </section>
    )
}