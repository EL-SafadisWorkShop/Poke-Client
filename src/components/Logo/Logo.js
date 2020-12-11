import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt1">
      <Tilt
        className="Tilt br3 shadow-5 mw5 mw7-ns center pa3 ph2-ns"
        options={{ max: 50 }}
        style={{ height: 100, width: 250 }}
      >
        <div className="Tilt-inner"> POKEFIGHT </div>
      </Tilt>
    </div>
  );
};

export default Logo;
