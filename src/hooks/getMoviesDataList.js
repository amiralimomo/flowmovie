import Axios from "axios";
import { useState } from "react";
export const useList = () => {
    const [movies, setList] = useState([]);
    // const [page, setPage] = useState(0);
    const url = "https://moviesapi.ir/api/v1/movies?page={page}"
   
    const getList = () => {
        Axios.get(url).then((res) => setList(res.data.data));

    }
    return [movies, getList]
}