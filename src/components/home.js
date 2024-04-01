
import { Carousel } from "./carousel";
import { TopRatedMovies } from "./topratedmovies";
import { ImdbMovies } from './imdbmovies';
import { useList } from "../hooks/getMoviesDataList";
import { useEffect } from "react";

export const Home = () => {
    const [movies, imdbMovies, getList] = useList();
    useEffect(() => {
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