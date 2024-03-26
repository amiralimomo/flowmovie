
import { Carousel } from "./carousel";
import { TopRatedMovies } from "./topratedmovies";
import {ImdbMovies} from './imdbmovies';
import {useList} from "../hooks/getMoviesDataList";

export const Home=()=>{
    const [movies,imdbMovies,getList]=useList();
   
  

    return (
        <section>
            <Carousel/>
            <TopRatedMovies list={movies}/>
            <ImdbMovies  list={imdbMovies}/>
        </section>
    )
}