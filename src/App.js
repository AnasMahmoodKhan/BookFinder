import React from "react";

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./configureStore";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="app">
          <Header />
          <main>{routes}</main>
          <Footer />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
