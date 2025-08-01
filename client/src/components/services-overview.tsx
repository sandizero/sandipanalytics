import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Settings, CheckCircle } from "lucide-react";

export default function ServicesOverview() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">What I Offer</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive data solutions to drive your business forward</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="card-hover bg-white shadow-lg border-0">
            <CardContent className="p-6 sm:p-8">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <TrendingUp className="h-6 sm:h-8 w-6 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Data Analysis & Visualization</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Transform raw data into actionable insights with advanced analytics, custom dashboards, and compelling visualizations.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  Statistical Analysis
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  Dashboard Creation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  Report Generation
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="card-hover bg-white shadow-lg border-0">
            <CardContent className="p-6 sm:p-8">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Settings className="h-6 sm:h-8 w-6 sm:w-8 text-secondary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Business Process Automation</h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">Streamline your workflows and boost efficiency with custom automation solutions using n8n and other tools.</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  Workflow Automation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  System Integration
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                  Custom Solutions
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
