import { Loader2 } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="relative">
        {/* Spinning outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-ping" />
        
        {/* Main loader icon */}
        <Loader2 className="w-16 h-16 text-primary animate-spin" />
        
        {/* Inner pulsing circle */}
        <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
      </div>
      
      {/* Loading text with animation */}
      <div className="mt-8 flex items-center gap-2">
        <span className="text-lg font-medium text-foreground">Loading</span>
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
          <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
          <span className="w-2 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
      
      {/* Subtle description */}
      <p className="mt-4 text-sm text-muted-foreground animate-pulse">
        Preparing your experience...
      </p>
    </div>
  );
};

export default LoadingScreen;
