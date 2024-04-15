import Axios from "axios";
import { useMutation } from "react-query";
export const useGenreMovies = () => {
    const middleUrl = "/movies?page="

    const url = "https://moviesapi.ir/api/v1/genres/"
    const generMovieMoutation = useMutation((id, selectedPage = 1) => {
        return Axios.get(url + id + middleUrl + selectedPage).then((res) => res.data);
    })

    return [generMovieMoutation]
}