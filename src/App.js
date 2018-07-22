import React, { Component } from 'react';
import './App.css';
import AddInput from './container/AddInputContainer';
import List from './container/ListContainer'
import Filter from './container/FilterGroupContainer'

class App extends Component {
  render() {
    return (
      <div>
        <div>
            <h2>Jquery To Do List</h2>
            <p>
                <em>Simple Todo List with adding and filter by diff status.</em>
            </p>
            <AddInput />
            <br />
             <List />
            <Filter />
        </div>
        

      </div>
    );
  }
}

export default App;
