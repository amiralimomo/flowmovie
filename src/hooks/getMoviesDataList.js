import Axios from "axios";
import { useState, useEffect } from "react";
export const useList = () => {
    const [movies, setList] = useState([]);
    const [imdbMovie, setImdb] = useState([]);
    
    // const [page, setPage] = useState(0);
    const url = "https://moviesapi.ir/api/v1/movies?page={page}"
    const fillData = (data) => {
        setList(data)

        if (imdbMovie.length === 0) {

            const imdb = data.filter((item) => { return item.imdb_rating.includes("9.") })
            setImdb(imdb)
        }

    }
    const getList = async() => {
       await Axios.get(url).then((res) => fillData(res.data.data));


    }
    useEffect(() => {
        getList();
    }, []);
    return [movies, imdbMovie,getList]
}