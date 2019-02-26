import React from "react";

 const Tab = (props) => {
   
    return (
      <li className="Tabs__tab-title" onClick={() => props.callback(props.value, props.children)}>
        {props.title}     
      </li>
    );
  }


export default Tab;