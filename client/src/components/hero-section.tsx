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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="fade-in text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Transform Your <span className="text-primary">Data</span> Into <span className="text-secondary">Insights</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Professional data analyst specializing in Excel, SQL, Python, Power BI, Tableau, and n8n automation. 
              I help businesses make data-driven decisions and streamline their processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
          <div className="relative fade-in mt-8 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Data analytics dashboard visualization" 
              className="rounded-2xl shadow-2xl w-full h-auto max-w-md mx-auto lg:max-w-none" 
            />
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-2 sm:w-3 h-2 sm:h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-foreground">Live Data Processing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
