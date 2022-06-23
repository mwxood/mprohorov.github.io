import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
import pdf from './img/CV_Mihail.pdf';

function App() {
  const store = [
    {
      banner: {
        banner: 'Front-end Developer'
      },

      about: {
        id: 1,
        heading: 'About me',
        title: 'Hello, my name is Mihail',
        content: ['I have 7+ years experience in developing and testing multiple web-based applications, with passion in programing and design. I have strong skills in javascript, html , css.', 'I developing projects using PHP/MySql for backend and ReactJs for front-end.', 'Please, feel free to check my github projects or download my CV.'],
        link: 'Download my CV',
        url: `${pdf}`,
        icon: 'icon fa-solid fa-file-pdf',
      },

      employmentHistory: {
        id: 2,
        title: 'Employment history',
        jobs: [
          {
            id: 1,
            alias: 'gl',
            company: 'Green Leads Media Ltd',
            position: 'Frontend developer',
            date: 'jul 2021 - Present'
          },

          {
            id: 2,
            alias: 'vcv',
            company: 'Virtual Congress Venue',
            position: 'FullStack developer',
            date: 'Oct 2020 - Present'
          },

          {
            id: 3,
            alias: 'gb',
            company: 'Grabo Media Ltd.',
            position: 'Frontend developer',
            date: 'Feb 2018 - Nov 2018'
          },

          {
            id: 4,
           
            alias: 'svp',
            company: 'StreamingVideoProvider',
            position: 'Frontend developer',
            date: 'Mar 2017 - 2018'
          },

          {
            id: 5,
            alias: 'rg',
            company: 'Reward Gateway',
            position: 'Frontend developer',
            date: 'Jul 2015 - May 2016'
          },

          {
            id: 6,
            alias: 'wb',
            company: 'webrix-studio.com',
            position: 'Frontend developer',
            date: 'Aug 2012 - Jul 2015'
          }

        ],
      }
    }
  ]


  return (
    <div className="App">
      <Header>
        <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <a href="#" className='logo'>
            MihailProhorov
          </a>
          <Nav />
          </div>
        </div>
      </Header>
      <main>
        <div className='container'>
          <Banner title={store} />
          <About info={store} />
          <Experience history={store} />
          <Education />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
