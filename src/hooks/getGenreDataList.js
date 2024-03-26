import Axios from "axios";
import { useState } from "react";
export const useGenre = () => {
    const [genre, setGenre] = useState([]);
    const url = "https://moviesapi.ir/api/v1/genres"
    const getGenre = () => {
        Axios.get(url).then((res) => setGenre(res.data));

    }
    return [genre, getGenre]
}