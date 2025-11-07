import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">BSC</span>
              </div>
              <span className="font-bold text-lg">BSC Ventures</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering Digital Creativity, Education, and Innovation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms-of-use" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/copyright" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Copyright
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/bsc-ventures"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow BSC Ventures on LinkedIn"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/bscventures"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow BSC Ventures on Instagram"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com/bscventures"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow BSC Ventures on Twitter"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              >
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Email: <a href="mailto:info@bscventures.co" className="hover:text-primary transition-colors">info@bscventures.co</a>
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} BSC Ventures Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
