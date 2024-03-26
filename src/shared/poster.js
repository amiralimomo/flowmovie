import "./poster.css";
// import posterImage from "../images/tt0468569_poster.jpg";
export const Poster = (props) => {
    return (
        <div key={props.id} className="poster-body">

            <a className="poster-a" href="">
                <img className="poster-img" src={props.img} alt="" />
            </a>
            <div className="poster-detail">
                <span>{props.year}, {props.genre}</span>
                <a href="">
                <h3>{props.title}</h3>

                </a>
            </div>
        </div>
    )
}