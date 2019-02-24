import React from "react";

class Tab extends React.Component {
  render(){
    return (
      <div className="Tabs__tab">
        { this.props.children }      
      </div>
    );
  }
}

export default Tab;