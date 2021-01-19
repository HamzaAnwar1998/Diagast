import React from 'react'
import '../CSS/AboutUs.css'
import { Icon } from 'react-icons-kit'
import { video } from 'react-icons-kit/feather/video'

export const AboutUs = () => {
    return (
        <>
            <br />
            <div className='heading'>Who we are</div>
            <br />
            <div className='aboutus-mainbox'>
                <div className='aboutus'>
                    <div className='title'>DIAGAST</div>
                    <div className='para'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ratione ipsa neque id eaque consequuntur iusto, consequatur commodi voluptates quia sint assumenda voluptate at laborum libero iure ea, expedita beatae.
                    </div>
                </div>
                <div className='zoom'>
                    <div className='blue-div'>
                        <Icon icon={video} size={40} />
                    </div>
                    <div className='zoom-title'>Zoom</div>
                    <div className='join-us'>Register Now</div>
                </div>
            </div>
        </>
    )
}
