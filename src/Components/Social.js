import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Social = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-social py-5">
      <div className="container">
        <ul class="list-inline text-center" data-aos="zoom-in">
          <li class="list-inline-item border border-primary rounded p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968841.png"
              height="30px"
              style={{cursor: "pointer"}}
            />
          </li>
          <li class="list-inline-item border border-primary rounded p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              height="30px"
              style={{cursor: "pointer"}}
            />
          </li>
          <li class="list-inline-item border border-primary rounded p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              height="30px"
              style={{cursor: "pointer"}}
            />
          </li>
          <li class="list-inline-item border border-primary rounded p-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              height="30px"
              style={{cursor: "pointer"}}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Social;
