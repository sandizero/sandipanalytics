import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onViewServices: () => void;
  onExploreWork: () => void;
}

export default function HeroSection({ onViewServices, onExploreWork }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Transform Your <span className="text-primary">Data</span> Into <span className="text-secondary">Insights</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
            Professional data analyst specializing in Excel, SQL, Python, Power BI, Tableau, and n8n automation. 
            I help businesses make data-driven decisions and streamline their processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onViewServices}
              className="bg-primary text-primary-foreground px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold smooth-transition hover:bg-primary/90 hover:scale-105 w-full sm:w-auto"
              size="lg"
            >
              View Services
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
            <Button 
              onClick={onExploreWork}
              variant="outline"
              className="border-2 border-primary text-primary px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold smooth-transition hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
              size="lg"
            >
              Explore My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
