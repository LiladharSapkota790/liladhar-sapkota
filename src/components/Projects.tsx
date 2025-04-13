import { Github, FileCode, ExternalLink, Network, Server, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const featuredProject = {
    title: "Network Infrastructure and IT System Design for Clinic",
    status: "In Progress",
    description: "Designing and implementing a complete IT infrastructure for a medical clinic with 10 rooms — including a main office with 24 workstations, HR, Sales, IT, Management, Finance, CEO, Reception, Common Area, and a Server Room.",
    image: "/lovable-uploads/c8514c4b-580b-4056-ab38-d9cbe120d26f.png",
    tasks: [
      "Wiring network devices",
      "Setting up routers, switches, patch panels, CCTVs, access points, phones, printers, etc.",
      "Setting up a server with a domain controller",
      "Creating Group Policies and company configurations",
      "User accounts creation and Office 365 setup",
      "File server setup with Access-Based Enumeration",
      "Backup implementation using NAS and Amazon S3",
      "ManageEngine RMM deployment",
      "SharePoint setup with document libraries per department",
      "Network design in Cisco Packet Tracer"
    ],
    tags: ["Network Infrastructure", "Active Directory", "Office 365", "Backup Solutions", "Security"],
    link: "#"
  };

  const projects = [
    {
      title: "Food Delivery Web Home Page",
      description: "A static homepage layout for a food delivery service using HTML and CSS.",
      icon: <FileCode className="w-5 h-5" />,
      tags: ["HTML", "CSS", "Frontend"],
      github: "https://github.com/LiladharSapkota790"
    },
    {
      title: "Netflix Homepage Clone",
      description: "Responsive Netflix homepage clone using Bootstrap.",
      icon: <FileCode className="w-5 h-5" />,
      tags: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
      github: "https://github.com/LiladharSapkota790"
    },
    {
      title: "HomeFoods Restaurant Website",
      description: "A restaurant website with HTML structure and CSS styling.",
      icon: <FileCode className="w-5 h-5" />,
      tags: ["HTML", "CSS", "Frontend"],
      github: "https://github.com/LiladharSapkota790"
    },
    {
      title: "Liladhar Blog Website",
      description: "A blog web application using EJS templating and Node.js.",
      icon: <FileCode className="w-5 h-5" />,
      tags: ["Node.js", "EJS", "Express", "MongoDB"],
      github: "https://github.com/LiladharSapkota790"
    },
    {
      title: "Banke Bardiya Art Competition Website",
      description: "A content management site for an art competition using EJS and Node.js.",
      icon: <FileCode className="w-5 h-5" />,
      tags: ["Node.js", "EJS", "Express", "MongoDB"],
      github: "https://github.com/LiladharSapkota790"
    }
  ];

  return (
    <section id="projects" className="section bg-gradient-to-br from-sky-50 to-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="title mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-tech-blue mx-auto mb-6"></div>
          <p className="text-tech-gray">
            Showcasing my expertise in IT infrastructure design, networking, and web development.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-tech-dark mb-6">Featured Project</h3>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">
                    {featuredProject.status}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-tech-dark mb-3">{featuredProject.title}</h3>
                <p className="text-tech-gray mb-4">{featuredProject.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-tech-dark mb-2">Key Implementation Tasks:</h4>
                  <ul className="space-y-2">
                    {featuredProject.tasks.slice(0, 5).map((task, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mt-1 mr-2">
                          {i === 0 ? <Network size={14} className="text-tech-blue" /> :
                           i === 1 ? <Server size={14} className="text-tech-blue" /> :
                           <Database size={14} className="text-tech-blue" />}
                        </div>
                        <span className="text-sm text-tech-gray">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag, i) => (
                    <span key={i} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <h3 className="text-2xl font-bold text-tech-dark mb-6">Development Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 border-t-4 border-t-tech-blue hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="p-3 bg-sky-100 rounded-full w-fit mb-4 text-tech-blue">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold text-tech-dark mb-2">{project.title}</h3>
              <p className="text-tech-gray mb-4 min-h-[60px]">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-sky-50 text-tech-blue rounded-full px-2 py-1 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-start">
                <Button variant="outline" size="sm" className="border-tech-blue text-tech-blue mr-3">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github size={16} className="mr-1" />
                    GitHub
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
