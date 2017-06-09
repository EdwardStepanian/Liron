import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import "bootswatch/paper/bootstrap.css";


class App extends Component {
  render() {
    return (
        <div className="App-header">
            <Header />
        </div>

    );
  }
}

export default App;
