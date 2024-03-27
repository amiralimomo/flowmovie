import "./poster.css";
// import posterImage from "../images/tt0468569_poster.jpg";
export const Poster = (props) => {
    return (
        // <div key={props.id} classNameName="poster-body ">

        //     <a classNameName="poster-a" href="">
        //         <img classNameName="poster-img" src={props.img} alt="" />
        //     </a>
        //     <div classNameName="poster-detail">
        //         <span>{props.year}, {props.genre}</span>
        //         <a href="">
        //         <h3>{props.title}</h3>

        //         </a>
        //     </div>
        // </div>

        <div key={props.id} className="c-container noselect">
            <div className="canvas">
                <div className="tracker tr-1"></div>
                <div className="tracker tr-2"></div>
                <div className="tracker tr-3"></div>
                <div className="tracker tr-4"></div>
                <div className="tracker tr-5"></div>
                <div className="tracker tr-6"></div>
                <div className="tracker tr-7"></div>
                <div className="tracker tr-8"></div>
                <div className="tracker tr-9"></div>
                <div className="tracker tr-10"></div>
                <div className="tracker tr-11"></div>
                <div className="tracker tr-12"></div>
                <div className="tracker tr-13"></div>
                <div className="tracker tr-14"></div>
                <div className="tracker tr-15"></div>
                <div className="tracker tr-16"></div>
                <div className="tracker tr-17"></div>
                <div className="tracker tr-18"></div>
                <div className="tracker tr-19"></div>
                <div className="tracker tr-20"></div>
                <div className="tracker tr-21"></div>
                <div className="tracker tr-22"></div>
                <div className="tracker tr-23"></div>
                <div className="tracker tr-24"></div>
                <div className="tracker tr-25"></div>
                <div id="card">
                <img className="poster-img" src={props.img} alt="" />
                    {/* <p id="prompt">HOVER OVER :D</p> */}
                    <h3 id="prompt">{props.title}</h3>
                    <div className="title">watch</div>
                    <div className="subtitle">
                    <span className="discription">{props.year}, {props.genre}</span>
                    </div>

                </div>
            </div>
        </div>






    )
}