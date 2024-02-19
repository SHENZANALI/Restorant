import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className="icon footer text-light bg-dark p-2 border-2 rounded-2 align-content-center justify-content-center ">
    <Link to={'https://www.instagram.com/shenzanali?igsh=ZGNjOWZkYTE3MQ=='} className='icons px-3'><FaInstagram/></Link>
    <Link to={'https://youtube.com/@Shenzanali?si=T1FJe9HjyHrm3eti'} className='icons px-3'><FaYoutube/></Link>
    <Link to={'https://github.com/SHENZANALI/my-app'} className='icons px-3'><FaGithub/></Link>
    <Link to={'https://www.linkedin.com/in/shenzan-ali-731647296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} className='icons px-3'><FaLinkedin/></Link>
    </div>
    <h5 className='footer text-light bg-dark p-4 border-2 rounded-2  '>Developerd by <span className='shenzan'>Shenzan Ali Cheena</span> 🥰</h5>
    </>
  )
}

export default Footer