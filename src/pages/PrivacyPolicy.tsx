import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Privacy Policy - BSC Ventures Limited"
        description="Read BSC Ventures Limited's Privacy Policy. Learn how we collect, use, and protect your personal information across our digital products and services."
        canonical="https://bscventures.co/privacy-policy"
        keywords="privacy policy, data protection, personal information, GDPR, privacy rights"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
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
                <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                <p className="leading-relaxed">
                  BSC Ventures Limited ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or use our services across our product portfolio.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <p className="leading-relaxed mb-4">
                  We may collect information about you in a variety of ways, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal Data: Name, email address, phone number, and other contact information you provide</li>
                  <li>Usage Data: Information about how you use our website and services</li>
                  <li>Device Information: IP address, browser type, operating system, and device identifiers</li>
                  <li>Cookies and Tracking: Data collected through cookies and similar technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you technical notices, updates, and promotional communications</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address technical issues and fraudulent activities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Disclosure of Your Information</h2>
                <p className="leading-relaxed mb-4">
                  We may share your information in the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With service providers who assist us in operating our business</li>
                  <li>To comply with legal obligations or respond to lawful requests</li>
                  <li>In connection with a business transfer, merger, or acquisition</li>
                  <li>With your consent or at your direction</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information. However, no method of transmission over the Internet or electronic 
                  storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Request correction of inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict processing of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Links</h2>
                <p className="leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the 
                  privacy practices or content of these external sites. We encourage you to review the 
                  privacy policies of any third-party sites you visit.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our services are not intended for individuals under the age of 13. We do not knowingly 
                  collect personal information from children under 13. If we become aware that we have 
                  collected such information, we will take steps to delete it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-4 font-semibold text-foreground">
                  BSC Ventures Limited<br />
                  Email: info@bscventures.co
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

export default PrivacyPolicy;
