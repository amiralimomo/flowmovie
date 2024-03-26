import "./genre.css";
import { useEffect } from 'react';

import { useGenre } from "../hooks/getGenreDataList";
export const Genre = () => {
    const [genre, getGenre] = useGenre();
    useEffect(() => {

        getGenre()
    }, [])
    return (
        <div className="genre-body">
            <ul className="d-flex flex-wrap">

                { genre.map((item)=>{return( <li key={item.id} className="gener-li" ><a className="gener-a" href="">{item.name}</a></li>)})}
                


            </ul>
        </div>
    )
}