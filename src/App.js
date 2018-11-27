import React, { Component } from "react";
import Header from "../src/components/Header";
import MessageList from "./components/MessageList";
import MessageBox from "./components/MessageBox";

import firebase from "firebase";

class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    };
    try {
      firebase.initializeApp({
        databaseURL: "https://react-project-test-1c5c7.firebaseio.com"
      });
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      if (!/already exists/.test(err.message)) {
        console.error("Firebase initialization error", err.stack);
      }
    }

    const fb = firebase;
  }

  render() {
    return (
      <div className="container">
        <Header title="Simple Firebase App" />
        <div className="columns">
          <div className="column is-3" />
          <div className="column is-6">
            <MessageList db={firebase} />
          </div>
        </div>

        <div className="columns">
          <div className="column is-3" />
          <div className="column is-6">
            <MessageBox db={firebase} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
