import Axios from "axios";
import { useState } from "react";
export const useSearch = () => {
    const [movies, setMovies] = useState([]);
    const url = "https://moviesapi.ir/api/v1/movies?q="

    const getMovies = (query) => {
        Axios.get(url + query).then((res) => setMovies(res.data));

   
    }
    return [movies, getMovies]
}