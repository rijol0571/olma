import React from 'react'
import { FaApple } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import './Header.scss'
import { LINKS } from '../../static';

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="navbar">
          <ul className='navbar__collection'>
            <FaApple/>
            {LINKS.map(item=>(
              <li key={item.id} className='navbar__item'>
                <a href={item.link}>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
            <IoMdSearch/>
            <MdOutlineShoppingBag/>
          </ul>
        </div>
        </div>  
    </header>
  )
}

export default Header