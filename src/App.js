import React, { Component, PureComponent } from "react";
import { Provider, Consumer } from "AppContext";
import axios from "axios";

import { idCreator, API_URL } from "utils";

class App extends Component {
  state = {
    venues: [],
    participants: {},
    populateVenues: location => {
      axios
        .get(
          `${API_URL}client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}
      &query=lunch
      &near=${location}&v=20190724&limit=3`
        )
        .then(({ data }) => {
          const [recommended] = data.response.groups;
          this.setState({ venues: recommended.items });
        });
    },
    addParticipant: () => {
      const id = idCreator();
      this.setState({
        participants: {
          ...this.state.participants,
          [id]: {
            id,
            name: "",
            choice: null
          }
        }
      });
    },
    editParticipant: (id, attribute, value) => {
      const { participants } = this.state;
      this.setState({
        participants: {
          ...participants,
          [id]: {
            ...participants[id],
            [attribute]: value
          }
        }
      });
    }
  };

  render() {
    return (
      <Provider value={this.state}>
        <Form />
      </Provider>
    );
  }
}

class Form extends PureComponent {
  state = {
    text: ""
  };
  render() {
    return (
      <Consumer>
        {({ populateVenues }) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              populateVenues(this.state.text);
            }}
          >
            <input
              type="text"
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })}
            />
            <input type="submit" value="submit" />
          </form>
        )}
      </Consumer>
    );
  }
}

export default App;
