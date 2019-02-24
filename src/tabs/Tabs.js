import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props)

    const tabsArr = this.props.children.map( (tab, index) => {
      return { 
        title: tab.props.title,
        text: tab.props.children,
        id: index,
      }
    })

    this.state = {
      tabs: tabsArr,
      activeTab: tabsArr[0]
    }
  }

  setTab(title) {
    let activeTab = this.state.tabs.find(tab => tab.title === title)

    this.setState({
      activeTab
    })
  }

  render(){
    const tabHeaders = this.state.tabs.map(tab => {
      return (
        <li 
          className="Tabs__tab-title" 
          key={tab.id}
          onClick={() => this.setTab(tab.title) }
        >
          {tab.title}
        </li>
      )
    })
    return (
      <div className="Tabs">
        <ul className="Tabs__tabs-list">
          {tabHeaders}
        </ul>
        <div>
          {this.state.activeTab.text}
        </div>
      </div>  
    );
  }
}  

export default Tabs;