import React from 'react'
import '../CSS/HeroBackground.css'
import { Icon } from 'react-icons-kit'
import { play } from 'react-icons-kit/feather/play'
import { motion } from 'framer-motion'

const backgroundVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 1
        }
    }
}

const playVariants = {
    hidden: {
        x: -200,
    },
    visible: {
        x: 0,
        transition: {
            delay: 1,
            duration: 1.5
        }
    }
}

const infoVariants = {
    hidden: {
        x: 200,
    },
    visible: {
        x: 0,
        transition: {
            delay: 1,
            duration: 1.5
        }
    }
}

export const HeroBackground = ({ setSelectedModal }) => {
    return (
        <motion.div className='hero-background'
            variants={backgroundVariants} initial="hidden" animate="visible">
            <motion.div className='play-icon-div' variants={playVariants} initial="hidden" animate="visible">
                <div className='play-icon' onClick={setSelectedModal}>
                    <Icon icon={play} size={24} />
                </div>
            </motion.div>
            <motion.div className='info-icons-div' variants={infoVariants}>
                <div className='info-icon'><i className="fas fa-info"></i></div>
                <div className='info-icon'><i className="fas fa-info"></i></div>
                <div className='info-icon'><i className="fas fa-info"></i></div>
                <div className='info-icon'><i className="fas fa-info"></i></div>
            </motion.div>
        </motion.div>
    )
}
