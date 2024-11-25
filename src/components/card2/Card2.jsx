import React from "react";
import './Card2.scss';  

const Card2 = ({ title, subtitle, subtitle2, buttons, bg }) => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="card2">
      <div className="card-content">
        <h2>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
        {subtitle2 && <h4>{subtitle2}</h4>}
        <ul>
          {buttons.map((i, inx) => (
            <li key={inx}>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card2;
