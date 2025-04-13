
import { Globe, Code, Wrench, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-tech-blue" />,
      title: "Website Design",
      description:
        "Designing modern, responsive, and user-friendly websites that align with your brand and business goals.",
    },
    {
      icon: <Code className="h-10 w-10 text-tech-blue" />,
      title: "Website & Application Development",
      description:
        "Developing functional, performance-optimized websites and web applications using the latest technologies like HTML, CSS, JavaScript, React, and Node.js.",
    },
    {
      icon: <Wrench className="h-10 w-10 text-tech-blue" />,
      title: "Technical Support",
      description: "Providing technical assistance for all types of IT-related issues.",
      bulletPoints: [
        "Router setup and troubleshooting",
        "PC and hardware diagnostics",
        "Network connectivity issues",
        "Email configuration and support",
        "VPN, server, and device management",
        "Software installations, upgrades, and problem resolution",
      ],
    },
  ];

  return (
    <section id="services" className="section bg-gradient-to-br from-sky-50 via-white to-sky-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="title mb-4">Services</h2>
          <div className="w-20 h-1 bg-tech-blue mx-auto mb-6"></div>
          <p className="text-tech-gray">
            I offer a range of reliable, high-quality IT and digital solutions tailored for individuals, businesses, and organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="bg-sky-50 p-4 rounded-full mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-tech-dark mb-2">{service.title}</h3>
                  <p className="text-tech-gray">{service.description}</p>
                </div>
                {service.bulletPoints && (
                  <ul className="mt-4 space-y-2">
                    {service.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={18} className="text-tech-blue mt-1 flex-shrink-0" />
                        <span className="text-sm text-tech-gray">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
