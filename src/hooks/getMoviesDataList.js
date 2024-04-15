import Axios from "axios";
import { useMutation } from "react-query";
export const useList = () => {
    // const [movies, setList] = useState([]);
    // const [imdbMovie, setImdb] = useState([]);
    const url = "https://moviesapi.ir/api/v1/movies?page="

    const   homeMutation = useMutation( (page=1) => {
        return Axios.get(url + page).then((res) => fillData(res.data));
    })
    const fillData = (data) => {

        const imdb = data.data.filter((item) => { return item.imdb_rating.includes("9.") })

        return { data, imdb }




    }


    return [homeMutation]
}