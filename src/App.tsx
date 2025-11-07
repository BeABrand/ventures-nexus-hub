import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Partnership from "./pages/Partnership";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Copyright from "./pages/Copyright";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";

// Lazy load blog pages for better performance
const Blog = lazy(() => import("./pages/Blog"));
const DigitalTransformation = lazy(() => import("./pages/blog/DigitalTransformation"));
const AIEducation = lazy(() => import("./pages/blog/AIEducation"));
const DigitalBrand = lazy(() => import("./pages/blog/DigitalBrand"));
const CreativeWriting = lazy(() => import("./pages/blog/CreativeWriting"));
const RemoteWorkFuture = lazy(() => import("./pages/blog/RemoteWorkFuture"));
const EcommerceTrends = lazy(() => import("./pages/blog/EcommerceTrends"));
const ContentMarketing = lazy(() => import("./pages/blog/ContentMarketing"));
const CybersecurityEssentials = lazy(() => import("./pages/blog/CybersecurityEssentials"));
const SocialMediaStrategy = lazy(() => import("./pages/blog/SocialMediaStrategy"));
const DataAnalytics = lazy(() => import("./pages/blog/DataAnalytics"));
const CustomerExperience = lazy(() => import("./pages/blog/CustomerExperience"));
const StartupGrowth = lazy(() => import("./pages/blog/StartupGrowth"));
const UIUXDesign = lazy(() => import("./pages/blog/UIUXDesign"));
const SaaSMetrics = lazy(() => import("./pages/blog/SaaSMetrics"));
const ProductivityTools = lazy(() => import("./pages/blog/ProductivityTools"));
const SEOStrategy = lazy(() => import("./pages/blog/SEOStrategy"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/digital-transformation-guide" element={<DigitalTransformation />} />
            <Route path="/blog/ai-education-revolution" element={<AIEducation />} />
            <Route path="/blog/building-successful-digital-brand" element={<DigitalBrand />} />
            <Route path="/blog/future-of-creative-writing" element={<CreativeWriting />} />
            <Route path="/blog/remote-work-future" element={<RemoteWorkFuture />} />
            <Route path="/blog/ecommerce-trends" element={<EcommerceTrends />} />
            <Route path="/blog/content-marketing" element={<ContentMarketing />} />
            <Route path="/blog/cybersecurity-essentials" element={<CybersecurityEssentials />} />
            <Route path="/blog/social-media-strategy" element={<SocialMediaStrategy />} />
            <Route path="/blog/data-analytics" element={<DataAnalytics />} />
            <Route path="/blog/customer-experience" element={<CustomerExperience />} />
            <Route path="/blog/startup-growth" element={<StartupGrowth />} />
            <Route path="/blog/uiux-design" element={<UIUXDesign />} />
            <Route path="/blog/saas-metrics" element={<SaaSMetrics />} />
            <Route path="/blog/productivity-tools" element={<ProductivityTools />} />
            <Route path="/blog/seo-strategy" element={<SEOStrategy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/copyright" element={<Copyright />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
