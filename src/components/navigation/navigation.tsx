import { useEffect, useState } from 'react'
import '../styles/navigation.css'
import { Link } from "react-router-dom"
import { Flag } from '../../types'

const Navigation = () => {
    const [isActive, setActive] = useState<Flag>(false)


    const navHandler = () => {
        setActive(!isActive)
    }

    const onLinkHandler = () => {
        setActive(true)
    }

    useEffect(() => {
        document.body.classList.remove('active-nav');
        if (!isActive) {
            document.body.classList.add('active-nav');
        }
    })

    return (
        <div className="navigation-holder">
            <span onClick={navHandler} className='nav-hamburger'></span>
            <nav className='navigation'>
                <ul>
                    <li>
                        <Link onClick={onLinkHandler} to="/">Home</Link>
                    </li>
                    <li>
                        <Link onClick={onLinkHandler} to="/about">About</Link>
                    </li>
                    <li>
                        <Link onClick={onLinkHandler} to="/contact">Contact</Link>
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Navigation