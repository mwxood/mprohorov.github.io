import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Fade } from 'react-awesome-reveal';
import '../components/styles/resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faGit,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import Skills from '../components/UI/Skills';
import Loader from '../components/UI/Loader';
import { JobType, Flag, InfoType } from '../types/';
import SEO from '../components/SEO';
import { graphcms, QUERY_PAGES } from '../Graphql/Queries';

const About = () => {
  const info = useSelector((state: InfoType) => state.info);
  const [loading, setLoading] = useState<Flag>(false);
  const [aboutPage, setAboutPage] = useState<any>([]);
  const [educationPage, setEducationPage] = useState<any>([]);
  const [otherPages, setOtherPages] = useState<any>([]);

  useEffect(() => {
    graphcms.request(QUERY_PAGES).then((res: any) => {
      const aboutPage = res?.pages?.find(
        (page: JobType) => page.slug === 'about'
      );
      const educationPage = res?.pages?.find(
        (page: JobType) => page.slug === 'education'
      );

      const otherPages = res?.pages?.filter(
        (page: JobType) =>
          page.slug !== 'education' &&
          page.slug !== 'home' &&
          page.slug !== 'about'
      );

      if (aboutPage) {
        setAboutPage(aboutPage);
      }

      if (educationPage) {
        setEducationPage(educationPage);
      }

      if (otherPages) {
        setOtherPages(otherPages);
      }
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const jobs = () => {
    if (!info.items.length) {
      return;
    }

    return otherPages?.map((job: JobType) => {
      return (
        <div key={job.id} className="resume-item">
          <h4 className="mb-3">{job?.title}</h4>
          <div
            dangerouslySetInnerHTML={{
              __html: job?.content?.html,
            }}
          />
        </div>
      );
    });
  };

  jobs();

  return (
    <>
      <SEO
        title="Front-end developer about me"
        description="I developing projects using PHP/MySql for backend and ReactJs for front-end."
        url="https://mprohorov.com/about"
      />

      <div className="inner-page">
        {loading && <Loader />}
        {info.items.length && (
          <div>
            <div className="header-content d-flex align-items-center justify-content-center">
              <div className="text-center">
                <div className="intro-text">{aboutPage?.subtitle}</div>

                <h1 className="mb-3">{aboutPage?.title}</h1>
              </div>
            </div>

            <div className="container mt-5">
              <Fade>
                <div className="text-section about section">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <img
                        src={aboutPage?.coverImage?.url}
                        alt="portfolio image"
                      />
                    </div>
                    <div className="col-md-7">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: aboutPage?.content?.html,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Fade>

              <div className="education-section section">
                <div className="header-content d-flex align-items-center justify-content-center mb-5">
                  <div className="text-center">
                    <div className="intro-text">RESUME</div>

                    <h1 className="mb-3">MY RESUME</h1>
                  </div>
                </div>

                <Fade>
                  <div className="text-section resume">
                    <div className="row">
                      <div className="col-md-6 mb-5">
                        <div className="resume-item">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: educationPage?.content?.html,
                            }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6 mb-5">{jobs()}</div>
                    </div>
                  </div>
                </Fade>

                <div className="text-section skills mt-5">
                  <div className="header-content d-flex align-items-center justify-content-center mb-5">
                    <div className="text-center">
                      <div className="intro-text">SKILLS</div>

                      <h1 className="mb-3">MY SKILLS</h1>
                    </div>
                  </div>
                  <Fade>
                    <div className="row">
                      <div className="col-md-4 mb-3">
                        <Skills>
                          <span className="skills-title">Html5</span>
                          <div className="icon-skills html">
                            <FontAwesomeIcon icon={faHtml5} />
                          </div>
                        </Skills>
                      </div>

                      <div className="col-md-4 mb-3">
                        <Skills>
                          <span className="skills-title">Css</span>
                          <div className="icon-skills css">
                            <FontAwesomeIcon icon={faCss3} />
                          </div>
                        </Skills>
                      </div>

                      <div className="col-md-4 mb-3">
                        <Skills>
                          <span className="skills-title">SASS</span>
                          <div className="icon-skills sass">
                            <FontAwesomeIcon icon={faSass} />
                          </div>
                        </Skills>
                      </div>

                      <div className="col-md-4 mb-3">
                        <Skills>
                          <span className="skills-title">JavaScript</span>
                          <div className="icon-skills js">
                            <FontAwesomeIcon icon={faJs} />
                          </div>
                        </Skills>
                      </div>

                      <div className="col-md-4 mb-3">
                        <Skills>
                          <span className="skills-title">React JS</span>
                          <div className="icon-skills react">
                            <FontAwesomeIcon icon={faReact} />
                          </div>
                        </Skills>
                      </div>

                      <div className="col-md-4 mb-3">
                        <Skills>
                          <span className="skills-title">GIT</span>
                          <div className="icon-skills git">
                            <FontAwesomeIcon icon={faGit} />
                          </div>
                        </Skills>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default About;
