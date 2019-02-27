import React, { Component } from 'react';
import './App.css';
import './App.scss'
import Tabs from './tabs/Tabs.js'
import Tab from './tabs/Tab.js'

class App extends Component {

  render(){
    return (
      <div className="App">
        <Tabs>
          <Tab title="Tab 1">Some text 1</Tab>
          <Tab title="Tab 2">Some text 2</Tab>
          <Tab title="Tab 3">Some text 3</Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
