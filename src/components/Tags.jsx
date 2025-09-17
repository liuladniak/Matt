import React from "react";

const Tags = ({ className, classNameTag = "" }) => {
  return (
    <div className={`home-tags ${className}`}>
      <div className={`home-mobileapp1 ${classNameTag}`}>
        <img
          src="/external/iphone16pro3011-1kt-200w.png"
          alt="iPhone16Pro3011"
          className="home-i-phone16-pro"
        />
        <div className="home-group12">
          <span className="home-text83">Mobile</span>
        </div>
      </div>
      <div className={`home-mobileapp2 ${classNameTag}`}>
        <img
          src="/external/person3011-flh-200h.png"
          alt="Person3011"
          className="home-person"
        />
        <div className="home-group13">
          <span className="home-text84">UX Designer</span>
        </div>
      </div>
    </div>
  );
};

export default Tags;
