import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ProjectsShowcase() {
  const dataProjects = [
    {
      title: "Sales Performance Dashboard",
      description: "Interactive Power BI dashboard tracking sales KPIs, regional performance, and revenue trends for a retail company.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["Power BI", "SQL", "Python"],
      alt: "Sales performance dashboard with KPI metrics"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Advanced customer segmentation using clustering algorithms to identify high-value customer groups and behavior patterns.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["Python", "Tableau", "SQL"],
      alt: "Customer segmentation analysis with demographic charts"
    },
    {
      title: "Financial Forecasting Model",
      description: "Predictive model for revenue forecasting using time series analysis and machine learning techniques.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["Python", "Power BI", "SQL"],
      alt: "Financial trends and forecasting dashboard with charts"
    },
    {
      title: "Marketing Campaign Analytics",
      description: "Comprehensive analysis of multi-channel marketing campaigns with ROI tracking and conversion optimization.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["Tableau", "SQL", "Python"],
      alt: "Marketing campaign performance analytics dashboard"
    }
  ];

  const automationProjects = [
    {
      title: "Invoice Processing Automation",
      description: "Automated invoice processing system that reduced manual processing time by 85% using n8n workflow automation.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["n8n", "API Integration"],
      impact: "85% reduction in processing time",
      alt: "Automated workflow system with process mapping"
    },
    {
      title: "CRM-ERP Integration",
      description: "Seamless integration between CRM and ERP systems enabling real-time data synchronization and automated reporting.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["n8n", "Webhook", "SQL"],
      impact: "100% data accuracy improvement",
      alt: "System integration dashboard showing data connections"
    },
    {
      title: "Customer Onboarding Automation",
      description: "Automated customer onboarding workflow with personalized email sequences and task assignments.",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["n8n", "Email API"],
      impact: "60% faster onboarding process",
      alt: "Email automation system with workflow notifications"
    }
  ];

  const getTechColor = (tech: string) => {
    const colorMap: Record<string, string> = {
      "Power BI": "bg-primary/10 text-primary",
      "SQL": "bg-secondary/10 text-secondary",
      "Python": "bg-accent/10 text-accent",
      "Tableau": "bg-primary/10 text-primary",
      "n8n": "bg-primary/10 text-primary",
      "API Integration": "bg-secondary/10 text-secondary",
      "Webhook": "bg-accent/10 text-accent",
      "Email API": "bg-secondary/10 text-secondary"
    };
    return colorMap[tech] || "bg-muted/10 text-muted-foreground";
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">Work & Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Showcasing real-world solutions that drive business impact</p>
        </div>

        {/* Data Analytics Projects */}
        <div className="mb-20 fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-8">Data Analytics Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {dataProjects.map((project, index) => (
              <Card key={index} className="card-hover bg-white shadow-lg border-0 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.alt}
                  className="w-full h-48 object-cover" 
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className={`${getTechColor(tech)} border-0`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-primary font-medium hover:text-primary/80 p-0">
                    View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Business Process Automation Projects */}
        <div className="fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-8">Business Process Automation Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationProjects.map((project, index) => (
              <Card key={index} className="card-hover bg-white shadow-lg border-0 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.alt}
                  className="w-full h-48 object-cover" 
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className={`${getTechColor(tech)} border-0`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">Impact:</p>
                    <p className="text-sm font-medium text-secondary">{project.impact}</p>
                  </div>
                  <Button variant="ghost" className="text-primary font-medium hover:text-primary/80 p-0">
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
