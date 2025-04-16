import  { useRef } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  GraduationCap,
  Mail,
  Phone,
  Download,
  Award,
  Code,
  Star,
} from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
    <div className="bg-white rounded-lg p-6 shadow-md mb-6">
      <h3 className="text-xl font-bold text-gray-800">{company}</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          alignItems: "center",
          marginTop: "0.5rem",
        }}
      >
        <div style={{ flexShrink: 0, width: "20px", marginRight: "8px" }}>
          <Briefcase size={16} className="text-gray-600" />
        </div>
        <span className="font-medium text-gray-600">{role}</span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          alignItems: "center",
          marginTop: "0.25rem",
        }}
      >
        <div style={{ flexShrink: 0, width: "20px", marginRight: "8px" }}>
          <Calendar size={16} className="text-gray-600" />
        </div>
        <span className="text-gray-600">{duration}</span>
      </div>

      {location && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            alignItems: "center",
            marginTop: "0.25rem",
          }}
        >
          <div style={{ flexShrink: 0, width: "20px", marginRight: "8px" }}>
            <MapPin size={16} className="text-gray-600" />
          </div>
          <span className="text-gray-600">{location}</span>
        </div>
      )}

      {description && <p className="mt-3 text-gray-700">{description}</p>}

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill, index) => {
          // Determine if this is a long skill that needs special handling
          const isLongSkill = skill.length > 25;

          return (
            <span
              key={index}
              style={{
                backgroundColor: "rgb(239, 246, 255)",
                color: "rgb(37, 99, 235)",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                padding: "5px 0.75rem",
                whiteSpace: isLongSkill ? "normal" : "nowrap",
                maxWidth: "auto",
                overflow: isLongSkill ? "hidden" : "visible",
                textOverflow: isLongSkill ? "ellipsis" : "clip",
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                
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
  const pillHeight = 28;
  
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Skills Overview</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 max-w-4xl py-12">
        <section className="mb-12">
          <h2 style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}>
            <Star className="w-6 h-6 mr-2 flex-shrink-0" />
            <span>Expert</span>
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-md mb-6">
            <div className="flex flex-wrap gap-2">
              {["Angular", "HTML, CSS", "Javascript", "Git", "Github", "CI/CD"].map((skill, index) => (
                <span 
                  key={index}
                  style={{
                    backgroundColor: "rgb(239, 246, 255)",
                    color: "rgb(37, 99, 235)",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    padding: "0 0.75rem",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    verticalAlign: "middle"
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}>
            <Code className="w-6 h-6 mr-2 flex-shrink-0" />
            <span>Intermediate</span>
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-md mb-6">
            <div className="flex flex-wrap gap-2">
              {[
                "Java ( Hibernate, since MediaSpecs )",
                "Node / Bun",
                "Electron",
                "Capacitor / Ionic",
                "Tailwind",
                "k8s",
                "Elastic search",
                "Grafana",
                "Postgresql",
                "MongoDb / NoSQL",
                "Firebase / Firestore",
                "Supabase",
                "Azure",
                "Keycloak",
                "Github actions",
                "Docker",
                "Zx",
                "Bash",
                "Nx Monorepo",
                "UI / UX",
                "Vim",
              ].map((skill, index) => {
                const isLongSkill = skill.length > 25;
                return (
                  <span 
                    key={index}
                    style={{
                      backgroundColor: "rgb(239, 246, 255)",
                      color: "rgb(37, 99, 235)",
                      borderRadius: "9999px",
                      fontSize: "0.875rem",
                      padding: "0 0.75rem",
                      display: "inline-block",
                      whiteSpace: isLongSkill ? "normal" : "nowrap",
                      maxWidth: isLongSkill ? "180px" : "none",
                      overflow: isLongSkill ? "hidden" : "visible",
                      textOverflow: isLongSkill ? "ellipsis" : "clip",
                      verticalAlign: "middle"
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
          <h2 style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}>
            <Award className="w-6 h-6 mr-2 flex-shrink-0" />
            <span>Novice</span>
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="flex flex-wrap gap-2">
              {["Helm", "Terraform", "OpenAI tools / API"].map((skill, index) => (
                <span 
                  key={index}
                  style={{
                    backgroundColor: "rgb(239, 246, 255)",
                    color: "rgb(37, 99, 235)",
                    borderRadius: "9999px",
                    fontSize: "0.875rem",
                    padding: "0 0.75rem",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    verticalAlign: "middle"
                  }}
                >
                  {skill}
                </span>
              ))}
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

  const handleDownload = async () => {
    if (!resumeRef.current || !skillsRef.current) {
      console.error("Reference not found");
      return;
    }

    try {
      // Generate PDF with both pages
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: false, // Better quality at larger file size
      });

      // Common html2canvas options for consistent rendering
      const canvasOptions = {
        scale: 3, // Increase scale for better quality
        logging: false,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        foreignObjectRendering: true,
      };

      // First page - Resume
      const resumeCanvas = await html2canvas(resumeRef.current, canvasOptions);

      const imgWidth = 210; // A4 width in mm
      const resumeImgHeight = (resumeCanvas.height * imgWidth) / resumeCanvas.width;
      const resumeImgData = resumeCanvas.toDataURL("image/jpeg", 1.0);
      
      pdf.addImage(
        resumeImgData,
        "JPEG",
        0,
        0,
        imgWidth,
        resumeImgHeight,
        undefined,
        "FAST"
      );

      // Second page - Skills
      pdf.addPage();
      
      skillsRef.current.style.position = 'absolute';
      skillsRef.current.style.top = '0px';
      skillsRef.current.style.left = '0px';
      skillsRef.current.style.width = '100%';
      skillsRef.current.style.height = '100%';
      const skillsCanvas = await html2canvas(skillsRef.current, {
        scale: 3,
        logging: false,
        useCORS: true,
        allowTaint: true,
        // backgroundColor: "#ffffff",
        foreignObjectRendering: true,

      });

      const skillsImgHeight = (skillsCanvas.height * imgWidth) / skillsCanvas.width;
      const skillsImgData = skillsCanvas.toDataURL("image/jpeg", 1.0);
      // Convert the base64 image data to an Image object
      // const skillsImage = new Image();
      // skillsImage.src = skillsImgData;
      
      // // Log the image object to console
      // console.log('Skills Image:', skillsImage);
      // // Create a temporary URL for the image to view it
      // const skillsImageUrl = URL.createObjectURL(
      //   await fetch(skillsImgData).then(res => res.blob())
      // );
      
      // // Open the image in a new tab to verify it's correctly generated
      // window.open(skillsImageUrl, '_blank');
      
      // // Clean up the temporary URL after a delay to ensure it's opened
      // setTimeout(() => {
      //   URL.revokeObjectURL(skillsImageUrl);
      // }, 5000);
      
      // pdf.insertPage(1)
      pdf.addImage(
        skillsImgData,
        "JPEG",
        0,
        0,
        imgWidth,
        skillsImgHeight,
        undefined,
        "FAST"
      );

      //reset the skills ref position
      skillsRef.current.style.position = 'relative';
      skillsRef.current.style.top = 'unset';
      skillsRef.current.style.left = 'unset';

      // Save the PDF with higher quality
      pdf.save("jonas-vercammen-resume.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
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

      {/* Main Resume Content */}
      <div ref={resumeRef}>
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Jonas Vercammen</h1>
            <p className="text-xl text-blue-100 mb-6">Frontend Developer</p>
            
            <div className="flex flex-col sm:flex-row sm:gap-x-8">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{ flexShrink: 0, width: "20px", marginRight: "8px" }}
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
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{ flexShrink: 0, width: "20px", marginRight: "8px" }}
                >
                  <Phone size={16} className="text-blue-100" />
                </div>
                <span className="text-blue-100">0487144894</span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{ flexShrink: 0, width: "20px", marginRight: "8px" }}
                >
                  <MapPin size={16} className="text-blue-100" />
                </div>
                <span className="text-blue-100">1981 Hofstade</span>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 max-w-4xl py-12">
          <section className="mb-12">
            <h2
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                marginBottom: "1.5rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              <div style={{ flexShrink: 0, width: "28px", marginRight: "8px" }}>
                <Briefcase size={24} />
              </div>
              <span>Professional Experience</span>
            </h2>

            <ExperienceCard
              company="MediaSpecs BeLux"
              role="Frontend Angular Developer"
              duration="May 2021 - Present"
              location="Privaatweg 8, Hofstade"
              skills={[
                "Angular",
                "TypeScript",
                "SASS",
                "HTML",
                "Java",
                "Keycloak",
                "Microsoft Azure",
                "Azure Kubernetes Service (AKS)",
                "Node.js",
              ]}
            />

            <ExperienceCard
              company="Vente-exclusive (Veepee)"
              role="Frontend Developer"
              duration="Oct 2017 - Apr 2021"
              description="Frontend developer consultant via Euricom"
              skills={["Angular", "TypeScript", "Node.js", "CSS", "HTML"]}
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
                "Frontend development",
              ]}
            />

            <ExperienceCard
              company="Euricom"
              role="Full Stack Javascript Developer"
              duration="Aug 2017 - Apr 2021"
              skills={["Angular", "TypeScript", "Node.js", "CSS", "SASS"]}
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
                "SASS",
              ]}
            />
          </section>

          <section>
            <h2
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                marginBottom: "1.5rem",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              <div style={{ flexShrink: 0, width: "28px", marginRight: "8px" }}>
                <GraduationCap size={24} />
              </div>
              <span>Education</span>
            </h2>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">
                Bachelor Applied Informatics
              </h3>
              <div
                style={{
                  marginTop: "0.5rem",
                  color: "rgb(75, 85, 99)",
                  lineHeight: "1.5rem",
                  height: "auto",
                }}
              >
                KDG Hogeschool Antwerp
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Skills Page - Visible but with page break for PDF export */}
      <div ref={skillsRef} style={{ pageBreakBefore: 'always' }}>
        <SkillsPage />
      </div>
    </div>
  );
}

export default App;
