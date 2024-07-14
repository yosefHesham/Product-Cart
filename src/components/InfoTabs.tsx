import { useState } from "react";
import Description from "./Description";
import ShowCase from "./ShowCase";

const tabsData = [
  {
    label: "Description",
    component: <Description />,
  },
  {
    label: "Show case",
    component: <ShowCase />,
  },
];

const InfoTabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <div className="flex space-x-3 gap-5 border-b-2 mt-12 font-inter">
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-3  border-b-4  w-32 text-[16px]  transition-colors duration-300 ${
                idx === activeTabIndex
                  ? "border-activeTab  text-activeTab font-semibold"
                  : "border-transparent text-tab hover:border-gray-200"
              }`}
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="py-4">
        <p>{tabsData[activeTabIndex].component}</p>
      </div>
    </div>
  );
};

export default InfoTabs;
