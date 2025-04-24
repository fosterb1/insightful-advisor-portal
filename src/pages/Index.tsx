import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { Database, Banknote, Server } from "lucide-react";

const Index = () => {
  // Services data
  const services = [
    {
      icon: Server,
      title: "IT Consulting",
      description: "Expert IT solutions to optimize your technology infrastructure and digital transformation",
      link: "/services/it"
    },
    {
      icon: Banknote,
      title: "Financial Services",
      description: "Strategic financial planning and accounting services to maximize your business potential",
      link: "/services/finance"
    },
    {
      icon: Database,
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
                Expert IT and Financial consulting services tailored to help your business thrive in today's competitive landscape by Cerebrox.
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

      {/* CTA Section */}
      <section className="bg-consulting-blue text-white py-16">
        <div className="container-custom text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business with Cerebrox?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our experts to discuss how Cerebrox can help you achieve your business goals.
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
