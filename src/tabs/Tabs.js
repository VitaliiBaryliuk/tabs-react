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

  render() {
    const { children } = this.props;
    const { activeTabId } = this.state;
    const currentText = children[activeTabId].props.children;

    return (
      <div className="Tabs">
        <ul className="Tabs__tabs-list">
          {React.Children.map(children, (child, i) => {
            return React.cloneElement(child, {
              callback: () => this.onTabItemClick(i)
            });
          })}
        </ul>
        <div>{currentText}</div>
      </div>
    );
  }
}  

export default Tabs;
