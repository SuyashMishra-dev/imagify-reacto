
import { Search, Calendar, Bell, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="bg-brand-purple text-white border-b border-blue-600 py-3 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-md p-1.5">
            <svg 
              className="w-5 h-5 text-white" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="9" height="9" rx="1" />
              <rect x="13" y="2" width="9" height="9" rx="1" />
              <rect x="2" y="13" width="9" height="9" rx="1" />
              <rect x="13" y="13" width="9" height="9" rx="1" />
            </svg>
          </div>
          
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-white opacity-70" />
            <Input 
              placeholder="Search" 
              className="w-full bg-white bg-opacity-20 border-0 pl-10 text-white placeholder:text-gray-200"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <Calendar className="h-5 w-5 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
          <Bell className="h-5 w-5 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
          <Settings className="h-5 w-5 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
          
          <div className="flex items-center ml-2 bg-blue-600 bg-opacity-30 backdrop-blur-lg rounded-lg py-1 px-3">
            <div className="mr-3 text-right">
              <p className="text-xs text-gray-200">rahulshetty.xyz</p>
              <p className="text-xs font-medium">ETLS PVT. LTD.</p>
            </div>
            <Avatar className="h-8 w-8 border-2 border-white/20">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
