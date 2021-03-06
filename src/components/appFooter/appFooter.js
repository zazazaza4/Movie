import { Link } from "react-router-dom";
import {Github, Facebook, Twitter, Linkedin} from 'react-bootstrap-icons';

import './appFooter.scss';

const AppFooter = () => {
    return (
        <footer className="footer">
            <div className="footer__bg"></div>
             <div className="footer__left _container">

                <p className="footer__links">
                    <Link to="/">Home</Link>

                    <Link to="/about">About</Link>

                    <Link to="/faq">Faq</Link>

                    <Link to="/contact">Contact</Link>
                </p>
            
            </div>

            <div className="footer__right _container">

                <a href="/"><Github size={32}/></a>
                <a href="/"><Twitter size={32}/></a>
                <a href="/"><Linkedin size={32}/></a>
                <a href="/"><Facebook size={32}/></a>

            </div>
        </footer>
    )
}

export default AppFooter;