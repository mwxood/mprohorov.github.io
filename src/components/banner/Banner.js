import './banner.css';

const Banner = (props) => {
    return(
        <div className='banner section'>
            <div className='banner-text d-flex align-items-center justify-content-center'>
                {props.title[0].banner.banner}
            </div>
        </div>
    );
}

export default Banner;