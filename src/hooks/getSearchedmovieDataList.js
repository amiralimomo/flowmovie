import Axios from "axios";
import { useState } from "react";
export const useSearch = () => {
    const [movies, setMovies] = useState([]);
    const url = "https://moviesapi.ir/api/v1/movies?q="
   const middleUrl="&page="
    const getMovies = (query,selectedPage=1) => {
        Axios.get(url + query+middleUrl+selectedPage).then((res) => setMovies(res.data));

   
    }
    return [movies, getMovies]
}