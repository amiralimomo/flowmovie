import "./headermenu.css";
import { useNavigate } from 'react-router-dom';
export const Menu = (props) => {
    const navigate = useNavigate();
    const linkHandler = (url, params) => {
        if(params!=null){
            navigate(url,params)
        }
        else{

            navigate(url)
        }
        props.menuHandler(false)
    }
    return (
        <section className={props.menuToggle ? "menu menu-active" : "menu"}>
            <ul className="menu-ul">
                <li className="text-end m-1 ">
                    <i onClick={() => props.menuHandler(false)}
                        className={props.menuToggle ? "bi bi-x-lg menu-close-icon menu-close-icon-active" : "bi bi-x-lg menu-close-icon menu-close-icon-notactive"}></i>
                </li>
                <li><a className="menu-link" onClick={()=>{linkHandler("/")}}>Home</a></li>
                <li><a className="menu-link" onClick={()=>linkHandler("/genre",{ state: { id: 1 } })}>Genre</a></li>
                <li><a className="menu-link" onClick={()=>linkHandler("/")}>About</a></li>
            </ul>
        </section>
    )
}