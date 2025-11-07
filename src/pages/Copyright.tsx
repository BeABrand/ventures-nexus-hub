import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Copyright as CopyrightIcon } from "lucide-react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <SEO
        title="Copyright Notice - BSC Ventures Limited"
        description="BSC Ventures Limited copyright information. Learn about our intellectual property rights, trademarks, and how to properly use our branded content."
        canonical="https://bscventures.co/copyright"
        keywords="copyright, intellectual property, trademarks, brand protection, licensing"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6">
              <CopyrightIcon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Copyright <span className="text-primary">Notice</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Protecting Our Intellectual Property Rights
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-elegant">
            <div className="space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Copyright Statement</h2>
                <p className="leading-relaxed">
                  © {currentYear} BSC Ventures Limited. All rights reserved.
                </p>
                <p className="leading-relaxed mt-4">
                  All content, materials, and intellectual property on this website and across all BSC Ventures Limited 
                  products and services are protected by international copyright laws and treaties. This includes, but is 
                  not limited to, content on CustomWriting.help, GEDGuru.com, BirdieWriters.com, VectorPulseGraphix.com, 
                  StudyAssistant.ai, and ElChemistPhotography.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Protected Materials</h2>
                <p className="leading-relaxed mb-4">
                  The following materials are protected by copyright and other intellectual property rights:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Website design, layout, and user interface elements</li>
                  <li>Text content, articles, blog posts, and educational materials</li>
                  <li>Graphics, logos, icons, and visual designs</li>
                  <li>Photography and visual artwork</li>
                  <li>Software, code, and technical implementations</li>
                  <li>Audio and video content</li>
                  <li>AI-generated content and algorithms</li>
                  <li>Branding materials and trademarks</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Trademark Information</h2>
                <p className="leading-relaxed mb-4">
                  The following are trademarks or registered trademarks of BSC Ventures Limited:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>BSC Ventures Limited and the BSC logo</li>
                  <li>CustomWriting.help</li>
                  <li>GEDGuru.com</li>
                  <li>BirdieWriters.com</li>
                  <li>VectorPulseGraphix.com</li>
                  <li>StudyAssistant.ai</li>
                  <li>ElChemistPhotography</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Unauthorized use of these trademarks is strictly prohibited and may violate trademark laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Permitted Use</h2>
                <p className="leading-relaxed mb-4">
                  You may:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>View and access content for personal, non-commercial purposes</li>
                  <li>Download materials explicitly offered for download</li>
                  <li>Share links to our content with proper attribution</li>
                  <li>Use our services in accordance with their intended purpose</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Prohibited Use</h2>
                <p className="leading-relaxed mb-4">
                  Without express written permission, you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reproduce, duplicate, or copy any content from our websites</li>
                  <li>Redistribute, sell, or commercially exploit our materials</li>
                  <li>Modify, adapt, or create derivative works</li>
                  <li>Remove or alter copyright notices or attribution</li>
                  <li>Use our trademarks or branding without authorization</li>
                  <li>Frame or embed our content on other websites</li>
                  <li>Scrape, crawl, or automatically collect our content</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">User-Generated Content</h2>
                <p className="leading-relaxed">
                  When you submit content to our platforms (reviews, comments, designs, writings), you grant BSC Ventures 
                  Limited a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display such 
                  content. You retain ownership of your original work but allow us to use it in connection with our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Content</h2>
                <p className="leading-relaxed">
                  Some content on our websites may be owned by third parties and used with permission. We respect the 
                  intellectual property rights of others and expect our users to do the same. All third-party trademarks, 
                  logos, and brand names remain the property of their respective owners.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Copyright Infringement Claims</h2>
                <p className="leading-relaxed mb-4">
                  If you believe that your copyrighted work has been used in a way that constitutes copyright infringement, 
                  please provide us with the following information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Identification of the copyrighted work claimed to be infringed</li>
                  <li>Identification of the material that is claimed to be infringing</li>
                  <li>Your contact information (address, phone number, email)</li>
                  <li>A statement that you have a good faith belief that the use is not authorized</li>
                  <li>A statement that the information is accurate and you are authorized to act</li>
                  <li>Your physical or electronic signature</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Licensing Inquiries</h2>
                <p className="leading-relaxed">
                  If you wish to use our copyrighted materials for purposes beyond personal use, or if you have questions 
                  about licensing, please contact us to discuss permission and licensing terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">International Copyright</h2>
                <p className="leading-relaxed">
                  Our copyright protections extend internationally in accordance with applicable treaties and conventions, 
                  including the Berne Convention for the Protection of Literary and Artistic Works and the Universal 
                  Copyright Convention.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact for Copyright Matters</h2>
                <p className="leading-relaxed">
                  For all copyright-related inquiries, licensing requests, or infringement claims, please contact:
                </p>
                <p className="mt-4 font-semibold text-foreground">
                  BSC Ventures Limited<br />
                  Copyright Agent<br />
                  Email: info@bscventures.co<br />
                  Subject: Copyright Inquiry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Copyright;
