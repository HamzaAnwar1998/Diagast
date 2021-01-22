import React from 'react'
import { Navbar } from './Navbar'
import { HeroBackground } from './HeroBackground'
import { AboutUs } from './AboutUs'
import { Footer } from './Footer'
import { Header } from './Header'
import { Booth } from './Booth'

export const Home = ({ setModal, setButtonModal, setSearch, maximize, maximizeFunction, minimizeFunction}) => {
    return (
        <>
            {/* <Header />
            <Navbar />
            <HeroBackground setSelectedModal={setSelectedModal} />
            <AboutUs />
            <Footer /> */}
            <Booth setModal={setModal} setButtonModal={setButtonModal} setSearch={setSearch} maximize={maximize} maximizeFunction={maximizeFunction}
            minimizeFunction={minimizeFunction}/>
        </>
    )
}
