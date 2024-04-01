import Axios from "axios";
import { useState, useEffect } from "react";
export const useList = () => {
    const [movies, setList] = useState([]);
    const [imdbMovie, setImdb] = useState([]);


    const url = "https://moviesapi.ir/api/v1/movies?page="
    const fillData = (data) => {
        setList(data)

        if (imdbMovie.length === 0) {

            const imdb = data.data.filter((item) => { return item.imdb_rating.includes("9.") })
            setImdb(imdb)
        }

    }
    const getList = async (page = 1) => {
        await Axios.get(url + page).then((res) => fillData(res.data));


    }
   
    return [movies, imdbMovie, getList]
}