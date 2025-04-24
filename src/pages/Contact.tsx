
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const officeLocations = [
    {
      city: "New York",
      address: "123 Business Ave, Suite 500, New York, NY 10001",
      phone: "(212) 555-6789",
      email: "nyc@consultpro.com"
    },
    {
      city: "San Francisco",
      address: "456 Tech Boulevard, Floor 8, San Francisco, CA 94105",
      phone: "(415) 555-1234",
      email: "sf@consultpro.com"
    },
    {
      city: "Chicago",
      address: "789 Financial Street, Suite 300, Chicago, IL 60601",
      phone: "(312) 555-7890",
      email: "chicago@consultpro.com"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-consulting-dark-blue text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-100">
              Reach out to discuss how our consulting services can help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h2 className="text-consulting-dark-blue mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Have questions about our services or want to discuss a potential project? Fill out the form or contact us directly using the information below.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-consulting-blue/10 p-2 rounded-full mr-4">
                    <svg className="h-5 w-5 text-consulting-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-consulting-dark-blue mb-1">Email</h3>
                    <p className="text-gray-600">info@consultpro.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-consulting-blue/10 p-2 rounded-full mr-4">
                    <svg className="h-5 w-5 text-consulting-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-consulting-dark-blue mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-consulting-blue/10 p-2 rounded-full mr-4">
                    <svg className="h-5 w-5 text-consulting-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-consulting-dark-blue mb-1">Headquarters</h3>
                    <p className="text-gray-600">123 Business Avenue, Suite 500</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-consulting-dark-blue">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-consulting-blue/10 p-2 rounded-full text-consulting-blue hover:bg-consulting-blue hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-consulting-blue/10 p-2 rounded-full text-consulting-blue hover:bg-consulting-blue hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-consulting-blue/10 p-2 rounded-full text-consulting-blue hover:bg-consulting-blue hover:text-white transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="shadow-lg border-none">
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-consulting-dark-blue">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-consulting-blue focus:border-consulting-blue"
                      >
                        <option value="">Select a service</option>
                        <option value="it-infrastructure">IT Infrastructure</option>
                        <option value="digital-transformation">Digital Transformation</option>
                        <option value="data-management">Data Management</option>
                        <option value="financial-planning">Financial Planning</option>
                        <option value="accounting-services">Accounting Services</option>
                        <option value="business-advisory">Business Advisory</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        className="w-full min-h-32"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-consulting-blue hover:bg-consulting-dark-blue"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="section bg-consulting-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
            <h2 className="text-consulting-dark-blue mb-4">Our Office Locations</h2>
            <p className="text-gray-600 text-lg">
              Visit us at one of our offices for in-person consultation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <Card key={index} className="border border-gray-100 animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-consulting-dark-blue">{location.city} Office</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex">
                      <svg className="h-5 w-5 text-consulting-blue mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{location.address}</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-consulting-blue mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{location.phone}</span>
                    </li>
                    <li className="flex">
                      <svg className="h-5 w-5 text-consulting-blue mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{location.email}</span>
                    </li>
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
            <h2 className="text-consulting-dark-blue mb-4">Visit Our Headquarters</h2>
            <p className="text-gray-600 text-lg">
              Find us in the heart of New York's business district.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-96 animate-fade-in">
            {/* Placeholder for an actual map integration */}
            <div className="bg-consulting-gray h-full w-full flex items-center justify-center">
              <div className="text-center">
                <svg className="h-12 w-12 text-consulting-blue mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-600 mb-2">Map placeholder</p>
                <p className="text-gray-600">123 Business Avenue, Suite 500, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-consulting-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
            <h2 className="text-consulting-dark-blue mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Common questions about getting in touch with our team.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto divide-y divide-gray-200">
            <div className="py-6 animate-fade-in">
              <h3 className="text-lg font-semibold text-consulting-dark-blue mb-2">How quickly can I expect a response after contacting you?</h3>
              <p className="text-gray-700">
                We typically respond to all inquiries within 24 business hours. For urgent matters, please indicate this in your message or call our office directly.
              </p>
            </div>
            
            <div className="py-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
              <h3 className="text-lg font-semibold text-consulting-dark-blue mb-2">Can I schedule a virtual consultation?</h3>
              <p className="text-gray-700">
                Yes, we offer virtual consultations via video conferencing for clients who prefer remote meetings or are located outside our office areas. Please mention this preference when contacting us.
              </p>
            </div>
            
            <div className="py-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <h3 className="text-lg font-semibold text-consulting-dark-blue mb-2">Is there a fee for initial consultations?</h3>
              <p className="text-gray-700">
                We offer a complimentary initial consultation to discuss your needs and determine how we can best assist you. This allows us to understand your situation and provide a tailored proposal for our services.
              </p>
            </div>
            
            <div className="py-6 animate-fade-in" style={{animationDelay: "0.3s"}}>
              <h3 className="text-lg font-semibold text-consulting-dark-blue mb-2">Do you work with international clients?</h3>
              <p className="text-gray-700">
                Yes, we have experience working with clients globally and can accommodate different time zones for meetings and consultations. Our virtual services make it easy to collaborate regardless of your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-consulting-blue text-white py-16">
        <div className="container-custom text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Take the first step toward achieving your business goals. Contact us today to schedule a consultation.
          </p>
          <Button asChild size="lg" className="bg-white text-consulting-blue hover:bg-gray-100">
            <a href="tel:5551234567">Call (555) 123-4567</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
