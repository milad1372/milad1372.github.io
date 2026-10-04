// gitprofile.config.js

const config = {
  github: {
    username: 'milad1372', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  // Shown under your name. Leave empty to use your GitHub profile bio.
  bio: 'Postdoctoral Fellow, University of Regina | #HCI #IIR #HumanCentredAI #InfoVis',
  social: {
    linkedin: 'miladmomeni',
    twitter: 'milad1372',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'milad.momeni@uregina.ca',
    googleScholar: '57di_pwAAAAJ', // Google Scholar user id
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'JavaScript',
    'PHP',
    'HTML5',
    'CSS',
    'React',
    'Node.js',
    'SQL',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'scikit-learn',
    'PyTorch',
    'TensorFlow',
    'R',
    'C++',
    'Git',
    'Docker',
    'LaTeX',
  ],
  experiences: [
    {
      company: 'University of Regina',
      position: 'Postdoctoral Fellow (with Dr. Orland Hoeber)',
      from: 'Sept 2026',
      to: 'Present',
    },
    {
      company: 'University of Regina',
      position:
        'Instructor, CS 215/285: Web and Database Programming (four offerings)',
      from: 'May 2024',
      to: 'Dec 2025',
    },
    {
      company: 'University of Regina',
      position: 'Lab Instructor and Lead Supplemental Instruction TA, CS 215',
      from: 'Fall 2023',
      to: 'Winter 2025',
    },
    {
      company: 'University of Regina',
      position: 'Doctoral Researcher, Human-Computer Interaction',
      from: '2022',
      to: '2026',
    },
    {
      company: 'Scrawlr Inc.',
      position: 'Mitacs Accelerate Research Intern',
      from: '2022',
      to: '2023',
    },
    {
      company: 'Mobile Telecommunication Company of Iran (MCI)',
      position: 'Data Scientist',
      from: '2021',
      to: '2022',
    },
    {
      company: 'Deakin University, Australia (remote)',
      position: 'Research Fellow',
      from: '2021',
      to: '2021',
    },
    {
      company: 'Hooshyar Co.',
      position: 'Computer Vision Engineer',
      from: '2019',
      to: '2021',
    },
    {
      company: 'Cyberspace Research Institute, Shahid Beheshti University',
      position: 'Head Research Assistant',
      from: '2017',
      to: '2020',
    },
    {
      company: 'Shahid Beheshti University',
      position:
        'Teaching Assistant, Artificial Intelligence, Multi-Agent Systems, and Computer Vision',
      from: '2017',
      to: '2019',
    },
    {
      company: 'Pooyeshgaran Nik Daneshgar Co.',
      position: 'Full-Stack Software Developer',
      from: '2016',
      to: '2019',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of Regina',
      degree: 'Ph.D., Computer Science',
      from: '2022',
      to: '2026',
    },
    {
      institution: 'Shahid Beheshti University',
      degree: 'M.Sc., Computer Science and Engineering (AI)',
      from: '',
      to: '2019',
    },
    {
      institution: 'Persian Gulf University',
      degree: 'B.Sc., Computer Science and Engineering (Software)',
      from: '',
      to: '2016',
    },
  ],
  publications: [
    {
      title:
        'Generative AI steering and human authoring: Complementary search-as-learning scaffolds in cross-session aggregated academic search',
      authors: 'Momeni, M., & Hoeber, O.',
      venue:
        'Information Processing & Management Conference (IP&MC 2026). Accepted.',
      year: '2026',
    },
    {
      title:
        'Does it still make sense? Organizing and summarizing resources in cross-session aggregated search',
      authors: 'Momeni, M., & Hoeber, O.',
      venue:
        'ACM SIGIR Conference on Human Information Interaction and Retrieval (CHIIR 2026)',
      year: '2026',
      link: 'https://doi.org/10.1145/3786304.3787873',
    },
    {
      title:
        'A study of search result aggregation approaches for the digital humanities',
      authors: 'Momeni, M., & Hoeber, O.',
      venue:
        'Journal of the Association for Information Science and Technology, 76(11), 1488–1507',
      year: '2025',
      link: 'https://doi.org/10.1002/asi.70006',
    },
    {
      title:
        'Cross-session aggregated search: Organizing and summarizing found resources',
      authors: 'Momeni, M., & Hoeber, O.',
      venue:
        'Proceedings of the Association for Information Science and Technology, 62(1)',
      year: '2025',
      link: 'https://doi.org/10.1002/pra2.1478',
    },
    {
      title:
        'Exploratory search in digital humanities: A study of visual keyword/result linking',
      authors:
        'Hoeber, O., Harvey, M., Momeni, M., Pirmoradi, A., & Gleeson, D.',
      venue:
        'Proceedings of the Association for Information Science and Technology, 61(1), 161–171',
      year: '2024',
      link: 'https://doi.org/10.1002/pra2.1017',
    },
    {
      title: 'Visualization-enhanced aggregated search interfaces',
      authors: 'Momeni, M.',
      venue: 'ACM CHIIR 2024 Doctoral Consortium',
      year: '2024',
      link: 'https://doi.org/10.1145/3627508.3638336',
    },
    {
      title:
        'Embryo selection through artificial intelligence versus embryologists: A systematic review',
      authors:
        'Salih, M., Austin, C., Warty, R. R., Tiktin, C., Rolnik, D. L., Momeni, M., Rezatofighi, H., Reddy, S., Smith, V., Vollenhoven, B., & Horta, F.',
      venue: 'Human Reproduction Open, 2023(3), hoad031',
      year: '2023',
      link: 'https://doi.org/10.1093/hropen/hoad031',
    },
    {
      title:
        'Embryonic image enhancement based on genetic algorithm and generic filter',
      authors: 'Momeni, M., Hosseini Nezhad, Z., & Ebrahimi Moghaddam, M.',
      venue:
        '3rd International Conference on Frontiers of Signal Processing (ICFSP), IEEE',
      year: '2017',
      link: 'https://doi.org/10.1109/ICFSP.2017.8097158',
    },
  ],
  service: [
    {
      role: 'Reviewer',
      detail:
        'International Journal on Digital Libraries (Springer), ACM CHIIR, ACM CUI, ACM CHI',
    },
    {
      role: 'Member',
      detail: 'ACM and IEEE',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Last Update Oct 2026 :)`,
};

export default config;
