// Content for the v2 (Swiss grid) CV, split into plain data so the layout can
// place each part in its own grid column.
//
// Writing rules, from the DIGIT CV guidelines:
// - Third person, by name: never "I" or "we".
// - Every role: context, responsibilities and results, with scale where known.
// - Bullets follow action + activity + system + tool + purpose/result.
// - Verbs match ownership: "designed/led" only when Jonas owned it,
//   "contributed" when the result belonged to the team.
// - Every skill in the overview points to the roles (A1–A7) where it was used.
// - Nothing that cannot be backed by a dated role.

export type Highlight = string | { text: string; sub: string[] };

export interface Role {
  /** CV reference, so skills and questionnaire answers can point here. */
  id: string;
  company: string;
  companyNote?: string;
  role: string;
  /** YYYY-MM */
  start: string;
  /** YYYY-MM, or null while the role is current */
  end: string | null;
  period: string;
  location?: string;
  /** Explains an overlap or gap in the chronology. */
  note?: string;
  /** Context: the product, the client, the team and Jonas's place in it. */
  intro: string[];
  /** What Jonas did or owned. */
  responsibilities: Highlight[];
  /** What came out of it, and what it meant for the organisation. */
  results: Highlight[];
  skills: string[];
}

export interface Skill {
  name: string;
  /** Roles (ids from `experience`) where the skill was used. */
  refs: string[];
}

export const person = {
  name: 'Jonas Vercammen',
  title: 'Full Stack Developer',
  tagline: 'Angular frontend, full stack when the product needs it',
  focus: 'Angular · TypeScript · Geospatial',
  coords: '50.987° N, 4.497° E',
  email: 'jonas@vercammen.io',
  phone: '+32 469 68 29 93',
  phoneHref: 'tel:+32469682993',
  location: '1981 Hofstade, Belgium',
  photo: '/jonas.webp',
  profile:
    'Full stack developer with 9 years of professional ICT experience and a focus on Angular frontends. Jonas builds map-based and data-driven web applications for the public sector, media and logistics: situational-awareness maps at the National Crisis Center of Belgium, a media platform used in Belgium, Luxembourg, France and the Netherlands, and warehouse tools for an e-commerce company. Jonas turns Figma design systems into reusable Angular component libraries, secures applications with Keycloak, and has run a product end to end, from the Angular UI through Java and Node.js services to PostgreSQL/PostGIS on Azure Kubernetes.',
};

/** The summary facts an evaluator looks for first. */
export const facts: { label: string; value: string }[] = [
  { label: 'Profile', value: 'Full Stack Developer, frontend focus (Angular)' },
  { label: 'ICT experience', value: '9 years, since August 2017 (A1–A6), plus a 3-month internship in 2017 (A7)' },
  { label: 'Angular', value: '9 years, Angular 2 to 22 (A1, A3–A7)' },
  {
    label: 'Domains',
    value:
      'Public sector and crisis management (A1) · Media and advertising (A2, A3, A6) · E-commerce and logistics (A5) · Healthcare (A7)',
  },
  {
    label: 'Key expertise',
    value:
      'Angular and TypeScript · Design systems and component libraries · Geospatial (OpenLayers, PostGIS) · Keycloak (SSO, CSAM) · Azure Kubernetes and CI/CD',
  },
  { label: 'Education', value: 'Professional Bachelor in Applied Informatics, Application Development, 2017' },
  { label: 'Languages', value: 'Dutch (native) · English C1 · French B1 understanding, A2 speaking' },
];

