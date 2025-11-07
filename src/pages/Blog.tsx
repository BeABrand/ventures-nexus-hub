import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useState, useMemo } from "react";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const postsPerPage = 4;

  const blogPosts = [
    { id: "digital-transformation-guide", title: "The Complete Guide to Digital Transformation in 2025", excerpt: "Discover how businesses are leveraging digital products and AI-powered solutions to stay competitive in the modern marketplace.", date: "2025-01-15", readTime: "8 min read", category: "Digital Strategy", image: "🚀" },
    { id: "ai-education-revolution", title: "How AI is Revolutionizing Education and Learning", excerpt: "Explore the transformative impact of artificial intelligence on educational platforms and personalized learning experiences.", date: "2025-01-10", readTime: "6 min read", category: "Education", image: "🎓" },
    { id: "building-successful-digital-brand", title: "Building a Successful Digital Brand: Lessons from BSC Ventures", excerpt: "Learn the key strategies and insights we've gathered from managing multiple successful digital brands across various industries.", date: "2025-01-05", readTime: "10 min read", category: "Branding", image: "💼" },
    { id: "future-of-creative-writing", title: "The Future of Creative Writing in the Digital Age", excerpt: "Examining how digital platforms are empowering writers and creating new opportunities in the creative writing industry.", date: "2024-12-28", readTime: "7 min read", category: "Creative Industry", image: "✍️" },
    { id: "remote-work-future", title: "The Future of Remote Work and Digital Collaboration", excerpt: "Exploring how digital tools and platforms are reshaping the future of work and enabling global collaboration.", date: "2024-12-20", readTime: "9 min read", category: "Business Strategy", image: "💻" },
    { id: "ecommerce-trends", title: "E-commerce Trends Shaping Online Retail in 2024", excerpt: "Discover the latest trends transforming e-commerce and how businesses can adapt to changing consumer behaviors.", date: "2024-12-10", readTime: "7 min read", category: "E-commerce", image: "🛒" },
    { id: "content-marketing", title: "Content Marketing Strategies for Digital Success", excerpt: "Learn how to create compelling content that drives engagement and builds lasting relationships with your audience.", date: "2024-11-25", readTime: "8 min read", category: "Marketing", image: "📝" },
    { id: "cybersecurity-essentials", title: "Cybersecurity Essentials for Digital Businesses", excerpt: "Protect your digital assets and customer data with these essential cybersecurity practices for modern businesses.", date: "2024-11-15", readTime: "9 min read", category: "Security", image: "🔒" },
    { id: "social-media-strategy", title: "Building an Effective Social Media Strategy in 2024", excerpt: "Master the art of social media marketing with proven strategies for engagement, growth, and brand building.", date: "2024-11-05", readTime: "7 min read", category: "Social Media", image: "📱" },
    { id: "data-analytics", title: "Leveraging Data Analytics for Business Growth", excerpt: "Discover how data-driven decision making can transform your business strategy and drive sustainable growth.", date: "2024-10-28", readTime: "8 min read", category: "Analytics", image: "📊" },
    { id: "customer-experience", title: "Creating Exceptional Customer Experiences in the Digital Age", excerpt: "Learn how to design and deliver customer experiences that build loyalty and drive business success.", date: "2024-10-15", readTime: "7 min read", category: "Customer Success", image: "⭐" },
    { id: "startup-growth", title: "Scaling Your Startup: From MVP to Market Leader", excerpt: "Essential strategies and lessons learned from scaling digital startups from initial concept to market success.", date: "2024-10-05", readTime: "10 min read", category: "Entrepreneurship", image: "🚀" },
    { id: "uiux-design", title: "UI/UX Design Principles for Modern Digital Products", excerpt: "Master the essential design principles that create intuitive, engaging, and successful digital products.", date: "2024-09-22", readTime: "8 min read", category: "Design", image: "🎨" },
    { id: "saas-metrics", title: "Essential SaaS Metrics Every Founder Should Track", excerpt: "Learn which metrics matter most for SaaS businesses and how to use them to drive growth and profitability.", date: "2024-09-10", readTime: "9 min read", category: "SaaS Business", image: "📈" },
    { id: "productivity-tools", title: "Top Productivity Tools for Modern Teams in 2024", excerpt: "Discover the essential productivity tools that help teams work smarter, collaborate better, and achieve more.", date: "2024-08-28", readTime: "7 min read", category: "Productivity", image: "⚡" },
    { id: "seo-strategy", title: "SEO Strategy Guide: Ranking Higher in 2024", excerpt: "Learn proven SEO strategies to improve your search rankings, drive organic traffic, and grow your online presence.", date: "2024-08-15", readTime: "10 min read", category: "SEO", image: "🔍" },
  ];

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogPosts.map(post => post.category)));
    return cats.sort();
  }, []);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  // Calculate pagination based on filtered posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Reset to page 1 when filters change
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setCurrentPage(1);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "BSC Ventures Blog",
    "description": "Insights on digital products, education technology, and business innovation",
    "url": "https://bscventuresltd.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "BSC Ventures Limited",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bscventuresltd.com/logo.png"
      }
    }
  };

  return (
    <>
      <SEO
        title="Blog - Insights & Resources"
        description="Read the latest articles on digital transformation, education technology, AI innovation, and business strategies from BSC Ventures."
        canonical="https://bscventuresltd.com/blog"
        keywords="digital business blog, education technology, AI insights, digital transformation, creative writing"
        structuredData={structuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <header className="gradient-primary py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                  Insights & Resources
                </h1>
                <p className="text-lg text-primary-foreground/90 mb-8">
                  Stay updated with the latest trends in digital products, education technology, and business innovation
                </p>
                
                {/* Search Bar */}
                <div className="relative max-w-xl mx-auto">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="pl-10 pr-10 h-12 text-base bg-background"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => handleSearchChange("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* Category Filters */}
          <section className="py-8 border-b">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground mr-2">Filter by:</span>
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                  {(searchQuery || selectedCategory) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="ml-2"
                    >
                      <X className="w-4 h-4 mr-1" />
                      Clear Filters
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              {/* Results count */}
              <div className="max-w-6xl mx-auto mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing {currentPosts.length} of {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                  {(searchQuery || selectedCategory) && ' matching your filters'}
                </p>
              </div>

              {currentPosts.length > 0 ? (
                <>
                  <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {currentPosts.map((post) => (
                  <Card key={post.id} className="hover-lift shadow-elegant">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <div className="text-5xl mb-4">{post.image}</div>
                      <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                      <CardDescription className="text-base">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Link to={`/blog/${post.id}`} className="w-full">
                        <Button className="w-full group">
                          Read Full Article
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-12">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      
                      <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="icon"
                            onClick={() => setCurrentPage(page)}
                          >
                            {page}
                          </Button>
                        ))}
                      </div>

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="max-w-6xl mx-auto text-center py-12">
                  <p className="text-lg text-muted-foreground mb-4">
                    No articles found matching your criteria.
                  </p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
