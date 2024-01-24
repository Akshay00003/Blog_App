import React from 'react'
import './header.css'
import HeaderImg from '../../asset/images/HederImg.jpg'

export default function Header() {
  return (
    <div className='header'>
    <div className="headerTitles">
        <span className='headerTitlesSm'>React & node </span>
        <span className='headerTitlesLg'>Blog</span>
    </div>
    <img src={HeaderImg} className="headerImg" alt="Not found" srcset="" />
      
    </div>
  )
}
