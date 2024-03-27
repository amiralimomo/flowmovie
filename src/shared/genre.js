import "./genre.css";
import { useEffect } from 'react';


export const Genre = (props) => {
   
    return (
        <div className="genre-body">
            <div className="genre-title-parent">
                <span  className={props.mod?"gener-a-light genre-title":"gener-a genre-title"}>Movies Genre</span>
            </div>
            <ul className="d-flex flex-wrap">

                { props.genre.map((item)=>{return( <li key={item.id} className="gener-li" ><a className={props.mod?"gener-a-light":"gener-a"}href="">{item.name}</a></li>)})}
                


            </ul>
        </div>
    )
}