import "./moviepage.css";
import poster from "../images/tt0468569_poster.jpg";
import imdbimg from "../images/icons8-imdb-48.png";
export const MoviePage = (props) => {
    return (
        <section className="movie-page-body">
            <div className="container pt-5 pb-5">
                <div className="d-flex justify-content-start">
                    <div>
                        <img className="poster-img" src={poster} alt="" />
                    </div>
                    <div className="movie ms-3">
                        <h1>The Dark Knight</h1>
                        <div className="movie-detail pt-2">

                            <span className="movie-year">1999</span><span >|</span>
                            <span className="movie-year">dram ,action</span><span >|</span>
                            <span className="movie-year">usa</span>
                        </div>
                        <div className="raiting pb-3  line">
                            <div className="d-flex align-items-center">
                                <img className="imdb-img" src={imdbimg} alt="" />
                                <span className="ps-2 raiting-span">9.1</span>

                            </div>
                            <div className="d-flex align-items-center">
                                <i class="bi bi-alarm"></i>
                                <span className="ps-2 raiting-span">1h 40min</span>

                            </div>
                        </div>
                        <div className="pt-3 line">
                            <p className="discription">When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.</p>
                        </div>
                        <div className="pt-3 director">
                            <span>Directors:</span>  <span>Christopher Nolan</span>
                        </div>
                        <div className="pt-3 director">
                            <span>Actors:</span>  <span>Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}