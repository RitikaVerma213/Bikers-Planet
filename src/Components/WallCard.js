import React from "react";

const WallCard = (props) => {
  return (
    <>
      <div className="col-xl-4 mb-4">
        <div className="box-shadow card-one pb-1 mb-4">
            <div className="mx-4 mt-2 mb-4">
            <img
                src={props.src}
                className="wallcard w-100 mx-auto"
                height={"207px"}
                alt="image"
            />
            </div>
            <div className="content">
                <h3 className="text-purple text-center">{props.title}</h3>
                <p className="px-5" style={{ textAlign: "justify" }}>
                {props.text}
                </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default WallCard;
