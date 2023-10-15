import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Fade } from 'react-awesome-reveal';
import Loader from '../components/UI/Loader';
import { InfoType } from '../types/';
import SEO from '../components/SEO';
import { graphcms, QUERY_PAGES } from '../Graphql/Queries';

const HeaderContent = () => {
  const [imageSrc, setImageSrc] = useState(`https://robohash.org/3`);
  const info = useSelector((state: InfoType) => state.info);
  const [loading, setLoading] = useState(false);
  const [homePage, setHomePage] = useState<any>([]);

  useEffect(() => {
    graphcms
      .request(QUERY_PAGES)
      .then((res: any) => {
        const homePage = res?.pages?.find((page: any) => page.slug === 'home');

        if (homePage) {
          setHomePage(homePage);
        }
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    setImageSrc(`https://robohash.org/${Math.floor(Math.random() * 10) + 1}`);
  }, []);

  return (
    <>
      <SEO
        title="Front-end developer from Plovdiv"
        description="Front end developer Plovdiv, Bulgaria"
        url="https://mprohorov.com/"
      />
      <div className="header-content d-flex align-items-center justify-content-center">
        {loading && <Loader />}
        {info.items.length && (
          <div className="text-center">
            <div className="intro-text">{homePage?.subtitle}</div>
            <Fade>
              <div className="user-info mb-4">
                <div className="d-flex align-items-center justify-content-center mb-4">
                  <span className="user-img d-flex align-items-center justify-content-center">
                    <img
                      width="148"
                      height="148"
                      src={imageSrc}
                      alt="Random robot"
                    />
                  </span>
                </div>

                <h1 className="mb-3">
                  <span className="d-flex justify-content-center text-center header-intro">
                    <span className="text-intro">{'Hi, I am'}</span>
                    <Typewriter
                      options={{
                        strings: ['Mihail Prohorov', homePage?.subtitle],
                        autoStart: true,
                        delay: 100,
                        loop: true,
                      }}
                    />
                  </span>
                </h1>
                <div
                  className="intro-desc"
                  dangerouslySetInnerHTML={{ __html: homePage?.content?.html }}
                />
              </div>
              <div className="d-flex justify-content-center">
                <a
                  aria-label="Read more about my linkedin profile"
                  href="https://www.linkedin.com/in/mihail-prohorov-76869041/"
                  className="header-btn list-btn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>

                <a
                  aria-label="Read more about my github profile"
                  href="https://github.com/mwxood"
                  className="header-btn list-btn"
                >
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
