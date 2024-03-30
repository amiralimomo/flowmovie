import "./searchedpage.css";
import { useParams } from "react-router-dom";
import { useSearch } from "../hooks/getSearchedmovieDataList";
import { useEffect } from "react";
import {Poster} from "../shared/poster";
export const SearchedPage = () => {
    const { moviename } = useParams();
    const [movies, getMovies] = useSearch();
    useEffect(() => {
        getMovies(moviename)
    }, [])
    return (
        <section className=" searched-body">
            <div className="container">

                <h1 className="searched-title">resoult of : {moviename}</h1>
                <div className="d-flex justify-content-start flex-wrap">
                    { movies.data?.map((item)=>{return(<Poster key={item.id}  id={item.id} title={item.title} img={item.poster} year={item.year} genre={item.genres[0]}/>)})}
                </div>
            </div>
        </section>
    )
}