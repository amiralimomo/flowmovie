import "./footer.css";
import logo from "../images/fmovie-high-resolution-logo_prev_ui.png";
import { Genre } from "./genre";

export const Footer = (props) => {
    return (<footer className=" footer">
        <div className="container">

            <div className="d-flex justify-content-between pt-3 footer-top">
                <div> <img className="footer-logo" src={logo} alt="" /></div>
                <div className="d-flex justify-content-end align-items-center">
                    <a className="link-intop-footer" href="">
                        <i className="bi bi-twitter"></i>
                        <span>twiter</span>
                    </a>
                    <a className="link-intop-footer" href="">
                        <i className="bi bi-instagram"></i>
                        <span>instagram</span>
                    </a>
                    <a className="link-intop-footer" href="">
                        <i className="bi bi-whatsapp"></i>
                        <span>whatsapp</span>
                    </a>
                    <a className="link-intop-footer" href="">
                        <i className="bi bi-telephone-fill"></i>
                        <span>phone</span>
                    </a>
                </div>
            </div>
            <div className="pt-3 pb-3">
                <Genre mod={true} genre={props.genre}/>
               
            </div>
        </div>
    </footer>)
}