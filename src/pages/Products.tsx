import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, GraduationCap, Feather, Palette, Brain, Camera } from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: "✍️",
      name: "CustomWriting.help",
      description: "Professional academic and educational writing assistance. Our expert writers help students achieve their academic goals with high-quality, original content tailored to their needs.",
      url: "https://customwriting.help",
      category: "Education",
      categoryIcon: BookOpen,
    },
    {
      icon: "📘",
      name: "GEDGuru.com",
      description: "Comprehensive GED test preparation platform. Expert tutoring, practice tests, and resources to help students pass their GED exams with confidence.",
      url: "https://gedguru.com",
      category: "Education",
      categoryIcon: GraduationCap,
    },
    {
      icon: "🪶",
      name: "BirdieWriters.com",
      description: "Creative writing and freelance marketplace connecting talented writers with opportunities. Whether you're a writer or need writing services, find your match here.",
      url: "https://birdiewriters.com",
      category: "Creative",
      categoryIcon: Feather,
    },
    {
      icon: "🎨",
      name: "VectorPulseGraphix.com",
      description: "Professional graphic design and branding services. From logos to complete brand identities, we bring your vision to life with stunning visual designs.",
      url: "https://vectorpulsegraphix.com",
      category: "Design",
      categoryIcon: Palette,
    },
    {
      icon: "🤖",
      name: "StudyAssistant.ai",
      description: "AI-powered learning tools that revolutionize studying. Get instant help with homework, personalized study plans, and smart learning recommendations.",
      url: "https://studyassistant.ai",
      category: "Technology",
      categoryIcon: Brain,
    },
    {
      icon: "📸",
      name: "ElChemistPhotography",
      description: "Artistic and commercial photography that captures moments and tells stories. Specializing in portraits, events, and creative photo projects.",
      url: "https://instagram.com/elchemistphotography",
      category: "Creative",
      categoryIcon: Camera,
    },
  ];

  const categories = [
    { name: "Education", count: 2, color: "from-blue-500 to-blue-600" },
    { name: "Creative", count: 2, color: "from-purple-500 to-pink-600" },
    { name: "Design", count: 1, color: "from-orange-500 to-red-600" },
    { name: "Technology", count: 1, color: "from-green-500 to-teal-600" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our diverse portfolio of digital products designed to educate, 
              inspire, and empower users across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-elegant hover-lift"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl`}>
                  {category.count}
                </div>
                <div className="font-semibold">{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Product List */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Product Details</h2>
            <div className="space-y-6">
              {products.map((product, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-elegant hover-lift flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-3xl">
                      {product.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {product.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow font-medium inline-flex items-center gap-2 transition-colors"
                    >
                      Visit Website →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
