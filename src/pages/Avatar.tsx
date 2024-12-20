import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AvatarHeader from "@/components/avatar/AvatarHeader";
import AvatarPreview from "@/components/avatar/AvatarPreview";
import CustomizationCard from "@/components/avatar/CustomizationCard";
import { getBackgroundOptions } from "@/components/avatar/customization/BackgroundOptions";
import { getFinsOptions } from "@/components/avatar/customization/FinsOptions";
import { getEyesOptions } from "@/components/avatar/customization/EyesOptions";
import { getAccessoryOptions } from "@/components/avatar/customization/AccessoryOptions";

const Avatar = () => {
  const [selectedTab, setSelectedTab] = useState("Background");
  
  const tabs = ["Background", "Fins", "Eyes", "Accessories"];
  
  const getOptionsForTab = (tab: string) => {
    switch (tab) {
      case "Background":
        return getBackgroundOptions();
      case "Fins":
        return getFinsOptions();
      case "Eyes":
        return getEyesOptions();
      case "Accessories":
        return getAccessoryOptions();
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 pb-24">
      <AvatarHeader />
      
      <div className="max-w-4xl mx-auto">
        <div className="px-4 -mt-6">
          <AvatarPreview />
        </div>

        <div className="px-4 py-6">
          <Tabs defaultValue={selectedTab} className="w-full" onValueChange={setSelectedTab}>
            <TabsList className="w-full flex overflow-x-auto gap-2 bg-transparent h-auto p-1">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className={`flex-1 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all duration-200 ${
                    selectedTab === tab
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-50 hover:scale-102"
                  }`}
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {getOptionsForTab(selectedTab).map((option) => (
            <CustomizationCard key={option.name} option={option} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Avatar;