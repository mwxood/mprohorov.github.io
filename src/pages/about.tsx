import { useState, useEffect } from 'react'
import Img from '../images/img.jpg'
import { useSelector } from 'react-redux'
import { Fade } from "react-awesome-reveal"
import '../components/styles/resume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faReact, faGit, faSass } from '@fortawesome/free-brands-svg-icons'
import Skills from '../components/UI/Skills'
import Loader from '../components/UI/Loader'
import { JobType, Flag, InfoType } from '../types/'

const About = () => {
    const info = useSelector((state: InfoType) => state.info)
    const [loading, setLoading] = useState<Flag>(false)

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500);

    }, []);

    const jobs = () => {
        if (!info.items.length) {
            return
        }

        return info.items[3].jobPositions.map((job: JobType) => {
            return (
                <div key={job.id} className="resume-item">
                    <h4 className='mb-3'>{job.companyName}</h4>
                    <h5>{job.jobDate}</h5>
                    <p>{job.position}</p>
                </div>
            )
        })
    }

    jobs()

    return (

        <div className="inner-page">
            {loading && <Loader />}
            {info.items.length &&
                <div>
                    <div className='header-content d-flex align-items-center justify-content-center'>
                        <div className='text-center'>
                            <div className='intro-text'>
                                About
                            </div>

                            <h1 className='mb-3'>About me</h1>
                        </div>
                    </div>

                    <div className="container mt-5">
                        <Fade>
                            <div className="text-section about section">
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <img src={Img} alt="portfolio image" />
                                    </div>
                                    <div className="col-md-7">
                                        <div dangerouslySetInnerHTML={{ __html: info.items[1].aboutText }}></div>
                                        <p>{info.items[1].education}</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>


                        <div className='education-section section'>
                            <div className='header-content d-flex align-items-center justify-content-center mb-5'>
                                <div className='text-center'>
                                    <div className='intro-text'>
                                        RESUME
                                    </div>

                                    <h1 className='mb-3'>MY RESUME</h1>
                                </div>
                            </div>

                            <Fade>

                                <div className="text-section resume">
                                    <div className="row">

                                        <div className="col-md-6 mb-5">
                                            <div className="resume-item">
                                                <h4 className='mb-3'>Education</h4>
                                                <p><em>{info.items[2].education.universityLocation}</em></p>
                                                <p>{info.items[2].education.date}</p>
                                                <p>{info.items[2].education.educationContent}</p>
                                            </div>

                                        </div>

                                        <div className="col-md-6 mb-5">
                                            {jobs()}

                                        </div>
                                    </div>
                                </div>

                            </Fade>

                            <div className='text-section skills mt-5'>
                                <div className='header-content d-flex align-items-center justify-content-center mb-5'>
                                    <div className='text-center'>
                                        <div className='intro-text'>
                                            SKILLS
                                        </div>

                                        <h1 className='mb-3'>MY SKILLS</h1>
                                    </div>
                                </div>
                                <Fade>
                                    <div className='row'>
                                        <div className='col-md-4 mb-3'>
                                            <Skills>
                                                <span className='skills-title'>Html5</span>
                                                <div className='icon-skills html'>
                                                    <FontAwesomeIcon icon={faHtml5} />
                                                </div>
                                            </Skills>
                                        </div>

                                        <div className='col-md-4 mb-3'>
                                            <Skills>
                                                <span className='skills-title'>Css</span>
                                                <div className='icon-skills css'>
                                                    <FontAwesomeIcon icon={faCss3} />
                                                </div>
                                            </Skills>
                                        </div>

                                        <div className='col-md-4 mb-3'>
                                            <Skills>
                                                <span className='skills-title'>SASS</span>
                                                <div className='icon-skills sass'>
                                                    <FontAwesomeIcon icon={faSass} />
                                                </div>
                                            </Skills>
                                        </div>

                                        <div className='col-md-4 mb-3'>
                                            <Skills>
                                                <span className='skills-title'>JavaScript</span>
                                                <div className='icon-skills js'>
                                                    <FontAwesomeIcon icon={faJs} />
                                                </div>
                                            </Skills>
                                        </div>

                                        <div className='col-md-4 mb-3'>
                                            <Skills>
                                                <span className='skills-title'>React JS</span>
                                                <div className='icon-skills react'>
                                                    <FontAwesomeIcon icon={faReact} />
                                                </div>
                                            </Skills>
                                        </div>

                                        <div className='col-md-4 mb-3'>
                                            <Skills>
                                                <span className='skills-title'>GIT</span>
                                                <div className='icon-skills git'>
                                                    <FontAwesomeIcon icon={faGit} />
                                                </div>
                                            </Skills>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>}

        </div>
    )
}

export default About