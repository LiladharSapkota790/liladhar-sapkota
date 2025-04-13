
import { User, Briefcase, Book, Target, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="title mb-4">About Me</h2>
          <div className="w-20 h-1 bg-tech-blue mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
       
                        
              <div className="relative">
                <img 
                  src="/lovable-uploads/b42ac345-5b9a-4787-9c82-0058910a33ee.png" 
                  alt="Day in the Life" 
                  className="w-40 h-40 object-cover rounded-lg shadow-lg border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 bg-white rounded-lg p-1 shadow">
                  <p className="text-xs font-medium text-tech-dark">A day at work</p>
                </div>
                </div>
         
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-tech-dark">
              I'm Liladhar Sapkota, an IT Support Specialist based in Sydney
            </h3>
            <p className="text-tech-gray">
              I am a highly motivated IT Support Specialist with over 1.5 years of hands-on experience in troubleshooting 
              hardware, software, and networking devices. I have solid knowledge in system maintenance, Active Directory, 
              Microsoft 365, virtualization, and remote desktop support. I am passionate about delivering reliable IT 
              solutions and continuously improving my technical skills.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-sky-100 rounded-full text-tech-blue">
                  <User size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-tech-dark">Career Focus</h4>
                  <p className="text-sm text-tech-gray">IT Infrastructure & Cloud</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-sky-100 rounded-full text-tech-blue">
                  <Briefcase size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-tech-dark">Experience</h4>
                  <p className="text-sm text-tech-gray">1.5+ years professional</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-sky-100 rounded-full text-tech-blue">
                  <Book size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-tech-dark">Education</h4>
                  <p className="text-sm text-tech-gray">Bachelor of IT</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="p-2 bg-sky-100 rounded-full text-tech-blue">
                  <Target size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-tech-dark">Career Goal</h4>
                  <p className="text-sm text-tech-gray">Network & Cloud Engineering</p>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <h4 className="font-semibold text-tech-dark mb-2">Key Attributes</h4>
              <div className="grid grid-cols-2 gap-2">
                {["Problem-Solving", "Communication", "Critical Thinking", "Adaptability"].map((attr) => (
                  <div key={attr} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-tech-blue" />
                    <span className="text-sm text-tech-gray">{attr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
 
    </section>
  );
};

export default About;
