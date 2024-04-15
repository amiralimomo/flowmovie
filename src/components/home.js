
import { Carousel } from "./carousel";
import { TopRatedMovies } from "./topratedmovies";
import { ImdbMovies } from './imdbmovies';
import { useList } from "../hooks/getMoviesDataList";
import { useEffect } from "react";
import { Loading } from "../shared/loading";
// import { Loading } from "../shared/loading";
export const Home = () => {
    const [homeMutation] = useList();
    useEffect(() => {
        window.scrollTo(0, 0)
       homeMutation.mutate()
    }, []);


    return (
        <section>
         
            {homeMutation.isLoading && <Loading />}
            {homeMutation.isError && <Loading />}
        
            <Carousel />
            <TopRatedMovies list={homeMutation?.data?.data} />
            <ImdbMovies list={homeMutation?.data?.imdb} />
        </section>
    )
}