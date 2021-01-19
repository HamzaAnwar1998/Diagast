import React from 'react'
import { Navbar } from './Navbar'
import { HeroBackground } from './HeroBackground'
import { AboutUs } from './AboutUs'
import { Footer } from './Footer'
import { Header } from './Header'
import { Booth } from './Booth'

export const Home = ({ setSelectedModal }) => {
    return (
        <>
            <Header />
            <Navbar />
            <HeroBackground setSelectedModal={setSelectedModal} />
            <AboutUs />
            <Footer />
            <Booth/>
        </>
    )
}
