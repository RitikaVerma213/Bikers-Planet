import React, { useEffect } from "react";
import ExploreCard from "./ExploreCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Explore = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container">
        <h1 class="text-center my-5 text-purple" data-aos="zoom-in">
          Explore Hidden Places Around India
        </h1>
        <div className="row">
          <ExploreCard
            src="https://www.chandigarhsmartcity.in/documents/34592/53554/6nw.jpg/74f5482f-4db2-775d-eb24-6b319b96c8e2?t=1581086054753"
            alt="Chandigarh Image"
            title="CHANDIGARH"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <ExploreCard
            src="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/12/pti28-12-2020-000048b-1609160104.jpg"
            alt="Shimla Image"
            title="SHIMLA"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <ExploreCard
            src="https://hikerwolf.com/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-02-at-7.18.33-PM-1046x800.jpeg"
            alt="Manali Image"
            title="MANALI"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <ExploreCard
            src="https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg"
            alt="Mumbai Image"
            title="MUMBAI"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <ExploreCard
            src="https://www.team-bhp.com/forum/attachments/4x4-excursions/1903660d1565326394-2019-rain-forest-challenge-rfc-goa-img20190808wa0112.jpg"
            alt="Goa Image"
            title="RFC GOA"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <ExploreCard
            src="https://static.toiimg.com/photo/54559212.cms"
            alt="Banglore Image"
            title="BANGLORE"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
      </div>
    </>
  );
};

export default Explore;
