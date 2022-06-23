import './about.css';


const About = (props) => {
    const info = props.info.map((item) => {
        return(
            <div key={item.about.id}>
                <h1 className='about-content-heading'><span>{item.about.heading}</span></h1>
                <p>{item.about.title}</p>
                <p>{item.about.content[0]}</p>
                <p>{item.about.content[1]}</p>
                <p>{item.about.content[2]}</p>
                <p><a href={item.about.url}><i className={item.about.icon}></i>{item.about.link}</a></p>
            </div>
        );
    })

    

    return(
        <div className='about-content section'>
            <div className='fixed-width-text'>
                {info}
            </div>
        </div>
    );
}


export default About;