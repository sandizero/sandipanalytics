import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface TestimonialsProps {
  onStartProject: () => void;
}

export default function Testimonials({ onStartProject }: TestimonialsProps) {
  const testimonials = [
    {
      quote: "The data insights provided completely transformed our marketing strategy. We saw a 40% increase in conversion rates within just two months of implementing the recommendations.",
      name: "Sarah Johnson",
      title: "Marketing Director, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c4db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      alt: "Professional headshot of marketing director"
    },
    {
      quote: "The automation solutions saved us countless hours of manual work. Our team can now focus on strategic tasks while routine processes run seamlessly in the background.",
      name: "Michael Chen",
      title: "Operations Manager, GrowthCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      alt: "Professional headshot of operations manager"
    },
    {
      quote: "Exceptional attention to detail and deep understanding of our business needs. The Power BI dashboards provide exactly the insights we need to make informed decisions.",
      name: "David Rodriguez",
      title: "CEO, DataDriven Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      alt: "Professional headshot of company CEO"
    },
    {
      quote: "Professional, reliable, and delivers exactly what's promised. The customer segmentation analysis helped us target our most valuable customers more effectively.",
      name: "Emma Thompson",
      title: "Business Analyst, RetailMax",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      alt: "Professional headshot of business analyst"
    },
    {
      quote: "The automation workflows have revolutionized our customer service process. Response times improved by 70% and customer satisfaction scores are at an all-time high.",
      name: "James Wilson",
      title: "IT Director, ServiceFirst Ltd.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      alt: "Professional headshot of IT director"
    },
    {
      quote: "Clear communication, timely delivery, and outstanding results. The financial forecasting model has become an essential tool for our quarterly planning sessions.",
      name: "Lisa Anderson",
      title: "CFO, FinanceForward Group",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      alt: "Professional headshot of company CFO"
    }
  ];

  const StarRating = () => (
    <div className="flex text-yellow-400 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">Client Testimonials</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">What clients say about working with me</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover bg-white shadow-lg border-0 fade-in">
              <CardContent className="p-8">
                <div className="mb-6">
                  <StarRating />
                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.alt}
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-0 p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Join These Success Stories?</h3>
              <p className="text-lg text-muted-foreground mb-6">Let's discuss how data analytics and automation can transform your business</p>
              <Button 
                onClick={onStartProject}
                className="bg-primary text-primary-foreground px-8 py-3 text-lg font-semibold smooth-transition hover:bg-primary/90 hover:scale-105"
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
