import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface TestimonialsProps {
  onStartProject: () => void;
}

export default function Testimonials({ onStartProject }: TestimonialsProps) {
  // Real testimonials will be added here as you complete projects
  const testimonials: Array<{
    quote: string;
    name: string;
    title: string;
    image?: string;
    alt?: string;
  }> = [];

  const StarRating = () => (
    <div className="flex text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
  );

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16 fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">Client Testimonials</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">What clients say about working with me</p>
        </div>

        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover bg-white shadow-lg border-0 fade-in">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-6">
                    <StarRating />
                    <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                  <div className="flex items-center">
                    {testimonial.image && (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.alt || "Client photo"}
                        className="w-12 h-12 rounded-full object-cover mr-4" 
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          // Placeholder when no testimonials are available
          <div className="text-center mb-12 sm:mb-16 fade-in">
            <Card className="bg-muted/20 border-2 border-dashed border-muted max-w-2xl mx-auto">
              <CardContent className="p-8 sm:p-12">
                <div className="text-muted-foreground">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Building Success Stories</h3>
                  <p className="text-sm">Client testimonials will be added here as I complete projects and receive feedback. Every project is an opportunity to create lasting value for my clients.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center fade-in">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-0 p-6 sm:p-8">
            <CardContent className="p-0">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Ready to Start Your Data Journey?</h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">Let's discuss how data analytics and automation can transform your business</p>
              <Button 
                onClick={onStartProject}
                className="bg-primary text-primary-foreground px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold smooth-transition hover:bg-primary/90 hover:scale-105 w-full sm:w-auto"
                size="lg"
              >
                Start Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
