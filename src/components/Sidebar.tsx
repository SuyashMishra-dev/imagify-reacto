
import { cn } from "@/lib/utils";
import { 
  Package, BarChart2, Users, FileText, ShoppingBag, Settings, 
  HelpCircle, Home, Box
} from "lucide-react";
import { useState } from "react";

interface SidebarItemProps {
  icon: React.ReactNode;
  active?: boolean;
  className?: string;
}

const SidebarItem = ({ icon, active, className }: SidebarItemProps) => {
  return (
    <div 
      className={cn(
        "flex items-center justify-center w-12 h-12 cursor-pointer transition-all duration-200",
        active ? "text-white" : "text-blue-100 hover:text-white",
        className
      )}
    >
      {icon}
    </div>
  );
};

export function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(1);
  
  return (
    <div className="flex flex-col h-screen bg-brand-purple border-r border-blue-600">
      <div className="p-4 flex items-center justify-center border-b border-blue-600">
        <div className="w-8 h-8">
          <svg viewBox="0 0 48 48" fill="none">
            <path d="M24 8L8 16L24 24L40 16L24 8Z" fill="#5CE0E6" />
            <path d="M8 16V32L24 40V24" fill="#5CE0E6" opacity="0.7" />
            <path d="M24 24V40L40 32V16" fill="#5CE0E6" opacity="0.5" />
          </svg>
        </div>
      </div>
      
      <div className="flex flex-col items-center py-8 flex-1 space-y-4">
        <SidebarItem 
          icon={<Home size={20} />} 
          active={activeIndex === 0} 
          className="mt-2"
          onClick={() => setActiveIndex(0)}
        />
        <SidebarItem 
          icon={<Box size={20} />} 
          active={activeIndex === 1} 
          onClick={() => setActiveIndex(1)}
        />
        <SidebarItem 
          icon={<Users size={20} />} 
          active={activeIndex === 2} 
          onClick={() => setActiveIndex(2)}
        />
        <SidebarItem 
          icon={<FileText size={20} />} 
          active={activeIndex === 3} 
          onClick={() => setActiveIndex(3)}
        />
        <SidebarItem 
          icon={<ShoppingBag size={20} />} 
          active={activeIndex === 4} 
          onClick={() => setActiveIndex(4)}
        />
        <SidebarItem 
          icon={<BarChart2 size={20} />} 
          active={activeIndex === 5} 
          onClick={() => setActiveIndex(5)}
        />
      </div>
      
      <div className="flex flex-col items-center py-4 space-y-4 border-t border-blue-600">
        <SidebarItem icon={<Settings size={20} />} />
        <SidebarItem icon={<HelpCircle size={20} />} />
      </div>
    </div>
  );
}
