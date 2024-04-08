import Axios from "axios";
import { useState } from "react";
export const useGenreMovies = () => {
    const [movies, setMovies] = useState([]);
    const url = "https://moviesapi.ir/api/v1/genres/"
   const middleUrl="/movies?page="
    const getMovies = (id,selectedPage=1) => {
        Axios.get(url + id+middleUrl+selectedPage).then((res) => setMovies(res.data));

   
    }
    return [movies, getMovies]
}