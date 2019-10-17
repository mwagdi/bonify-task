import React, { Component } from "react";
import { Provider } from "AppContext";
import axios from "axios";

import { Form, Table } from "components";
import { idCreator, API_URL } from "utils";

import "./styles.scss";

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
    const { venues, participants, addParticipant } = this.state;
    return (
      <Provider value={this.state}>
        <Form />
        <Table venues={venues} participants={participants} />
        <button onClick={() => addParticipant()} className="button">
          Add Participant
        </button>
      </Provider>
    );
  }
}

export default App;
