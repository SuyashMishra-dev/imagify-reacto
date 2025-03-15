
import { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeDirection?: 'up' | 'down';
  icon: ReactNode;
  metaText?: string;
  className?: string;
  iconClass?: string;
}

export function StatCard({ 
  title, 
  value, 
  change, 
  changeDirection = 'up', 
  icon, 
  metaText,
  className,
  iconClass
}: StatCardProps) {
  return (
    <div className={cn("stat-card animate-slideUp", className)}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-medium text-gray-500">{title}</h3>
        <div className={cn("p-2 rounded-md", iconClass)}>
          {icon}
        </div>
      </div>
      
      <div className="flex items-end justify-between">
        <div>
          <p className="stat-value">{value}</p>
          {change && (
            <div className="flex items-center space-x-1">
              {changeDirection === 'up' ? (
                <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              <span className={cn("text-xs font-medium", 
                changeDirection === 'up' ? "text-green-500" : "text-red-500"
              )}>
                {change}
              </span>
            </div>
          )}
        </div>
        
        {metaText && <p className="stat-meta">{metaText}</p>}
      </div>
    </div>
  );
}
