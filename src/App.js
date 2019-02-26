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
          {(onSelect) => {
            return (
              <div>
                <Tab title="Tab 1" value={0} callback={onSelect} >Some text 1</Tab>
                <Tab title="Tab 2" value={1} callback={onSelect} >Some text 2</Tab>
                <Tab title="Tab 3" value={2} callback={onSelect} >Some text 3</Tab>
              </div>
            );
          }}
        </Tabs>

      </div>
    );
  }
}

export default App;
