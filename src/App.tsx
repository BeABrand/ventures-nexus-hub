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
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Copyright from "./pages/Copyright";
import NotFound from "./pages/NotFound";

// Lazy load blog pages for better performance
const Blog = lazy(() => import("./pages/Blog"));
const DigitalTransformation = lazy(() => import("./pages/blog/DigitalTransformation"));
const AIEducation = lazy(() => import("./pages/blog/AIEducation"));
const DigitalBrand = lazy(() => import("./pages/blog/DigitalBrand"));
const CreativeWriting = lazy(() => import("./pages/blog/CreativeWriting"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/digital-transformation-guide" element={<DigitalTransformation />} />
            <Route path="/blog/ai-education-revolution" element={<AIEducation />} />
            <Route path="/blog/building-successful-digital-brand" element={<DigitalBrand />} />
            <Route path="/blog/future-of-creative-writing" element={<CreativeWriting />} />
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
