import React from 'react'
import "./header.css";
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {SiGeeksforgeeks} from 'react-icons/si'


function HeaderSocials() {
  return (
    <div className='header-socials'>
        <a href="https://linkedin.com" target='_black'><BsLinkedin/></a>
        <a href="https://github.com" target='_black'><AiOutlineGithub/></a>

        <a href="https://auth.geeksforgeeks.org/user/poonamsikarwar28" target='_black'><SiGeeksforgeeks/></a>

    </div>
  )
}

export default HeaderSocials