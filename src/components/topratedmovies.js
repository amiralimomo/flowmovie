import "./topratedmovies.css";
import {Poster} from "../shared/poster";
import { useEffect } from "react";
import {useList} from "../hooks/getMoviesDataList";
export const TopRatedMovies = () => {
    const [movies, getList]=useList();
    useEffect(()=>{
        getList();
    },[])
    return (<section className="top-rated-body ">
        <div className="container">
            <div className="d-flex flex-wrap">
                <div className="top-rated-detail">
                    <h2 className="top-rated-title">Popular Movies to Watch Now</h2>
                    <span className="top-rates-discription">Most watched movies by days</span>
                </div>
                {movies.map((item)=>{return (<Poster id={item.id} title={item.title} img={item.poster} year={item.year} genre={item.genres[0]}/>)})}
                
               {/* <Poster/>
               <Poster/>
               <Poster/>
               <Poster/>
               <Poster/>
               <Poster/>
               <Poster/>
               <Poster/>
               <Poster/>
               <Poster/> */}
              
              
            </div>
        </div>
    </section>)
}