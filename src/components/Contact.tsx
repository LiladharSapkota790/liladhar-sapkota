import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a backend
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="title mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-tech-blue mx-auto mb-6"></div>
          <p className="text-tech-gray">
            Have a question or want to discuss a project? Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="md:col-span-2 p-6 md:p-8 shadow-md">
            <h3 className="text-xl font-bold text-tech-dark mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-tech-gray">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-tech-gray">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-medium text-tech-gray">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-tech-gray">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  className="mt-1 min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full bg-tech-blue hover:bg-tech-darkblue">
                <Send size={16} className="mr-2" /> Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 shadow-md">
              <h3 className="text-xl font-bold text-tech-dark mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-tech-blue mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-tech-dark">Location</h4>
                    <p className="text-tech-gray">Sydney, Australia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-tech-blue mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-tech-dark">Email</h4>
                    <a href="mailto:liladharsapkota12@gmail.com" className="text-tech-blue hover:underline">
                      liladharsapkota12@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-tech-blue mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium text-tech-dark">Phone</h4>
                    <p className="text-tech-gray">0405326790</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h3 className="text-xl font-bold text-tech-dark mb-4">Connect Online</h3>
              
              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com/in/liladhar-sapkota-6342b518a/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-tech-gray hover:text-tech-blue transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  <span>LinkedIn</span>
                </a>
                
                <a 
                  href="https://github.com/LiladharSapkota790" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-tech-gray hover:text-tech-blue transition-colors"
                >
                  <Github className="w-5 h-5 mr-3" />
                  <span>GitHub</span>
                </a>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="w-full border-tech-blue text-tech-blue">
                  <a href="#" className="flex items-center justify-center">
                    Download Resume
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
