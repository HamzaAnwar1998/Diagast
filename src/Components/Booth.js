import React from 'react'
import Tippy from '@tippyjs/react';
import '../CSS/Booth.css'
import object from '../images/objectToBePasted.jpg'
import ecommerce from '../images/ecommerce.svg'
import boothimg from '../images/2dbooth.jpg'
import { Icon } from 'react-icons-kit'
import { video } from 'react-icons-kit/feather/video'
import {search} from 'react-icons-kit/feather/search'
import {list} from 'react-icons-kit/feather/list'
import 'tippy.js/dist/tippy.css';
import {home} from 'react-icons-kit/icomoon/home'
import {cornerUpLeft} from 'react-icons-kit/feather/cornerUpLeft'
import {maximize2} from 'react-icons-kit/feather/maximize2'

export const Booth = ({setModal, setButtonModal, setSearch, maximize, maximizeFunction, minimizeFunction}) => {

    const handleClicks = (e) =>{
        setModal(e.currentTarget.id);
    }

    const handleButtonModal = (e) =>{
        setButtonModal(e.currentTarget.id);
        setSearch(null);
    }

    const handleSearchModal = (e) =>{
        setSearch(e.currentTarget.id);
        setButtonModal(null);
    }

    const handleMaximize = () =>{
        maximizeFunction();
    }

    const handleMinimize = () =>{
        minimizeFunction();
    }

    const maximizeValue = maximize === true ? (
        
            <>
             <div></div>
            </>
        
    ): (
        <>
          <div className='home-back-div'>
                <button><Icon icon={home} size={24}/></button>
                <button><Icon icon={cornerUpLeft} size={24}/></button>
          </div>
        </>
    )

    const maximizeAndMinimized = maximize === true ? (
        
        <>
          <div className='maximize-div'>
             <Icon icon={maximize2} size={16}/>
             <span className='text-maximize' onClick={handleMinimize}>MINIMIZE</span>
          </div>
        </>
    
): (
    <>
        <div className='maximize-div'>
             <Icon icon={maximize2} size={16}/>
             <span className='text-maximize' onClick={handleMaximize}>MAXIMIZE</span>
        </div>
    </>
)

    return (
        <>
            <div className='booth-container'>
                <img src={boothimg} alt="" className='booth-img' />
                <img src={ecommerce} alt="" className='object-img' />
                <img src={ecommerce} alt="" className='object-img2' />

                <Tippy content='About KMT'>
                    <div className='point-kmt' onClick={handleClicks} id = "kmt" data-id = "kmt">
                       <i className="fas fa-info"></i>
                    </div>
                </Tippy>

                <Tippy content='Jigs and toolings'>
                   <div className='point-jigs-tools' onClick={handleClicks} id = "jigs" data-id = "jigs">
                      <i className="fas fa-info"></i>
                   </div>
                </Tippy>

                {/* <div className='point-stand'><i className="fas fa-info"></i></div> */}
                <Tippy content='Re builds'>
                  <div className='point-tv' onClick={handleClicks} id = "tv" data-id = "tv">
                      <i className="fas fa-info"></i>
                  </div>
                </Tippy>

                <Tippy content='KMT machine tools'>
                  <div className='point-video' onClick={handleClicks} id = "video" data-id = "video">
                     <Icon icon={video} size={16} />
                  </div>
                </Tippy>

                <Tippy content='Machine Tools Maintainance'>
                  <div className='point-video-bottom' onClick={handleClicks} id = "video-bottom" data-id = "video-bottom">
                     <Icon icon={video} size={16} />
                  </div>
                </Tippy>

                <Tippy content='New Machines'>
                  <div className='point-banner' onClick={handleClicks} id = "banner" data-id = "banner">
                     <i className="fas fa-info"></i>
                  </div>
                </Tippy>

                <Tippy content='KMT Brochure'>
                  <div className='point-brochure' onClick={handleClicks} id = "brochure" data-id = "brochure">
                     <i className="fas fa-book"></i>
                  </div>
                </Tippy>

                <button className='list-btn' onClick={handleButtonModal} id = "list" data-id = "list"><span><Icon icon={list} size={20}/></span><span className='search-text'>List</span></button>
                <button className='search-btn'onClick={handleSearchModal} id = "search" data-id = "search"><span className='search-text'>Search</span></button>

                <div>{maximizeValue}</div>

                {/* <div className='home-back-div'>
                  <button><Icon icon={home} size={24}/></button>
                  <button><Icon icon={cornerUpLeft} size={24}/></button>
                </div> */}
    
                <div>{maximizeAndMinimized}</div>

                {/* <div className='maximize-div'>
                  <Icon icon={maximize2} size={16}/>
                  <span className='text-maximize' onClick={handleMaximize}>MAXIMIZE</span>
                </div> */}

            </div>
        </>
    )
}
