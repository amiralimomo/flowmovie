import "./searchedpage.css";
import { useParams } from "react-router-dom";
import { useSearch } from "../hooks/getSearchedmovieDataList";
import { useEffect, useState } from "react";
import { Poster } from "../shared/poster";
import { PaginationPage } from "../shared/pagination";
import {Loading} from "../shared/loading";

export const SearchedPage = () => {
    const { moviename } = useParams();
    const [selectedPage, setSelectedPage] = useState(1);
   

    const [searchMutation] = useSearch();

    const handleSelectedPage = (page) => {
        page = page + 1
        console.log(page)
        setSelectedPage(page)

    }
    useEffect(()=>{
        searchMutation.mutate(moviename,selectedPage);
        window.scrollTo(0, 0)
    },[])
    

    useEffect(() => {
        window.scrollTo(0, 0)
       
        searchMutation.mutate(moviename,selectedPage);
    }, [moviename , selectedPage])


    return (
        <section className=" searched-body">
            {searchMutation.isLoading&& <Loading/>}
            <div className="container">

                <h1 className="searched-title">resoult of : {moviename}</h1>
                <div className="d-flex justify-content-center flex-wrap">
                    {searchMutation.data?.data.map((item) => { return (<Poster key={item.id} id={item.id} title={item.title} img={item.poster} year={item.year}  />) })}
                </div>
                <PaginationPage pageCount={searchMutation.data?.metadata.page_count} currentPage={searchMutation.data?.metadata.current_page} handleSelectedPage={handleSelectedPage} />
            </div>
        </section>
    )
}