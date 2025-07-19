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
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gradient truncate">
              <span className="hidden sm:inline">Sandip Sarkar | Data & Automation Hub</span>
              <span className="sm:hidden">Sandip Sarkar</span>
            </h1>
          </div>
          
          {/* Desktop Navigation - Chrome Tab Style */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-end">
              {navItems.map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => handleTabClick(value)}
                  className={`
                    relative px-6 py-3 text-sm font-medium smooth-transition cursor-pointer
                    border-b-2 border-transparent hover:border-primary/30
                    ${activeTab === value 
                      ? "text-primary border-primary bg-primary/5" 
                      : "text-muted-foreground hover:text-primary"
                    }
                  `}
                >
                  {label}
                  {activeTab === value && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
                  )}
                </button>
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
      
      {/* Mobile menu - Chrome Tab Style */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => handleTabClick(value)}
                className={`
                  relative w-full text-left px-4 py-3 text-base font-medium smooth-transition
                  border-l-4 border-transparent hover:border-primary/30
                  ${activeTab === value 
                    ? "text-primary border-primary bg-primary/5" 
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }
                `}
              >
                {label}
                {activeTab === value && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
