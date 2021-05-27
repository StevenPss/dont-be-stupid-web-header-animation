import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Socials() {
    return (
        <div className="main-socials">
            <a className="bg-white p-2 rounded-lg" href="https://github.com/StevenPss"><span className="inline-block align-middle"><FaGithub/></span></a>
            <a className="bg-white p-2 ml-3 mr-3 rounded-lg" href="https://www.linkedin.com/in/stevenselolo/"><span className="inline-block align-middle"><FaLinkedinIn/></span></a>
            <a className="bg-white p-2 rounded-lg" href="https://twitter.com/intent/follow?screen_name=stevenselolo"><span className="inline-block align-middle"><FaTwitter/></span></a>
        </div>
    )
}

export default Socials
