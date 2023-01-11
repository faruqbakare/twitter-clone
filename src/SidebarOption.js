import React from 'react';
import "./SidebarOption.css";

function SidebarOption({active, text, Icon}) {
  console.log({text},{Icon})
  return (
    <div className = {`SidebarOption ${active && "sidebarOption--active"}`}>
      <Icon/>
      <h2>{text}</h2>
      
    </div>
  );
}

export default SidebarOption;