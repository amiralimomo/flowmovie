import "./moreimageshow.css";
import { useToggle } from "../hooks/useshowimage";
export const ImageSlider = (props) => {
    const [toggle, active, notActive] = useToggle();
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {props.images?.map((item, ind) => {
                return (
                    <a onClick={() => { active() }} key={ind}>

                        <img className="more-movie-img m-2" src={item} alt="" />

                    </a>
                )
            })}
            <div className={toggle ? "d-active" : "d-notactive"}>
                <div className="more-image-parent d-flex justify-content-center align-items-center">
                    <div id="carouselExample" className="carousel ">
                        <div className="carousel-inner">
                            {props.images?.map((item, ind) => {
                                return (
                                    <div key={ind} className={ind==0?"carousel-item active":"carousel-item "} >
                                        <img className="more-movie-img-active m-2" src={item} alt="" />
                                    </div>
                                )
                            })}

                      
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        <button type="button" onClick={()=>{notActive()}} class="btn-close" aria-label="Close"></button>
                    </div>

                </div>
            </div>
        </div>

    )
}
