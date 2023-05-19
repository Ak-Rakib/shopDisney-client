import React from "react";
import banner from "../../../../assets/banner/banner.png";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome Our Shop</h1>
            <p className="mb-5">
              Unlock the Magic of Disney at our Online Shop!
            </p>
            <button className="btn btn-primary">Let's Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
