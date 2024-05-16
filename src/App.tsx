import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import AddList from "./components/AddList";
import ListItem from "./components/ListItem";
import { store } from "./store";

const App: React.FC = () => (
  <Provider store={store}>
    <div className="wrapper">
      <div className="todo-wrapper">
        <AddList />
        <ListItem />
      </div>
    </div>
  </Provider>
);

export default App;
