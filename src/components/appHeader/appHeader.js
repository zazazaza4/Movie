import './appHeader.scss';
import imageLogo from '../../assets/icon.png';

const AppHeader = () => {
    return (
        <header className="header">
            <div className="header__body _container">
                <div className="header__logo">
                    <a href=""><img src={imageLogo} alt="icon"/></a>
                </div>
               <div className='header__menu'>
                    <div className="header__icon">
                        <span></span>
                        <div className="header__content">
                            <nav className="header__nav">
                                <ul className="header__list">
                                    <li className="header__item">
                                        <a href="#" className="header__link">
                                            Home
                                        </a>
                                    </li>
                                    <li className="header__item">
                                        <a href="#" className="header__link">
                                            Movies
                                        </a>
                                    </li>
                                    <li className="header__item">
                                        <a href="#" className="header__link">
                                            TV Series
                                        </a>
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