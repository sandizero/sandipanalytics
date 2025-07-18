import { Card, CardContent } from "@/components/ui/card";
import { 
  Fan, 
  Search, 
  TrendingUp, 
  FileText,
  Workflow,
  Zap,
  Wand2
} from "lucide-react";

export default function ServicesDetail() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive data solutions tailored to your business needs</p>
        </div>

        {/* Data Analysis Services */}
        <div className="mb-20 fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Data Analysis & Visualization</h2>
              <p className="text-lg text-muted-foreground mb-8">Turn your raw data into powerful insights that drive strategic decision-making and business growth.</p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Fan className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Data Cleaning & Preparation</h3>
                    <p className="text-muted-foreground">Ensure data quality through comprehensive cleaning, validation, and preparation processes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Search className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Exploratory Data Analysis</h3>
                    <p className="text-muted-foreground">Discover patterns, trends, and relationships hidden within your data using advanced statistical methods.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Dashboard Creation</h3>
                    <p className="text-muted-foreground">Build interactive dashboards using Power BI and Tableau for real-time monitoring and reporting.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Report Generation</h3>
                    <p className="text-muted-foreground">Create comprehensive reports with clear visualizations and actionable recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Analytics dashboard with charts and graphs" 
                className="rounded-2xl shadow-lg w-full h-auto card-hover" 
              />
            </div>
          </div>
        </div>

        {/* Automation Services */}
        <div className="mb-16 fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Automated workflow diagram and processes" 
                className="rounded-2xl shadow-lg w-full h-auto card-hover" 
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Business Process Automation</h2>
              <p className="text-lg text-muted-foreground mb-8">Streamline your operations and reduce manual work through intelligent automation solutions.</p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Workflow className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Workflow Automation</h3>
                    <p className="text-muted-foreground">Design and implement automated workflows using n8n to eliminate repetitive tasks.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">System Integration</h3>
                    <p className="text-muted-foreground">Connect disparate systems and applications to create seamless data flow and communication.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Wand2 className="h-4 w-4 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Custom Automation Solutions</h3>
                    <p className="text-muted-foreground">Develop tailored automation solutions that address your specific business challenges and requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process & Approach */}
        <Card className="bg-white shadow-lg border-0 p-8 lg:p-12 fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">My Approach</h2>
            <p className="text-lg text-muted-foreground">A systematic methodology that ensures project success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Discovery</h3>
              <p className="text-sm text-muted-foreground">Understanding your business needs, goals, and data landscape</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">2</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Analysis</h3>
              <p className="text-sm text-muted-foreground">Deep dive into your data to identify opportunities and insights</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Implementation</h3>
              <p className="text-sm text-muted-foreground">Building solutions with best practices and iterative feedback</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Delivery</h3>
              <p className="text-sm text-muted-foreground">Comprehensive handover with documentation and training</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
