import './header.css';
import logo from '../images/fmovie-high-resolution-logo_prev_ui.png';
import { Genre } from "./genre.js";
import search from '../images/icons/icons8-search-50.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Header = (props) => {
    const [hover, setHover] = useState(false)
    const [searchInput, setSearchInput] = useState("")
    let navigate = useNavigate();
    const onHandleHover = (prop) => {
        setHover(prop)
    }
    const formHndler=(e)=>{
        e.preventDefault();
        navigate(`/search/${searchInput}`)
    }
    return (
        <header className="header " >
            <div className='header-child d-flex justify-content-between container'>


                <div className="d-flex justify-content-start">
                    <div><img className="header-logo" src={logo} alt="logo" /></div>
                    <ul className="d-flex justify-content-start align-items-stretch header-ul">
                        <li className="d-flex justify-content-center align-items-center header-li"><a className="d-flex justify-content-center align-items-center header-li header-a" onClick={() => { navigate("/") }}>Home</a> </li>
                        <li className="d-flex justify-content-center align-items-center header-li"><span onMouseEnter={() => onHandleHover(true)} onMouseLeave={() => onHandleHover(false)} className="d-flex justify-content-center align-items-center header-li header-a" href="/">Movies      <div className={hover ? "d-block trans" : "d-none"} style={{}}>
                            <Genre genre={props.genre} />

                        </div></span>  <i className="bi bi-chevron-down header-link-icon"></i></li>
                        <li className="d-flex justify-content-center align-items-center header-li"><a className="d-flex justify-content-center align-items-center header-li header-a" href="/">About</a> </li>
                    </ul>
                </div>
                <div className="d-flex justify-content-center align-items-center " >

                    <form className='header-search-form ' onSubmit={formHndler}>
                        <input className='header-search ' onChange={(e) => setSearchInput(e.target.value)} placeholder='Search...' type="text" />
                        <button className='header-search-button' type="submit"><img className='header-form-icon' src={search} alt="" /></button>

                    </form>
                </div>

            </div>
        </header>
    )
}   