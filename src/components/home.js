
import { Carousel } from "./carousel";
import { TopRatedMovies } from "./topratedmovies";
import { ImdbMovies } from './imdbmovies';
import { useList } from "../hooks/getMoviesDataList";
import { useEffect } from "react";
import { Loading } from "../shared/loading";
// import { Loading } from "../shared/loading";
export const Home = () => {
    const [homeMutation, isLoading, isError, error] = useList();
    useEffect(() => {
        window.scrollTo(0, 0)
        // getList();
    }, []);


    return (
        <section>
         
            {isLoading && <Loading />}
        
            <Carousel />
            <TopRatedMovies list={homeMutation?.data} />
            <ImdbMovies list={homeMutation?.imdb} />
        </section>
    )
}