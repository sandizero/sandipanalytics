import { Database, Code, BarChart3, PieChart, Workflow, FileSpreadsheet } from "lucide-react";

// Material Design Python Icon Component
const PythonIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M12 2C10.4 2 9 3.4 9 5v2H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-2V5c0-1.6-1.4-3-3-3zm0 2c.6 0 1 .4 1 1v2h-2V5c0-.6.4-1 1-1zm-3 7h6v6H9v-6zm2 1v4h2v-4h-2z"/>
    <circle cx="10" cy="5.5" r="0.5" fill="currentColor" opacity="0.7"/>
    <circle cx="14" cy="18.5" r="0.5" fill="currentColor" opacity="0.7"/>
  </svg>
);

export default function SkillsShowcase() {
  const skills = [
    { name: "Excel", icon: FileSpreadsheet, description: "Data Analysis", color: "text-primary" },
    { name: "SQL", icon: Database, description: "Advanced Queries", color: "text-primary" },
    { name: "Python", icon: PythonIcon, description: "Data Science", color: "text-primary" },
    { name: "Power BI", icon: BarChart3, description: "Business Intelligence", color: "text-primary" },
    { name: "Tableau", icon: PieChart, description: "Data Visualization", color: "text-primary" },
    { name: "n8n", icon: Workflow, description: "Automation", color: "text-primary" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground">Proficient in industry-leading tools and technologies</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div 
                key={skill.name}
                className="text-center p-6 bg-muted/20 rounded-xl hover:bg-primary/5 smooth-transition card-hover"
              >
                <IconComponent className={`h-12 w-12 mx-auto mb-4 ${skill.color}`} />
                <h3 className="font-semibold text-foreground">{skill.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
