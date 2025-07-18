import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type TabType = 'home' | 'services' | 'projects' | 'testimonials' | 'contact';

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { label: string; value: TabType }[] = [
    { label: "Home", value: "home" },
    { label: "Services", value: "services" },
    { label: "Work/Projects", value: "projects" },
    { label: "Testimonials", value: "testimonials" },
    { label: "Contact", value: "contact" },
  ];

  const handleTabClick = (tab: TabType) => {
    onTabChange(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 smooth-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gradient">Sandip Sarkar | Data & Automation Hub</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(({ label, value }) => (
                <Button
                  key={value}
                  onClick={() => handleTabClick(value)}
                  variant={activeTab === value ? "default" : "ghost"}
                  className={`px-4 py-2 text-sm font-medium smooth-transition ${
                    activeTab === value 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-500 hover:text-primary"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(({ label, value }) => (
              <Button
                key={value}
                onClick={() => handleTabClick(value)}
                variant="ghost"
                className={`w-full text-left justify-start px-3 py-2 text-base font-medium ${
                  activeTab === value ? "bg-primary/10 text-primary" : "hover:bg-primary/5"
                }`}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
