
import { Badge } from "@/components/ui/badge";

interface UserProfileProps {
  name: string;
  company: string;
  badge: string;
}

export function UserProfile({ name, company, badge }: UserProfileProps) {
  return (
    <div className="flex items-center p-6 pb-2 animate-fadeIn">
      <div className="flex-shrink-0 mr-4 relative">
        <div className="w-16 h-16 bg-gradient-to-r from-brand-light-blue to-blue-300 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
          {name.charAt(0)}
        </div>
        <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-brand-light-blue rounded-full flex items-center justify-center shadow-md border-2 border-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-blue-800">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <h2 className="text-xl font-bold mr-3">Hello, {name}</h2>
          <Badge className="bg-brand-purple text-white font-medium">{badge}</Badge>
        </div>
        <p className="text-gray-500 text-sm">{company}</p>
      </div>
    </div>
  );
}
