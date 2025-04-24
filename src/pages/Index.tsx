
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { database, banknote, server } from "lucide-react";

const Index = () => {
  // Services data
  const services = [
    {
      icon: server,
      title: "IT Consulting",
      description: "Expert IT solutions to optimize your technology infrastructure and digital transformation",
      link: "/services/it"
    },
    {
      icon: banknote,
      title: "Financial Services",
      description: "Strategic financial planning and accounting services to maximize your business potential",
      link: "/services/finance"
    },
    {
      icon: database,
      title: "Data Analysis",
      description: "Transform your raw data into actionable insights to drive better business decisions",
      link: "/services/it"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "ConsultPro transformed our IT infrastructure and significantly improved our operational efficiency.",
      author: "Jane Smith",
      position: "CTO, TechCorp Inc.",
      company: "TechCorp Inc."
    },
    {
      quote: "Their financial expertise helped us navigate a complex merger and acquisition, saving us millions.",
      author: "Michael Johnson",
      position: "CFO, Global Enterprises",
      company: "Global Enterprises"
    },
    {
      quote: "The team provided invaluable insights that helped us make data-driven decisions for our expansion.",
      author: "Sarah Williams",
      position: "CEO, Innovate Solutions",
      company: "Innovate Solutions"
    }
  ];

  // Stats data
  const stats = [
    { value: "500+", label: "Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Expert Consultants" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-consulting-dark-blue to-consulting-blue text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-bold mb-4">
                Strategic Consulting for Your Business Success
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Expert IT and Financial consulting services tailored to help your business thrive in today's competitive landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-consulting-blue hover:bg-gray-100">
                  <Link to="/services">Our Services</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Business consulting" 
                className="rounded-lg shadow-xl object-cover h-96 w-full" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
            <h2 className="text-consulting-dark-blue mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">
              We offer comprehensive consulting services in IT and Finance to help your business grow and succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-100 hover:shadow-lg transition-all duration-300 animate-fade-in">
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
          
          <div className="flex justify-center mt-12">
            <Button asChild size="lg" className="bg-consulting-blue hover:bg-consulting-dark-blue">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-consulting-gray py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <p className="text-4xl md:text-5xl font-bold text-consulting-blue mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
            <h2 className="text-consulting-dark-blue mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it. Hear from the businesses we've helped succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg animate-fade-in">
                <CardContent className="p-6">
                  <div className="mb-4 text-consulting-blue">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="bg-gray-200 rounded-full h-10 w-10 flex items-center justify-center mr-3">
                      <span className="text-gray-700 font-medium">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">{testimonial.position}, {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-consulting-blue text-white py-16">
        <div className="container-custom text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our experts to discuss how we can help you achieve your business goals.
          </p>
          <Button asChild size="lg" className="bg-white text-consulting-blue hover:bg-gray-100">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
