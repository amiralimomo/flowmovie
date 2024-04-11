import Axios from "axios";

import { useMutation } from "react-query";
export const useSearch = () => {

    const url = "https://moviesapi.ir/api/v1/movies?q="
    const middleUrl="&page="

const searchMutation=useMutation((query,selectedPage=1) =>{
    return Axios.get(url + query+middleUrl+selectedPage).then((res) =>   res.data);
})





    return [searchMutation]
}