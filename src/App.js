import React from "react";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">{routes}</div>
      </HashRouter>
    </Provider>
  );
}

export default App;

/*
Make login functionality
Make registration functionality
Set up Routes
Set up Redux
Make Dashboard page
*/
