import Axios from "axios";
import { useState } from "react";
export const useMovie = () => {
    const [movie, setMovie] = useState([]);
    const url = "https://moviesapi.ir/api/v1/movies/4"
    const getMovie = () => {
        Axios.get(url).then((res) => setMovie(res.data));

    }
    return [movie, getMovie]
}