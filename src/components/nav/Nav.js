import {useEffect, useState} from 'react';
import pdf from '../../img/CV_Mihail.pdf';
import './nav.css';

const Nav = () => {
    const [isActive, setActive] = useState('false');

    const navHandler = () => {
        setActive(!isActive);
    }

    useEffect(() => {
        document.body.classList.remove('active-nav');
        if(!isActive) {
            document.body.classList.add('active-nav');
        } 
        
    });

    return(
        <nav className={`navigation ${!isActive ? 'active-menu' : ''}`}>
            <span onClick={navHandler} className='nav-hamburger'></span>
            <div className='nav-holder'>
                <ul>
                    <li><a href="https://github.com/mwxood"><i className="fa-brands fa-github"></i>GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/mihail-prohorov-76869041/"><i class="fa-brands fa-linkedin"></i>LinkedIn</a></li>
                    <li><a href={pdf}><i class="fa-solid fa-file-pdf"></i>Download CV</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;