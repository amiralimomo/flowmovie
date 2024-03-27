import "./footer.css";
import logo from "../images/fmovie-high-resolution-logo_prev_ui.png";
export const Footer = () => {
    return (<footer className=" footer">
        <div className="container">

        <div className="d-flex justify-content-between pt-3">
            <div> <img className="footer-logo" src={logo} alt="" /></div>
            <div></div>
        </div>
        </div>
    </footer>)
}