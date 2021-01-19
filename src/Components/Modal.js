import React from 'react'
import '../CSS/Modal.css'
import { motion } from 'framer-motion'

const backdropVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 1.5
        }
    }
}

const modalVariants = {
    hidden: {
        y: '-100vh'
    },
    visible: {
        y: 0,
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 60
        }
    }
}

export const Modal = ({ dismissModal }) => {

    const handleClick = () => {
        dismissModal();
    }
    return (
        <motion.div className='backdrop' variants={backdropVariants} initial="hidden" animate="visible">
            <motion.div className='modal' variants={modalVariants} initial="hidden" animate="visible">
                <div className='close-btn-div'>
                    <button className='btn btn-danger btn-sm' onClick={handleClick}>Close</button>
                </div>
                <div className='iframe-div'>
                    <iframe width="100%" height="650px" src="https://www.youtube.com/embed/nz-f37qpADQ" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </motion.div>
        </motion.div>
    )
}
