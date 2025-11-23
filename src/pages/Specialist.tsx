import { Mail, Phone, CheckCircle2, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import specialistPhoto from "@/assets/specialist-photo.jpeg";

const Specialist = () => {
  const aiServices = [
    {
      category: "Large Language Models & General AI APIs",
      items: [
        "OpenAI API (ChatGPT, GPT-4, GPT-5 series)",
        "Anthropic Claude API",
        "Google Gemini API",
        "Meta Llama API",
        "Mistral AI API",
        "Cohere AI API",
        "AI21 Labs API",
        "Amazon Bedrock Models",
        "Microsoft Azure AI Services"
      ]
    },
    {
      category: "Speech, Voice & Audio AI APIs",
      items: [
        "OpenAI Whisper",
        "Amazon Transcribe / Polly",
        "Google Speech-to-Text / Text-to-Speech",
        "ElevenLabs Voice AI",
        "AssemblyAI"
      ]
    },
    {
      category: "Vision & Image Processing APIs",
      items: [
        "OpenAI Vision",
        "Google Vision AI",
        "Amazon Rekognition",
        "Stability AI (Stable Diffusion)",
        "Midjourney (indirect integrations via supported tools)"
      ]
    },
    {
      category: "Search, Embeddings & Vector Databases",
      items: [
        "Pinecone",
        "Weaviate",
        "ChromaDB",
        "Qdrant",
        "ElasticSearch AI features"
      ]
    },
    {
      category: "Automation & Workflow AI",
      items: [
        "Zapier AI Actions",
        "Make.com Scenarios",
        "LangChain / LangGraph",
        "Custom Python API orchestration"
      ]
    },
    {
      category: "Custom Integrations",
      items: [
        "Chatbot systems",
        "AI-driven customer support",
        "Data analytics bots",
        "Automated content generation systems",
        "AI tutoring or educational systems",
        "Business workflow automation"
      ]
    }
  ];

  const benefits = [
    "Expert-level API integration skills",
    "Fast, secure, and scalable implementations",
    "Custom solutions designed around your business model",
    "Professional documentation and support",
    "Hands-on communication and ongoing optimization"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="AI Specialist - Marion Wangari Nyambura"
        description="Meet our AI solutions specialist, Marion Wangari Nyambura. Expert in AI API integration, helping businesses leverage cutting-edge artificial intelligence tools seamlessly."
        canonical="https://bscventuresltd.com/specialist"
        keywords="AI specialist, AI integration, OpenAI, Claude API, GPT-4, machine learning, artificial intelligence, API integration, Marion Wangari"
      />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">AI Solutions Expert</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Marion Wangari Nyambura
                </h1>
                <p className="text-xl text-muted-foreground">
                  AI Specialist dedicated to helping businesses integrate cutting-edge artificial intelligence tools seamlessly into their systems
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" asChild>
                    <a href="mailto:marionwangari001@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Get In Touch
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+254748246931">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                  <img
                    src={specialistPhoto}
                    alt="Marion Wangari Nyambura - AI Specialist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Do Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What I Do</h2>
              <p className="text-lg text-muted-foreground">
                I specialize in end-to-end AI API Integration, enabling businesses to leverage advanced AI capabilities directly within their websites, apps, workflows, and internal tools. My solutions are tailored to your operational needs—whether you want to automate processes, enhance customer interactions, analyze data, or build intelligent digital products.
              </p>
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              AI Services & Platforms I Integrate
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              I work with all major AI platforms that provide API access
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-4 text-primary">
                      {service.category}
                    </h3>
                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-xl font-semibold mt-12 text-primary">
              If it has an API—I integrate it.
            </p>
          </div>
        </section>

        {/* Why Work With Me Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Work With Me
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-2 hover:border-primary transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <p className="font-medium">{benefit}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-center text-lg text-muted-foreground mt-12">
                Whether you're a startup, enterprise, or individual creator, I ensure you get the maximum value from modern AI technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get in touch with Marion to discuss your AI integration needs
              </p>
              <Card className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Marion Wangari Nyambura</h3>
                    <p className="text-muted-foreground">AI Integration Specialist</p>
                  </div>
                  <div className="space-y-4">
                    <a 
                      href="mailto:marionwangari001@gmail.com"
                      className="flex items-center justify-center gap-3 text-lg hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      marionwangari001@gmail.com
                    </a>
                    <a 
                      href="tel:+254748246931"
                      className="flex items-center justify-center gap-3 text-lg hover:text-primary transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      +254 748 246 931
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Specialist;
