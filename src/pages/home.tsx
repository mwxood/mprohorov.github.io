import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Fade } from 'react-awesome-reveal';
import Loader from '../components/UI/Loader';
import { InfoType } from '../types/';
import SEO from '../components/SEO';

const HeaderContent = () => {
  const [imageSrc, setImageSrc] = useState(`https://robohash.org/3`);
  const info = useSelector((state: InfoType) => state.info);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    setImageSrc(`https://robohash.org/${Math.floor(Math.random() * 10) + 1}`);
  }, []);

  return (
    <>
      <SEO
        title="Front-end developer from Plovdiv"
        description="Front end developer Plovdiv, Bulgaria"
      />
      <div className="header-content d-flex align-items-center justify-content-center">
        {loading && <Loader />}
        {info.items.length && (
          <div className="text-center">
            <div className="intro-text">Front-End developer</div>
            <Fade>
              <div className="user-info mb-4">
                <div className="d-flex align-items-center justify-content-center mb-4">
                  <span className="user-img d-flex align-items-center justify-content-center">
                    <img src={imageSrc} alt="image" />
                  </span>
                </div>

                <h1 className="mb-3">
                  <span className="d-flex justify-content-center text-center header-intro">
                    <span className="text-intro">
                      {info.items[0].userIntro}
                    </span>
                    <Typewriter
                      options={{
                        strings: [
                          info.items[0].userName,
                          info.items[0].userRole,
                        ],
                        autoStart: true,
                        delay: 100,
                        loop: true,
                      }}
                    />
                  </span>
                </h1>
                <span className="intro-desc">
                  {info.items[0].userDescription}
                </span>
              </div>
              <div className="d-flex justify-content-center">
                <a
                  href={info.items[0].linkedIn}
                  className="header-btn list-btn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a href={info.items[0].github} className="header-btn list-btn">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </Fade>
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderContent;
