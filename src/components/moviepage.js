import "./moviepage.css";
import imdbimg from "../images/icons8-imdb-48.png";
import { ImageSlider } from "./moreimageshow";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useMovie } from "../hooks/getMovieData";
import { Loading } from "../shared/loading";

export const MoviePage = () => {

    const location = useLocation();
    const [movieMountation] = useMovie();

    useEffect(() => {
        window.scrollTo(0, 0)
        movieMountation.mutate(location.state.id);

    }, [])

    return (
        <section className="movie-page-body">
            {movieMountation.isLoading &&       <Loading />}
      
            <div className="container pt-5 pb-5">
                <div className=" movie-page-element">
                    <div>
                        <img className="movie-poster-img" src={movieMountation?.data?.poster} alt="" />
                    </div>
                    <div className="movie ">
                        {/* <h1>The Dark Knight</h1> */}
                        <h1>{movieMountation?.data?.title}</h1>
                        <div className="movie-detail pt-2">

                            <span className="movie-year">{movieMountation?.data?.year}</span><span >|</span>
                            <span className="movie-year">{movieMountation?.data?.genres?.map((item, ind) => { return <span className="pe-1" key={ind}>{item}</span> })}</span><span >|</span>
                            <span className="movie-year">{movieMountation?.data?.country}</span>
                        </div>
                        <div className="raiting pb-3  line">
                            <div className="d-flex align-items-center">
                                <img className="imdb-img" src={imdbimg} alt="" />
                                <span className="ps-2 raiting-span">{movieMountation?.data?.imdb_rating}</span>

                            </div>
                            <div className="d-flex align-items-center">
                                <i className="bi bi-alarm"></i>
                                <span className="ps-2 raiting-span">{movieMountation?.data?.runtime}</span>

                            </div>
                        </div>
                        <div className="pt-3 line">
                            <p className="discription">{movieMountation?.data?.plot}</p>
                        </div>
                        <div className="pt-3 director">
                            <span>Directors:</span>  <span>{movieMountation?.data?.director}</span>
                        </div>
                        <div className="pt-3 director">
                            <span>Actors:</span>  <span>{movieMountation?.data?.actors}</span>
                        </div>
                    </div>
                </div>
            </div>
            <ImageSlider images={movieMountation?.data?.images} />

        </section>
    )
}