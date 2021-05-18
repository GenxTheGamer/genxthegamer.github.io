import React from "react";
import "../Styles/Tabs.css";

const Tabs = ({ image, tag, link }) => {
  return (
    <>
      <div className="tab__main">
        <div className="tab__image">
          <img src={image} />
        </div>
        <a href={link}>
          <div className="tab__links">{tag}</div>
        </a>
      </div>
    </>
  );
};

export default Tabs;
