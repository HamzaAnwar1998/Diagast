import React from 'react'
import '../CSS/ListModal.css'
import { motion } from 'framer-motion'

const backdropVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

const modalVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
    opacity: 1,
    }
}

export const ListModal = ({setButtonModal, setModal}) => {

    const handleClose = () =>{
        setButtonModal(null);
    }

    const handleClicks = (e) =>{
        setModal(e.currentTarget.id);
    }

    return (
        <motion.div className='backdrop-list'variants={backdropVariants} initial="hidden" animate="visible">
            <motion.div className='modal-list'variants={modalVariants} initial="hidden" animate="visible">
                <div className='close-btn-div'>
                    <button className='btn btn-danger btn-sm' onClick={handleClose}>Close</button>
                </div>
                <div className='list-div'>
                    <div className='hotspot-heading'>HOTSPOTS</div><br></br>
                    <div className='items-div'>
                        <div onClick={handleClicks} id = "kmt" data-id = "kmt">ABOUT KMT</div>
                        <div onClick={handleClicks} id = "jigs" data-id = "jigs">JIGS AND TOOLING</div>
                        <div onClick={handleClicks} id = "brochure" data-id = "brochure">KMT BROCHURE</div>
                        <div onClick={handleClicks} id = "video" data-id = "video">KMT MACHINE TOOLS</div>
                        <div onClick={handleClicks} id = "video-bottom" data-id = "video-bottom">MACHINE TOOLS MAINTAINANCE</div>
                        <div onClick={handleClicks} id = "banner" data-id = "banner">NEW MACHINES</div>
                        <div onClick={handleClicks} id = "tv" data-id = "tv">REBUILDS</div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}
