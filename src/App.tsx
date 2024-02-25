import React from 'react';
import './App.css';
import AddList from './components/AddList';
import ListItem from './components/ListItem';
import { Provider } from 'react-redux';
import { store } from './store';

const App:React.FC = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <div className="todo-wrapper">
          <AddList/>
          <ListItem/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
