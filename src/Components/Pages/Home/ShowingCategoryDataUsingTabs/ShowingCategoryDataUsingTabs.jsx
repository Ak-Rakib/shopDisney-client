import React, { useState, useEffect } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import ShowingCategory from "../ShowingCategory/ShowingCategory";

const ShowingCategoryDataUsingTabs = () => {
  const [dolls, setDolls] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/dolls/${activeTab}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDolls(data);
      });
  }, [activeTab]);

  const tabHandler = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <h1 className="text-center mb-10 mt-20">
        <span className="font-bold text-3xl text-indigo-800">shopDisney</span>
        <br />
        <span className="font-bold text-slate-500">Category</span>
      </h1>
      <div className="flex justify-center">
        <div className="tabs tabs-boxed">
          <div onClick={() => tabHandler("fDoll")}
            className={`tab fDoll ${
                activeTab == "fDoll" ? "tab-active" : ""
            }`}
          >
            Frozen
          </div>
          <div onClick={() => tabHandler("aDoll")}
            className={`tab aDoll ${
                activeTab == "aDoll" ? "tab-active" : ""
            }`}
          >
            Animation
          </div>
          <div onClick={() => tabHandler("dDoll")}
            className={`tab dDoll ${
                activeTab == "dDoll" ? "tab-active" : ""
            }`}
          >
            Donald Duck
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5 mb-20">
        {dolls.map((doll) => (
          <ShowingCategory key={doll._id} doll={doll}></ShowingCategory>
        ))}
      </div>
    </div>
  );
};

export default ShowingCategoryDataUsingTabs;
