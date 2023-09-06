const state = [
  {
    id: 0,
    linkedIn: 'https://www.linkedin.com/in/mihail-prohorov-76869041/',
    github: 'https://github.com/mwxood',
  },

  {
    id: 1,
    aboutText: ` <p>Hello, my name is Mihail</p>
    <p>I have experience in developing and testing multiple web-based applications, with passion in programing and design. I have strong skills in javascript, html , css.</p>
    <p>I developing projects using PHP/MySql for backend and ReactJs for front-end.</p>
    <p>Please, feel free to check my github projects or download my CV.</p>`,
  },

  {
    id: 2,
    education: {
      universityLocation: 'Plovdiv, Bulgaria',
      date: '2019-2021',
      educationContent:
        'Master degree software technologies, university of Plovdiv Paisii Hilendarski',
    },
  },

  {
    jobPositions: [
      {
        id: 1,
        companyName: 'NexGen LLC',
        jobDate: 'Jan 2023 - Present',
        position: 'ReactJs Developer',
      },

      {
        id: 2,
        companyName: 'Green Leads Media Ltd',
        jobDate: 'Jul 2021 - Sep 2022 ',
        position: 'FrontEnd Developer',
      },

      {
        id: 3,
        companyName: 'Virtual Congress Venue ',
        jobDate: 'Oct 2019 - Aug 2022',
        position: 'FullStack Developer',
      },

      {
        id: 5,
        companyName: 'TediSoft',
        jobDate: 'Nov 2018 - Sept2019',
        position: 'FrontEnd Developer',
      },

      {
        id: 4,
        companyName: 'Grabo Media JSCo.',
        jobDate: 'Feb 2018 - Nov 2018',
        position: 'FrontEnd Developer',
      },

      {
        id: 6,
        companyName: 'Reward Gateway',
        jobDate: 'front-end developer',
        position: 'Jul 2015 - May 2016',
      },

      {
        id: 7,
        companyName: 'Webrix-studio.com',
        jobDate: 'Reward Gateway',
        position: 'Aug 2012 - Jul 2015',
      },
    ],
  },
];

export const data = new Promise((resolve, reject) => {
  return resolve(state);
});
