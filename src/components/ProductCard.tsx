import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductCardProps {
  icon: string;
  name: string;
  description: string;
  url: string;
}

const ProductCard = ({ icon, name, description, url }: ProductCardProps) => {
  return (
    <Card className="hover-lift shadow-elegant group">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-2xl">
            {icon}
          </div>
          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
          asChild
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            Visit Site
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
