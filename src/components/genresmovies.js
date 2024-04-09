import { useEffect, useState } from "react";
import "./genresmovies.css";
import { useLocation } from "react-router-dom";
import { useGenreMovies } from "../hooks/getGenreMoviesDataList";
import { Poster } from "../shared/poster";
import { PaginationPage } from "../shared/pagination";
import { Genre } from "../shared/genre";
export const GenresMovies = (props) => {
    const location = useLocation();
    const [movies, getMovies] = useGenreMovies();
    const [selectedPage, setSelectedPage] = useState(1);
    useEffect(()=>{
        window.scrollTo(0, 0);
   
    },[])
    useEffect(() => {
        window.scrollTo(0, 0);
        getMovies(location.state.id, selectedPage);
    }, [location.state,selectedPage])
    const handleSelectedPage = (page) => {
        page = page + 1
 
        setSelectedPage(page)

    }
    return (
        <section className="all-movies-body">
            <div className="container">
            
                <Genre mod={true} genre={props.genre} actived={location.state.id}/>
                <div className="d-flex justify-content-start flex-wrap">
                    {movies.data?.map((item) => { return (<Poster key={item.id} id={item.id} title={item.title} img={item.poster} year={item.year} />) })}
                </div>
                <PaginationPage pageCount={movies.metadata?.page_count} currentPage={movies.metadata?.current_page} handleSelectedPage={handleSelectedPage} />
            </div>
        </section>
    )
}