export const experience: Role[] = [
  {
    id: 'A1',
    company: 'NCCN',
    companyNote: 'National Crisis Center of Belgium',
    role: 'Full Stack Developer',
    start: '2026-05',
    end: null,
    period: 'May 2026 – present',
    location: 'Brussels, Belgium',
    note: '4 days a week, in parallel with A3 (1 day a week).',
    intro: [
      'Jonas develops and extends Paragon, the NCCN application for map-based situational awareness, built on OpenLayers. The role is full stack: the Angular frontend, the Keycloak authentication and the Go backend. The team works in Agile/Scrum with GitHub, Docker and Azure.',
    ],
    responsibilities: [
      'Connected and configured Keycloak in the Angular frontend to provide CSAM login and single sign-on (SSO) for internal NCCN users',
      'Extended the Go backend and the Angular frontend with authorization for emergency plans: read and write access per user and per organisation',
      'Connects Angular features to the Go backend, mostly through its GraphQL API and through a few REST endpoints, both returning JSON',
      'Wrote Angular HTTP interceptors that handle the Keycloak token and check that each call is authenticated and valid before data is fetched or returned',
      'Wrote Angular directives that show or hide actions in the interface according to the user\'s read or write access',
      'Builds map features with OpenLayers: GeoJSON feature data, layer styling and map interactions',
      'Develops new features in the Angular frontend, delivered in sprints',
    ],
    results: [
      'Internal NCCN users sign in to Paragon with their CSAM or SSO account, with no separate login to manage',
      'Access to emergency plans is now controlled in Paragon itself, which was not possible before: authorized staff grant read or write access to users and organisations, and the Go backend enforces those rights',
      'Extended the anchor management module: selecting an anchor on the map opens an overlay with its details, so the information is available without leaving the map',
    ],
    skills: [
      'Angular 21–22',
      'TypeScript',
      'Keycloak',
      'CSAM',
      'SSO',
      'Go',
      'GraphQL',
      'REST APIs',
      'Authorization',
      'OpenLayers',
      'GeoJSON',
      'Geospatial / GIS',
      'Git',
      'GitHub',
      'Docker',
      'Microsoft Azure',
      'HTML',
      'CSS',
      'Agile/Scrum',
    ],
  },
  {
    id: 'A2',
    company: 'Adwanted',
    role: 'Full Stack Developer',
    start: '2025-08',
    end: '2026-03',
    period: 'Aug 2025 – Mar 2026',
    location: 'Remote · Paris, France',
    note: 'In parallel with A3: after Adwanted bought MediaSpecs, Jonas worked on this Adwanted project and on a MediaSpecs project at the same time.',
    intro: [
      'For a client, Adwanted built a media planner tool to navigate audience surveys and create targeted media plans. Jonas was one of 15 developers working in teams across several projects, worked across the stack in React and Node.js, and was mainly responsible for the infrastructure and monitoring on Azure Kubernetes. The whole team worked with Cursor and Claude Code, in Agile/Scrum.',
    ],
    responsibilities: [
      'Set up and maintained the infrastructure as code on Azure Kubernetes Service, with CI/CD through GitHub Actions',
      'Set up the monitoring of the application on AKS',
      'Implemented features in React from the Figma designs of the UX designer',
      'Built Node.js integrations with JSON APIs and PostgreSQL data',
      'Built back-office features in React and Node.js, using Cursor and Claude Code',
    ],
    results: [
      'Delivered the Azure Kubernetes setup of the media planner tool, with automated deployments through GitHub Actions and monitoring in place',
    ],
    skills: [
      'React',
      'Node.js',
      'JavaScript',
      'Git',
      'Figma',
      'REST APIs',
      'JSON integrations',
      'PostgreSQL',
      'SQL',
      'Microsoft Azure',
      'Azure Kubernetes Service (AKS)',
      'Kubernetes',
      'GitHub Actions',
      'CI/CD',
      'Infrastructure as Code',
      'Monitoring',
      'Cursor',
      'Claude Code',
      'Agile/Scrum',
    ],
  },
  {
    id: 'A3',
    company: 'Adwanted – MediaSpecs BeLux',
    role: 'Senior Frontend Angular Developer',
    start: '2021-05',
    end: null,
    period: 'May 2021 – present',
    location: 'Hofstade, Belgium',
    note: 'From Aug 2025 in parallel with A2, after Adwanted bought MediaSpecs. Since May 2026, 1 day a week next to A1.',
    intro: [
      'MediaSpecs is a media platform available in Belgium and Luxembourg, France and the Netherlands, with about 150 users a month. Jonas joined a team of 5 developers, defined the frontend requirements for the customer-facing application and built its front office, where users search the media entities by tags and search queries and export a selection. Jonas then planned a more detailed planning tool and built the back office, which manages the entities, keeps the data current, invites new users and handles user and customer management.',
      'After two years, Jonas took charge of the entire system, front end to infrastructure: Java and Node.js services, Keycloak, Grafana, PostgreSQL, Azure Kubernetes and GitHub Actions. Jonas also coached and coordinated 2 to 3 external developers from a Hungarian partner company.',
    ],
    responsibilities: [
      'Built the front office and back office in Angular and TypeScript, styled with SASS and Tailwind',
      'Implemented the Figma design system as a library of reusable Angular components in an Nx monorepo',
      'Built backend features in Java (Hibernate) and Node.js, with JSON APIs between the front office, back office and services',
      'Configured authentication and authorization with Keycloak',
      'Built Grafana dashboards to monitor the platform',
      'Maintained the infrastructure on Azure Kubernetes Service, including Kubernetes updates, with Docker images deployed through ArgoCD, Helm and GitHub Actions',
      'Wrote SQL queries and managed the PostgreSQL database; used Elasticsearch for search',
      'Wrote unit tests, and end-to-end tests with Cypress',
      'Coached 2 to 3 external developers: prepared sprint tasks, clarified requirements, reviewed delivered work and guided improvements',
      'Planned sprints, broke down tasks and released iteratively in Agile/Scrum',
    ],
    results: [
      'Kept the platform on a supported Angular version through repeated upgrades, from Angular 12 to 21; the last one, from v19 to v21, landed in January 2026',
      'Made media searchable by location: linked Belgian regions to their media, so users search across media types and calendar events by region',
      'Modelled the spatial data and location-based queries behind it in PostgreSQL/PostGIS',
      'Wrote Python, Bash and Zx scripts that convert geodata and bulk-import region and location data (GeoJSON, WKT)',
      'Refactored and cleaned up legacy code to keep the codebase maintainable',
      'Built a proof-of-concept MCP server that connects the platform to AI tools such as Cursor and Claude Code',
    ],
    skills: [
      'Angular 12–21',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'SASS',
      'Tailwind',
      'Nx Monorepo',
      'Figma',
      'Design Systems',
      'Component Libraries',
      'Java (Hibernate)',
      'Node.js',
      'Bun',
      'REST APIs',
      'JSON integrations',
      'Keycloak',
      'PostgreSQL',
      'SQL',
      'PostGIS',
      'Elasticsearch',
      'Supabase',
      'GeoJSON / WKT',
      'Geospatial / GIS',
      'Python',
      'Bash',
      'Zx',
      'Grafana',
      'Docker',
      'Kubernetes',
      'Azure Kubernetes Service (AKS)',
      'Helm',
      'Terraform',
      'ArgoCD',
      'GitHub Actions',
      'Cypress',
      'Angular upgrades',
      'Refactoring',
      'Legacy modernisation',
      'OpenAI API',
      'Cursor',
      'Microsoft Azure',
      'Agile/Scrum',
    ],
  },
  {
    id: 'A4',
    company: 'Euricom',
    role: 'Full Stack JavaScript Developer · Consultant',
    start: '2017-08',
    end: '2021-04',
    period: 'Aug 2017 – Apr 2021',
    location: 'Mechelen, Belgium',
    note: 'Employer for the client assignments A5 (Vente-exclusive) and A6 (VRT).',
    intro: [
      'Jonas worked as a full stack consultant in Angular and Node.js, placed at clients in Agile/Scrum teams: the Virtual Radio project at VRT (A6) and the logistics and warehouse applications at Vente-exclusive (A5). Within Euricom, Jonas also built Angular, Ionic/Capacitor and Node.js applications on MongoDB and Firebase.',
    ],
    responsibilities: [],
    results: [],
    skills: [
      'Angular 4–11',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Ionic / Capacitor',
      'MongoDB',
      'Firebase / Firestore',
      'Git',
      'HTML',
      'CSS',
      'SASS',
      'Agile/Scrum',
    ],
  },
  {
    id: 'A5',
    company: 'Vente-exclusive (Veepee)',
    role: 'Frontend Developer',
    start: '2017-10',
    end: '2021-04',
    period: 'Oct 2017 – Apr 2021',
    location: 'Client assignment through Euricom (A4)',
    intro: [
      'Vente-exclusive had about 50 developers, in teams of 5 to 7. Jonas worked in a logistics team that handles customer orders, in particular back orders. The team built a dashboard for managing back orders and ordering from suppliers: it tracked orders and grouped products by category so suppliers received bulk orders. Jonas also contributed to a returns app for the warehouse: a dashboard for incoming boxes and approvals, and a mobile app that scans parcels and individual items.',
    ],
    responsibilities: [
      'Developed and maintained the logistics dashboard in Angular for order management and supplier coordination',
      'Built the mobile scanning app for the warehouse in Ionic, connected to a barcode scanner',
      'Built interfaces for warehouse staff and for management',
      'Built reusable Angular components from the design system, shared by multiple teams',
      'Integrated the Angular applications with the JSON APIs of the .NET backend teams',
      'Wrote and maintained unit tests with Jest',
    ],
    results: [
      'Contributed to a simpler back-order process, with products grouped by category so suppliers receive bulk orders',
      'Contributed to the returns system: scanning a parcel opens the matching order in the dashboard, where staff scan and approve each returned item',
      'Refactored legacy Angular code, improving table rendering and change detection',
    ],
    skills: [
      'Angular 4–11',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'Ionic',
      'Node.js',
      '.NET collaboration',
      'Design Systems',
      'Component Libraries',
      'UI / UX',
      'REST APIs',
      'JSON integrations',
      'Jest',
      'Refactoring',
      'Performance optimisation',
      'Git',
      'Agile/Scrum',
    ],
  },
  {
    id: 'A6',
    company: 'VRT',
    companyNote: 'Flemish public broadcaster',
    role: 'Consultant · Virtual Radio Project',
    start: '2017-09',
    end: '2017-09',
    period: 'Sep 2017',
    location: 'Brussels, Belgium · client assignment through Euricom (A4)',
    intro: [
      'A short consultancy assignment. The radio station wanted staff to run a show from an iPad while on the go, without bulky studio equipment. The backend, with its APIs and WebSockets, was already in place; Jonas built the dashboard on top of it.',
    ],
    responsibilities: [
      'Developed the iPad dashboard for the Virtual Radio project in Angular',
      'Integrated it with the existing APIs and WebSockets backend',
      {
        text: 'Built the broadcast controls:',
        sub: ['Jingle playback management', 'Microphone control', 'Music playback'],
      },
    ],
    results: ['Radio staff could run a broadcast from an iPad instead of traditional broadcasting equipment'],
    skills: [
      'Angular 4',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
      'REST APIs',
      'JSON integrations',
      'WebSockets',
      'Git',
      'Agile/Scrum',
    ],
  },
  {
    id: 'A7',
    company: 'iDA Mediafoundry',
    role: 'IT Intern',
    start: '2017-04',
    end: '2017-06',
    period: 'Apr 2017 – Jun 2017',
    location: 'Kontich, Belgium',
    intro: [
      'During the internship, Jonas developed a physiotherapy application on Microsoft Kinect 2: two applications, one for designing exercises and one for guiding patients through their rehabilitation.',
    ],
    responsibilities: [
      {
        text: 'Built two connected applications:',
        sub: ['Exercise design platform for physiotherapists', 'Exercise application for patients'],
      },
      {
        text: 'Implemented real-time motion tracking with the Kinect camera:',
        sub: ['Joint tracking for exercise accuracy', 'Body depth monitoring', 'Visual exercise guidance'],
      },
      'Built an Electron desktop application to manage the USB camera',
    ],
    results: ['Chosen as the best overall product of the three internship projects'],
    skills: ['Angular 2', 'TypeScript', 'JavaScript', 'CSS', 'SASS', 'Electron', 'Firebase', 'Git', 'Agile/Scrum'],
  },
];

