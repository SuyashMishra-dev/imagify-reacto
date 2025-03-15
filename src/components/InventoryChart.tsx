
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const dailyData = [
  { name: "Mon", sales: 100, purchases: 60 },
  { name: "Tues", sales: 200, purchases: 120 },
  { name: "Wed", sales: 250, purchases: 150 },
  { name: "Thurs", sales: 180, purchases: 110 },
  { name: "Fri", sales: 220, purchases: 140 },
  { name: "Sat", sales: 190, purchases: 125 },
  { name: "Sun", sales: 160, purchases: 100 }
];

const weeklyData = [
  { name: "Week 1", sales: 1200, purchases: 800 },
  { name: "Week 2", sales: 1500, purchases: 950 },
  { name: "Week 3", sales: 1300, purchases: 870 },
  { name: "Week 4", sales: 1700, purchases: 1100 },
];

export function InventoryChart() {
  return (
    <div className="chart-container animate-fadeIn">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-medium">Inventory Overview</h3>
          <p className="text-sm text-gray-500">In-Stock Products: 3,200 Units</p>
        </div>
        
        <Tabs defaultValue="weekly" className="w-auto">
          <TabsList>
            <TabsTrigger value="daily">DAILY</TabsTrigger>
            <TabsTrigger value="weekly">WEEKLY</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <Tabs defaultValue="weekly" className="w-full">
        <TabsContent value="daily">
          <ResponsiveContainer width="100%" height={190}>
            <BarChart
              data={dailyData}
              margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
              barGap={8}
              barSize={18}
            >
              <CartesianGrid vertical={false} stroke="#EDF2F7" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#718096' }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#718096' }}
              />
              <Bar dataKey="sales" fill="#5c4ad1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="purchases" fill="#d1d5db" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
        <TabsContent value="weekly">
          <ResponsiveContainer width="100%" height={190}>
            <BarChart
              data={weeklyData}
              margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
              barGap={8}
              barSize={18}
            >
              <CartesianGrid vertical={false} stroke="#EDF2F7" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#718096' }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#718096' }}
              />
              <Bar dataKey="sales" fill="#5c4ad1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="purchases" fill="#d1d5db" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>
      
      <div className="flex items-center justify-center space-x-8 mt-3">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-brand-purple mr-2"></div>
          <span className="text-xs text-gray-600">Sales</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
          <span className="text-xs text-gray-600">Purchases</span>
        </div>
      </div>
    </div>
  );
}
