import React from "react";
import './SecondCard.scss';  

const SecondCard = ({ title, subtitle, secondsubtitle, buttons, bg }) => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="secondcard">
      <div className="card-content">
        <h3>{title}</h3>

        {subtitle && <h3>{subtitle}</h3>}
        {secondsubtitle && <h4>{secondsubtitle}</h4>}
        <ul>
          {buttons.map((i, inx) => (
            <li key={inx}>{i}</li>

          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecondCard;
