import React from 'react'
import '../CSS/Modal.css'
import { motion } from 'framer-motion'
import check from '../documents/check.pdf'

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

export const Modal2 = ({modal, setModal}) => {

    const handleClose = () =>{
        setModal(null);
    }

    const data = modal==='kmt' ? (
        <>
          <div>{modal}</div>
          <object className="PDFdoc" width="100%" height="700px" type="application/pdf" data="https://www.antennahouse.com/XSLsample/pdf/sample-link_1.pdf"></object>
        </>
    ):(
        <div></div>
    )

    const data2 = modal==='jigs' ? (
        <>
          <div>{modal}</div>
          <embed src={check} width="100%" height="700px"/>
        </>
    ):(
        <div></div>
    )

    return (
    <motion.div className='backdrop' variants={backdropVariants} initial="hidden" animate="visible">
        <motion.div className='modal' variants={modalVariants} initial="hidden" animate="visible">
            <div className='close-btn-div'>
                <button className='btn btn-danger btn-sm' onClick={handleClose}>Close</button>
            </div>
            {data && <> 
            <div className='iframe-div'>
                {data}
            </div>
            </>}
            {data2 && <> 
            <div className='iframe-div'>
                {data2}
            </div>
            </>}
        </motion.div>
    </motion.div>
    )
}
