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

export const SearchModal = ({setSearch}) => {

    const handleClose = () =>{
        setSearch(null);
    }

    return (
        <motion.div className='backdrop-list'variants={backdropVariants} initial="hidden" animate="visible">
        <motion.div className='modal-list'variants={modalVariants} initial="hidden" animate="visible">
            <div className='close-btn-div'>
                <button className='btn btn-danger btn-sm' onClick={handleClose}>Close</button>
            </div>
            <div className='search-box'>
                <div className='input-div'>
                    <input type='text' placeholder="search items"/>
                </div>
                <div className='button-div'>
                    <button>search</button>
                </div>
            </div>
        </motion.div>
    </motion.div>
    )
}
