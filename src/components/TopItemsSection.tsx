
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeIn h-full">
      <div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm p-6 h-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Top Items Sold</h3>
          
          <Tabs defaultValue="value" className="w-auto">
            <TabsList>
              <TabsTrigger value="value">VALUE</TabsTrigger>
              <TabsTrigger value="vol">VOL</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <Tabs defaultValue="value" className="w-full">
          <TabsContent value="value">
            <div className="space-y-1">
              <TopItem number={1} name="Automotive Parts" value="3,45,890" />
              <TopItem number={2} name="Steel Sheets" value="2,78,450" />
              <TopItem number={3} name="Electronic Parts" value="1,95,320" />
              <TopItem number={4} name="Plastic Materials" value="1,45,600" />
              <TopItem number={5} name="Office Equipments" value="1,12,780" />
            </div>
          </TabsContent>
          <TabsContent value="vol">
            <div className="space-y-1">
              <TopItem number={1} name="Automotive Parts" units={850} />
              <TopItem number={2} name="Steel Sheets" units={430} />
              <TopItem number={3} name="Electronic Parts" units={300} />
              <TopItem number={4} name="Plastic Materials" units={400} />
              <TopItem number={5} name="Office Equipments" units={150} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="rounded-lg border border-border bg-card text-card-foreground shadow-sm p-6 h-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Top Items Purchased</h3>
          
          <Tabs defaultValue="vol" className="w-auto">
            <TabsList>
              <TabsTrigger value="vol">VOL</TabsTrigger>
              <TabsTrigger value="value">VALUE</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <Tabs defaultValue="vol" className="w-full">
          <TabsContent value="vol">
            <div className="space-y-1">
              <TopItem number={1} name="Office Equipments" units={220} />
              <TopItem number={2} name="Steel Sheets" units={180} />
              <TopItem number={3} name="Plastic Materials" units={150} />
              <TopItem number={4} name="Electronic Parts" units={120} />
              <TopItem number={5} name="Automotive Parts" units={100} />
            </div>
          </TabsContent>
          <TabsContent value="value">
            <div className="space-y-1">
              <TopItem number={1} name="Office Equipments" value="2,27,459" />
              <TopItem number={2} name="Steel Sheets" value="1,98,320" />
              <TopItem number={3} name="Plastic Materials" value="1,76,540" />
              <TopItem number={4} name="Electronic Parts" value="1,45,670" />
              <TopItem number={5} name="Automotive Parts" value="1,27,890" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
