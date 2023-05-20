import React from "react";
import banner2 from "../../../../assets/banner/banner2.png";

const ExtraSectionOne = () => {
  return (
    <div className="mt-20">
      <div className="bg-green-300 border-0 hero min-h-screen rounded-lg">
        <div className="hero-content flex-col lg:flex-row">
          <img src={banner2} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              Discover a World of Enchanting Dolls!
            </h1>
            <p className="py-6">
              Visit our online store today and embark on an enchanting journey
              into the world of dolls. Unleash your imagination, embrace the
              magic, and find the perfect doll that will bring endless joy and
              wonder to your world.
            </p>
            <button className="btn bg-green-300 border-0">Hit meee!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionOne;
