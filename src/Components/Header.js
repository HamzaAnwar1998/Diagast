import React from 'react'
import '../CSS/Header.css'
import { Icon } from 'react-icons-kit'
import { linkedin } from 'react-icons-kit/feather/linkedin'
import { twitter } from 'react-icons-kit/feather/twitter'
import { facebook } from 'react-icons-kit/fa/facebook'
import { ic_people_outline } from 'react-icons-kit/md/ic_people_outline'

export const Header = () => {
    return (
        <div className='header'>
            <div className='box1'>
                <div className='hall-booth-box'>
                    <div className='squares'>Hall 1</div>
                    <div className='squares'>Booth 22</div>
                </div>
                <div className='details-box'>
                    <div>Join Live Webinar</div><br />
                    <div>15 jan 2021 | 12:00pm</div><br />
                    <div>Duration: 20min</div>
                </div>
            </div>
            <div className='visitor-box'>
                <div className='visitor-icon'>
                    <Icon icon={ic_people_outline} size={25} />
                </div>
                <div className='total-vistor-heading'>Total Visitors</div>
                <div className='total-visitor-no'>1</div>
            </div>
            <div className='social-box'>
                <div className='icon'>
                    <Icon icon={facebook} size={20} />
                </div>
                <div className='icon'>
                    <Icon icon={twitter} size={20} />
                </div>
                <div className='icon'>
                    <Icon icon={linkedin} size={20} />
                </div>
                <div className='icon'>
                    <i className="fab fa-whatsapp"></i>
                </div>
            </div>
        </div>
    )
}
