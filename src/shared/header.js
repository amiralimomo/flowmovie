import './header.css';
import logo from '../images/fmovie-high-resolution-logo_prev_ui.png';
import v from '../images/icons/v.png';
import search from '../images/icons/icons8-search-50.png';
export const Header = () => {
    return (
        <div className="header d-flex justify-content-around">
            <div className="d-flex justify-content-start">
                <div><img className="header-logo" src={logo} alt="logo" /></div>
                <ul className="d-flex justify-content-start align-items-stretch header-ul">
                    <li className="d-flex justify-content-center align-items-center header-li"><a className="header-a" href="/">Home</a> <img className="header-link-icon" src={v} alt="icon" /></li>
                    <li className="d-flex justify-content-center align-items-center header-li"><a className="header-a" href="/">Blog</a> <img className="header-link-icon" src={v} alt="icon" /></li>
                    <li className="d-flex justify-content-center align-items-center header-li"><a className="header-a" href="/">About</a> <img className="header-link-icon" src={v} alt="icon" /></li>
                </ul>
            </div>
            <div className="d-flex justify-content-center align-items-center " >
                <form className='header-search-form '>
                    <input className='header-search '  placeholder='Search...' type="text" />
                    <button className='header-search-button'><img className='header-form-icon' src={search} alt="" /></button>
                </form>
            </div>

        </div>
    )
}