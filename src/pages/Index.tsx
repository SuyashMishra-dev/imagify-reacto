
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { UserProfile } from "@/components/UserProfile";
import { StatCard } from "@/components/StatCard";
import { InventoryChart } from "@/components/InventoryChart";
import { ShipmentAnalytics } from "@/components/ShipmentAnalytics";
import { TopItemsSection } from "@/components/TopItemsSection";
import { SpotlightMap } from "@/components/SpotlightMap";
import { ChevronDown, FileText, ShoppingCart, TrendingUp, Wallet } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center mb-2">
              <UserProfile 
                name="Rahul" 
                company="ORJE PVT. LTD." 
                badge="CUSTOMER" 
              />
              
              <div className="flex items-center">
                <span className="text-sm mr-2">LAST 30 DAYS</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <StatCard 
                title="Payment Receivables" 
                value="₹12,40,000" 
                change="3.87%" 
                changeDirection="up"
                icon={<Wallet className="h-5 w-5 text-white" />}
                metaText="OVERDUE PAYMENTS: ₹1,40,000"
                iconClass="bg-green-500 bg-opacity-10"
              />
              
              <StatCard 
                title="Payments Made" 
                value="₹9,50,000" 
                icon={<FileText className="h-5 w-5 text-white" />}
                metaText="NEXT PAYMENT DUE: 1 WEEK"
                iconClass="bg-blue-500 bg-opacity-10"
              />
              
              <StatCard 
                title="Total Purchases" 
                value="₹15,20,000" 
                change="3.87%" 
                changeDirection="up"
                icon={<ShoppingCart className="h-5 w-5 text-white" />}
                metaText="SUPPLIERS: 6"
                iconClass="bg-yellow-500 bg-opacity-10"
              />
              
              <StatCard 
                title="Total Sales" 
                value="₹18,00,000" 
                change="3.87%" 
                changeDirection="up"
                icon={<TrendingUp className="h-5 w-5 text-white" />}
                metaText="TOP SELLING PRODUCT: ELECTRONICS"
                iconClass="bg-purple-500 bg-opacity-10"
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <InventoryChart />
              <ShipmentAnalytics />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <SpotlightMap />
              <div className="lg:col-span-2">
                <TopItemsSection />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
