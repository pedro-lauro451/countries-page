import React from 'react'
import '../css/headerComponent.css'
import { SiReact } from "react-icons/si"

const HeaderComponent = () => {
  const ReactIcon = SiReact;
  return (
    <div className="menu">
      <h3>Countries Info</h3>
      <ReactIcon className="icon" size={30}/>
    </div>
  )
}

export default HeaderComponent