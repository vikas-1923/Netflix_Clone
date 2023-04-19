import React from 'react'
import logo from "../../Logonetflix.png"
import { Link } from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
const Header = () => {
  return (
    <nav className="header">
   <img src={logo} alt=''></img>
   <div>
    <Link to="/tvshows">TV Shows</Link>
    <Link to="/tvshows">Movies</Link>
    <Link to="/tvshows">Recently Added</Link>
    <Link to="/tvshows">My List</Link>

    <ImSearch />
   </div>
    </nav>
  )
}

export default Header