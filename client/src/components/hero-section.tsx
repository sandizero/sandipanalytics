import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onViewServices: () => void;
  onExploreWork: () => void;
}

export default function HeroSection({ onViewServices, onExploreWork }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Transform Your <span className="text-primary">Data</span> Into <span className="text-secondary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional data analyst specializing in SQL, Python, Power BI, Tableau, and n8n automation. 
              I help businesses make data-driven decisions and streamline their processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onViewServices}
                className="bg-primary text-primary-foreground px-8 py-3 text-lg font-semibold smooth-transition hover:bg-primary/90 hover:scale-105"
                size="lg"
              >
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={onExploreWork}
                variant="outline"
                className="border-2 border-primary text-primary px-8 py-3 text-lg font-semibold smooth-transition hover:bg-primary hover:text-primary-foreground"
                size="lg"
              >
                Explore My Work
              </Button>
            </div>
          </div>
          <div className="relative fade-in">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Data analytics dashboard visualization" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">Live Data Processing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
