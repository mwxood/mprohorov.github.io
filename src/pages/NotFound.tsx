import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className='header-content d-flex align-items-center justify-content-center'>
            <div className='text-center'>
                <div className='intro-text'>
                    404 Error
                </div>

                <h1 className='mb-3'>404 Error</h1>
                <h3 className='mb-3'>Couldn't launch :(</h3>
                <p>Page Not Found - lets take you <Link to="/">BACK</Link></p>
            </div>
        </div>
    )
}

export default NotFound