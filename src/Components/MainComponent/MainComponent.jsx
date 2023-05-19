import React from "react";
import Header from "../Pages/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import "./MainComponent.css";

const MainComponent = () => {
  return (
    <div>
      <div className="md:mr-5 md:ml-5">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainComponent;
