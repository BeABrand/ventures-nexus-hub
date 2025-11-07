import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ShareButton from "@/components/ShareButton";
import RelatedArticles from "@/components/RelatedArticles";

const SocialMediaStrategy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Building an Effective Social Media Strategy in 2024",
    "description": "Master the art of social media marketing with proven strategies for engagement, growth, and brand building.",
    "image": "https://bscventuresltd.com/blog-social-media.jpg",
    "datePublished": "2024-11-05",
    "dateModified": "2024-11-05",
    "author": {
      "@type": "Organization",
      "name": "BSC Ventures Limited"
    },
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
        title="Building an Effective Social Media Strategy in 2024"
        description="Master the art of social media marketing with proven strategies for engagement, growth, and brand building."
        canonical="https://bscventuresltd.com/blog/social-media-strategy"
        keywords="social media marketing, social strategy, brand engagement, social media growth, digital presence"
        type="article"
        structuredData={structuredData}
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <article className="flex-grow">
          <div className="container mx-auto px-4 max-w-4xl pt-8 pb-12">
            <Link to="/blog">
              <Button variant="ghost" className="mb-8 group">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Button>
            </Link>

            <header className="mb-12">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                  Social Media
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  November 5, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  7 min read
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Building an Effective Social Media Strategy in 2024
              </h1>
              <p className="text-xl text-muted-foreground">
                Master the art of social media marketing with proven strategies for engagement, growth, and brand building.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <h2>The Social Media Landscape</h2>
              <p>
                Social media has evolved from a simple communication tool to a powerful business platform. With billions of active users across various platforms, social media offers unprecedented opportunities for brand building, customer engagement, and business growth.
              </p>

              <h2>Developing Your Strategy</h2>
              
              <h3>1. Define Clear Objectives</h3>
              <p>
                Start with specific, measurable goals. Whether it's increasing brand awareness, driving website traffic, or generating leads, clear objectives guide your content creation and help measure success.
              </p>

              <h3>2. Know Your Platforms</h3>
              <p>
                Each social media platform has its own culture, audience demographics, and content preferences. LinkedIn excels for B2B content, Instagram for visual storytelling, and Twitter for real-time engagement. Choose platforms that align with your audience and goals.
              </p>

              <h3>3. Create Valuable Content</h3>
              <p>
                Focus on providing value rather than constant promotion. Educational content, entertaining posts, and authentic behind-the-scenes glimpses build stronger connections than purely promotional material.
              </p>

              <h3>4. Engage Authentically</h3>
              <p>
                Social media is a two-way conversation. Respond to comments, participate in discussions, and show appreciation for your community. Authentic engagement builds loyalty and strengthens brand relationships.
              </p>

              <h2>Content Planning and Scheduling</h2>
              <p>
                Develop a content calendar that balances promotional posts with valuable content. Consistency matters, but so does timing. Use analytics to determine when your audience is most active and schedule posts accordingly.
              </p>

              <h2>Measuring Success</h2>
              <p>
                Track metrics that align with your objectives: engagement rates, reach, conversions, and follower growth. Regular analysis helps refine your strategy and identify what resonates with your audience.
              </p>

              <h2>Staying Ahead</h2>
              <p>
                Social media trends evolve rapidly. Stay informed about platform updates, emerging features, and changing user behaviors. Experimentation and adaptability are key to long-term social media success.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t flex justify-center">
              <ShareButton 
                title="Building an Effective Social Media Strategy in 2024"
                url="https://bscventuresltd.com/blog/social-media-strategy"
              />
            </div>

            <RelatedArticles 
              currentArticleId="social-media-strategy"
              category="Social Media"
            />
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default SocialMediaStrategy;
