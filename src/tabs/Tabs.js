import React from 'react';

class Tabs extends React.Component {
  constructor({props}) {
    super(props)

    this.state = {
      activeTabId: 0,
    }

    this.onTabItemClick = this.onTabItemClick.bind(this)
    this.setTab = this.setTab.bind(this)
  }

  onTabItemClick(value) {
    this.setTab(value)
  }

  setTab(id) {
    this.setState({
      activeTabId: id, 
    })
  }

  render(){
    const currentText = this.props.children().props.children[this.state.activeTabId].props.children;
    
    return (
      <div className="Tabs">
        <ul className="Tabs__tabs-list">
          {this.props.children(this.onTabItemClick)}
        </ul>
        <div>
          {currentText}
        </div>
      </div>  
    );
  }
}  

export default Tabs;
