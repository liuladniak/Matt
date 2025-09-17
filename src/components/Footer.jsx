import React from "react";

const Footer = () => {
  return (
    <div className="home-footer">
      <div className="home-frame90">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="home-text98"
        >
          ↑ Back to top
        </button>
      </div>
      <div className="home-frame59">
        <div className="home-frame79">
          <div className="home-frame95">
            <img
              src="/external/mokapot3012-nyu4-200h.png"
              alt="MokaPot3012"
              className="home-moka-pot"
            />
            <img
              src="/external/travelmug3012-woy5-200h.png"
              alt="TravelMug3012"
              className="home-travel-mug"
            />
          </div>
          <span className="home-text99 SmallTextRegular">
            Let’s grab a coffee...
            <span
              dangerouslySetInnerHTML={{
                __html: " ",
              }}
            />
          </span>
        </div>
        <div className="home-frame57">
          <div className="home-frame81">
            <img
              src="/external/image23012-f6mi-200w.png"
              alt="image23012"
              className="home-image22"
            />
            <span className="home-text100">2025, Matt Zaim</span>
          </div>
        </div>
        <div className="home-frame80">
          <a
            href="#link"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link3"
          >
            <div className="home-socials2">
              <div className="home-resume3">
                <img
                  src="/external/resume3012-0dhf-200w.png"
                  alt="Resume3012"
                  className="home-resume4"
                />
              </div>
              <img
                src="/external/linkedin3012-15yf-200h.png"
                alt="LinkedIn3012"
                className="home-linked-in2"
              />
              <img
                src="/external/vector3012-9ih.svg"
                alt="Vector3012"
                className="home-vector3"
              />
              <img
                src="/external/vector3012-16cp.svg"
                alt="Vector3012"
                className="home-vector4"
              />
            </div>
          </a>
          <span className="home-text101 SmallTextRegular">
            uxmattzaim@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
