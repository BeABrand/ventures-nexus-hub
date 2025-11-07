import { Handshake, Target, Rocket, Globe, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const Partnership = () => {
  const benefits = [
    {
      icon: Target,
      title: "Strategic Alignment",
      description: "Collaborate with a company that values innovation, quality, and long-term growth across multiple industries."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access our network of 10,000+ clients worldwide across education, creative, and technology sectors."
    },
    {
      icon: Rocket,
      title: "Innovation Focus",
      description: "Work with cutting-edge products including AI-powered tools, educational platforms, and creative services."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Partner with experienced professionals in education, technology, design, and digital marketing."
    }
  ];

  const partnershipTypes = [
    {
      title: "Technology Partners",
      description: "Integrate your solutions with our platforms or collaborate on new product development.",
      benefits: ["API access", "Co-marketing opportunities", "Technical support", "Revenue sharing models"]
    },
    {
      title: "Content Partners",
      description: "Collaborate on educational content, creative resources, or marketing materials.",
      benefits: ["Content distribution", "Brand exposure", "Cross-promotion", "Collaborative campaigns"]
    },
    {
      title: "Reseller Partners",
      description: "Distribute our products and services to your customer base with competitive margins.",
      benefits: ["Competitive pricing", "Sales support", "Marketing materials", "Training resources"]
    },
    {
      title: "Strategic Partners",
      description: "Long-term alliances for market expansion, product development, or industry innovation.",
      benefits: ["Joint ventures", "Shared resources", "Market insights", "Co-investment opportunities"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Partnership Opportunities - BSC Ventures Limited"
        description="Partner with BSC Ventures Limited to unlock new opportunities in education, technology, and creative industries. Explore strategic partnerships, technology integration, content collaboration, and reseller programs."
        canonical="https://bscventuresltd.com/partnership"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-primary mb-6">
              <Handshake className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join forces with BSC Ventures Limited to create innovative solutions and expand your reach across education, technology, and creative industries.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Start Partnership Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leverage our expertise, reach, and commitment to excellence for mutual growth and success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer flexible partnership models tailored to your business goals and capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="p-8">
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <div className="space-y-3">
                  {type.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-3xl p-12 shadow-elegant text-center relative overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Something Great Together?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how we can create value together. Our partnership team is ready to explore opportunities with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Get In Touch
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="outline" size="lg">
                    View Our Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnership;
