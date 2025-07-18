import { Database, BarChart3, PieChart, Workflow, FileSpreadsheet } from "lucide-react";

// Material Design Python Icon Component
const MaterialPythonIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path 
      d="M12 2C9.79 2 8 3.79 8 6v2H6c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h4v2c0 2.21 1.79 4 4 4s4-1.79 4-4v-2h4c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-2V6c0-2.21-1.79-4-4-4z"
      fill="none"
      stroke="currentColor"
    />
    <path 
      d="M8 6c0-2.21 1.79-4 4-4s4 1.79 4 4v2h-8V6z"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <path 
      d="M16 16v2c0 2.21-1.79 4-4 4s-4-1.79-4-4v-2h8z"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <circle cx="10" cy="5" r="0.5" fill="currentColor"/>
    <circle cx="14" cy="19" r="0.5" fill="currentColor"/>
  </svg>
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
