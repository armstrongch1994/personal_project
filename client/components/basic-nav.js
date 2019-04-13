import React from 'react'
import {Link} from 'react-router-dom'

const BasicNav = () => {
  return (
    <div className="basic-nav">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/photos">Photo Gallery</Link>
        </li>
      </ul>
    </div>
  )
}

export default BasicNav
