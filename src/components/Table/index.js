import React from "react";
import { Participant } from "components";

export default ({ venues, participants }) => (
  <div className="table">
    <div className="table__header flex-container">
      <div className="table__cell">Participants</div>
      {venues.map(({ venue }, i) => (
        <div className="table__cell" key={i}>
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
