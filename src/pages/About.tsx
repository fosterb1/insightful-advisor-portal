
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Jennifer Wilson",
      position: "CEO & Founder",
      bio: "With over 20 years of experience in consulting, Jennifer has helped hundreds of businesses achieve their goals.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "David Chen",
      position: "CTO",
      bio: "David leads our IT consulting division with expertise in digital transformation and enterprise architecture.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Sophia Rodriguez",
      position: "Head of Finance",
      bio: "Sophia brings 15 years of experience in financial services and strategic planning to our team.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Marcus Johnson",
      position: "Lead Consultant",
      bio: "Marcus specializes in helping businesses optimize their operations and improve efficiency.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
  ];

  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "ConsultPro was established with a mission to provide expert consulting services to businesses."
    },
    {
      year: "2011",
      title: "IT Division Launch",
      description: "Expanded our services to include specialized IT consulting and solutions."
    },
    {
      year: "2014",
      title: "National Expansion",
      description: "Opened new offices in major cities to better serve our growing client base."
    },
    {
      year: "2017",
      title: "International Reach",
      description: "Started serving international clients and established partnerships globally."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched comprehensive digital transformation services to help clients adapt to new challenges."
    },
    {
      year: "2023",
      title: "Sustainability Initiative",
      description: "Introduced sustainability consulting to help businesses reduce their environmental impact."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-consulting-dark-blue text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="font-bold mb-4">About ConsultPro</h1>
            <p className="text-xl text-gray-100">
              We're a team of expert consultants dedicated to helping businesses transform, grow, and succeed in today's dynamic market.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-consulting-dark-blue mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2008, ConsultPro began with a simple mission: to provide businesses with expert consulting services that deliver real results. What started as a small team of dedicated professionals has grown into a comprehensive consulting firm serving clients worldwide.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we've expanded our services to include specialized IT and financial consulting, helping businesses navigate technological changes and financial challenges in an ever-evolving marketplace.
              </p>
              <p className="text-gray-700 mb-4">
                Today, ConsultPro is recognized as a leader in the industry, known for our personalized approach, technical expertise, and commitment to client success. We continue to adapt and innovate, ensuring our clients stay ahead in their respective industries.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-consulting-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
            <h2 className="text-consulting-dark-blue mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg">
              Our core values guide everything we do and shape our approach to serving our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in">
              <div className="bg-consulting-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-consulting-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, delivering exceptional results and exceeding client expectations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="bg-consulting-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-consulting-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and partnership, working closely with our clients to achieve their goals.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in" style={{animationDelay: "0.4s"}}>
              <div className="bg-consulting-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-consulting-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovation and creative thinking to develop cutting-edge solutions for complex business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
            <h2 className="text-consulting-dark-blue mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600 text-lg">
              Our experienced team of professionals brings diverse expertise and a passion for helping businesses succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-consulting-blue font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section bg-consulting-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
            <h2 className="text-consulting-dark-blue mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg">
              Key milestones in our company's history that have shaped who we are today.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline center line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-consulting-blue"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-consulting-blue"></div>
                    
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pb-6 md:pb-0`}>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="mb-2 inline-block bg-consulting-blue text-white text-sm font-bold py-1 px-3 rounded-full">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Empty space for alternating layout */}
                    <div className="md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-consulting-dark-blue text-white py-16">
        <div className="container-custom text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our team of experts can help your business reach its full potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-consulting-blue hover:bg-gray-100">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
