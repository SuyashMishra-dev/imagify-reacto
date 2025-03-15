
import { useState } from "react";
import { cn } from "@/lib/utils";

type TabType = "SUPPLIERS" | "CLIENTS";

export function SpotlightMap() {
  const [activeTab, setActiveTab] = useState<TabType>("CLIENTS");
  
  return (
    <div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm p-6 animate-slideUp">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Spotlight</h3>
        
        <div className="flex space-x-2">
          <button 
            className={cn("tab-button", activeTab === "SUPPLIERS" && "active")}
            onClick={() => setActiveTab("SUPPLIERS")}
          >
            SUPPLIERS
          </button>
          <button 
            className={cn("tab-button", activeTab === "CLIENTS" && "active")}
            onClick={() => setActiveTab("CLIENTS")}
          >
            CLIENTS
          </button>
        </div>
      </div>
      
      <div className="relative h-[180px] mb-3 overflow-hidden rounded-lg bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center text-gray-300">
          <span className="text-xs">ALL REGIONS</span>
        </div>
        <img 
          src="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json" 
          alt="World Map"
          className="w-full h-full object-cover opacity-40"
          onError={(e) => {
            e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/BlankMap-World-Flattened.svg/2560px-BlankMap-World-Flattened.svg.png';
          }}
        />
      </div>
      
      <div className="overflow-hidden text-sm">
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <div className="flex items-center">
            <div className="w-6 font-medium text-gray-500">#1</div>
            <div className="font-medium">Amit Sethi</div>
          </div>
          <div>₹2,09,632</div>
          <div className="text-right text-xs font-medium text-red-500">39% Wind Loss</div>
          <div className="text-right text-xs text-gray-500">118 Orders</div>
        </div>
      </div>
    </div>
  );
}
