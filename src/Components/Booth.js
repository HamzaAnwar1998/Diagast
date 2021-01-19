import React from 'react'
import '../CSS/Booth.css'
import object from '../images/objectToBePasted.jpg'
import ecommerce from '../images/ecommerce.svg'
import boothimg from '../images/2dbooth.jpg'
import { Icon } from 'react-icons-kit'
import { video } from 'react-icons-kit/feather/video'

export const Booth = () => {
    return (
        <>
            <div className='booth-container'>
                <img src={boothimg} alt="" className='booth-img' />
                <img src={ecommerce} alt="" className='object-img' />
                <div className='point-kmt'>
                    <i className="fas fa-info"></i>
                </div>
                <div className='point-jigs-tools'><i className="fas fa-info"></i></div>
                {/* <div className='point-stand'><i className="fas fa-info"></i></div> */}
                <div className='point-tv'><i className="fas fa-info"></i></div>
                <div className='point-video'>
                    <Icon icon={video} size={16} />
                </div>
                <div className='point-video-bottom'>
                    <Icon icon={video} size={16} />
                </div>
                <div className='point-banner'>
                    <i className="fas fa-info"></i>
                </div>
                <div className='point-brochure'>
                    <i className="fas fa-book"></i>
                </div>
            </div>
            <br />
        </>
    )
}
