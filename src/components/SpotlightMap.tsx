
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SpotlightMap() {
  return (
    <div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm p-6 animate-slideUp h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Spotlight</h3>
        
        <Tabs defaultValue="clients" className="w-auto">
          <TabsList>
            <TabsTrigger value="suppliers">SUPPLIERS</TabsTrigger>
            <TabsTrigger value="clients">CLIENTS</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="relative h-[180px] mb-3 overflow-hidden rounded-lg bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center text-gray-300">
          <span className="text-xs">ALL REGIONS</span>
        </div>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/BlankMap-World-Flattened.svg/2560px-BlankMap-World-Flattened.svg.png" 
          alt="World Map"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <Tabs defaultValue="clients" className="w-full">
        <TabsContent value="clients">
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
        </TabsContent>
        <TabsContent value="suppliers">
          <div className="overflow-hidden text-sm">
            <div className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center">
                <div className="w-6 font-medium text-gray-500">#1</div>
                <div className="font-medium">Vikram Industries</div>
              </div>
              <div>₹3,45,210</div>
              <div className="text-right text-xs font-medium text-green-500">82% Fulfillment</div>
              <div className="text-right text-xs text-gray-500">63 Orders</div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
