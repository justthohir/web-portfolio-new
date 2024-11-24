// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'justthohir', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed.
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['username/my-project1']
      },
    },
    external: {
      header: 'Projects portfolio',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Cost Optimization on GCP with Kubernetes',
          description:
            'Leveraging Google Kubernetes Engine (GKE) for cost optimization',
          imageUrl: '/images/cost-optimization.jpg',
          link: 'cost-optimization',
          repo: '#',
          tools: 'Docker / Kubernetes / GKE / GCP',
        },
        {
          title: 'GitHub Action deployment on Cloud VM',
          description: 'CI/CD Web Portfolio with ReactJS & Docker',
          imageUrl: '/images/web-portfolio.jpg',
          link: 'web-portfolio',
          repo: 'https://github.com/justthohir/web-portfolio-new/actions',
          tools: 'ReactJS / Docker / GitHub Action / HAProxy / Cloud VM',
        },
        {
          title: 'GitLab CI/CD deployment on Cloud VM',
          description: 'CI/CD Rest API with Golang & Docker',
          imageUrl: '/images/rest-api.jpg',
          link: 'rest-api',
          repo: 'https://gitlab.com/mthohirin11/dummy-rest-api/-/pipelines',
          tools: 'Golang / Docker / GitLab CI/CD / HAProxy / Cloud VM',
        },
        {
          title: 'Ansible Setup GitLab Runner on Cloud VM',
          description: 'Automation Setup GitLab Runner using Ansible',
          imageUrl: '/images/ansible.jpg',
          link: 'gitlab-runner',
          repo: 'https://github.com/justthohir/ansible-gitlab-runner',
          tools: 'Ansible / Ubuntu / GitLab Runner / Cloud VM',
        },
        {
          title: 'GitHub Action deployment on Cloud VM',
          description: 'CI/CD Web Restaurant with ReactJS & Docker',
          imageUrl: '/images/web-portfolio.jpg',
          link: 'web-restaurant',
          repo: 'https://github.com/justthohir/little-lemon-restaurant/actions',
          tools: 'ReactJS / Docker / GitHub Action / HAProxy / Cloud VM',
        },
      ],
    },
  },
  seo: {
    title: 'Thohir - Web Portfolio',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'mthohirin',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'justthohir',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://justthohir.in',
    phone: '+6289503314956',
    email: 'mthohirin11@gmail.com',
  },
  resume: {
    fileUrl: '/files/M-Thohirin-Resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'GitLab CI/CD, GitHub Action',
    'Docker, Kubernetes',
    'GCP, GCE, GKE',
    'Cloudflare WAF',
    'Ansible, Helm, Shell, Bash',
    'Prometheus, Telegraf, Grafana, ELK Stack',
    'SQL, MySQL, PostgreSQL, InfluxDB',
    'Proxy Manager, SonarQube',
    'Haproxy, Nginx, Apache',
    'Linux, Ubuntu',
    'PHP, Laravel',
    'JS, VueJS, ReactJS, NextJS, NodeJS',
    'Version Control / Git',
    'CSS, Bootstrap, Tailwind',
  ],
  experiences: [
    {
      company: 'Bimasakti Multi Sinergi',
      position: 'DevOps Engineer',
      from: 'Mar 2023',
      to: 'Present',
      companyLink: 'https://bm.co.id',
    },
    {
      company: 'Treenear',
      position: 'Lead Developer',
      from: 'Oct 2018',
      to: 'Mar 2023',
      companyLink: 'https://treenear.com',
    },
    {
      company: 'Mary Jardin',
      position: 'Wordpress Developer',
      from: 'Jul 2018',
      to: 'Sep 2018',
      companyLink:
        'https://www.linkedin.com/company/mary-jardin-jardin-beauty-sdn-bhd/',
    },
    {
      company: 'Purnama Kreatifa',
      position: 'Full Stack Developer',
      from: 'Dec 2016',
      to: 'Jun 2018',
      companyLink: 'https://kreatifa.com',
    },
  ],
  certifications: [
    {
      name: 'Corsera - Professional Certificate',
      body: 'Meta Front-End Developer',
      year: 'July 2024',
      link: 'https://www.coursera.org/account/accomplishments/specialization/DN3Q3L8HD5RA',
    },
  ],
  educations: [
    {
      institution: 'Vocational High School 2 Buduran',
      degree: 'Informatics Engineering',
      from: '2011',
      to: '2014',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'justthohir', // to hide blog section, keep it empty
    limit: 4, // How many articles to display. Max is 10.
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
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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
  footer: `2024 &copy; Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: false,
};

export default CONFIG;
