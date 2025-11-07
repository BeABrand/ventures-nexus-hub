import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

interface RelatedArticlesProps {
  currentArticleId: string;
  category?: string;
}

const RelatedArticles = ({ currentArticleId, category }: RelatedArticlesProps) => {
  const allArticles: Article[] = [
    { id: "digital-transformation-guide", title: "The Complete Guide to Digital Transformation in 2025", excerpt: "Discover how businesses are leveraging digital products and AI-powered solutions.", date: "2025-01-15", category: "Digital Strategy" },
    { id: "ai-education-revolution", title: "How AI is Revolutionizing Education and Learning", excerpt: "Explore the transformative impact of artificial intelligence on educational platforms.", date: "2025-01-10", category: "Education" },
    { id: "building-successful-digital-brand", title: "Building a Successful Digital Brand", excerpt: "Learn key strategies from managing multiple successful digital brands.", date: "2025-01-05", category: "Branding" },
    { id: "future-of-creative-writing", title: "The Future of Creative Writing in the Digital Age", excerpt: "Examining how digital platforms are empowering writers.", date: "2024-12-28", category: "Creative Industry" },
    { id: "remote-work-future", title: "The Future of Remote Work and Digital Collaboration", excerpt: "Exploring how digital tools are reshaping the future of work.", date: "2024-12-20", category: "Business Strategy" },
    { id: "ecommerce-trends", title: "E-commerce Trends Shaping Online Retail in 2024", excerpt: "Discover the latest trends transforming e-commerce.", date: "2024-12-10", category: "E-commerce" },
    { id: "content-marketing", title: "Content Marketing Strategies for Digital Success", excerpt: "Learn how to create compelling content that drives engagement.", date: "2024-11-25", category: "Marketing" },
    { id: "cybersecurity-essentials", title: "Cybersecurity Essentials for Digital Businesses", excerpt: "Protect your digital assets with essential cybersecurity practices.", date: "2024-11-15", category: "Security" },
    { id: "social-media-strategy", title: "Building an Effective Social Media Strategy", excerpt: "Master the art of social media marketing.", date: "2024-11-05", category: "Social Media" },
    { id: "data-analytics", title: "Leveraging Data Analytics for Business Growth", excerpt: "Discover how data-driven decision making transforms business strategy.", date: "2024-10-28", category: "Analytics" },
    { id: "customer-experience", title: "Creating Exceptional Customer Experiences", excerpt: "Learn how to design experiences that build loyalty.", date: "2024-10-15", category: "Customer Success" },
    { id: "startup-growth", title: "Scaling Your Startup: From MVP to Market Leader", excerpt: "Essential strategies for scaling digital startups.", date: "2024-10-05", category: "Entrepreneurship" },
    { id: "uiux-design", title: "UI/UX Design Principles for Modern Digital Products", excerpt: "Master essential design principles for intuitive products.", date: "2024-09-22", category: "Design" },
    { id: "saas-metrics", title: "Essential SaaS Metrics Every Founder Should Track", excerpt: "Learn which metrics matter most for SaaS businesses.", date: "2024-09-10", category: "SaaS Business" },
    { id: "productivity-tools", title: "Top Productivity Tools for Modern Teams", excerpt: "Discover essential productivity tools for better collaboration.", date: "2024-08-28", category: "Productivity" },
    { id: "seo-strategy", title: "SEO Strategy Guide: Ranking Higher in 2024", excerpt: "Learn proven SEO strategies to improve search rankings.", date: "2024-08-15", category: "SEO" },
  ];

  // Filter out current article and get related articles
  let relatedArticles = allArticles.filter(article => article.id !== currentArticleId);
  
  // If category is provided, prioritize articles from same category
  if (category) {
    const sameCategory = relatedArticles.filter(article => article.category === category);
    const otherCategory = relatedArticles.filter(article => article.category !== category);
    relatedArticles = [...sameCategory, ...otherCategory];
  }
  
  // Take only 3 articles
  const displayArticles = relatedArticles.slice(0, 3);

  return (
    <section className="border-t pt-12 mt-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Related Articles</h2>
        <p className="text-muted-foreground">Continue exploring our insights and resources</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {displayArticles.map((article) => (
          <Card key={article.id} className="hover-lift transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(article.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
              <CardDescription className="line-clamp-2">{article.excerpt}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link to={`/blog/${article.id}`}>
                <Button variant="ghost" className="w-full group">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
