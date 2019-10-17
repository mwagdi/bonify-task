import React, { PureComponent } from "react";
import { Consumer } from "AppContext";

import "./styles.scss";

export default ({ id }) => (
  <Consumer>
    {({ participants, editParticipant }) => {
      const { name, choice } = participants[id];
      return (
        <div className="table__row flex-container">
          <div className="table__cell">
            <input
              className="table__input"
              type="text"
              value={name}
              onChange={e => editParticipant(id, "name", e.target.value)}
            />
          </div>
          <div className="table__cell">
            <button
              onClick={() => editParticipant(id, "choice", 0)}
              className={`vote ${choice === 0 ? "vote--active" : ""}`}
            >
              vote
            </button>
          </div>
          <div className="table__cell">
            <button
              onClick={() => editParticipant(id, "choice", 1)}
              className={`vote ${choice === 1 ? "vote--active" : ""}`}
            >
              vote
            </button>
          </div>
          <div className="table__cell">
            <button
              onClick={() => editParticipant(id, "choice", 2)}
              className={`vote ${choice === 2 ? "vote--active" : ""}`}
            >
              vote
            </button>
          </div>
        </div>
      );
    }}
  </Consumer>
);
