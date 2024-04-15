import Axios from "axios";
import { useMutation } from "react-query";
export const useGenreMovies = () => {
    const middleUrl = "/movies?page="

    const url = "https://moviesapi.ir/api/v1/genres/"
    const generMovieMoutation = useMutation(( query ) => {
       
        return Axios.get(url + query.id+  middleUrl + query.page).then((res) => res.data);
    })

    return [generMovieMoutation]
}