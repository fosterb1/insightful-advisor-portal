
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { calculator, coins, banknote, briefcase } from "lucide-react";

const FinanceServices = () => {
  const services = [
    {
      icon: calculator,
      title: "Financial Planning & Analysis",
      description: "Strategic financial planning and analysis to optimize your business performance and achieve long-term goals.",
      features: [
        "Financial strategy development",
        "Budgeting and forecasting",
        "Cash flow management",
        "Financial modeling",
        "Performance metrics and KPIs"
      ]
    },
    {
      icon: banknote,
      title: "Accounting Services",
      description: "Comprehensive accounting solutions to ensure accurate financial reporting and compliance.",
      features: [
        "Bookkeeping and accounting",
        "Financial statement preparation",
        "Tax planning and compliance",
        "Payroll management",
        "Expense tracking and management"
      ]
    },
    {
      icon: briefcase,
      title: "Business Advisory",
      description: "Expert guidance to help your business navigate financial challenges and capitalize on opportunities.",
      features: [
        "Business strategy consulting",
        "Risk assessment and management",
        "Cost reduction strategies",
        "Financial health assessment",
        "Growth planning"
      ]
    },
    {
      icon: coins,
      title: "Investment Strategy",
      description: "Develop and implement investment strategies aligned with your business objectives and risk tolerance.",
      features: [
        "Investment planning and analysis",
        "Portfolio management",
        "Risk assessment and mitigation",
        "Return optimization",
        "Investment performance monitoring"
      ]
    },
    {
      icon: calculator,
      title: "Financial Reporting & Analysis",
      description: "Accurate and insightful financial reporting to support informed decision-making.",
      features: [
        "Financial statement analysis",
        "Management reporting",
        "Compliance reporting",
        "Data visualization",
        "Performance trend analysis"
      ]
    },
    {
      icon: briefcase,
      title: "Mergers & Acquisitions",
      description: "Expert financial guidance throughout the M&A process to maximize value and minimize risks.",
      features: [
        "Due diligence",
        "Valuation services",
        "Transaction structuring",
        "Post-merger integration",
        "Synergy identification"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Retail Chain Financial Restructuring",
      description: "Helped a retail company restructure their finances and implement cost-saving measures, resulting in a 20% increase in profitability.",
      industry: "Retail",
      results: "20% profit increase"
    },
    {
      title: "Tech Startup Investment Strategy",
      description: "Developed a strategic investment plan for a technology startup, securing funding and establishing sustainable growth.",
      industry: "Technology",
      results: "$2M in secured funding"
    },
    {
      title: "Manufacturing Firm Cost Optimization",
      description: "Implemented cost optimization strategies for a manufacturing business, reducing operational expenses while maintaining quality.",
      industry: "Manufacturing",
      results: "15% cost reduction"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-consulting-dark-blue to-consulting-blue text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="font-bold mb-4">Financial Consulting Services</h1>
            <p className="text-xl text-gray-100">
              Expert financial guidance and solutions to strengthen your business position and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-consulting-dark-blue mb-4">Optimize Your Financial Strategy</h2>
              <p className="text-gray-700 mb-4">
                In today's complex business environment, sound financial management is critical for success. Our financial consulting services provide the expertise and guidance you need to make informed decisions, optimize your financial resources, and achieve your business goals.
              </p>
              <p className="text-gray-700 mb-4">
                Our team of experienced financial consultants brings deep industry knowledge and analytical skills to help you navigate financial challenges, identify opportunities for growth, and implement strategies that enhance your business's financial health.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're looking to improve profitability, manage cash flow, secure funding, or plan for future growth, we offer tailored financial solutions designed to address your specific needs and objectives.
              </p>
              <Button asChild className="bg-consulting-blue hover:bg-consulting-dark-blue">
                <Link to="/contact">Discuss Your Financial Needs</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Financial consulting"
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
            <h2 className="text-consulting-dark-blue mb-4">Our Financial Consulting Services</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive financial solutions tailored to address your unique business challenges and goals.
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
              See how our financial consulting services have helped businesses achieve their goals.
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
              <Link to="/contact">Discuss Your Financial Challenges</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-consulting-gray">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-slide-up">
            <h2 className="text-consulting-dark-blue mb-4">Why Choose Our Financial Consulting Services</h2>
            <p className="text-gray-600 text-lg">
              What sets our financial consulting services apart from the rest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
              <div className="bg-consulting-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-consulting-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
              <p className="text-gray-600">
                Our financial consultants have deep expertise across various industries, allowing us to provide relevant and effective solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{animationDelay: "0.1s"}}>
              <div className="bg-consulting-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-consulting-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Tailored Approach</h3>
              <p className="text-gray-600">
                We develop customized financial solutions based on your specific business needs, goals, and circumstances.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="bg-consulting-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-consulting-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
              <p className="text-gray-600">
                We leverage sophisticated financial modeling and analytics to provide data-driven insights and recommendations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="bg-consulting-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-consulting-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Long-term Partnership</h3>
              <p className="text-gray-600">
                We focus on building lasting relationships, providing ongoing support to help your business achieve sustainable financial success.
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
              Common questions about our financial consulting services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto divide-y divide-gray-200">
            <div className="py-6 animate-fade-in">
              <h3 className="text-lg font-semibold text-consulting-dark-blue mb-2">How quickly can I expect to see results from your financial consulting services?</h3>
              <p className="text-gray-700">
                The timeline for results varies based on your specific situation and the complexity of the financial challenges we're addressing. Some improvements, such as cash flow optimization, can show results within weeks, while others like strategic financial restructuring may take several months to fully realize benefits.
              </p>
            </div>
            
            <div className="py-6 animate-fade-in" style={{animationDelay: "0.1s"}}>
              <h3 className="text-lg font-semibold text-consulting-dark-blue mb-2">What information will you need from our company to get started?</h3>
              <p className="text-gray-700">
                To provide effective financial consulting, we typically need access to your financial statements, cash flow records, budget information, and potentially tax returns. We'll also need to understand your business goals, challenges, and strategic objectives. All information is handled with strict confidentiality.
              </p>
            </div>
            
            <div className="py-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <h3 className="text-lg font-semibold text-consulting-dark-blue mb-2">Can you work with our existing accounting or finance team?</h3>
              <p className="text-gray-700">
                Absolutely. We often collaborate with in-house financial teams, providing specialized expertise and additional resources to complement their work. Our goal is to enhance your existing capabilities, not replace them.
              </p>
            </div>
            
            <div className="py-6 animate-fade-in" style={{animationDelay: "0.3s"}}>
              <h3 className="text-lg font-semibold text-consulting-dark-blue mb-2">How do you measure the success of your financial consulting services?</h3>
              <p className="text-gray-700">
                We establish clear key performance indicators (KPIs) at the beginning of our engagement, aligned with your business objectives. These might include improvements in profitability, cash flow, cost reduction, or other relevant metrics. We provide regular reports tracking progress against these KPIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-consulting-blue text-white py-16">
        <div className="container-custom text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Strengthen Your Financial Position?</h2>
          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our financial consulting services can help your business achieve its financial goals.
          </p>
          <Button asChild size="lg" className="bg-white text-consulting-blue hover:bg-gray-100">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default FinanceServices;
