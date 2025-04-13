
import { Briefcase, Calendar, Building, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "IT Support Specialist",
      company: "PulsewaveIT",
      location: "Australia",
      period: "Sept 2023 – Present",
      description: [
        "Providing technical support to end users via phone, email, and in-person",
        "Troubleshooting hardware, software, and network issues",
        "Managing Office 365, Azure, Active Directory, and hybrid infrastructure",
        "Onboarding users, managing accounts, permissions, and security groups",
        "Supporting VPNs, backups, and virtual environments",
        "Creating knowledge base documentation"
      ],
    },
    {
      title: "IT Support Officer",
      company: "Link Group Pty Ltd",
      location: "Australia",
      period: "Jun 2022 – Aug 2023",
      description: [
        "Delivered technical support for hardware, software, and network issues",
        "Ensured system updates and security patches",
        "Configured new hardware for smooth onboarding",
        "Maintained ticket records and followed up on issues",
        "Collaborated on technology implementation projects"
      ],
    },
    {
      title: "Trainee IT Support Officer",
      company: "Techskills",
      location: "North Strathfield, Australia",
      period: "Sep 2021 – Dec 2021",
      description: [
        "Handled network issues and PC optimizations",
        "Installed and configured systems and applications",
        "Delivered technical assistance and handled OS ticketing",
        "Supported user account access and troubleshooting"
      ],
    },
    {
      title: "Customer Service Representative",
      company: "Woolworths",
      location: "Australia",
      period: "Jun 2021 – May 2022",
      description: [
        "Assisted customers and processed transactions",
        "Resolved complaints and maintained store operations"
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "King's Own Institute",
      location: "Sydney, Australia",
      period: "2020 - 2023",
    },
    {
      degree: "Diploma & Advanced Diploma of Information Technology",
      institution: "Australian Technology & Innovation College",
      location: "Australia",
      period: "2018 - 2020",
    },
  ];

  return (
    <section id="experience" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="title mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-tech-blue mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-tech-blue/30">
                  <div className="timeline-dot"></div>
                  <div className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-tech-dark">{exp.title}</h3>
                      <span className="badge">
                        <Building size={14} className="mr-1" /> {exp.company}
                      </span>
                    </div>
                    <div className="flex items-center text-tech-gray text-sm mb-4">
                      <Calendar size={14} className="mr-1" /> {exp.period} • {exp.location}
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight size={16} className="text-tech-blue mt-1 mr-1 flex-shrink-0" />
                          <span className="text-tech-gray">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-sky-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-tech-dark mb-6 flex items-center">
                <Briefcase size={20} className="mr-2 text-tech-blue" /> Education
              </h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
                    <h4 className="font-semibold text-tech-dark">{edu.degree}</h4>
                    <div className="text-tech-blue mt-1">{edu.institution}</div>
                    <div className="text-sm text-tech-gray mt-1">
                      <span>{edu.location}</span>
                      <span className="mx-2">•</span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-tech-blue to-sky-500 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Career Goals</h3>
              <p className="mb-4">
                To advance my career in IT infrastructure, network engineering, and cloud technologies, while contributing to efficient, secure, and user-friendly IT systems.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Network Engineering", "Cloud Infrastructure", "IT Security", "Systems Architecture"].map((goal, i) => (
                  <span key={i} className="bg-white/20 rounded-full px-3 py-1 text-sm">
                    {goal}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
