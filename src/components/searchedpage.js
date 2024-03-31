import "./searchedpage.css";
import { useParams } from "react-router-dom";
import { useSearch } from "../hooks/getSearchedmovieDataList";
import { useEffect, useState } from "react";
import { Poster } from "../shared/poster";
import { PaginationPage } from "../shared/pagination";

export const SearchedPage = () => {
    const { moviename } = useParams();
    const [selectedPage, setSelectedPage] = useState(1);
    const [movies, getMovies] = useSearch();
    const handleSelectedPage = (page) => {
        page = page + 1
        console.log(page)
        setSelectedPage(page)

    }

    useEffect(() => {
        getMovies(moviename, selectedPage)
    }, [moviename , selectedPage])


    return (
        <section className=" searched-body">
            <div className="container">

                <h1 className="searched-title">resoult of : {moviename}</h1>
                <div className="d-flex justify-content-start flex-wrap">
                    {movies.data?.map((item) => { return (<Poster key={item.id} id={item.id} title={item.title} img={item.poster} year={item.year}  />) })}
                </div>
                <PaginationPage pageCount={movies.metadata?.page_count} currentPage={movies.metadata?.current_page} handleSelectedPage={handleSelectedPage} />
            </div>
        </section>
    )
}