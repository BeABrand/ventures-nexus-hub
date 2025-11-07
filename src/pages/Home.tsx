import { ArrowRight, Users, Briefcase, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const products = [
    {
      icon: "✍️",
      name: "CustomWriting.help",
      description: "Educational writing support and academic assistance for students worldwide",
      url: "https://customwriting.help",
    },
    {
      icon: "📘",
      name: "GEDGuru.com",
      description: "Comprehensive GED tutoring platform with expert guidance and resources",
      url: "https://gedguru.com",
    },
    {
      icon: "🪶",
      name: "BirdieWriters.com",
      description: "Creative writing and freelance marketplace connecting writers with opportunities",
      url: "https://birdiewriters.com",
    },
    {
      icon: "🎨",
      name: "VectorPulseGraphix.com",
      description: "Professional graphic design and branding services for modern businesses",
      url: "https://vectorpulsegraphix.com",
    },
    {
      icon: "🤖",
      name: "StudyAssistant.ai",
      description: "AI-powered learning tools and study support for enhanced education",
      url: "https://studyassistant.ai",
    },
    {
      icon: "📸",
      name: "ElChemistPhotography",
      description: "Artistic and commercial photography capturing moments and stories",
      url: "https://instagram.com/elchemistphotography",
    },
  ];

  const stats = [
    { icon: Users, value: "10K+", label: "Clients Worldwide" },
    { icon: Briefcase, value: "5", label: "Industries" },
    { icon: Zap, value: "6", label: "Products" },
    { icon: TrendingUp, value: "99%", label: "Satisfaction Rate" },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BSC Ventures Limited",
    "url": "https://bscventuresltd.com",
    "logo": "https://lovable.dev/opengraph-image-p98pqg.png",
    "description": "BSC Ventures Limited manages a suite of creative, educational, AI, and photography products. Discover our brands: CustomWriting.help, GEDGuru, BirdieWriters, VectorPulseGraphix, StudyAssistant.ai, and ElChemistPhotography.",
    "sameAs": [
      "https://customwriting.help",
      "https://gedguru.com",
      "https://birdiewriters.com",
      "https://vectorpulsegraphix.com",
      "https://studyassistant.ai",
      "https://instagram.com/elchemistphotography"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "info@bscventuresltd.com",
      "contactType": "Customer Service"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="BSC Ventures Limited - Empowering Digital Creativity & Innovation"
        description="BSC Ventures Limited manages a suite of creative, educational, AI, and photography products. Discover our brands: CustomWriting.help, GEDGuru, BirdieWriters, VectorPulseGraphix, StudyAssistant.ai, and ElChemistPhotography."
        canonical="https://bscventuresltd.com"
        structuredData={organizationSchema}
      />
      <Navbar />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modern office workspace showcasing BSC Ventures Limited digital innovation and creativity"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
              Empowering Digital{" "}
              <span className="text-gold">
                Creativity
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Building digital products that educate, inspire, and empower creativity across education, technology, and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button variant="hero" size="lg" className="group">
                  Explore Our Brands
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground">
              BSC Ventures Limited is a diversified digital company managing a suite of creative, 
              educational, AI, and photography-based products. Our mission is to merge innovation, 
              education, and artistry under one umbrella brand that promotes quality and accessibility.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 text-center shadow-elegant hover-lift"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary mb-4">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold mb-2 text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Product Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our diverse range of products serving learners, creatives, 
              and businesses across multiple industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
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
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're looking for a partnership, interested in our products, 
                or want to join our team, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/partnership">
                  <Button variant="hero" size="lg">
                    Partner With Us
                  </Button>
                </Link>
                <Link to="/careers">
                  <Button variant="outline" size="lg">
                    View Opportunities
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

export default Home;
