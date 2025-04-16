import React from 'react';
import { Briefcase, Calendar, MapPin, GraduationCap, Mail, Phone, Download } from 'lucide-react';
import { usePDF } from 'react-to-pdf';

function ExperienceCard({ company, role, duration, location, description, skills }: {
  company: string;
  role: string;
  duration: string;
  location?: string;
  description?: string;
  skills: string[];
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md mb-6">
      <h3 className="text-xl font-bold text-gray-800">{company}</h3>
      <div className="flex items-center text-gray-600 mt-2">
        <Briefcase className="w-4 h-4 mr-2" />
        <span className="font-medium">{role}</span>
      </div>
      <div className="flex items-center text-gray-600 mt-1">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{duration}</span>
      </div>
      {location && (
        <div className="flex items-center text-gray-600 mt-1">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{location}</span>
        </div>
      )}
      {description && (
        <p className="mt-3 text-gray-700">{description}</p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function App() {
  const { toPDF, targetRef: pdfTargetRef } = usePDF({
    filename: 'jonas-vercammen-resume.pdf',
  });

  const handleDownload = () => {
    toPDF();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-4 right-4 z-10">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </button>
      </div>

      <div ref={pdfTargetRef}>
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Jonas Vercammen</h1>
            <p className="text-xl text-blue-100 mb-6">Frontend Developer</p>
            <div className="flex flex-col sm:flex-row gap-4 text-blue-100">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:jonas@vercammen.io" className="hover:text-white">
                  jonas@vercammen.io
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>0487144894</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>1981 Hofstade</span>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 max-w-4xl py-12">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-2" />
              Professional Experience
            </h2>

            <ExperienceCard
              company="MediaSpecs BeLux"
              role="Javascript Developer"
              duration="May 2021 - Present"
              location="Privaatweg 8, Hofstade"
              skills={[
                "Angular",
                "TypeScript",
                "Node.js",
                "SASS",
                "HTML",
                "Java",
                "Keycloak",
                "Microsoft Azure",
                "Azure Kubernetes Service (AKS)"
              ]}
            />

            <ExperienceCard
              company="Vente-exclusive (Veepee)"
              role="Frontend Developer"
              duration="Oct 2017 - Apr 2021"
              description="Frontend developer consultant via Euricom"
              skills={[
                "Angular",
                "TypeScript",
                "Node.js",
                "CSS",
                "HTML"
              ]}
            />

            <ExperienceCard
              company="VRT"
              role="Consultant – Virtual Radio Project"
              duration="September 2017"
              description="Short consultancy assignment via Euricom for developing a Virtual Radio project at VRT."
              skills={[
                "Angular",
                "JavaScript",
                "TypeScript",
                "CSS",
                "HTML",
                "Frontend development"
              ]}
            />

            <ExperienceCard
              company="Euricom"
              role="Full Stack Javascript Developer"
              duration="Aug 2017 - Apr 2021"
              skills={[
                "Angular",
                "TypeScript",
                "Node.js",
                "CSS",
                "SASS"
              ]}
            />

            <ExperienceCard
              company="iDA Mediafoundry"
              role="Information Technology Intern"
              duration="Apr 2017 - Jun 2017"
              location="Veldkant 35b"
              description="9 weeks internship in development with Maiko Put around Kinect2."
              skills={[
                "Angular 2",
                "Electron",
                "Firebase",
                "TypeScript",
                "CSS",
                "SASS"
              ]}
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2" />
              Education
            </h2>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Bachelor Applied Informatics</h3>
              <div className="text-gray-600 mt-2">KDG Hogeschool Antwerp</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;