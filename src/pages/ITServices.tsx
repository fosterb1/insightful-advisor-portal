import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Server, Database, Computer } from "lucide-react";

const ITServices = () => {
  const services = [
    {
      icon: Server,
      title: "IT Infrastructure Optimization",
      description: "We help businesses design, implement, and manage efficient IT infrastructure that aligns with their goals and supports growth.",
      features: [
        "Infrastructure assessment and planning",
        "Server and network optimization",
        "IT cost optimization",
        "Security enhancement",
        "Performance monitoring and maintenance"
      ]
    },
    {
      icon: Computer,
      title: "Digital Transformation",
      description: "Guide your business through digital transformation to improve operations, customer experience, and competitive advantage.",
      features: [
        "Digital strategy development",
        "Process automation",
        "Legacy system modernization",
        "Digital workplace solutions",
        "Change management"
      ]
    },
    {
      icon: Database,
      title: "Data Management & Analytics",
      description: "Implement effective data management strategies and leverage analytics to gain valuable insights for better decision-making.",
      features: [
        "Data governance and compliance",
        "Database design and optimization",
        "Business intelligence solutions",
        "Data integration and migration",
        "Predictive analytics"
      ]
    },
    {
      icon: Server,
      title: "Cloud Services",
      description: "Expert guidance on cloud adoption, migration, and optimization to leverage the benefits of cloud computing.",
      features: [
        "Cloud readiness assessment",
        "Migration planning and execution",
        "Hybrid cloud solutions",
        "Cloud security and compliance",
        "Cost optimization"
      ]
    },
    {
      icon: Computer,
      title: "Software Development",
      description: "Custom software solutions designed to address your unique business challenges and requirements.",
      features: [
        "Custom application development",
        "Software integration",
        "API development",
        "Mobile app development",
        "Testing and quality assurance"
      ]
    },
    {
      icon: Server,
      title: "IT Security & Compliance",
      description: "Protect your business with comprehensive IT security solutions and ensure compliance with relevant regulations.",
      features: [
        "Security assessment and planning",
        "Threat detection and prevention",
        "Compliance management",
        "Security awareness training",
        "Incident response planning"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Manufacturing Firm Digital Transformation",
      description: "Helped a manufacturing company modernize their operations through digital transformation, resulting in 30% improved efficiency.",
      industry: "Manufacturing",
      results: "30% efficiency improvement"
    },
    {
      title: "Healthcare Provider Cloud Migration",
      description: "Assisted a healthcare organization in migrating to cloud infrastructure, enhancing data security and reducing IT costs by 25%.",
      industry: "Healthcare",
      results: "25% cost reduction"
    },
    {
      title: "Retail Chain IT Infrastructure Overhaul",
      description: "Redesigned the IT infrastructure for a retail chain, improving system reliability and customer service response times.",
      industry: "Retail",
      results: "99.9% uptime achieved"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-consulting-blue to-consulting-light-blue text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="font-bold mb-4">IT Consulting Services</h1>
            <p className="text-xl text-gray-100">
              Expert IT solutions to help your business leverage technology for growth, efficiency, and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-consulting-dark-blue mb-4">Transform Your Business with Technology</h2>
              <p className="text-gray-700 mb-4">
                In today's digital landscape, technology is a critical driver of business success. Our IT consulting services help you harness the power of technology to solve complex business challenges, improve efficiency, and drive innovation.
              </p>
              <p className="text-gray-700 mb-4">
                With our team of experienced IT consultants, we provide strategic guidance and hands-on expertise to help you make informed technology decisions and implement solutions that deliver tangible results.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're looking to optimize your existing IT infrastructure, migrate to the cloud, or embark on a digital transformation journey, we have the knowledge and experience to help you succeed.
              </p>
              <Button asChild className="bg-consulting-blue hover:bg-consulting-dark-blue">
                <Link to="/contact">Discuss Your IT Needs</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="IT consulting"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="section bg-consulting-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
            <h2 className="text-consulting-dark-blue mb-4">Our IT Consulting Services</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive IT solutions tailored to address your unique business challenges and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-100 hover:shadow-lg transition-all duration-300 h-full animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="bg-consulting-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-consulting-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mt-auto">
                    <h4 className="font-medium text-consulting-dark-blue mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <svg className="w-4 h-4 text-consulting-blue mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
            <h2 className="text-consulting-dark-blue mb-4">Case Studies</h2>
            <p className="text-gray-600 text-lg">
              See how our IT consulting services have helped businesses achieve their goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <Card key={index} className="border-none shadow-lg h-full animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                <CardContent className="p-6">
                  <div className="mb-4 inline-block bg-consulting-blue/10 text-consulting-blue text-sm font-bold py-1 px-3 rounded">
                    {caseStudy.industry}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{caseStudy.title}</h3>
                  <p className="text-gray-700 mb-4">{caseStudy.description}</p>
                  <div className="flex items-center text-consulting-blue font-medium">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                    Result: {caseStudy.results}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button asChild className="bg-consulting-blue hover:bg-consulting-dark-blue">
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-consulting-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
            <h2 className="text-consulting-dark-blue mb-4">Why Choose Our IT Consulting Services</h2>
            <p className="text-gray-600 text-lg">
              What sets our IT consulting services apart from the rest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <div className="bg-consulting-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-consulting-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Expertise</h3>
              <p className="text-gray-600">
                Our team consists of highly skilled IT professionals with expertise across various technologies and domains.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{animationDelay: "0.1s"}}>
              <div className="bg-consulting-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-consulting-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Business Focus</h3>
              <p className="text-gray-600">
                We understand technology in the context of your business goals, ensuring solutions deliver tangible value.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="bg-consulting-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-consulting-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Methodology</h3>
              <p className="text-gray-600">
                Our structured approach ensures efficient project execution, minimizing risks and delivering results on time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="bg-consulting-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-consulting-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaborative Approach</h3>
              <p className="text-gray-600">
                We work closely with your team, ensuring knowledge transfer and building internal capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
            <h2 className="text-consulting-dark-blue mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Common questions about our IT consulting services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto divide-y divide-gray-200">
            <div className="py-6 animate-fade-in">
              <h3 className="text-lg font-semibold text-consulting-dark-blue mb-2">How long does a typical IT consulting project take?</h3>
              <p className="text-gray-700">
                Project timelines vary based on scope and complexity. Small projects may take a few weeks, while larger transformations can span several months. During our initial consultation, we'll provide a detailed timeline based on your specific needs.
              </p>
            </div>
            
            <div className="py-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
              <h3 className="text-lg font-semibold text-consulting-dark-blue mb-2">How do you ensure the security of our data during IT projects?</h3>
              <p className="text-gray-700">
                We implement robust security measures and follow industry best practices to protect your data. This includes secure access protocols, encryption, and compliance with relevant regulations. We also sign comprehensive NDAs before starting any project.
              </p>
            </div>
            
            <div className="py-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <h3 className="text-lg font-semibold text-consulting-dark-blue mb-2">What industries do you specialize in?</h3>
              <p className="text-gray-700">
                Our IT consultants have experience across multiple industries including healthcare, finance, manufacturing, retail, and professional services. This diverse experience allows us to bring best practices from various sectors to benefit your business.
              </p>
            </div>
            
            <div className="py-6 animate-fade-in" style={{animationDelay: "0.3s"}}>
              <h3 className="text-lg font-semibold text-consulting-dark-blue mb-2">Do you provide support after project completion?</h3>
              <p className="text-gray-700">
                Yes, we offer post-implementation support and maintenance services to ensure your systems continue to operate efficiently. We can also provide training for your team and ongoing consultation as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-consulting-blue text-white py-16">
        <div className="container-custom text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our IT consulting services can help your business leverage technology for growth and success.
          </p>
          <Button asChild size="lg" className="bg-white text-consulting-blue hover:bg-gray-100">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ITServices;
