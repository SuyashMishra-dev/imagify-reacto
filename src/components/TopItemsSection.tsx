
import { useState } from "react";
import { cn } from "@/lib/utils";

type TabType = "VALUE" | "VOL";

interface TopItemProps {
  number: number;
  name: string;
  units?: number;
  value?: string;
}

function TopItem({ number, name, units, value }: TopItemProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
      <div className="flex items-center">
        <div className="w-6 text-sm font-medium text-gray-500">#{number}</div>
        <div className="text-sm font-medium">{name}</div>
      </div>
      {units && <div className="text-sm">{units} Units</div>}
      {value && <div className="text-sm font-medium">₹{value}</div>}
    </div>
  );
}

export function TopItemsSection() {
  const [soldTab, setSoldTab] = useState<TabType>("VALUE");
  const [purchasedTab, setPurchasedTab] = useState<TabType>("VOL");
  
  return (
    <div className="grid grid-cols-2 gap-6 animate-fadeIn">
      <div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Top Items Sold</h3>
          
          <div className="flex space-x-2">
            <button 
              className={cn("tab-button", soldTab === "VALUE" && "active")}
              onClick={() => setSoldTab("VALUE")}
            >
              VALUE
            </button>
            <button 
              className={cn("tab-button", soldTab === "VOL" && "active")}
              onClick={() => setSoldTab("VOL")}
            >
              VOL
            </button>
          </div>
        </div>
        
        <div className="space-y-1">
          <TopItem number={1} name="Automotive Parts" units={850} />
          <TopItem number={2} name="Steel Sheets" units={430} />
          <TopItem number={3} name="Electronic Parts" units={300} />
          <TopItem number={4} name="Plastic Materials" units={400} />
          <TopItem number={5} name="Office Equipments" units={150} />
        </div>
      </div>
      
      <div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Top Items Purchased</h3>
          
          <div className="flex space-x-2">
            <button 
              className={cn("tab-button", purchasedTab === "VOL" && "active")}
              onClick={() => setPurchasedTab("VOL")}
            >
              VOL
            </button>
            <button 
              className={cn("tab-button", purchasedTab === "VALUE" && "active")}
              onClick={() => setPurchasedTab("VALUE")}
            >
              VALUE
            </button>
          </div>
        </div>
        
        <div className="space-y-1">
          <TopItem number={1} name="Office Equipments" value="2,27,459" />
          <TopItem number={2} name="Steel Sheets" value="2,27,459" />
          <TopItem number={3} name="Plastic Materials" value="2,27,459" />
          <TopItem number={4} name="Electronic Parts" value="2,27,459" />
          <TopItem number={5} name="Automotive Parts" value="2,27,459" />
        </div>
      </div>
    </div>
  );
}
