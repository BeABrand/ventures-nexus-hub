import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { FileText } from "lucide-react";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Terms of Use - BSC Ventures Limited"
        description="Review the Terms of Use for BSC Ventures Limited and all our products. Understand your rights and responsibilities when using our digital services."
        canonical="https://bscventuresltd.com/terms-of-use"
        keywords="terms of use, terms and conditions, user agreement, service terms, legal terms"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6">
              <FileText className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms <span className="text-primary">of Use</span>
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
                <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                <p className="leading-relaxed">
                  By accessing or using the services provided by BSC Ventures Limited and its subsidiary brands 
                  (CustomWriting.help, GEDGuru.com, BirdieWriters.com, VectorPulseGraphix.com, StudyAssistant.ai, 
                  and ElChemistPhotography), you agree to be bound by these Terms of Use. If you do not agree to 
                  these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Use License</h2>
                <p className="leading-relaxed mb-4">
                  Permission is granted to temporarily access and use our services for personal, non-commercial 
                  purposes. This license does not include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modifying or copying our materials without permission</li>
                  <li>Using our materials for commercial purposes without authorization</li>
                  <li>Attempting to reverse engineer any software or systems</li>
                  <li>Removing copyright or proprietary notations</li>
                  <li>Transferring materials to another person or mirroring on another server</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">User Responsibilities</h2>
                <p className="leading-relaxed mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Not use our services for any illegal or unauthorized purpose</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not engage in activities that could harm our systems or other users</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content, features, and functionality on our websites and services, including but not limited to 
                  text, graphics, logos, images, and software, are the property of BSC Ventures Limited or its licensors 
                  and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Service-Specific Terms</h2>
                <p className="leading-relaxed mb-4">
                  Each of our products may have additional terms specific to their services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>CustomWriting.help & BirdieWriters.com:</strong> Writing services are provided for reference and study purposes</li>
                  <li><strong>GEDGuru.com:</strong> Educational materials are supplementary and do not guarantee test results</li>
                  <li><strong>VectorPulseGraphix.com:</strong> Design deliverables are subject to agreed-upon project terms</li>
                  <li><strong>StudyAssistant.ai:</strong> AI-generated content should be reviewed and verified by users</li>
                  <li><strong>ElChemistPhotography:</strong> Photography services are governed by separate service agreements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Payment Terms</h2>
                <p className="leading-relaxed">
                  Payment for services must be made according to the pricing and payment terms specified for each product. 
                  All fees are non-refundable unless otherwise stated in our refund policy or required by law. We reserve 
                  the right to change our pricing at any time with reasonable notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="leading-relaxed">
                  BSC Ventures Limited and its subsidiaries shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages resulting from your use of or inability to use our services. Our 
                  total liability shall not exceed the amount paid by you for the specific service in question.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer of Warranties</h2>
                <p className="leading-relaxed">
                  Our services are provided on an "as is" and "as available" basis. We make no warranties, expressed or 
                  implied, regarding the reliability, accuracy, or availability of our services. We do not guarantee that 
                  our services will be uninterrupted, secure, or error-free.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
                <p className="leading-relaxed">
                  We reserve the right to terminate or suspend access to our services immediately, without prior notice, 
                  for any reason, including breach of these Terms of Use. Upon termination, your right to use our services 
                  will immediately cease.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                <p className="leading-relaxed">
                  These Terms of Use shall be governed by and construed in accordance with applicable laws. Any disputes 
                  arising from these terms shall be resolved through binding arbitration or in the courts of appropriate 
                  jurisdiction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these Terms of Use at any time. We will notify users of any material 
                  changes by posting the new terms on this page and updating the "Last updated" date. Your continued use 
                  of our services after such changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="leading-relaxed">
                  For questions about these Terms of Use, please contact us at:
                </p>
                <p className="mt-4 font-semibold text-foreground">
                  BSC Ventures Limited<br />
                  Email: info@bscventuresltd.com
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

export default TermsOfUse;
