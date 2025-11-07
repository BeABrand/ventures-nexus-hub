import { Briefcase, Code, Palette, GraduationCap, Heart, TrendingUp, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const Careers = () => {
  const values = [
    {
      icon: Heart,
      title: "Innovation First",
      description: "We encourage creative thinking and embrace new ideas that drive our products forward."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals across education, technology, and creative industries."
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Continuous learning and career development programs to help you reach your potential."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Your work will reach thousands of users worldwide, making a real difference."
    }
  ];

  const openings = [
    {
      icon: Code,
      title: "Software Engineers",
      department: "Technology",
      description: "Build innovative AI-powered tools and educational platforms that serve thousands of users globally.",
      skills: ["React", "TypeScript", "Node.js", "AI/ML", "Cloud Services"]
    },
    {
      icon: Palette,
      title: "Graphic Designers",
      department: "Creative",
      description: "Create stunning visual content for our brands and clients across education and business sectors.",
      skills: ["Adobe Creative Suite", "Branding", "UI/UX", "Web Design", "Illustration"]
    },
    {
      icon: GraduationCap,
      title: "Educational Content Writers",
      department: "Education",
      description: "Develop high-quality educational materials and tutoring resources for students worldwide.",
      skills: ["Academic Writing", "Curriculum Development", "Research", "Subject Expertise", "SEO"]
    },
    {
      icon: Briefcase,
      title: "Marketing Specialists",
      department: "Marketing",
      description: "Drive growth across our portfolio of products through strategic marketing and digital campaigns.",
      skills: ["Digital Marketing", "SEO/SEM", "Content Strategy", "Analytics", "Social Media"]
    }
  ];

  const benefits = [
    "Competitive salary and performance bonuses",
    "Flexible remote work options",
    "Professional development budget",
    "Health and wellness programs",
    "Collaborative team environment",
    "Access to cutting-edge tools and technologies",
    "Work-life balance initiatives",
    "Opportunity to work on diverse projects"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Careers & Opportunities - BSC Ventures Limited"
        description="Join BSC Ventures Limited and be part of a dynamic team driving innovation in education, technology, and creative industries. Explore career opportunities in software engineering, design, content creation, and marketing."
        canonical="https://bscventuresltd.com/careers"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-primary mb-6">
              <Briefcase className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build your career with a company that values innovation, creativity, and growth. Help us shape the future of education, technology, and digital creativity.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're building something special, and we want talented people to be part of our journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover-lift text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary mb-4">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore opportunities across our diverse portfolio of products and services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {openings.map((opening, index) => (
              <Card key={index} className="p-8 hover-lift">
                <div className="flex items-start gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary flex-shrink-0">
                    <opening.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{opening.title}</h3>
                    <span className="text-sm text-muted-foreground">{opening.department}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{opening.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {opening.skills.map((skill, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Apply for this Position
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Benefits & Perks</h2>
              <p className="text-lg text-muted-foreground">
                We invest in our team's success and well-being.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-3xl p-12 shadow-elegant text-center relative overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're always looking for talented individuals. Send us your resume and tell us how you can contribute to our mission.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Send Us Your Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
