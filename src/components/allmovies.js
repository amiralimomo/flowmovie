import "./allmovies.css";
import { useList} from "../hooks/getMoviesDataList";
import { useEffect,useState } from "react";
import {  PaginationPage} from "../shared/pagination";
import { Poster } from "../shared/poster";
export const AllMovies = () => {
    const  [movies, imdbMovie, getList]=useList();
    const [selectedPage, setSelectedPage] = useState(1);
    useEffect(() => { 
        getList(selectedPage);
    }
    , [selectedPage])
    const handleSelectedPage = (page) => {
        page = page + 1
        console.log(page)
        setSelectedPage(page)

    }
    return (
        <section className="all-movies-body">
            <div className="container">
                <h1 className="searched-title">All Movies</h1>
                <div className="d-flex justify-content-start flex-wrap">
                    {movies.data?.map((item) => { return (<Poster key={item.id} id={item.id} title={item.title} img={item.poster} year={item.year}  />) })}
                </div>
                <PaginationPage pageCount={movies.metadata?.page_count} currentPage={movies.metadata?.current_page} handleSelectedPage={handleSelectedPage} />
            </div>
        </section>
    )
}