
import { Server, Monitor, Network, Database, Shield, Cloud } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Hardware & Software",
      icon: <Monitor className="w-8 h-8 text-tech-blue" />,
      skills: ["Installation & Configuration", "System Maintenance", "Hardware Assembly", "Software Troubleshooting", "System Upgrades"],
    },
    {
      title: "Networking",
      icon: <Network className="w-8 h-8 text-tech-blue" />,
      skills: ["DHCP & DNS", "TCP/IP", "Routers & Switches", "VPN Configuration", "Firewall Management"],
    },
    {
      title: "Virtualization",
      icon: <Server className="w-8 h-8 text-tech-blue" />,
      skills: ["Hyper-V", "VMware", "Virtual Machine Management", "Resource Allocation", "P2V Migrations"],
    },
    {
      title: "Operating Systems",
      icon: <Monitor className="w-8 h-8 text-tech-blue" />,
      skills: ["Windows 10/11", "Windows Server 2019", "macOS", "Active Directory", "Group Policy"],
    },
    {
      title: "Cloud Technologies",
      icon: <Cloud className="w-8 h-8 text-tech-blue" />,
      skills: ["Microsoft 365", "Azure", "SharePoint", "Intune", "Cloud Security"],
    },
    {
      title: "IT Management",
      icon: <Shield className="w-8 h-8 text-tech-blue" />,
      skills: ["OS Ticketing", "Backup Systems", "Veeam", "Datto", "IDrive"],
    },
  ];

  const softSkills = [
    "Problem-Solving",
    "Communication",
    "Critical Thinking",
    "Teamwork",
    "Adaptability",
    "Time Management",
    "Attention to Detail",
    "Customer Service",
    "Multitasking",
    "Analytical Thinking",
  ];

  return (
    <section id="skills" className="section bg-sky-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="title mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-tech-blue mx-auto mb-6"></div>
          <p className="text-tech-gray">
            With a comprehensive skillset in IT infrastructure and support, I deliver effective solutions to complex technical challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 border-t-4 border-t-tech-blue hover:shadow-lg transition-shadow">
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-tech-dark mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-tech-blue rounded-full"></div>
                    <span className="text-tech-gray">{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-tech-dark text-center mb-8">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <div key={index} className="skill-tag">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
