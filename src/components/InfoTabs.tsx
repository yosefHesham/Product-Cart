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
      <div className="flex space-x-3 border-b">
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2 border-b-4  transition-colors duration-300 ${
                idx === activeTabIndex
                  ? "border-activeTab text-activeTab"
                  : "border-transparent hover:border-gray-200"
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
