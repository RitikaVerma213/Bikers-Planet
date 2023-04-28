import React, { useEffect } from "react";
import WallCard from "./WallCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Wall = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center my-5 text-purple" data-aos="zoom-in-up">
          Wall of Adventures
        </h1>
        <div className="row mx-auto">
          <WallCard
            src="https://i.ytimg.com/vi/Q7lXjuM3P6k/maxresdefault.jpg"
            title="Bike Offroading"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse eget velit tristique, sollicitudin leo viverra,
            suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi
            in leo in eros commodo volutpat ac sed dolor."
          />
          <WallCard
            src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/12/03/Pictures/chandigarh-chandigarh-hindustan-festival-motorbike-military-literature_a3fa7ca0-d850-11e7-8802-68a15924f886.jpg"
            title="Adventures"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse eget velit tristique, sollicitudin leo viverra,
            suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi
            in leo in eros commodo volutpat ac sed dolor."          />
          <WallCard
            src="https://koa.com/blog/images/The-Essential-Motorcycle-Camping-Guide.jpg?preset=blogPhoto"
            title="Camping"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse eget velit tristique, sollicitudin leo viverra,
            suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi
            in leo in eros commodo volutpat ac sed dolor."          />
        </div>
      </div>
    </>
  );
};

export default Wall;
