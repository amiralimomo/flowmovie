import Axios from "axios";

import { useMutation } from "react-query";
export const useMovie = () => {
   
    const url = "https://moviesapi.ir/api/v1/movies/"
    const movieMountation = useMutation((id) => {
        return Axios.get(url + id).then((res) => res.data);
    })

    return [movieMountation]
}