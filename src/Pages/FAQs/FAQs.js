import React from "react";
import FaqAccordion from "./FaqAccordion";

const FAQs = () => {
  return (
    <>
      <div className="container">
        <div className="mt-5 text-center">
          <h6>FAQs</h6>
          <h1>Frequently Asked Questions</h1>
          <p className="text-secondary-emphasis">
            Have questions? We're here to help.
          </p>
        </div>

        <FaqAccordion />

        <div className="text-center">
          <h4>Still have questions?</h4>
          <p>
            Can't find the answer looking for? Please mail us at
            bikersplanet@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default FAQs;
