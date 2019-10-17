import React from "react";
import { Participant } from "components";

import "./styles.scss";

export default ({ venues, participants, preferred }) => (
  <div className="table">
    <div className="table__header flex-container">
      <div className="table__cell flex-container align-center justify-center">
        Participants
      </div>
      {venues.map(({ venue }, i) => (
        <div
          className={`table__cell ${
            preferred === i ? "table__cell--active" : ""
          }`}
          key={i}
        >
          <div className="venue">
            <p className="venue__name">{venue.name}</p>
            <p className="venue__category">
              {venue.categories.map((cat, j) => (
                <span key={`cat${j}`}>{cat.name}</span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="table__body">
      {Object.entries(participants).map(([id]) => (
        <Participant key={id} id={id} />
      ))}
    </div>
  </div>
);
