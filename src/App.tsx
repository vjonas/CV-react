import { useRef } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  GraduationCap,
  Mail,
  Phone,
  Star,
} from 'lucide-react';

function ExperienceCard({
  company,
  role,
  duration,
  location,
  description,
  skills,
}: {
  company: string;
  role: string;
  duration: string;
  location?: string;
  description?: string;
  skills: string[];
}) {
  return (
    <div className="cv-card bg-white rounded-lg p-6 shadow-md mb-6">
      <h3 className="text-xl font-bold text-gray-800">{company}</h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          alignItems: 'center',
          marginTop: '0.5rem',
        }}
      >
        <div style={{ flexShrink: 0, width: '20px', marginRight: '8px' }}>
          <Briefcase size={16} className="text-gray-600" />
        </div>
        <span className="font-medium text-gray-600">{role}</span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          alignItems: 'center',
          marginTop: '0.25rem',
        }}
      >
        <div style={{ flexShrink: 0, width: '20px', marginRight: '8px' }}>
          <Calendar size={16} className="text-gray-600" />
        </div>
        <span className="text-gray-600">{duration}</span>
      </div>

      {location && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            alignItems: 'center',
            marginTop: '0.25rem',
          }}
        >
          <div style={{ flexShrink: 0, width: '20px', marginRight: '8px' }}>
            <MapPin size={16} className="text-gray-600" />
          </div>
          <span className="text-gray-600">{location}</span>
        </div>
      )}

      {description && (
        <p
          className="mt-3 text-gray-700"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      <div className="cv-tags mt-4 flex flex-wrap gap-2">
        {skills.map((skill, index) => {
          // Determine if this is a long skill that needs special handling
          const isLongSkill = skill.length > 25;

          return (
            <span
              key={index}
              style={{
                backgroundColor: 'rgb(239, 246, 255)',
                color: 'rgb(37, 99, 235)',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                padding: '5px 0.75rem',
                whiteSpace: isLongSkill ? 'normal' : 'nowrap',
                maxWidth: 'auto',
                overflow: isLongSkill ? 'hidden' : 'visible',
                textOverflow: isLongSkill ? 'ellipsis' : 'clip',
                display: 'grid',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}
              title={skill} // Add tooltip for truncated skills
            >
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function SkillsPage() {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Skills Overview</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            <Star className="w-6 h-6 mr-2 flex-shrink-0" fill="currentColor" />
            <span>Expert</span>
          </h2>
          <div className="cv-card bg-white rounded-lg p-6 shadow-md mb-6">
            <div className="flex flex-wrap gap-2">
              {[
                'Angular',
                'Node.js',
                'HTML',
                'CSS',
                'Javascript',
                'Git',
                'Github',
                'CI/CD',
                'Agile/Scrum',
                'REST APIs / JSON integrations',
                'Cursor',
              ].map((skill, index) => (
                <span
                  key={index}
                  style={{
                    backgroundColor: 'rgb(239, 246, 255)',
                    color: 'rgb(37, 99, 235)',
                    borderRadius: '9999px',
                    fontSize: '0.875rem',
                    padding: '0 0.75rem',
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                    verticalAlign: 'middle',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            <Star
              className="w-6 h-6 mr-2 flex-shrink-0"
              fill="currentColor"
              fillOpacity="0.25"
              stroke="currentColor"
              strokeWidth={1.5}
            />
            <span>Intermediate</span>
          </h2>
          <div className="cv-card bg-white rounded-lg p-6 shadow-md mb-6">
            <div className="flex flex-wrap gap-2">
              {[
                'Java ( Hibernate, since MediaSpecs )',
                'Node / Bun',
                'Kubernetes',
                'ArgoCD',
                'Electron',
                'Capacitor / Ionic',
                'Tailwind',
                'Elastic search',
                'Grafana',
                'PostgreSQL / SQL',
                'PostGIS',
                'OpenLayers',
                'GeoJSON / KML / WKT',
                'Geospatial / GIS data processing',
                'Python',
                'MongoDb / NoSQL',
                'Firebase / Firestore',
                'Supabase',
                'Azure',
                'Keycloak',
                'Github actions',
                'Docker',
                'Zx',
                'Bash',
                'Nx Monorepo',
                'UI / UX',
                'Figma',
                'Design Systems',
                'Component Libraries',
                'Jest',
                'Cypress',
                'Refactoring / Legacy Modernization',
                'Vim',
                'React',
              ].map((skill, index) => {
                const isLongSkill = skill.length > 25;
                return (
                  <span
                    key={index}
                    style={{
                      backgroundColor: 'rgb(239, 246, 255)',
                      color: 'rgb(37, 99, 235)',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      padding: '0 0.75rem',
                      display: 'inline-block',
                      whiteSpace: isLongSkill ? 'normal' : 'nowrap',
                      maxWidth: 'auto',
                      overflow: isLongSkill ? 'hidden' : 'visible',
                      textOverflow: isLongSkill ? 'ellipsis' : 'clip',
                      verticalAlign: 'middle',
                    }}
                    title={skill}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <h2
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1.5rem',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            <Star
              className="w-6 h-6 mr-2 flex-shrink-0"
              fill="currentColor"
              fillOpacity="0"
              stroke="currentColor"
              strokeWidth={1.5}
            />
            <span>Novice</span>
          </h2>
          <div className="cv-card bg-white rounded-lg p-6 shadow-md">
            <div className="flex flex-wrap gap-2">
              {['Helm', 'Terraform', 'OpenAI tools / API'].map(
                (skill, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: 'rgb(239, 246, 255)',
                      color: 'rgb(37, 99, 235)',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      padding: '0 0.75rem',
                      display: 'inline-block',
                      whiteSpace: 'nowrap',
                      verticalAlign: 'middle',
                    }}
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function App() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Resume Content */}
      <div ref={resumeRef} className="cv-page" style={{ width: '1240px' }}>
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Jonas Vercammen</h1>
            <p className="text-xl text-blue-100 mb-6">Full Stack Developer</p>

            <div className="flex flex-col sm:flex-row sm:gap-x-8">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  alignItems: 'center',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{ flexShrink: 0, width: '20px', marginRight: '8px' }}
                >
                  <Mail size={16} className="text-blue-100" />
                </div>
                <a
                  href="mailto:jonas@vercammen.io"
                  className="text-blue-100 hover:text-white"
                >
                  jonas@vercammen.io
                </a>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  alignItems: 'center',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{ flexShrink: 0, width: '20px', marginRight: '8px' }}
                >
                  <Phone size={16} className="text-blue-100" />
                </div>
                <a
                  href="tel:+32469682993"
                  className="text-blue-100 hover:text-white"
                >
                  +32469682993
                </a>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  alignItems: 'center',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{ flexShrink: 0, width: '20px', marginRight: '8px' }}
                >
                  <MapPin size={16} className="text-blue-100" />
                </div>
                <span className="text-blue-100">1981 Hofstade</span>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4  py-12">
          <section className="mb-12">
            <h2
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                marginBottom: '1.5rem',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                alignItems: 'center',
              }}
            >
              <div style={{ flexShrink: 0, width: '28px', marginRight: '8px' }}>
                <Briefcase size={24} />
              </div>
              <span>Professional Experience</span>
            </h2>

            <ExperienceCard
              company="NCCN - National Crisis Center of Belgium"
              role="Frontend Developer Angular"
              duration="May 2026 - Current"
              description="Improving and building on the current Paragon application as an Angular frontend developer, working in an Agile/Scrum environment with GitHub, Docker, and Azure. A core part of the application is map-based situational awareness built on OpenLayers. I extended the anchor management module so that selecting an anchor on the map opens an overlay with more detailed information about that anchor, working with GeoJSON feature data, layer styling, and map interactions."
              skills={[
                'Angular',
                'TypeScript',
                'Git',
                'CSS',
                'HTML',
                'Agile/Scrum',
                'GitHub',
                'Docker',
                'Microsoft Azure',
                'OpenLayers',
                'GeoJSON',
                'Geospatial / GIS',
              ]}
            />

            <ExperienceCard
              company="Adwanted"
              role="Full stack developer"
              duration="August 2025 - March 2026"
              location="Remote - Paris, France"
              description="For a client we have built a media planner tool to navigate through all the surveys and create targeted media plans. I implemented features from Figma designs created by a UX designer, with React and Node.js integrations around JSON APIs and PostgreSQL-backed data. I was mostly responsible for the infrastructure and monitoring setup in Azure Kubernetes with GitHub Actions. I created backoffice features - with AI - in React and NodeJS. Cursor and Claude Code was used a lot in the project, by all developers. The project was delivered in an Agile/Scrum way of working.
<br />
<br />
<strong>Skills:</strong> Azure Kubernetes, Node.js, React, PostgreSQL, SQL, Figma, JSON/API integrations, GitHub Actions, CI/CD, Agile/Scrum"
              skills={[
                'React',
                'Node.js',
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
                'Agile/Scrum',
              ]}
            />

            <ExperienceCard
              company="Adwanted - MediaSpecs BeLux"
              role="Senior Frontend Angular Developer"
              duration="May 2021 - March 2026"
              location="Privateweg 8, Hofstade"
              description="I initially focused on outlining the requirements for the front-end development, specifically the customer-facing application. This involved creating the front office interface where users can search and navigate through items and entities in the database using tags and search queries. Users can also select entities and export them. I devised a plan to incorporate a more detailed planning tool and worked on the back office application, which manages these entities, ensures data is current, sends invitations to new users, and oversees user and customer management. This was my focus for the first two years. The product used a Figma-based design system that was translated into reusable Angular components and component-library patterns.
               <br />
               <br />
Subsequently, I took charge of the entire system, encompassing both front and back-end development. I gained proficiency in Java, Keycloak, Grafana dashboards, Azure Kubernetes, and some DevOps practices using GitHub and GitHub Actions. My experience spans all layers of the company, including managing and updating the Postgres database, Kubernetes and other tasks. I also coached and coordinated external developers from a Hungarian partner company by preparing sprint tasks, clarifying requirements, reviewing delivered work, and guiding improvements.
<ul>
  <li>Frontend development with Angular and TypeScript</li>
  <li>Backend development with Java and Node.js</li>
  <li>Agile/Scrum delivery with sprint planning, task breakdown, reviews, and iterative releases</li>
  <li>Coaching and technical guidance for external developers, including work review and feedback</li>
  <li>Design-system implementation from Figma and reusable component-library development</li>
  <li>JSON/API integrations between front office, back office, and backend services</li>
  <li>Authentication and authorization using Keycloak</li>
  <li>Monitoring and visualization with Grafana dashboards</li>
  <li>Container orchestration with Azure Kubernetes Service (AKS)</li>
  <li>DevOps practices using Git and GitHub Actions</li>
  <li>SQL queries and database management with PostgreSQL</li>
  <li>Unit and E2E testing experience, including Cypress for end-to-end coverage</li>
  <li>Repeated Angular version upgrades across the application, including the January 2026 upgrade from Angular v19 to v21</li>
  <li>Legacy modernization, refactoring, code cleanup, and maintainability improvements</li>
  <li>Infrastructure management including Kubernetes updates and maintenance</li>
  <li>Geospatial links between Belgian regions and their corresponding media, so media could be searched location-based across media types and calendar events</li>
  <li>Spatial data modelling and location-based queries in PostgreSQL/PostGIS to support the region-to-media relations</li>
  <li>Python and Bash scripting for geodata conversion and bulk import of region and location data (GeoJSON, WKT)</li>
  <li>MCP server setup POC to connect it with internal chat bot tools (Cursor and Claude Code, ...)</li>
</ul>"
              skills={[
                'Angular',
                'TypeScript',
                'CSS',
                'Javascript',
                'Git',
                'Figma',
                'Design Systems',
                'Component Libraries',
                'REST APIs',
                'JSON integrations',
                'Kubernetes',
                'ArgoCD',
                'SASS',
                'HTML',
                'Java',
                'Keycloak',
                'PostgreSQL',
                'SQL',
                'PostGIS',
                'GeoJSON',
                'Python',
                'Geospatial / GIS',
                'Cypress',
                'Angular Upgrades',
                'Refactoring',
                'Legacy Modernization',
                'Microsoft Azure',
                'Azure Kubernetes Service (AKS)',
                'Node.js',
                'Agile/Scrum',
              ]}
            />

            <ExperienceCard
              company="Vente-exclusive (Veepee)"
              role="Frontend Developer"
              duration="Oct 2017 - Apr 2021"
              description="I was involved in the logistics side of the company, where we managed customer orders, particularly focusing on back orders. We streamlined the process of managing and ordering with suppliers, by developing an easy to use dashboard. This dashboard allowed us to efficiently handle orders, track progress, and manage product categories to facilitate bulk orders for suppliers. The project used a design system, and I built reusable component-library pieces that could be shared across multiple teams. I also collaborated closely with backend teams working in .NET and integrated the frontend with JSON/API-driven services.
              <br />
              <br />
Additionally, I contributed to the development of a returns app for the warehouse. This app streamlined the process when customers returned orders. It featured a dashboard to manage incoming boxes, approve returned orders, and included a mobile app for scanning barcodes on parcels and individual items. This functionality enabled automatic opening of the correct order in the UI app and facilitated the scanning and approval of items meant to be returned, with the app integrated with a barcode scanner.
              <br />
              <br />
Key responsibilities and achievements:
<ul>
  <li>Developed and maintained a logistics dashboard for efficient order management and supplier coordination</li>
  <li>Created a comprehensive returns management system with integrated barcode scanning</li>
  <li>Implemented mobile app functionality for warehouse operations</li>
  <li>Built reusable Angular components from a design system for use by multiple teams</li>
  <li>Worked in Agile/Scrum teams with iterative delivery and sprint-based planning</li>
  <li>Integrated Angular applications with JSON APIs and backend services maintained by .NET teams</li>
  <li>Added and maintained unit tests with Jest</li>
  <li>Refactored legacy Angular code to improve table rendering, change detection, and overall performance</li>
  <li>Streamlined back-order processes and supplier ordering workflows</li>
  <li>Integrated barcode scanning technology for automated order processing</li>
  <li>Designed and developed user-friendly interfaces for both warehouse staff and management</li>
</ul>"
              skills={[
                'Angular',
                'TypeScript',
                'Git',
                'CSS',
                'Javascript',
                'Ionic',
                'Node.js',
                '.NET collaboration',
                'Design Systems',
                'Component Libraries',
                'REST APIs',
                'JSON integrations',
                'Jest',
                'Refactoring',
                'Performance optimization',
                'Agile/Scrum',
                'HTML',
              ]}
            />

            <ExperienceCard
              company="VRT"
              role="Consultant – Virtual Radio Project"
              duration="September 2017"
              description="Short consultancy assignment via Euricom for developing a Virtual Radio project at VRT. The project involved developing a sophisticated dashboard for an iPad, empowering the radio station to manage their show effortlessly while on the go, eliminating the need for bulky equipment. With a robust backend already in place, featuring high-throughput APIs and WebSockets, the challenge was to create an innovative virtual radio dashboard. 
              <br />
              <br />
              Key responsibilities and achievements:
              <ul>
                <li>Developed an iPad-based virtual radio dashboard for mobile broadcasting</li>
                <li>Integrated with existing high-throughput APIs and WebSockets backend</li>
                <li>Created comprehensive broadcast control interface including:
                  <ul>
                    <li>Jingle playback management</li>
                    <li>Microphone control system</li>
                    <li>Music playback interface</li>
                  </ul>
                </li>
                <li>Eliminated need for traditional bulky broadcasting equipment</li>
                <li>Enabled mobile broadcasting capabilities for radio station staff</li>
              </ul>"
              skills={[
                'Angular',
                'TypeScript',
                'CSS',
                'Git',
                'Javascript',
                'HTML',
                'REST APIs',
                'JSON integrations',
                'WebSockets',
                'Frontend development',
                'Agile/Scrum',
              ]}
            />

            <ExperienceCard
              company="Euricom"
              role="Full Stack Javascript Developer"
              duration="Aug 2017 - Apr 2021"
              description="Consultant Full stack developer using Angular and Node.js, delivering client projects in Agile/Scrum environments."
              skills={[
                'Angular',
                'TypeScript',
                'Git',
                'Node.js',
                'CSS',
                'SASS',
                'Agile/Scrum',
              ]}
            />

            <ExperienceCard
              company="iDA Mediafoundry"
              role="Information Technology Intern"
              duration="Apr 2017 - Jun 2017"
              location="Veldkant 35b"
              description="Developed an innovative physiotherapy application using Microsoft Kinect 2 technology, creating a dual-application system for exercise management and patient rehabilitation.
              <br />
              <br />
              Key achievements and features:
              <ul>
                <li>Created two integrated applications:
                  <ul>
                    <li>Exercise design platform for physiotherapists</li>
                    <li>Patient-facing exercise execution application</li>
                  </ul>
                </li>
                <li>Implemented real-time motion tracking using Kinect camera:
                  <ul>
                    <li>Joint tracking for exercise accuracy</li>
                    <li>Body depth monitoring</li>
                    <li>Visual exercise guidance system</li>
                  </ul>
                </li>
                <li>Built desktop application using Electron for USB camera management</li>
                <li>Achieved recognition as the best overall product among three internship projects</li>
              </ul>"
              skills={[
                'Angular 2',
                'TypeScript',
                'Git',
                'CSS',
                'Javascript',
                'SASS',
                'Electron',
                'Firebase',
                'Agile/Scrum',
              ]}
            />
          </section>

          <section>
            <h2
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                marginBottom: '1.5rem',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                alignItems: 'center',
              }}
            >
              <div style={{ flexShrink: 0, width: '28px', marginRight: '8px' }}>
                <GraduationCap size={24} />
              </div>
              <span>Education</span>
            </h2>

            <div className="cv-card bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Bachelor Applied Informatics
              </h3>
              <div
                style={{
                  marginTop: '0.5rem',
                  color: 'rgb(75, 85, 99)',
                  lineHeight: '1.5rem',
                  height: 'auto',
                }}
              >
                KDG Hogeschool Antwerp
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Skills Page - Visible but with page break for PDF export */}
      <div
        ref={skillsRef}
        className="cv-page cv-page-break"
        style={{ width: '1240px' }}
      >
        <SkillsPage />
      </div>
    </div>
  );
}

export default App;
