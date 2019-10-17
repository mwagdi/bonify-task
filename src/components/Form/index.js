import React, { PureComponent } from "react";
import { Consumer } from "AppContext";

import "./styles.scss";
class Form extends PureComponent {
  state = {
    text: ""
  };
  render() {
    return (
      <Consumer>
        {({ populateVenues }) => (
          <form
            className="form"
            onSubmit={e => {
              e.preventDefault();
              populateVenues(this.state.text);
            }}
          >
            <input
              className="form__input"
              type="text"
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })}
            />
            <input className="button" type="submit" value="Search" />
          </form>
        )}
      </Consumer>
    );
  }
}

export default Form;
