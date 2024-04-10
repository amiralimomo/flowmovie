import "./topratedmovies.css";
import {Poster} from "../shared/poster";


export const TopRatedMovies = (props) => {


    return (<section className="top-rated-body ">
        <div className="container">
            <div className="d-flex flex-wrap justify-content-center">
                <div className="top-rated-detail">
                    <h2 className="top-rated-title">Popular Movies to Watch Now</h2>
                    <span className="top-rates-discription">Most watched movies by days</span>
                </div>
                {props.list.data?.map((item)=>{return (<Poster key={item.id} id={item.id} title={item.title} img={item.poster} year={item.year} genre={item.genres[0]}/>)})}
                
           
              
              
            </div>
        </div>
    </section>)
}