import React from 'react'
import './Header.scss'

import { RxHamburgerMenu } from 'react-icons/rx'
import { BsYoutube } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiVideoPlus } from 'react-icons/bi'
import { IoIosNotificationsOutline } from 'react-icons/io'

const Header = () => {
  return (
    <div className="header">
        <div className='header-menu'>
            <RxHamburgerMenu size={30}/>
            <div className='header-icon'>
                <BsYoutube color="red" size={30}/>
                <p>Youtube</p>
            </div>
        </div>

        <div className='search-box'>
            <input placeholder="Search"/>
            <div className='icon-box'>
                <AiOutlineSearch size={25}/>
            </div>
        </div>

        <div className='personal-menu'>
            <BiVideoPlus size={25} color="grey" className='personal-icon'/>
            <IoIosNotificationsOutline size={25} color='grey' className='personal-icon'/>
            <div className='profile'></div>
        </div>
    </div>
  )
}

export default Header