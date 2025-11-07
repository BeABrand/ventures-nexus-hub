import { Target, Eye, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const About = () => {
  const timeline = [
    { year: "2020", event: "BSC Ventures Limited Founded" },
    { year: "2021", event: "Launch of CustomWriting.help & GEDGuru" },
    { year: "2022", event: "Expansion into Design & Photography" },
    { year: "2023", event: "Introduction of AI-Powered Solutions" },
    { year: "2024", event: "Serving 10K+ Clients Globally" },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About BSC Ventures Limited - Our Mission, Vision & Story"
        description="Learn about BSC Ventures Limited - a diversified digital company managing creative, educational, AI, and photography products. Discover our mission to merge innovation, education, and artistry."
        canonical="https://bscventuresltd.com/about"
        keywords="BSC Ventures, about us, company mission, digital innovation, educational technology, creative services"
      />
      <Navbar />

      {/* Hero Section */}
      <header className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-primary">BSC Ventures</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to merge innovation, education, and artistry 
              under one umbrella brand that promotes quality and accessibility.
            </p>
          </div>
        </div>
      </header>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To build and nurture digital products that empower creativity, 
                enhance education, and drive innovation. We strive to provide 
                accessible, high-quality solutions that make a meaningful impact 
                on individuals and businesses worldwide.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-elegant hover-lift">
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become a globally recognized leader in digital innovation, 
                known for creating products that seamlessly blend technology with 
                creativity. We envision a future where our solutions empower millions 
                to learn, create, and succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                BSC Ventures Limited was founded with a simple yet powerful vision: 
                to create digital products that make a difference. What started as 
                a small initiative to support students through educational writing 
                services has evolved into a diversified portfolio spanning education, 
                technology, design, and creative services.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Today, we proudly manage six distinct brands, each serving a unique 
                purpose but united by our commitment to excellence, innovation, and 
                accessibility. From helping students achieve their GED goals to 
                empowering businesses with stunning visual identities, our products 
                reflect our dedication to making a positive impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As we continue to grow, our focus remains on understanding the needs 
                of our users and delivering solutions that exceed expectations. We're 
                not just building products; we're building relationships and creating 
                opportunities for success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-12">
              <Clock className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-4xl font-bold">Our Journey</h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary-glow to-accent" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className="flex-1" />
                    <div className="w-4 h-4 rounded-full bg-primary shadow-glow z-10 mx-4" />
                    <div className="flex-1">
                      <div className="bg-card rounded-xl p-6 shadow-elegant hover-lift">
                        <div className="text-sm font-bold text-primary mb-2">
                          {item.year}
                        </div>
                        <div className="text-lg font-semibold">{item.event}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-elegant">
            <h2 className="text-3xl font-bold mb-8">Company Information</h2>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-2">Registered Name</p>
                <p>BSC Ventures Limited</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Industry Focus</p>
                <p>Education, Technology, Design, Photography</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Global Reach</p>
                <p>Serving clients worldwide</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Products</p>
                <p>6 Active Brands</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
