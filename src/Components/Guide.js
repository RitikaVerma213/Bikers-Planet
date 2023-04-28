import React, { useEffect } from "react";
import GuideCard from "./GuideCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Guide = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center my-5 text-purple" data-aos="zoom-in-up">
          Motorcycle Touring Guide
        </h1>
        <div className="row">
        <GuideCard
            src="https://adityabhardwaj03.github.io/BikersPlanet/images/hotel.png"
            title="Affordable Hotels"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem distinctio quibusdam eum? Expedita, tenetur nostrum."
          />
          <GuideCard
            src="https://adityabhardwaj03.github.io/BikersPlanet/images/fork.png"
            title="Food and Drinks"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem distinctio quibusdam eum? Expedita, tenetur nostrum."
          />
          <GuideCard
            src="https://adityabhardwaj03.github.io/BikersPlanet/images/hiking.png"
            title="Adventures"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem distinctio quibusdam eum? Expedita, tenetur nostrum."
          />
        </div>
      </div>
    </>
  );
};

export default Guide;
