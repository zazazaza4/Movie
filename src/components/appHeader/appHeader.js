import { useState } from 'react';
import { NavLink } from "react-router-dom";

import './appHeader.scss';
import imageLogo from '../../assets/icon.png';

const AppHeader = () => {
    const [visibilityMenu, setVisibilityMenu] = useState(false);

    const openMenu = () => {
        if (window.innerWidth < 900) setVisibilityMenu(!visibilityMenu);
    }
    
    const classNameMenu = visibilityMenu ? '_activeMenu' : null;
    if (visibilityMenu) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    return (
        <header className="header">
            <div className="header__body _container">
                <div className="header__logo">
                    <NavLink to="/"><img src={imageLogo} alt="icon"/></NavLink>
                </div>
               <div className='header__menu'>
                    <div className={`header__icon ${classNameMenu}`} onClick={openMenu}>
                        <span></span>
                        <div className={`header__content  ${classNameMenu}`}>
                            <nav className="header__nav">
                                <ul className="header__list">
                                    <li className="header__item">
                                        <NavLink  
                                            style={({ isActive }) => ({color: isActive ? "#FF4742" : "" })} 
                                            to="/" 
                                            className="header__link">                        
                                                Home
                                        </NavLink>
                                    </li>
                                    <li className="header__item">
                                        <NavLink 
                                            style={({ isActive }) => ({color: isActive ? "#FF4742" : "" })} 
                                            to="/movies/popular" 
                                            className="header__link">
                                                Movies
                                        </NavLink>
                                    </li>
                                    <li className="header__item">
                                        <NavLink 
                                            style={({ isActive }) => ({color: isActive ? "#FF4742" : "" })} 
                                            to="/tv-series" 
                                            className="header__link">
                                                TV Series
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
               </div>  
            </div>
        </header>
    )
}

export default AppHeader;