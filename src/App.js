import React from "react";

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./configureStore";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="app">
          <main></main>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
