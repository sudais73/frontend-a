/* eslint-disable no-unused-vars */

import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import Classes from "./Header.module.css"

const lowerHeader = () => {
  
  return (
    <div className={Classes.lowerHeader_container}>
      <ul>
        <li>
        <AiOutlineMenu />
            <p>All</p>
        </li>
        <li>Todays deals</li>
        <li>customer Service</li>
        <li>Registry</li>
        <li>Git Card</li>
        <li>Sell</li>
        <li></li>

      </ul>
    </div>
  )
}

export default lowerHeader
