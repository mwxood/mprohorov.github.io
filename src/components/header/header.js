import '../styles/header.css';
import Navigation from '../navigation/navigation'
import FlexHolder from '../grid/flexHolder'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="header-bg full-width">
            <div className='header-inner mt-3'>
                <FlexHolder>
                    <Link className='logo' to="/">MProhorov</Link>
                    <Navigation />
                </FlexHolder>
            </div>
        </header>
    )
}

export default Header