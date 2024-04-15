import "./allmovies.css";
import { useList} from "../hooks/getMoviesDataList";
import { useEffect,useState } from "react";
import {  PaginationPage} from "../shared/pagination";
import { Poster } from "../shared/poster";
export const AllMovies = () => {
    const  [homeMutation]=useList();
    const [selectedPage, setSelectedPage] = useState(1);
    useEffect(()=>{
        homeMutation.mutate(selectedPage);
    },[])
    useEffect(() => {   
            window.scrollTo(0, 0);
            homeMutation.mutate(selectedPage);
    }, [selectedPage])

    const handleSelectedPage = (page) => {
        page = page + 1
      
        setSelectedPage(page)

    }
    return (
        <section className="all-movies-body">
            <div className="container">
                <h1 className="searched-title">All Movies</h1>
                <div className="d-flex justify-content-start flex-wrap">
                    {homeMutation?.data?.data?.data?.map((item) => { return (<Poster key={item.id} id={item.id} title={item.title} img={item.poster} year={item.year}  />) })}
                </div>
                <PaginationPage pageCount={homeMutation.data?.data?.metadata?.page_count} currentPage={homeMutation?.data?.data.metadata?.current_page} handleSelectedPage={handleSelectedPage} />
            </div>
        </section>
    )
}