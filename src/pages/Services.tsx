
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Server, Banknote, Calculator, Coins, Briefcase } from "lucide-react";

const Services = () => {
  const itServices = [
    {
      icon: Server,
      title: "IT Infrastructure",
      description: "Optimize your IT infrastructure for performance, security, and scalability.",
      link: "/services/it"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Implement effective data management strategies and solutions.",
      link: "/services/it"
    },
    {
      icon: Server,
      title: "Cloud Solutions",
      description: "Migrate to the cloud and leverage its benefits for your business.",
      link: "/services/it"
    }
  ];

  const financeServices = [
    {
      icon: Calculator,
      title: "Financial Planning",
      description: "Strategic financial planning to help you achieve your business goals.",
      link: "/services/finance"
    },
    {
      icon: Coins,
      title: "Accounting Services",
      description: "Comprehensive accounting solutions for businesses of all sizes.",
      link: "/services/finance"
    },
    {
      icon: Briefcase,
      title: "Investment Strategy",
      description: "Expert advice on investments to maximize returns and minimize risks.",
      link: "/services/finance"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-consulting-blue text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-100">
              Comprehensive consulting solutions designed to help your business overcome challenges and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-consulting-dark-blue mb-4">Tailored Solutions for Your Business</h2>
              <p className="text-gray-700 mb-4">
                At ConsultPro, we understand that every business is unique with its own set of challenges and opportunities. That's why we offer customized consulting services that address your specific needs and goals.
              </p>
              <p className="text-gray-700 mb-4">
                Our team of experienced consultants brings expertise in both IT and Financial domains, allowing us to provide holistic solutions that consider all aspects of your business operations.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're looking to optimize your technology infrastructure, improve financial performance, or transform your entire business, we have the knowledge and resources to help you succeed.
              </p>
              <Button asChild className="bg-consulting-blue hover:bg-consulting-dark-blue">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Business consulting session"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="section bg-consulting-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
            <h2 className="text-consulting-dark-blue mb-4">IT Consulting Services</h2>
            <p className="text-gray-600 text-lg">
              Leverage technology to drive innovation and efficiency in your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <Card key={index} className="border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="bg-consulting-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-consulting-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="text-consulting-blue font-medium hover:underline inline-flex items-center"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-consulting-blue hover:bg-consulting-dark-blue">
              <Link to="/services/it">View All IT Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Finance Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
            <h2 className="text-consulting-dark-blue mb-4">Financial Consulting Services</h2>
            <p className="text-gray-600 text-lg">
              Optimize your financial strategy and operations to strengthen your business position.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {financeServices.map((service, index) => (
              <Card key={index} className="border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="bg-consulting-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-consulting-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="text-consulting-blue font-medium hover:underline inline-flex items-center"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-consulting-blue hover:bg-consulting-dark-blue">
              <Link to="/services/finance">View All Finance Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section bg-consulting-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
            <h2 className="text-consulting-dark-blue mb-4">How We Work</h2>
            <p className="text-gray-600 text-lg">
              Our proven methodology ensures we deliver effective solutions and measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md relative animate-fade-in">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-consulting-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4">Discover</h3>
              <p className="text-gray-600">
                We start by understanding your business, goals, challenges, and opportunities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-consulting-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4">Analyze</h3>
              <p className="text-gray-600">
                Our experts analyze your situation and develop customized strategies and solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative animate-fade-in" style={{animationDelay: "0.4s"}}>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-consulting-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4">Implement</h3>
              <p className="text-gray-600">
                We work with you to implement the solutions and ensure smooth adoption.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md relative animate-fade-in" style={{animationDelay: "0.6s"}}>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-consulting-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4">Optimize</h3>
              <p className="text-gray-600">
                We continuously monitor, evaluate, and refine to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-consulting-dark-blue text-white py-16">
        <div className="container-custom text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Solve Your Business Challenges</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our consulting services can help your business thrive.
          </p>
          <Button asChild size="lg" className="bg-white text-consulting-blue hover:bg-gray-100">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
