import "./imdbmovies.css";

import { Poster } from "../shared/poster";
export const ImdbMovies = (props) => {

    return (

        <div className="imdb-body ">
            <div className="container">
                <div className="imdb-detail">
                    <h2>IMDb</h2>
                    <span>The highest imdb rating among movies</span>
                </div>
                <div className="d-flex justify-content-center flex-wrap">
                   
                    {props.list.map((item)=>{return (<Poster key={item.id}  id={item.id} title={item.title} img={item.poster} year={item.year} genre={item.genres[0]}/>)})}
                </div>
            </div>
        </div>
    )
}