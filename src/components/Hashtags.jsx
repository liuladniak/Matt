import React from "react";

const Hashtags = ({ hashtags, className }) => {
  return (
    <div className={`hashtags ${className}`}>
      {hashtags.map((hashtag, i) => (
        <OneHashtag key={i} hashtag={hashtag} />
      ))}
    </div>
  );
};

export default Hashtags;

const OneHashtag = ({ hashtag }) => {
  return (
    <div className="home-frame77">
      <span className="home-text72"># {hashtag}</span>
    </div>
  );
};
