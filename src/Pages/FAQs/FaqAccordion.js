import React from "react";

const FaqAccordion = () => {
  return (
    <>
      <div class="accordion my-5" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button bg-info"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Does it cost money to get a quote?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              No, it does not cost money to get a quote from Guide Me Away.
              Simply fill out our online form or give us a call, and one of our
              travel agents will be happy to provide you with a free quote for
              your trip. We look forward to helping you plan the perfect
              vacation!
            </div>
          </div>
        </div>
        <div class="accordion-item mt-4 border-top">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed bg-success text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Do I pay extra to use a travel agency?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              There is no additional cost to use our travel agency. We work with
              a variety of suppliers and have access to exclusive deals that we
              can pass on to our clients. When we book with our suppliers we get
              commission, in most cases we save you money because these travel
              suppliers have wholesale pricing. We book all of the major cruise
              lines, resorts, tours, hotels and more.
            </div>
          </div>
        </div>
        <div class="accordion-item mt-4 border-top">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed bg-danger text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Do you book group travel?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Yes, we book group travel all the time! We specialize in helping
              groups of all sizes plan their dream trips. From family reunions
              to corporate retreats, we can take care of all the details so you
              can relax and enjoy your time away.
            </div>
          </div>
        </div>
        <div class="accordion-item mt-4 border-top">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed bg-warning"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Do I need travel insurance?
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Yes. We highly recommend travel protection, it’s important to
              protect your trip investment and loved ones. We will offer you the
              best option for your vacation.
            </div>
          </div>
        </div>
        <div class="accordion-item mt-4 border-top">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed bg-primary text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              What is on an Request trips?
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              If you book a trip that is on request, it means we can't confirm
              your booking immediately as we need to check if space is available
              with our local operators. The reason we need full payment for on
              request trips is because our local operations team confirm various
              services such as on-tour transport and accommodation as they go.
              If space is available, you’ll be good to go. If not, we’ll provide
              you with a full refund. If you have booked an on request trip,
              we’ll email you with an update in 2 to 4 business days. Please
              don’t book any non-refundable travel arrangements in the meantime.
            </div>
          </div>
        </div>
        <div className="accordion-item mt-4 border-top">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed bg-secondary text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseFalse"
            >
              Can I place a trip on hold and finalize it after?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              If you’ve placed a trip on hold, you'll need to pay the minimum
              deposit within five days to secure your place – but if a sale
              happens to start within that five-day period, then you're in luck!
              If you don’t make a deposit within five days, your booking will be
              cancelled.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqAccordion;
