import React from "react";

const ExploreCard = (props) => {
  return (
    <>
      <div className="col-xl-4 text-center mb-4">
        <div className="w-95">
          <div className="card rounded explore-shadow">
            <img
              src={props.src}
              className="card-img-top rounded"
              height="300px"
              alt={props.alt}
            />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">
                {props.text}
              </p>
              <button href="#" className="text-white bg-purple border-0 px-3 py-2 rounded">
                Join Club
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreCard;
