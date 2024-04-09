
import { Carousel } from "./carousel";
import { TopRatedMovies } from "./topratedmovies";
import { ImdbMovies } from './imdbmovies';
import { useList } from "../hooks/getMoviesDataList";
import { useEffect } from "react";

export const Home = () => {
    const [movies, imdbMovies, getList] = useList();
    useEffect(() => {
        window.scrollTo(0, 0)
        getList();
    }, []);


    return (
        <section>
            <Carousel />
            <TopRatedMovies list={movies} />
            <ImdbMovies list={imdbMovies} />
        </section>
    )
}