import Axios from "axios";
import { useState } from "react";
export const useMovie = () => {
    const [movie, setMovie] = useState([]);
    const url = "https://moviesapi.ir/api/v1/movies/"
  
    const getMovie = (id=0) => {
        Axios.get(url+id).then((res) => setMovie(res.data));
       

    }
    return [movie, getMovie]
}