export const education = [
  {
    degree: 'Professionele Bachelor Toegepaste Informatica – Applicatie Ontwikkeling',
    english: 'Professional Bachelor in Applied Informatics, Application Development',
    school: 'Karel de Grote Hogeschool (KdG), Antwerp',
    year: '2017',
  },
];

/** Levels on the CEFR scale (A1–C2). */
export const languages = [
  { name: 'Dutch', level: 'Native' },
  { name: 'English', level: 'C1', note: 'Professional working proficiency' },
  { name: 'French', level: 'B1 / A2', note: 'B1 understanding, A2 speaking and writing' },
];

export const skills: Record<'expert' | 'intermediate' | 'novice', Skill[]> = {
  expert: [
    { name: 'Angular', refs: ['A1', 'A3', 'A4', 'A5', 'A6', 'A7'] },
    { name: 'TypeScript', refs: ['A1', 'A3', 'A4', 'A5', 'A6', 'A7'] },
    { name: 'JavaScript', refs: ['A2', 'A3', 'A4', 'A5', 'A6', 'A7'] },
    { name: 'HTML', refs: ['A1', 'A3', 'A4', 'A5', 'A6'] },
    { name: 'CSS', refs: ['A1', 'A3', 'A4', 'A5', 'A6', 'A7'] },
    { name: 'Node.js', refs: ['A2', 'A3', 'A4', 'A5'] },
    { name: 'Git', refs: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7'] },
    { name: 'GitHub', refs: ['A1', 'A2', 'A3'] },
    { name: 'CI/CD', refs: ['A2', 'A3'] },
    { name: 'Agile/Scrum', refs: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7'] },
    { name: 'REST APIs / JSON', refs: ['A1', 'A2', 'A3', 'A5', 'A6'] },
    { name: 'Cursor', refs: ['A2', 'A3'] },
  ],
  intermediate: [
    { name: 'Java (Hibernate)', refs: ['A3'] },
    { name: 'Go', refs: ['A1'] },
    { name: 'GraphQL', refs: ['A1'] },
    { name: 'Bun', refs: ['A3'] },
    { name: 'Kubernetes', refs: ['A2', 'A3'] },
    { name: 'ArgoCD', refs: ['A3'] },
    { name: 'Electron', refs: ['A7'] },
    { name: 'Ionic / Capacitor', refs: ['A4', 'A5'] },
    { name: 'Tailwind', refs: ['A3'] },
    { name: 'Elasticsearch', refs: ['A3'] },
    { name: 'Grafana', refs: ['A3'] },
    { name: 'PostgreSQL / SQL', refs: ['A2', 'A3'] },
    { name: 'PostGIS', refs: ['A3'] },
    { name: 'OpenLayers', refs: ['A1'] },
    { name: 'GeoJSON / WKT', refs: ['A1', 'A3'] },
    { name: 'Geospatial / GIS data', refs: ['A1', 'A3'] },
    { name: 'Python', refs: ['A3'] },
    { name: 'MongoDB / NoSQL', refs: ['A4'] },
    { name: 'Firebase / Firestore', refs: ['A4', 'A7'] },
    { name: 'Supabase', refs: ['A3'] },
    { name: 'Microsoft Azure', refs: ['A1', 'A2', 'A3'] },
    { name: 'Keycloak', refs: ['A1', 'A3'] },
    { name: 'GitHub Actions', refs: ['A2', 'A3'] },
    { name: 'Docker', refs: ['A1', 'A3'] },
    { name: 'Zx', refs: ['A3'] },
    { name: 'Bash', refs: ['A3'] },
    { name: 'Nx Monorepo', refs: ['A3'] },
    { name: 'UI / UX', refs: ['A3', 'A5'] },
    { name: 'Figma', refs: ['A2', 'A3'] },
    { name: 'Design Systems', refs: ['A3', 'A5'] },
    { name: 'Component Libraries', refs: ['A3', 'A5'] },
    { name: 'Jest', refs: ['A5'] },
    { name: 'Cypress', refs: ['A3'] },
    { name: 'Refactoring / legacy modernisation', refs: ['A3', 'A5'] },
    { name: 'React', refs: ['A2'] },
  ],
  novice: [
    { name: 'Helm', refs: ['A3'] },
    { name: 'Terraform', refs: ['A3'] },
    { name: 'OpenAI API', refs: ['A3'] },
  ],
};
