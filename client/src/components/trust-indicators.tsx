import { Lightbulb, Rocket, Handshake } from "lucide-react";

export default function TrustIndicators() {
  const indicators = [
    {
      icon: Lightbulb,
      title: "Data-Driven Insights",
      description: "Transform complex data into clear, actionable business intelligence",
      bgColor: "bg-secondary/20",
      iconColor: "text-secondary",
    },
    {
      icon: Rocket,
      title: "Efficiency Gains",
      description: "Streamline processes and reduce manual work through smart automation",
      bgColor: "bg-primary/20",
      iconColor: "text-primary",
    },
    {
      icon: Handshake,
      title: "Reliable Partnership",
      description: "Dedicated support from project inception to successful completion",
      bgColor: "bg-accent/20",
      iconColor: "text-accent",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary/10 to-accent/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          {indicators.map((indicator) => {
            const IconComponent = indicator.icon;
            return (
              <div key={indicator.title} className="fade-in">
                <div className={`w-12 sm:w-16 h-12 sm:h-16 ${indicator.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                  <IconComponent className={`h-6 sm:h-8 w-6 sm:w-8 ${indicator.iconColor}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{indicator.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{indicator.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
