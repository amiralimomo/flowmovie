import "./genre.css";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const Genre = (props) => {
    let navigate = useNavigate();
    return (
        <div className="genre-body">
            <div className="genre-title-parent">
                <span className={props.mod ? "gener-a-light genre-title" : "gener-a genre-title"}>Movies Genre</span>
            </div>
            <ul className="d-flex flex-wrap">

              
                {props.genre.map((item) => { return (<li key={item.id} className={props.actived==item.id?"gener-li actived-li":"gener-li"} ><a className={props.mod ? "gener-a-light" : "gener-a"} onClick={() => { navigate("/genre", { state: { id: item.id } }) }}>{item.name}</a></li>) })}


            </ul>
        </div>
    )
}