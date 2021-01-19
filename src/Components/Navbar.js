import React from 'react'
import '../CSS/Navbar.css'
import { motion } from 'framer-motion'
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'

// const navVariants = {
//     hidden: {
//         y: -500,
//     },
//     visible: {
//         y: 0,
//         transition: {
//             delay: 1,
//             type: 'spring',
//             stiffness: 60
//         }
//     }
// }

const loginbtnVariants = {
    hover: {
        scale: 1.1,
        transition: {
            yoyo: Infinity
        }
    }
}

export const Navbar = () => {

    const handleToggle = () => {
        const navbox = document.getElementById('navbox');
        const linksBox = document.getElementById('linksBox');
        const loginDiv = document.getElementById('loginDiv')
        navbox.classList.toggle('active');
        linksBox.classList.toggle('active');
        loginDiv.classList.toggle('active')
    }

    return (
        <motion.div className='navbox' id='navbox'
        >
            <div className='logo'>
                DIAGAST
            </div>
            <div className='links-box' id='linksBox'>
                <div>Home</div>
                <div>Our Profile</div>
                <div>Our Products</div>
                <div>Brochure</div>
                <div>Watch Video</div>
                <div>Gallery</div>
                <div>Live Chat</div>
                <div>Contact Us</div>
            </div>
            <div className='login-div' id='loginDiv'>
                <motion.button className='login-btn' variants={loginbtnVariants} whileHover="hover">Login</motion.button>
            </div>
            <div className='toggler' id='toggler' onClick={() => handleToggle()}>
                <Icon icon={menu} size={25} />
            </div>
        </motion.div>
    )
}
