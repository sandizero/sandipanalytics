import { Database, BarChart3, PieChart, Workflow, FileSpreadsheet } from "lucide-react";
import { SiPython } from "react-icons/si";

// Material-themed Python icon wrapper
const MaterialPythonIcon = ({ className }: { className?: string }) => (
  <div className={`${className} flex items-center justify-center`}>
    <SiPython className="w-full h-full filter drop-shadow-sm" style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))' }} />
  </div>
);

export default function SkillsShowcase() {
  const skills = [
    { name: "Excel", icon: FileSpreadsheet, description: "Data Analysis", color: "text-primary" },
    { name: "SQL", icon: Database, description: "Advanced Queries", color: "text-primary" },
    { name: "Python", icon: MaterialPythonIcon, description: "Data Science", color: "text-primary" },
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
