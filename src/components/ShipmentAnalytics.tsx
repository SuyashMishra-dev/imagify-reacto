
import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ShipmentItemProps {
  id: string;
  sourceAddress: string;
  destinationAddress: string;
  progress: number;
}

function ShipmentItem({ id, sourceAddress, destinationAddress, progress }: ShipmentItemProps) {
  return (
    <div className="mb-6">
      <p className="text-sm font-medium mb-2">Shipment ID</p>
      <p className="text-base font-medium mb-3">{id}</p>
      
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Badge className="h-2 w-2 rounded-full bg-green-500 mr-2" />
          <span className="text-sm text-gray-600">{sourceAddress}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
        <div className="flex items-center">
          <Badge className="h-2 w-2 rounded-full bg-blue-500 mr-2" />
          <span className="text-sm text-gray-600">{destinationAddress}</span>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div 
          className="bg-brand-purple h-1.5 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export function ShipmentAnalytics() {
  return (
    <div className="animate-fadeIn rounded-lg border border-border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Shipment Analytics</h3>
          
          <button className="flex items-center px-2 py-1 border border-gray-300 rounded-md text-sm bg-white">
            <Filter className="h-4 w-4 mr-2 text-gray-500" />
            <span>FILTERS</span>
          </button>
        </div>
        
        <div className="overflow-hidden rounded-lg pb-4">
          <div className="flex mb-4">
            <div className="w-1/2 pr-4">
              <ShipmentItem 
                id="#003455MNP" 
                sourceAddress="87 Some Address" 
                destinationAddress="15 Some Address" 
                progress={65} 
              />
              
              <ShipmentItem 
                id="#001432LDP" 
                sourceAddress="87 Some Address" 
                destinationAddress="15 Some Address" 
                progress={85} 
              />
            </div>
            
            <div className="w-1/2 bg-gray-100 rounded-lg relative overflow-hidden h-[250px]">
              <img 
                src="/lovable-uploads/1ab66b46-1d2c-4253-a4d5-aae0799cc542.png" 
                alt="Shipment Map" 
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
                <div className="grid grid-cols-5 gap-2 text-xs">
                  <div className="col-span-1 font-medium text-gray-500">Shipment ID</div>
                  <div className="col-span-1 font-medium text-gray-500">Category</div>
                  <div className="col-span-1 font-medium text-gray-500">Total Weight</div>
                  <div className="col-span-1 font-medium text-gray-500">Destination</div>
                  <div className="col-span-1 font-medium text-gray-500">Est. Arrival</div>
                  
                  <div className="col-span-1 font-medium">#0124BCD</div>
                  <div className="col-span-1">Electronics</div>
                  <div className="col-span-1">329 kg</div>
                  <div className="col-span-1">Bangalore</div>
                  <div className="col-span-1">2 Hrs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
